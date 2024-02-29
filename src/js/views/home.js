import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";



export const Home = () => {
	const {store, actions} = useContext(Context)
	return (
	<div className="text-center mt-5 d-flex flex-column w-100 align-items-center">
		<h1>Characters</h1>
		<div className="d-flex flex-nowrap overflow-scroll align-items-stretch" style={{ width: "80%" }}>
			{store.characters.map((item, index) => {
				return (
					< Card item = {item} index = {index} />
				)
			})}
		</div>
	</div>
)};