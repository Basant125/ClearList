/** @format */

import React from "react";
import "./Header.css";
import { Box, Typography } from "@material-ui/core";

const Header = () => {
	return (
		<Box className='header'>
			<Box className='Box-container'>
				<Box className='header-logo'>
					<span className='clearList'>ClearList</span>
					<div className='divider'></div>
					<span className='text-tech'>TECHNOLOGIES</span>
				</Box>
				<Box className='header-link'>
					<li className='active'>SCENERIO MODELING</li>
					<li>ESOPs</li>
					<li>REPORTS</li>
					<li>LOGOUT</li>
				</Box>
			</Box>
		</Box>
	);
};

export default Header;
