import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Details } from "./views/details";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import "../styles/mediaQuery.css";


const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div id="layoutDiv">
			<HashRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details/characters/:theid" element={<Details category="characters" />} />
						<Route path="/details/planets/:theid" element={<Details category="planets" />} />
						<Route path="/details/starships/:theid" element={<Details category="starships" />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</HashRouter>
		</div>
	);
};


export default injectContext(Layout);