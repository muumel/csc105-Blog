package com.example.project.article;

import com.example.project.DTO.PostDTO;
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
public class Post {
    @PostMapping(path = "/post")
    public Map<String, Object> _post(@CookieValue String token, @RequestBody PostDTO post) {
        Map<String, Object> res = new HashMap<>();

        try {
            String user_id = JwtUtils.parseToken(token);
            Connection connection = MySQLConnector.getConnection();


//ไม่รู้ว่าทำให้ post_id มันเพิ่มยังไง
            PreparedStatement pstm = connection.prepareStatement("INSERT INTO post " +
                    "( title, content, article_pic, type, author_id) VALUES (?, ?, ?, ?,?)");
            pstm.setString(1, post.getTitle());
            pstm.setString(2, post.getContent());
            pstm.setString(3, post.getArticlepic());
            pstm.setString(4, post.getType());
            pstm.setString(5, user_id);
            pstm.execute();

            res.put("success", true);
            res.put("text", "Your Post is done :)");


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

