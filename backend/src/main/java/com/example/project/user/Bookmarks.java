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
<<<<<<< HEAD:backend/src/main/java/com/example/project/user/Bookmarks.java
            PreparedStatement pstm_check = connection.prepareStatement("SELECT * FROM bookmarks WHERE post_id =? AND user_id =?");
            pstm_check.setString(1, bookmarks.getPost_id());
            pstm_check.setInt(2,Integer.parseInt(user_id));
            ResultSet rs_check = pstm_check.executeQuery();

            if(rs_check.next()){
                res.put("success", false);
                res.put("text", "This post is already saved!");
                return res;
            }


=======


>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125:105project/src/main/java/com/example/project/user/Bookmarks.java
                PreparedStatement pstm = connection.prepareStatement("INSERT INTO bookmarks " +
                        "(post_id,user_id) VALUES (?,?)");
                pstm.setString(1, bookmarks.getPost_id());
                pstm.setInt(2,Integer.parseInt(user_id));
                pstm.execute();

                res.put("success", true);
                res.put("text", "Post is saved:)");

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