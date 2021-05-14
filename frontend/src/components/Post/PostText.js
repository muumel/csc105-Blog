<<<<<<< HEAD
import Cookies from "js-cookie";
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
import React, { forwardRef, useImperativeHandle, useState } from "react";

const PostText = ({ btnText, submit }, ref) => {
	const [text, setText] = useState("");

	useImperativeHandle(ref, () => ({
		getText: () => {
			return text;
		},
	}));

	const textChange = (event) => {
		setText(event.target.value);
	};

	const handleSubmit = () => {
<<<<<<< HEAD
		if (!Cookies.get("token")) {
			alert("Please Login first!");
			return;
		}
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
		submit(text);
	};

	return (
		<div className="createpost__top">
			<div>
				<input
					onChange={textChange}
					className="createpost__input"
					placeholder="What do you think?"
				/>

				<button type="submit" onClick={handleSubmit}>
					{btnText}
				</button>
			</div>
		</div>
	);
};

export default forwardRef(PostText);
