import React from "react";
import { Link } from "react-router-dom";



export const Card = ({item, index, category}) => {
    // const BACKEND_URL = "https://starwars-visualguide.com/assets/img/characters/"

    return (
        <div className="card" style={{minWidth: "18rem"}}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="character_image" />
            <div className="card-body">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <p className="card-text">{
                    category == "characters" ? "Gender: " + item.gender : 
                    category == "planets" ? "Population: " + item.population :
                    "Manufacturer: " + item.manufacturer
                }</p>
                <p className="card-text">{
                    category == "characters" ? "Birth Year: " + item.birth_year : 
                    category == "planets" ? "Gravity: " + item.gravity :
                    "Speed: " + item.max_atmosphering_speed
                }</p>
                <p className="card-text">{
                    category == "characters" ? "Skin Color: " + item.skin_color : 
                    category == "planets" ? "Terrain: " + item.terrain :
                    "Crew: " + item.crew
                }</p>
                <div className="d-flex justify-content-between">
                    <Link to={"/details/" + category + "/" + index}>
                        <button type="button" className="btn btn-primary">Learn more!</button>
                    </Link>
                    <button type="button" className="btn btn-outline-warning btn-heart">
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}


// following would be the line for the character image eventually
// <img src={BACKEND_URL + person.uid + ".jpg"} className="card-img-top" alt="character_image" />