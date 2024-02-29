import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/star-wars-logo-custom.png";


export const Navbar = () => {
	return (
		<nav className="navbar mb-4">
			<span>
				<button id="favBtn" type="button" class="btn btn-outline-warning">♡ Favorites</button>
			</span>
			<Link to="/">
				<img id="swLogo" src={starWarsLogo} alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com" />
			</Link>
		</nav>
	);
};