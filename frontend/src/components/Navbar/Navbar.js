import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import Cookies from "js-cookie";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const [login, setLogin] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const clearCookie = () => {
		if (login) {
			Cookies.remove("token");
		}
		window.location.href = "/Login";
	};
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();

		if (Cookies.get("token")) {
			setLogin(true);
		} else {
			setLogin(false);
		}
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						MUUMEL
						<i className="fas fa-rocket" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						{login && (
							<>
								<li className="nav-item">
									<Link
										to="/Bookmarks"
										className="nav-links"
										onClick={closeMobileMenu}
									>
										Bookmarks
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to="/Profile"
										className="nav-links"
										onClick={closeMobileMenu}
									>
										Profile
									</Link>
								</li>
							</>
						)}

						<li>
							<Link
								to="/Login"
								className="nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Log Out
							</Link>
						</li>
					</ul>
					<div className="btn-mobile" onClick={clearCookie}>
						{button && (
							<Button buttonStyle="btn--outline">
								{login ? "Log Out" : "Log In"}
							</Button>
						)}
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
