import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";



export const Home = () => {
	const {store, actions} = useContext(Context)
	return (
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<div className="d-flex">
			{store.characters.map((item, index) => {
				return (
					< Card item = {item} index = {index} />
				)
			})}
		</div>
	</div>
)};