import React, { useRef, useState } from "react";
import "../Post/Createpost.css";
import PostText from "./PostText";
import axios from "../../utils/axios";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import Cookies from "js-cookie";

const CreatePost = () => {
	const postTextRef = useRef(null);
	const [type, setType] = useState("");
	const [content, setContent] = useState("");
	const post = (text) => {
		if (!Cookies.get("token")) {
			alert("Please Login first!");
			return;
		}
		axios
			.post("http://localhost:8080/auth/post", {
				title: text,
				content: content,
				type: type,
			})
			.then((response) => {
				if (response.data.success) {
					alert(response.data.text);
					window.location.reload();
				} else {
					alert(response.data.text);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="createpost">
			<h1>Create your Article</h1>
			<div className="createpost__wrap">
				<PostText btnText="Post" submit={post} ref={postTextRef} />
				<div className="createpost__top">
					<div className="createpost__option">
						<textarea
							type="text"
							rows="3"
							className="createpost__input"
							onChange={(e) => setContent(e.target.value)}
						/>
						<FormControl style={{ width: "150px" }}>
							<InputLabel id="demo-simple-select-label">Type</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={type}
								onChange={(e) => setType(e.target.value)}
							>
								<MenuItem value={1}>Place</MenuItem>
								<MenuItem value={2}>Food</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
