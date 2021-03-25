import React, { useState } from "react";

const FavouriteButton = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<span
			style={{ color: isActive ? "red" : "gray" }}
			onClick={() => setIsActive(!isActive)}
		>
			<i class="fas fa-heart"></i>
		</span>
	);
};

export default FavouriteButton;
