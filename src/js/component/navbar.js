import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/star-wars-logo-custom.png";


export const Navbar = () => {
	return (
		<nav className="navbar mb-4">
			<div className="dropdown">
				<button id="favBtn" type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					♡ Favorites
				</button>
				<ul className="dropdown-menu dropdown-menu-dark">
					<li className="dropdown-item text-center">(empty)</li>
					<li className="dropdown-item d-flex justify-content-between">
						<Link to="/" className="favLink">
							<span>Fav Listed</span>
						</Link>
						<span>
							<i class="fa-regular fa-trash-can"></i>
						</span>	
					</li>
				</ul>
			</div>
			<div>
				<Link to="/">
					<img id="swLogo" src={starWarsLogo} alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com" />
				</Link>
			</div>	
		</nav>
	);
};