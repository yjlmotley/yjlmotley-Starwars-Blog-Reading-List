import React from "react";
import { Link } from "react-router-dom";



export const Card = (props) => {
    // const BACKEND_URL = "https://starwars-visualguide.com/assets/img/characters/"

    return (
        <div className="card " style={{minWidth: "18rem"}}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="character_image" />
            <div className="card-body">
                <h5 className="card-title fw-bold">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    <Link to="/">
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