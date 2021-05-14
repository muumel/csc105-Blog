package com.example.project.article;

import com.example.project.database.MySQLConnector;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

//สิ่งที่ต้องการโชว์ในหน้านี้ มีการดึงมาจากตาราง user,post , comment
@RestController
@RequestMapping("/article")
public class PostDisplay {
	@GetMapping(path = "/postdisplay/{postId}")
	public Map<String, Object> _postdisplay(@PathVariable int postId) {
		Map<String, Object> res = new HashMap<>();
		
		try {
			Connection connection = MySQLConnector.getConnection();
			PreparedStatement pstm = connection.prepareStatement(
					"SELECT user.username, user.bio, post.title, post.article_pic, post.content FROM post " +
							"INNER JOIN user ON user.user_id = post.author_id WHERE post_id = ?");
			pstm.setInt(1, postId);
			
			PreparedStatement pstm_comment = connection.prepareStatement(
					"SELECT user.username, user.profile_pic, comment.comment FROM comment " +
							"INNER JOIN user ON user.user_id = comment.user_id WHERE post_id = ?");
			pstm_comment.setInt(1, postId);
			
			ResultSet rs = pstm.executeQuery();
			ResultSet rs_comment = pstm_comment.executeQuery();
			
			if(rs.next()) {
				Map<String, Object> post = new HashMap<>();
				post.put("username", rs.getString("username")); //เพื่อเอา username , bio ในตาราง user
				post.put("bio", rs.getString("bio"));
				post.put("title", rs.getString("title"));
				post.put("article_pic", rs.getString("article_pic"));
				post.put("content", rs.getString("content"));
				res.put("post", post);
			}
			
			ArrayList<Object> comments = new ArrayList<>();
			while (rs_comment.next()) {
				Map<String, Object> comment = new HashMap<>();
				comment.put("comment", rs_comment.getString("comment"));
				comment.put("username", rs_comment.getString("username"));
				comment.put("profile_pic", rs_comment.getString("profile_pic"));
				comments.add(comment);
			}
			
			res.put("comments", comments);
			res.put("success", true);
		} catch (SQLException e) {
			res.put("success", false);
			e.printStackTrace();
		}
		return res;
	}
}

