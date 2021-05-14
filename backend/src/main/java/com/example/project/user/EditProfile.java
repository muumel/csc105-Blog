package com.example.project.user;

import com.example.project.DTO.EditProfileDTO;
import com.example.project.database.MySQLConnector;
import com.example.project.utils.JwtUtils;
import io.jsonwebtoken.JwtException;
import org.springframework.web.bind.annotation.*;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

// import libraries
@RestController
@RequestMapping("/auth")
public class EditProfile {

    @PatchMapping(path = "/editprofile")
    public Map<String, Object> _editprofile(@CookieValue String token , @RequestBody EditProfileDTO user) {
        Map<String, Object> res = new HashMap<>();
        try {
            String user_id = JwtUtils.parseToken(token);
            Connection connection = MySQLConnector.getConnection();
            PreparedStatement pstm = connection.prepareStatement("SELECT * FROM user WHERE user_id = ?");
            pstm.setString(1, user_id);
            ResultSet rs = pstm.executeQuery();

            if (rs.next()) {

                //สร้างobjectที่มีค่าเป็นString

                pstm = connection.prepareStatement("UPDATE user " +
                        "SET firstname = ?, lastname = ? , status = ? ,bio= ?, profile_pic = ? WHERE user_id = ?");

                pstm.setString(1, user.getFirstname());
                pstm.setString(2, user.getLastname());
                pstm.setString(3, user.getStatus());
                pstm.setString(4, user.getBio());
                pstm.setString(5, user.getProfilepic());
                pstm.setString(6, user_id);
                pstm.executeUpdate();

                res.put("success", true);
                res.put("text", "Your Profile is update :)");
            } else {
                res.put("success", false);
                res.put("text", "update fail :(");
            }

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

