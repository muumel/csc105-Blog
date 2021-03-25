import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Form/Form.css";
import FormLogin from "../Form/FormLogin";

import VideoLogin from "../../videos/vdo-login.mp4";

const Formm = () => {
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
					<FormLogin submitForm={submitForm} />
				) : (
					<Link to="/Home" />
				)}
			</div>
		</>
	);
};

export default Formm;
