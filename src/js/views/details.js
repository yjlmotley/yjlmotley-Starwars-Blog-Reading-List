import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/details.css";



export const Details = ({category}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const character = store.characters.find((item, index) => index == params.theid);
	const planet = store.planets.find((item, index) => index == params.theid);
	const starship = store.starships.find((item, index) => index == params.theid);

	return (
			<div className="detailsDiv">
				<div className="detailsTopDiv">
					<div className="detailsImgDiv">
						<img className="detailsImg" src="https://picsum.photos/800/600" />
					</div>
					<div className="detailsTextDiv">
						<h2 id="detailsName">
							<u>{
							category == "characters" ? character.name : 
							category == "planets" ? planet.name :
							starship.name
							}</u>
						</h2>
						<p id="detailsNameDesc">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
						</p>
					</div>
				</div>

				<div className="detailsBtmDiv">
					<div className="btmDivs">
						<h6>
							{
								category == "characters" ? "Hair Color " : 
								category == "planets" ? "Population: " :
								"Manufacturer: "
                			}
						</h6>
						<p>
							{
								category == "characters" ? character.hair_color : 
								category == "planets" ? planet.name :
								starship.name
							}
						</p>
					</div>
					<div className="btmDivs">
						<h6>Result Two</h6>
						<p>desc two here</p>
					</div>
					<div className="btmDivs">
						<h6>Result Three Line</h6>
						<p>desc three</p>
					</div>
					<div className="btmDivs">
						<h6>Result Eventually</h6>
						<p>desc</p>
					</div>
					<div className="btmDivs">
						<h6>Result Will Be Added</h6>
						<p>description here</p>
					</div>
					<div className="btmDivs">
						<h6>Result</h6>
						<p>desc sixshould behere</p>
					</div>
				</div>
			</div>
	);
};

Details.propTypes = {
	match: PropTypes.object
};