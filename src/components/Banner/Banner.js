import React from "react";
import "../../App";
import { Button } from "../Button/Button";
import "../Banner/Banner.css";
import { Link } from "react-router-dom";
import VideoBanner from "..//..//videos/vdo-banner.mp4";

function Banner() {
	return (
		<div className="ban-container">
			<video src={VideoBanner} autoPlay loop muted height="100vh"/>
			<h1>
				<span>muumel</span> ,Your Travel Guide
			</h1>
			<p>What are you waiting for?</p>
			<div className="ban-btns">
				<Link to="/Login" className="btn-mobile">
					<Button
						className="btns"
						buttonStyle="btn--outline"
						buttonSize="btn--large"
					>
						GET STARTED
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default Banner;
