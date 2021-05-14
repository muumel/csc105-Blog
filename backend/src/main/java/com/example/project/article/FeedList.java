package com.example.project.article;

import com.example.project.database.MySQLConnector;
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
public class FeedList {
    @GetMapping(path = "/feedlist")
    public Map<String, Object> _feedlist() {
        Map<String, Object> res = new HashMap<>();
        try {
            Connection connection = MySQLConnector.getConnection();
            PreparedStatement pstm = connection.prepareStatement("SELECT * FROM post");
            ResultSet rs = pstm.executeQuery();
            ArrayList<Object> posts = new ArrayList<>();
            while (rs.next()) {
                Map<String, Object> post = new HashMap<>();
                post.put("id", rs.getInt("post_id"));
                post.put("title", rs.getString("title"));
                post.put("articlepic" , rs.getString("article_pic"));
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
