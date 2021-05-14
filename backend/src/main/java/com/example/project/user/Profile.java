package com.example.project.user;

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

//สิ่งที่ต้องการโชว์ในหน้านี้ มีการดึงมาจากตาราง user,post , comment
@RestController
@RequestMapping("/user")
public class Profile {
	@GetMapping(path = "/profile")
	public Map<String, Object> _profile(@CookieValue String token) {
		Map<String, Object> res = new HashMap<>();
		String user_id = JwtUtils.parseToken(token);
		
		try {
			Connection connection = MySQLConnector.getConnection();
			PreparedStatement pstm = connection.prepareStatement("SELECT * FROM user WHERE user_id = ?");
			pstm.setInt(1, Integer.parseInt(user_id));
			ResultSet rs = pstm.executeQuery();
			
			
			if(rs.next()) {
				Map<String, Object> profile = new HashMap<>();
				profile.put("firstname", rs.getString("firstname")); //เพื่อเอา username , bio ในตาราง user
				profile.put("lastname", rs.getString("lastname"));
				profile.put("bio", rs.getString("bio"));
				profile.put("status", rs.getString("status"));
				res.put("profile", profile);
			}
			
			res.put("success", true);
		} catch (SQLException e) {
			res.put("success", false);
			e.printStackTrace();
		}
		return res;
	}
}
