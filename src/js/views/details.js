import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Details = ({category}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const character = store.characters.find((item, index) => index == params.theid);
	const planet = store.planets.find((item, index) => index == params.theid);
	const starship = store.starships.find((item, index) => index == params.theid);

	return (
			<div className="detailsDiv">
				<div>
					<div>
						<img src="https://picsum.photos/800/600" />
					</div>
					<div>
						<h3>
						{
						category == "characters" ? character.name : 
						category == "planets" ? planet.name :
						starship.name
						}
						</h3>
						<p></p>
					</div>
				</div>

				<div>
					<div>
						<h6></h6>
						<p></p>
					</div>
					<div>
						<h6></h6>
						<p></p>
					</div>
					<div>
						<h6></h6>
						<p></p>
					</div>
					<div>
						<h6></h6>
						<p></p>
					</div>
					<div>
						<h6></h6>
						<p></p>
					</div>
					<div>
						<h6></h6>
						<p></p>
					</div>
				</div>
			</div>
	);
};

Details.propTypes = {
	match: PropTypes.object
};