import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import tatooineImg from "../../img/tatooine.jpg";


export const Card = ({ item, index, category }) => {
    const { store, actions } = useContext(Context);
    const [imgError, setImgError] = useState(false);

    const GUIDE_URL = "https://starwars-visualguide.com/assets/img/";


    const handleImgError = () => {
        setImgError(true);
    };

    let emptyImgUrl;
    if (category === "characters") {
        emptyImgUrl = "https://via.placeholder.com/286x393";
    } else if (category === "planets" && item.name === "Tatooine") {
        emptyImgUrl = tatooineImg;
    } else if (category === "planets") {
        emptyImgUrl = "https://via.placeholder.com/286x286";
    } else {
        emptyImgUrl = "https://via.placeholder.com/286x190";
    }
    // --- OR ---
    // const emptyImgUrl = category === "planets" && item.name === "Tatooine" 
    //     ? tatooineImg 
    //     : "https://via.placeholder.com/286x190";

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
        <div className="card">
            <img 
                src={imgError ? emptyImgUrl : GUIDE_URL + category + "/" + (index + 1) + ".jpg"}
                onError={handleImgError} 
                className="card-img-top" 
                alt="image not available"
            />
            <div id="cardBody" className="card-body">
                <h5 className="card-title fw-bold">{item.name}</h5>
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
                </p>
                <div id="cardBtnGroup" className="d-flex justify-content-between">
                    <Link to={"/details/" + category + "/" + index}>
                        <button type="button" className="btn btn-primary">Learn more!</button>
                    </Link>
                    <button type="button" className="btn btn-outline-warning btn-heart" onClick={ handleFavorites }>
                        <i className="fa-solid fa-heart heartBtn" style={{ color: isFavorite ? '#cc0020' : '#ffc107' }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
