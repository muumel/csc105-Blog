import React, { useEffect, useState } from "react";
import "../../App.css";
import CardItem from "../Card/CardItem";
import "../Bookmarks.css";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "../../utils/axios";


function Bookmarks() {
	const [data, setData] = useState([]);
	

	useEffect(() => {
		Aos.init({ duration: 1000 });

		axios
			.get("http://localhost:8080/article/bookmarklist")
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
		<div>
			<div data-aos="fade-right" className="bookmarks">
				<h1>
					Your <span>Bookmarks</span>
				</h1>
				<div className="cards__wrapper">
					{Array.from(Array(Math.ceil(data.length / 4)).keys()).map((el) => (
						<div className="cards__container">
							<div className="cards__wrapper">
								<ul className="cards__items">
									{Array.from(Array(4).keys()).map(
										(el2) =>
											data[el * 4 + el2] && (
												<CardItem
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
			</div>
		</div>
	);
}

export default Bookmarks;
