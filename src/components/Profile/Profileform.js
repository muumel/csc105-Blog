import React, { useState } from "react";
import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	TextField,
} from "@material-ui/core";
import { Button } from "../Button/Button";
import "../Profile/Profileform.css";

function Profileform(props) {
	const [profile, setProfile] = useState({
		fistname: "Muumel",
		lastname: "Narak",
		bio: "Hello world",
		status: "1234",
	});

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<div className="pf-wrapper">
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
						<img src={props.src} className="profileform-img" />
						<div className="upload-pic">
							<input type="file" name="" id="file" accept="image/*" />
							<label for="file">EDIT PIC</label>
						</div>
						<IconButton
							aria-label="delete"
							style={{
								position: "absolute",
								right: "12px",
								top: "12px",
							}}
							onClick={handleClickOpen}
						>
							<i class="fas fa-pen"></i>
						</IconButton>
					</Box>

					<div className="user-profile-wrapper">
						<h1>
							Your <span>Profile</span>
						</h1>
						<div className="user-profile">
							<TextField
								id="standard-basic"
								label="FIRSTNAME"
								value={profile.fistname}
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
				</div>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
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
						autoFocus
						margin="normal"
						id="name"
						label="Firstname"
						type="text"
						fullWidth
					/>
					<TextField
						autoFocus
						margin="normal"
						id="name"
						label="Lastname"
						type="text"
						fullWidth
					/>
					<TextField
						autoFocus
						margin="normal"
						id="name"
						label="Bio"
						type="text"
						fullWidth
					/>
					<TextField
						autoFocus
						margin="normal"
						id="name"
						label="Status"
						type="text"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Done
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default Profileform;
