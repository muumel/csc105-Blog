import React from "react";
import "../Card/Cards.css";
import CardItem from "../Card/CardItem";
import PostPic1 from "../../pics/pic-01.jpg"
import PostPic2 from "../../pics/pic-02.jpg"
import PostPic3 from "../../pics/pic-03.jpg"
import PostPic4 from "../../pics/pic-04.jpg"


function Cards() {
	return (
		<div className="cards">
			<h1>These are our recomended article!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
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
							src={PostPic4}
							text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
							label="Food"
							path="/postsection"
						/>
						<CardItem
							src={PostPic3}
							text="Travel through the Islands of Bali in a Private Cruise"
							label="Food"
							path="/postsection"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
