package com.example.project.article;

import com.example.project.DTO.CommentDTO;
import com.example.project.database.MySQLConnector;
import com.example.project.utils.JwtUtils;
import io.jsonwebtoken.JwtException;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class Comment {
	@PostMapping(path = "/comment")
	public Map<String, Object> _post(@CookieValue String token, @RequestBody CommentDTO comment) {
		Map<String, Object> res = new HashMap<>();
		
		try {
			String user_id = JwtUtils.parseToken(token);
			Connection connection = MySQLConnector.getConnection();
			
			// ไม่รู้ว่าทำให้ post_id มันเพิ่มยังไง
			PreparedStatement pstm = connection.prepareStatement("INSERT INTO comment (comment, post_id , user_id) VALUES (?, ?, ?)");
			pstm.setString(1, comment.getComment());
			pstm.setString(2, comment.getPost_id());
			pstm.setInt(3, Integer.parseInt(user_id));
			
			pstm.execute();
			
			res.put("success", true);
			res.put("text", "Your Comment is posted :)");
			
			//check event
		} catch (SQLException e) {
			res.put("success", false);
			res.put("text", "Something Wrong :(");
			e.printStackTrace();
		} catch (JwtException e) {
			e.printStackTrace();
			res.put("success", false);
			res.put("text", "Token is incorrect :(");
		}
		return res;
	}
}