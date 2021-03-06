import React, { useEffect, useState } from "react";
import "../Card/Cards.css";
import CardItem from "./CardItem";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
import PostPic1 from "../../pics/pic-01.jpg";
import PostPic2 from "../../pics/pic-02.jpg";
import PostPic3 from "../../pics/pic-03.jpg";
import PostPic4 from "../../pics/pic-04.jpg";
<<<<<<< HEAD
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function Feedcard() {
	const [data, setData] = useState([]);

	useEffect(() => {
		Aos.init({ duration: 1000 });

		axios
			.get("http://localhost:8080/article/feedlist")
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
				{Array.from(Array(Math.ceil(data.length / 4)).keys()).map((el) => (
<<<<<<< HEAD
<<<<<<< HEAD
					<div className="cards__container" key= {el}>
=======
					<div className="cards__container">
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
=======
					<div className="cards__container">
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
						<div className="cards__wrapper">
							<ul className="cards__items">
								{Array.from(Array(4).keys()).map(
									(el2) =>
										data[el * 4 + el2] && (
											<CardItem
<<<<<<< HEAD
<<<<<<< HEAD
											key= {data[el * 4 + el2].title}
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
												scr={`https://picsum.photos/id/${data[el * 4 + el2].id}/200/300`}
												text={data[el * 4 + el2].title}
												label={data[el * 4 + el2].type}
												path={`/post/${data[el * 4 + el2].id}`}
											/>
										)
								)}
							</ul>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Feedcard;
