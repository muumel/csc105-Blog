import React, { useState } from "react";
import "../Form/Form.css";
import axios from "axios";
import VideoLogin from "../../videos/vdo-login.mp4";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Formm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const emailChange = (event) => {
		console.log(event.target.value);
		setEmail(event.target.value);
	};

	const passwordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = () => {
		axios
			.post("http://localhost:8080/auth/login", {
				email: email,
				password: password,
			})
			.then((response) => {
				if (response.data.isLogin) {
					Cookies.set("token", response.data.token);
					window.location.href = "/";
				} else {
					alert(response.data.text);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<div className="vdo-bg">
				<video src={VideoLogin} autoPlay loop muted />
			</div>

			<div className="form-container">
				<div className="form-content">
					<div className="form">
						<h1>Login your account by filling out the information below.</h1>

						<div className="form-inputs">
							<label className="form-label">Email</label>
							<input
								className="form-input"
								type="email"
								name="email"
								placeholder="Enter your email"
								onChange={emailChange}
							/>
						</div>
						<div className="form-inputs">
							<label className="form-label">Password</label>
							<input
								className="form-input"
								type="password"
								name="password"
								placeholder="Enter your password"
								onChange={passwordChange}
							/>
						</div>

						<button
							className="form-input-btn"
							type="submit"
							onClick={handleSubmit}
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Formm;
