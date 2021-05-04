package com.example.project.user;

import com.example.project.DTO.BookmarksDTO;
import com.example.project.DTO.PostDTO;
import com.example.project.DTO.RegisterDTO;
import com.example.project.database.MySQLConnector;
import com.example.project.utils.JwtUtils;
import io.jsonwebtoken.JwtException;
import org.springframework.web.bind.annotation.*;
import java.sql.*;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/auth")
public class Bookmarks{
    @PostMapping(path = "/bookmarks")
    public Map<String, Object> _post(@CookieValue String token , @RequestBody BookmarksDTO bookmarks) {
        Map<String, Object> res = new HashMap<>();

        try {
            String user_id = JwtUtils.parseToken(token);
            Connection connection = MySQLConnector.getConnection();
            PreparedStatement pstm = connection.prepareStatement("SELECT * FROM user WHERE user_id = ?");
            pstm.setString(1, user_id);
            ResultSet rs = pstm.executeQuery();



            if (rs.next()) {

                pstm = connection.prepareStatement("INSERT INTO bookmarks " +
                        "(post_id,user_id) VALUES (?,?)");
                pstm.setString(1, bookmarks.getPost_id());
                pstm.setString(2,user_id);
                pstm.execute();

                res.put("success", true);
                res.put("text", "Post is saved:)");
            } else {
                res.put("success", false);
                res.put("text", "Save fail :(");
            }

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