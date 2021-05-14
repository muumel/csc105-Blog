import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Tooltip,
	Typography,
} from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import FavouriteButton from "../Button/FavouriteButton";
import PostComment from "../Post/PostComment";
import Aos from "aos";
import "aos/dist/aos.css";
import PostText from "./PostText";
import {useParams } from "react-router-dom";
import axios from "../../utils/axios";


function Postsection() {
	const [comments, setComments] = useState([]);
	const [data, setData] = useState({
		post: {},
		comments: [],
	});
	const { postid } = useParams();
	

	const postTextRef = useRef(null);
	useEffect(() => {
		Aos.init({ duration: 1000 });

		axios
			.get(`http://localhost:8080/article/postdisplay/${postid}`)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				alert("Error");
				console.log(error);
			});
	}, []);
	const favorite = () => {
		axios
			.post(`http://localhost:8080/auth/bookmarks`, {
				post_id: postid
			})
			.then((response) => {
				alert(response.data.text);
				window.location.reload();
			})
			.catch((error) => {
				alert("Error");
				console.log(error);
			});
	};

	const comment = (text) => {
		axios
			.post(`http://localhost:8080/auth/comment`, {
				post_id: postid,
				comment: text,
			})
			.then((response) => {
				window.location.reload();
			})
			.catch((error) => {
				alert("Error");
				console.log(error);
			});
	};
	return (
		<Box
			display="flex"
			flexDirection="column"
			maxWidth="1024px"
			margin="64px auto"
			data-aos="fade-up"
		>
			<Card
				elevation={4}
				style={{
					boaderRadius: "50%",
				}}
			>
				<CardContent>
					<Box display="flex" alignItems="center" marginBottom="24px">
						<div
							style={{
								backgroundImage: `url(https://avatars.dicebear.com/api/initials/${data.post.username}.svg)`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								width: "72px",
								height: "72px",
								borderRadius: "50%",
							}}
						/>
						<Box display="flex" flexDirection="column" marginLeft="24px">
							<Typography variant="h5">{data.post.username}</Typography>
							<Typography variant="h6">{data.post.bio}</Typography>
						</Box>
					</Box>
					<Typography variant="h4" gutterBottom>
						{data.post.title}
					</Typography>
				</CardContent>
				<CardMedia style={{ height: "500px" }} image={`https://picsum.photos/id/${postid}/200/300`} />
				<CardContent>
					<Typography variant="p1">{data.post.content}</Typography>
				</CardContent>
				<CardActions disableSpacing>
				<Tooltip title="Bookmarks" aria-label="bookmarks">

    <IconButton>
						<FavouriteButton click={favorite} />
					</IconButton>

</Tooltip>

					
				</CardActions>
			</Card>
			<Card style={{ margin: "24px 0 0 0" }} elevation={4}>
				{data.comments.map((el) => (
					<PostComment
						username={el.username}
						name={el.username}
						comment={el.comment}
					/>
				))}
				<PostText btnText="Post" submit={comment} ref={postTextRef} />
			</Card>
		</Box>
	);
}

export default Postsection;
