import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Form/Form.css";
import FormSignup from "../Form/FormSignup";
import Home from "../pages/Home";
import VideoLogin from "../../videos/vdo-login.mp4";

const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}

	return (
		<>
			<div className="vdo-bg">
				<video src={VideoLogin} autoPlay loop muted />
			</div>

			<div className="form-container">
				{!isSubmitted ? (
					<FormSignup submitForm={submitForm} />
				) : (
					<Link to="../pages/Home.js" />
				)}
			</div>
		</>
	);
};

export default Form;
