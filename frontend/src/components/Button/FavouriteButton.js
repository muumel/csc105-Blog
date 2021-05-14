import React, { useState } from "react";

const FavouriteButton = ({ click }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<span style={{ color: isActive ? "red" : "gray" }} onClick={click}>
			<i class="fas fa-heart"></i>
		</span>
	);
};

export default FavouriteButton;
