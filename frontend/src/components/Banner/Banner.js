import React, {useState,useEffect} from "react";
import "../../App";
import { Button } from "../Button/Button";
import "../Banner/Banner.css";
import { Link } from "react-router-dom";
import VideoBanner from "..//..//videos/vdo-banner.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";

function Banner() {
	const [login, setLogin] = useState(false);

	useEffect(() => {
		Aos.init({ duration: 2000});

		if (Cookies.get("token")) {
			setLogin(false);
		} else {
			setLogin(true);
		}

	}, []);
	const [comments, setComments] = useState([]);

	return (
		<div className="ban-container">
			<video src={VideoBanner} autoPlay loop muted height="100vh"/>
			<h1 data-aos="fade-up">
				<span>muumel</span> ,Your Travel Guide
			</h1>
			<p data-aos="fade-up">What are you waiting for?</p>
			{login && (
			<div data-aos="fade-up" className="ban-btns">
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
			)}
			
		</div>
	);
}

export default Banner;
