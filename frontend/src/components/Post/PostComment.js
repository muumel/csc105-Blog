import { Box, CardContent, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
<<<<<<< HEAD:frontend/src/components/Post/PostComment.js
import "aos/dist/aos.css";


const PostComment = ({ username, name, comment }) => {
	
	useEffect(() => {
		
=======
import Aos from "aos";
import "aos/dist/aos.css";

const PostComment = ({ username, name, comment }) => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125:src/components/Post/PostComment.js
	}, []);

	return (
		<CardContent
			data-aos="fade-right"
			style={{ borderBottom: "1px solid lightgray" }}
		>
			<Box display="flex">
				<div
					style={{
						backgroundImage: `url(https://avatars.dicebear.com/api/initials/${username}.svg)`,
						width: "64px",
						height: "64px",
						backgroundPosition: "center",
						backgroundSize: "cover",
						borderRadius: "50%",
						marginRight: "24px",
					}}
				></div>
				<Box
					display="flex"
					flexDirection="column"
					style={{ backgroundColor: "#ededed" }}
					padding="18px"
					borderRadius="18px"
				>
					<Typography variant="h6">{name}</Typography>
					<Typography variant="body1">{comment}</Typography>
				</Box>
			</Box>
		</CardContent>
	);
};

export default PostComment;
