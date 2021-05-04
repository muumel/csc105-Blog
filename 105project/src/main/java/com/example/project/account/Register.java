package com.example.project.account;

import com.example.project.DTO.RegisterDTO;
import com.example.project.database.MySQLConnector;
import org.springframework.web.bind.annotation.*;
import java.sql.*;
import java.util.HashMap;
import java.util.Map;

// import libraries
@RestController
@RequestMapping("/auth")
public class Register {
    @PostMapping(path = "/register")
    public Map<String, Object> _register(@RequestBody RegisterDTO user) {
        Map<String, Object> res = new HashMap<>();
        try {
            Connection connection = MySQLConnector.getConnection();
            PreparedStatement pstm = connection.prepareStatement("INSERT INTO user " +
                    "(firstname, lastname, email, username, password) VALUES (?, ?, ?, ?,?)");
            pstm.setString(1, user.getFirstname());
            pstm.setString(2, user.getLastname());
            pstm.setString(3, user.getEmail());
            pstm.setString(4, user.getUsername());
            pstm.setString(5, user.getPassword());
            pstm.execute();
            res.put("isLogin", true);

//check event
        } catch (Exception e) {
                res.put("isLogin", false);
                if (e instanceof SQLIntegrityConstraintViolationException) {
                    if (e.getMessage().contains("PRIMARY")) {
                        res.put("text", "This username is already registered :(");
                    } else if(e.getMessage().contains("User_Email_uindex")) {
                        res.put("text", "This email is already registered :(");
                    }
                } else {
                    e.printStackTrace();
                    res.put("text", "MySQL error :(");
                }
                e.printStackTrace();
            }

        return res;
    }
}
