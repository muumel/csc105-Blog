import React, { useState } from "react";
import "../Post/Createpost.css";

function Createpost() {
	const [input, setInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefualt();
		setInput("");
	};

	return (
		<div className="createpost">
			<h1>Create your Article</h1>
			<div className="createpost__wrap">
				<div className="createpost__top">
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							className="createpost__input"
							placeholder="Share your trip with others?"
						/>

						<button onClick={handleSubmit} type="submit">
							Post
						</button>
					</form>
				</div>
				<div className="creatpost__bottom">
					<div className="createpost__option">
						<h3>
							<i class="fas fa-images"></i>Photo/Video
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Createpost;
