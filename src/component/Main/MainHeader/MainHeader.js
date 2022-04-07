/** @format */

import { Box, Divider } from "@material-ui/core";
import "./MainHeader.css";
import React from "react";

const MainHeader = () => {
	return (
		<div className='main_header'>
			<div className='main_header_top'>
				<h3>Biomoneta Researcg Pvt Ltd</h3>
				<span className='divider divider-top'></span>
				<div>
					Sector - <span className='value'>Biotech</span>
				</div>
			</div>
			<Divider className='main-divider' />
			<div className='main_header_bottom'>
				<div className='box_1 box'>
					<span className='divider'></span>
					<span>Number of Rounds</span>
					<span className='value'>5</span>
				</div>
				<div className='box_2 box'>
					<span className='divider'></span>
					<span>Capital Raised</span>
					<span className='value'>₹ 5.58 cr</span>
				</div>
				<div className='box_3 box'>
					<span className='divider'></span>
					<sapn>Share Holders</sapn>
					<span className='value'>16</span>
				</div>
				<div className='box_4 box'>
					<span className='divider'></span>
					<span>Valutions</span>
					<span className='value'>₹ 14.25 cr</span>
				</div>
			</div>
			<Divider className='main-divider' />
		</div>
	);
};

export default MainHeader;
