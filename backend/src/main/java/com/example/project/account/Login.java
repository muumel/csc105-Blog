package com.example.project.account;

import com.example.project.DTO.LoginDTO;
import com.example.project.database.MySQLConnector;
import com.example.project.utils.JwtUtils;
import io.jsonwebtoken.JwtException;
import org.springframework.web.bind.annotation.*;
import java.sql.*;
import java.util.HashMap;
import java.util.Map;

// import libraries
@RestController
@RequestMapping("/auth")
public class Login {
    @PostMapping(path = "/login")
    public Map<String, Object> _login(@RequestBody LoginDTO user) {
        Map<String, Object> res = new HashMap<>();
        try {
            Connection connection = MySQLConnector.getConnection();
            PreparedStatement pstm = connection.prepareStatement("SELECT * FROM user WHERE email = ? AND password = ?");
            pstm.setString(1, user.getEmail());
            pstm.setString(2, user.getPassword());
            ResultSet rs = pstm.executeQuery();
            if (rs.next()) {
                String token = JwtUtils.generateToken(rs.getString("user_id"));
                System.out.println(token);
                res.put("token", token);

                //สร้างobjectที่มีค่าเป็นString
                Map<String, Object> userDetail = new HashMap<>();

                userDetail.put("id", rs.getString("username"));
                userDetail.put("firstName", rs.getString("firstname"));
                userDetail.put("lastName", rs.getString("lastname"));
                userDetail.put("email", rs.getString("email"));
                userDetail.put("status" , rs.getString("status"));
                userDetail.put("bio" , rs.getString("bio"));
                userDetail.put("profilepic" , rs.getString("profile_pic"));

                res.put("isLogin", true);
                res.put("userDetail", userDetail);
                res.put("text", "login successfully :)");
            } else {
                res.put("isLogin", false);
                res.put("text", "login fail :(");
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
