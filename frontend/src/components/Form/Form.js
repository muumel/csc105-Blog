import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Form/Form.css";
import FormSignup from "../Form/FormSignup";
import VideoLogin from "../../videos/vdo-login.mp4";

const Form = () => {
	return (
		<>
			<div className="vdo-bg">
				<video src={VideoLogin} autoPlay loop muted />
			</div>

			<div className="form-container">
				<FormSignup />
			</div>
		</>
	);
};

export default Form;
