import React from "react";
import "../../styles/home.css";


export const Card = (props) => {
    // const BACKEND_URL = "https://starwars-visualguide.com/assets/img/characters/"

    return (
        <div className="card" style={{minWidth: "18rem"}}>
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="character_image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}


// following would be the line for the character image eventually
// <img src={BACKEND_URL + person.uid + ".jpg"} className="card-img-top" alt="character_image" />