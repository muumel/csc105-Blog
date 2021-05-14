import React, { useState } from "react";
import { Link } from "react-router-dom";


import "./Form.css";
import axios from "axios";
import Cookies from "js-cookie";

const FormSignup = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		axios
			.post("http://localhost:8080/auth/register", {
				firstname: firstname,
				lastname: lastname,
				email: email,
				username: username,
				password: password,
			})
			.then((response) => {
				if (response.data.isLogin) {
					Cookies.set("token", response.data.token);
					alert("Your register is recieved! Now Login to explore places:)")
					window.location.href = "/Login";
				} else {
					alert(response.data.text);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="form-content">
			<div className="form">
				<h1>Create your account by filling out the information below.</h1>
				<div className="form-inputs">
					<label className="form-label">Firstname</label>
					<input
						className="form-input"
						type="text"
						name="firstname"
						placeholder="Enter your firstname"
						onChange={(e) => setFirstname(e.target.value)}
					/>
				</div>
				<div className="form-inputs">
					<label className="form-label">Lastname</label>
					<input
						className="form-input"
						type="text"
						name="lastname"
						placeholder="Enter your lastname"
						onChange={(e) => setLastname(e.target.value)}
					/>
				</div>
				<div className="form-inputs">
					<label className="form-label">Username</label>
					<input
						className="form-input"
						type="text"
						name="username"
						placeholder="Enter your username"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="form-inputs">
					<label className="form-label">Email</label>
					<input
						className="form-input"
						type="email"
						name="email"
						placeholder="Enter your email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-inputs">
					<label className="form-label">Password</label>
					<input
						className="form-input"
						type="password"
						name="password"
						placeholder="Enter your password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<button className="form-input-btn" onClick={handleSubmit}>
					Sign up
				</button>
				<span className="form-input-login">
					Already have an account? Login <Link to="/Loginn">here</Link>
				</span>
			</div>
		</div>
	);
};

export default FormSignup;
