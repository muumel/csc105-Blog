package com.example.project.article;

import com.example.project.database.MySQLConnector;
import com.example.project.utils.JwtUtils;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/article")
public class BookmarkList {
    @GetMapping(path = "/bookmarklist")
    public Map<String, Object> _bookmarklist(@CookieValue String token) {
        Map<String, Object> res = new HashMap<>();
        try {
            int userId = Integer.parseInt(JwtUtils.parseToken(token));
            Connection connection = MySQLConnector.getConnection();
            PreparedStatement pstm = connection.prepareStatement("SELECT * FROM bookmarks INNER JOIN post ON bookmarks.post_id = post.post_id WHERE user_id = ?");
            pstm.setInt(1, userId);
            ResultSet rs = pstm.executeQuery();
            
            ArrayList<Object> posts = new ArrayList<>();
            while (rs.next()) {
                Map<String, Object> post = new HashMap<>();
                post.put("id", rs.getInt("post_id"));
                post.put("title", rs.getString("title"));
                post.put("article_pic" , rs.getString("article_pic"));
                post.put("content" , rs.getString("content"));
                post.put("type" , rs.getString("type"));
                posts.add(post);
            }
            res.put("posts", posts);
            res.put("success", true);
        } catch (SQLException e) {
            res.put("success", false);
            e.printStackTrace();
        }
        return res;
    }
}

