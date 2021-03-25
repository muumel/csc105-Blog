import { Box, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const PostComment = ({ avatar, name, comment }) => {
	return (
		<CardContent style={{ borderBottom: "1px solid lightgray" }}>
			<Box display="flex">
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
					<Typography variant="h4">{name}</Typography>
					<Typography variant="p1">{comment}</Typography>
				</Box>
			</Box>
		</CardContent>
	);
};

export default PostComment;
