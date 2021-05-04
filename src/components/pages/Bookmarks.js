import React, { useEffect }  from "react";
import "../../App.css";
import CardItem from "../Card/CardItem";
import "../Bookmarks.css";
import PostPic1 from "../../pics/pic-01.jpg"
import PostPic2 from "../../pics/pic-02.jpg"
import PostPic3 from "../../pics/pic-03.jpg"
import Aos from "aos";
import "aos/dist/aos.css";



function Bookmarks() {
	useEffect(() => {
		Aos.init({ duration: 1000});
	}, []);

	return (
		<div>
			<div data-aos="fade-right" className="bookmarks">
				<h1 >
					Your <span>Bookmarks</span>
				</h1>
				<div  className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src={PostPic1}
							text="Explore the hidden waterfall deep inside the Amazon Jungle"
							label="Travel"
							path="/postsection"
						/>
						<CardItem
							src={PostPic2}
							text="Travel through the Islands of Bali in a Private Cruise"
							label="Travel"
							path="/postsection"
						/>
						<CardItem
							src={PostPic3}
							text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
							label="Food"
							path="/postsection"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Bookmarks;
