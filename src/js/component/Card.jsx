import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import tatooineImg from "../../img/tatooine.jpg";
import bespinImg from "../../img/bespin.jpg";


export const Card = ({ item, index, category }) => {
    const { store, actions } = useContext(Context);
    const [imgError, setImgError] = useState(false);

    
    const handleImgError = () => {
        setImgError(true);
    };
    
    const GUIDE_URL = "https://starwars-visualguide.com/assets/img/";

    const getImgUrl = () => {
        if (imgError && item.name === "Tatooine") {
            return tatooineImg;
        } else if (item.name === "Bespin") {
            return bespinImg;
        } else if (category === "starships") {
            return store.starshipImages[index] || emptyPicImg;
        } return `${GUIDE_URL}${category}/${index + 1}.jpg`
    }
    // --- OR ---
    // let emptyImgUrl;
    // if (category === "characters") {
    //     emptyImgUrl = "https://via.placeholder.com/286x393";
    // } else if (category === "planets" && item.name === "Tatooine") {
    //     emptyImgUrl = tatooineImg;
    // } else if (category === "planets") {
    //     emptyImgUrl = "https://via.placeholder.com/286x286";
    // } else {
    //     emptyImgUrl = "https://via.placeholder.com/286x190";
    // }
    // --- OR ---
    // const emptyImgUrl = category === "planets" && item.name === "Tatooine" 
    //     ? tatooineImg 
    //     : "https://via.placeholder.com/286x190";

    const imgStyle = {
        height: category === "starships" ? "180px" :
            category === "planets" ? "280px" :
                "auto",
    };

    const renderDetail = (label, value) => (
        <p>
            <span className="detail-label">{label}:</span> {value}
        </p>
    );

    const handleFavorites = () => {
        const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.category === category);
        if (isFavorite) {
            const indexToDelete = store.favorites.findIndex(fav => fav.name === item.name && fav.category === category);
            if (indexToDelete !== -1) {
                actions.deleteFavorites(indexToDelete);
            }
        } else {
            actions.addFavorites({ name: item.name, index, category });
        }
    };
    
    const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.category === category);

    return (
        <div className="card bg-light">
            <img 
                // src={imgError ? emptyImgUrl : GUIDE_URL + category + "/" + (index + 1) + ".jpg"}
                src={getImgUrl()}
                onError={handleImgError} 
                style={imgStyle}
                className="card-img-top rounded" 
                alt="image not available"
            />
            <div id="cardBody" className="card-body">
                <h5 className="card-title fw-bold"><u>{item.name}</u></h5>
                <div className="details mt-1 mb-4">
                    {category === "characters" && (
                        <>
                            {renderDetail("Gender", item.gender)}
                            {renderDetail("Birth Year", item.birth_year)}
                            {renderDetail("Skin Color", item.skin_color)}
                        </>
                    )}
                    {category === "planets" && (
                        <>
                            {renderDetail("Population", item.population)}
                            {renderDetail("Gravity", item.gravity)}
                            {renderDetail("Terrain", item.terrain)}
                        </>
                    )}
                    {category !== "characters" && category !== "planets" && (
                        <>
                            {renderDetail("Manufacturer", item.manufacturer)}
                            {renderDetail("Speed", item.max_atmosphering_speed)}
                            {renderDetail("Crew", item.crew)}
                        </>
                    )}
                    {/* --- OR ---
                    <p className="card-text">
                        {
                        category == "characters" ? "Gender: " + item.gender : 
                        category == "planets" ? "Population: " + item.population :
                        "Manufacturer: " + item.manufacturer
                        }
                    </p>
                    <p className="card-text">
                        {
                        category == "characters" ? "Birth Year: " + item.birth_year : 
                        category == "planets" ? "Gravity: " + item.gravity :
                        "Speed: " + item.max_atmosphering_speed
                        }
                    </p>
                    <p className="card-text">
                        {
                        category == "characters" ? "Skin Color: " + item.skin_color : 
                        category == "planets" ? "Terrain: " + item.terrain :
                        "Crew: " + item.crew
                        }
                    </p> */}
                </div>
                <div id="cardBtnGroup" className="d-flex justify-content-between">
                    <Link to={"/details/" + category + "/" + index}>
                        <button type="button" className="btn btn-dark">Learn more!</button>
                    </Link>
                    <button type="button" className="btn btn-outline-warning btn-heart" onClick={ handleFavorites }>
                        <i className="fa-solid fa-heart heartBtn" style={{ color: isFavorite ? '#cc0020' : '#ffc107' }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
