import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import emptyPicImg from "../../img/star-wars-empty.jpg";
import tatooineImg from "../../img/tatooine.jpg";
import bespinImg from "../../img/bespin.jpg";

import "../../styles/details.css";


const DetailRow = ({ label, value }) => (
    <div className="d-flex flex-row mb-2 details-font" style={{ fontSize: '1rem'}}>
        <u className="w-50 text-end pe-2">{label}</u>
        <p className="w-50 ps-2 mb-0">{value}</p>
    </div>
);


export const Details = ({ category }) => {
    const { store } = useContext(Context);
    const [imgErr, setImgErr] = useState(false);
    const params = useParams();
    const location = useLocation();

    useEffect(() => {
        setImgErr(false);
    }, [location]);


    const character = store.characters.find((item, index) => index == params.theid);
    const planet = store.planets.find((item, index) => index == params.theid);
    const starship = store.starships.find((item, index) => index == params.theid);

    const GUIDE_URL = "https://starwars-visualguide.com/assets/img/"
    const getImgUrl = () => {
        if (imgErr && planet.name === "Tatooine") {
            return tatooineImg;
        } else if (planet.name === "Bespin") {
            return bespinImg;
        } else if (category === "starships") {
            return store.starshipImages[parseInt(params.theid)] || emptyPicImg;
        } return GUIDE_URL + category + "/" + (parseInt(params.theid) + 1) + ".jpg";
    }


    const handleImgErr = () => {
        setImgErr(true);
    };

    const getDetailContent = () => {
        const contents = {
            characters: [
                { label: "Birth Year:", value: character.birth_year },
                { label: "Gender:", value: character.gender },
                { label: "Height:", value: character.height },
                { label: "Mass:", value: character.mass },
                { label: "Skin Color:", value: character.skin_color },
                { label: "Eye Color:", value: character.eye_color }
            ],
            planets: [
                { label: "Terrain:", value: planet.terrain },
                { label: "Climate:", value: planet.climate },
                { label: "Gravity:", value: planet.gravity },
                { label: "Diameter:", value: planet.diameter },
                { label: "Surface Water:", value: planet.surface_water },
                { label: "Population:", value: planet.population }
            ],
            starships: [
                { label: "Manufacturer:", value: starship.manufacturer },
                { label: "Starship:", value: starship.starship_class },
                { label: "Max Atmosphering Speed:", value: starship.max_atmosphering_speed },
                { label: "Crew:", value: starship.crew },
                { label: "Passengers:", value: starship.passengers },
                { label: "Consumables:", value: starship.consumables }
            ]
        };
        return contents[category];
    };
    

    return (
        <div className="d-flex justify-content-center details-container">
            <div className="card bg-dark text-light mb-5 p-4"
                style={{ marginTop: '100px', minWidth: '66%', maxWidth: '66%', boxShadow: '0 8px 12px rgba(255, 255, 255, 0.2)' }}>
                <div className="row g-0">
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                        <img
                            src={getImgUrl()}
                            onError={handleImgErr}
                            className="img-fluid rounded-start rounded"
                            alt="image not available"
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-5" style={{ fontSize: '3rem' }}>
                                <u>
                                    {
                                        category == "characters" ? character.name :
                                            category == "planets" ? planet.name :
                                                starship.name
                                    }
                                </u>
                            </h2>
                            {getDetailContent().map((detail, index) => (
                                <DetailRow key={index} label={detail.label} value={detail.value} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


Details.propTypes = {
    category: PropTypes.string.isRequired
};