/** @format */

import { Box } from "@material-ui/core";
import React from "react";
import "./Main.css";
import Equity from "./Equity/Equity";
import MainHeader from "./MainHeader/MainHeader";
import Funding from "./Funding/Funding";

const Main = () => {
	return (
		<Box className='main'>
			<MainHeader />
			<Equity />
			<Funding />
		</Box>
	);
};

export default Main;
