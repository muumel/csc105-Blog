import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	TextField,
	Tooltip,
} from "@material-ui/core";
import { Button } from "../Button/Button";
import "../Profile/Profileform.css";
import axios from "../../utils/axios";

function Profileform(props) {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [bio, setBio] = useState("");
	const [status, setStatus] = useState("");

	const [profile, setProfile] = useState({});

	useEffect(() => {
		Aos.init({ duration: 800 });
		axios
			.get("http://localhost:8080/user/profile")
			.then((response) => {
				if (response.data.success) {
					setProfile(response.data.profile);
				} else {
					alert(response.data.text);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleSubmit = () => {
<<<<<<< HEAD
<<<<<<< HEAD
	
		console.log(profile.firstname)
		console.log(profile.lastname)
		console.log(profile.bio)
		console.log(profile.status)

		setOpen(false);
		axios
			.patch("http://localhost:8080/auth/editprofile", {
				firstname: profile.firstname,
				lastname: profile.lastname,
				bio: profile.bio,
				status: profile.status
=======
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
		setOpen(false);
		axios
			.patch("http://localhost:8080/auth/editprofile", {
				firstname: firstname,
				lastname: lastname,
				bio: bio,
				status: status,
<<<<<<< HEAD
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
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
		<>
			<div data-aos="fade-up" className="pf-wrapper">
				<div className="profile">
					<Box
						height="300px"
						alignSelf="stretch"
						position="relative"
						style={{
							background:
								"linear-gradient(90deg, rgba(250,165,80,1) 16%, rgba(251,220,58,1) 100%)",
							borderRadius: "20px 20px 0px 0px",
						}}
					>
						<img src={`https://avatars.dicebear.com/api/initials/${profile.firstname}.svg`} className="profileform-img" />
						

						<Tooltip title="Edit">
						<IconButton
							aria-label="delete"
							style={{
								position: "absolute",
								right: "12px",
								top: "12px",
							}}
							onClick={handleClickOpen}
						>
<<<<<<< HEAD
<<<<<<< HEAD
							<i className="fas fa-pen"></i>
=======
							<i class="fas fa-pen"></i>
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
=======
							<i class="fas fa-pen"></i>
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
						</IconButton>
						</Tooltip>
					</Box>

					{profile.firstname && (
						<div className="user-profile-wrapper">
							<h1>
								Your <span>Profile</span>
							</h1>
							<div className="user-profile">
								<TextField
									id="standard-basic"
									label="FIRSTNAME"
									value={profile.firstname}
									InputProps={{
										readOnly: true,
									}}
								/>
							</div>
							<div className="user-profile">
								<TextField
									id="standard-basic"
									label="LASTNAME"
									value={profile.lastname}
									InputProps={{
										readOnly: true,
									}}
								/>
							</div>

							<div className="user-profile">
								<TextField
									id="standard-basic"
									label="BIO"
									value={profile.bio}
									InputProps={{
										readOnly: true,
									}}
								/>
							</div>

							<div className="user-profile">
								<TextField
									id="standard-basic"
									label="STATUS"
									value={profile.status}
									InputProps={{
										readOnly: true,
									}}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
				data-aos="fade-down"
			>
				<DialogTitle
					id="form-dialog-title"
					style={{
						alignSelf: "center",
						marginTop: "24px",
						fontWeight: "bold",
					}}
				>
					Edit Your Profile
				</DialogTitle>
				<DialogContent>
					<TextField
<<<<<<< HEAD
<<<<<<< HEAD
					name="firstname"
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
						autoFocus
						margin="normal"
						id="name"
						label="Firstname"
						type="text"
<<<<<<< HEAD
<<<<<<< HEAD
						defaultValue={profile.firstname}
						fullWidth
						onChange={(e) => {
							console.log(e.target.name)
							setProfile({...profile,[e.target.name]: e.target.value})
						} }
					/>
					<TextField
					name="lastname"
=======
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
						fullWidth
						onChange={(e) => setFirstname(e.target.value)}
					/>
					<TextField
<<<<<<< HEAD
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
						autoFocus
						margin="normal"
						id="name"
						label="Lastname"
						type="text"
<<<<<<< HEAD
<<<<<<< HEAD
						defaultValue={profile.lastname}
						fullWidth
						onChange={(e) => {
							console.log(e.target.name)
							setProfile({...profile,[e.target.name]: e.target.value})
						} }
					/>
					<TextField
					name="bio"
=======
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
						fullWidth
						onChange={(e) => setLastname(e.target.value)}
					/>
					<TextField
<<<<<<< HEAD
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
						autoFocus
						margin="normal"
						id="name"
						label="Bio"
						type="text"
						fullWidth
<<<<<<< HEAD
<<<<<<< HEAD
						defaultValue={profile.bio}
						onChange={(e) => {
							console.log(e.target.name)
							setProfile({...profile,[e.target.name]: e.target.value})
						} }
					/>
					<TextField
					name="status"
=======
						onChange={(e) => setBio(e.target.value)}
					/>
					<TextField
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
=======
						onChange={(e) => setBio(e.target.value)}
					/>
					<TextField
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
						autoFocus
						margin="normal"
						id="name"
						label="Status"
						type="text"
<<<<<<< HEAD
<<<<<<< HEAD
						defaultValue={profile.status}
						fullWidth
						onChange={(e) => {
							console.log(e.target.name)
							setProfile({...profile,[e.target.name]: e.target.value})
						} }
=======
						fullWidth
						onChange={(e) => setStatus(e.target.value)}
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
=======
						fullWidth
						onChange={(e) => setStatus(e.target.value)}
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleSubmit} color="primary">
						Done
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default Profileform;
