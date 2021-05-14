import React, { useEffect, useState } from "react";
import "../Card/Cards.css";
import CardItem from "../Card/CardItem";
<<<<<<< HEAD
=======
import PostPic1 from "../../pics/pic-01.jpg";
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function Cards() {
	const [data, setData] = useState([]);
	

	useEffect(() => {
		Aos.init({ duration: 1000 });

		axios
			.get("http://localhost:8080/article/postlist")
			.then((response) => {
				if (response.data.success) {
					setData(response.data.posts);
				} else {
					alert(response.data.text);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<div className="cards">
				<div data-aos="fade-up" className="card-trans">
					<h1>These are our recomended article!</h1>
					<div className="cards__container">
						<div className="cards__wrapper">
							<ul className="cards__items">
								{data.map((el) => (
									<CardItem
<<<<<<< HEAD
									key= {el.title}
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
										scr={`https://picsum.photos/id/${el.id}/200/300`}
										text={el.title}
										label={el.type}
										path={`/post/${el.id}`}
									/>
								))}
							
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Cards;
