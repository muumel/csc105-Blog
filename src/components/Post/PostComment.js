import { Box, CardContent, Typography } from "@material-ui/core";
import React ,{ useEffect}from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const PostComment = ({ avatar, name, comment }) => {

	useEffect(() => {
		Aos.init({ duration: 1000});
	}, []);

	return (
		<CardContent data-aos="fade-right" style={{ borderBottom: "1px solid lightgray" }}>
			<Box display="flex"
			>
				<div 
					style={{
						backgroundImage: `url(${avatar})`,
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
