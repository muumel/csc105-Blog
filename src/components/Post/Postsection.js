import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import ProfilePic from "../../pics/profilepic.jpg";
import BannerPic from "../../pics/pic-01.jpg";
import FavouriteButton from "../Button/FavouriteButton";
import PostComment from "../Post/PostComment";

function Postsection() {
	const [comments, setComments] = useState([]);
	return (
		<Box
			display="flex"
			flexDirection="column"
			maxWidth="1024px"
			margin="64px auto"
		>
			<Card elevation={4}>
				<CardContent>
					<Box display="flex" alignItems="center" marginBottom="24px">
						<div
							style={{
								backgroundImage: `url(${ProfilePic})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								width: "72px",
								height: "72px",
								borderRadius: "50%",
							}}
						/>
						<Box display="flex" flexDirection="column" marginLeft="24px">
							<Typography variant="h5">Name</Typography>
							<Typography variant="h6">Bio</Typography>
						</Box>
					</Box>
					<Typography variant="h4" gutterBottom>
						This is article title
					</Typography>
				</CardContent>
				<CardMedia style={{ height: "500px" }} image={BannerPic} />
				<CardContent>
					<Typography variant="p1">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton>
						<FavouriteButton />
					</IconButton>
					<IconButton
						onClick={() =>
							setComments([
								...comments,
								{
									avatar: ProfilePic,
									name: "Muumel",
									comment: "Hello React.js",
								},
							])
						}
					>
						<span>
							<i class="fas fa-comment"></i>
						</span>
					</IconButton>
				</CardActions>
			</Card>
			<Card style={{ margin: "24px 0 0 0" }} elevation={4}>
				{comments.map((el) => (
					<PostComment avatar={el.avatar} name={el.name} comment={el.comment} />
				))}
			</Card>
		</Box>
	);
}

export default Postsection;
