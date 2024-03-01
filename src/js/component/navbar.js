import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/star-wars-logo-custom.png";

export const Navbar = ({category}) => {
	const { store, actions } = useContext(Context);

	const handleDeleteFavorite = (index) => {
        actions.deleteFavorites(index);
	};

	return (
		<nav className="navbar mb-4">
			<div className="dropdown">
				<button id="favBtn" type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					♡ Favorites [{store.favorites.length}]
				</button>
				<ul className="dropdown-menu dropdown-menu-dark">
					{store.favorites.length > 0 ? (
						store.favorites.map((favs, index) => (
							<li key={index} className="dropdown-item d-flex justify-content-between">
								<Link to={"/details/" + favs.category + "/" + favs.index} className="favLink">
									<span>{favs.name}</span>
								</Link>
								<span onClick={() => handleDeleteFavorite(index)}>
									<i className="fa-regular fa-trash-can"></i>
								</span>	
							</li>
						))
					) : (
						<li className="dropdown-item text-center">(empty)</li>
					)}
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
