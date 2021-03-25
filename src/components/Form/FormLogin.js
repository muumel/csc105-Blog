import React from "react";
import useForm from "../Form/useForm";
import "../Form/Form.css";

const FormLogin = ({ submitForm }) => {
	const { handleChange, handleSubmit, values, errors } = useForm(submitForm);

	return (
		<div className="form-content">
			<form className="form" onSubmit={handleSubmit}>
				<h1>Login your account by filling out the information below.</h1>

				<div className="form-inputs">
					<label className="form-label">Email</label>
					<input
						className="form-input"
						type="email"
						name="email"
						placeholder="Enter your email"
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className="form-inputs">
					<label className="form-label">Password</label>
					<input
						className="form-input"
						type="password"
						name="password"
						placeholder="Enter your password"
						value={values.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>

				<button className="form-input-btn" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default FormLogin;
