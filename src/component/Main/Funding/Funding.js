/** @format */

import { Button, Divider } from "@material-ui/core";
import React from "react";
import "./Funding.css";
import Scenario1 from "./Scenarion01/Scenario";
import Scenario2 from "./Scenario02/Scenario";
import Scenario3 from "./Scenario03/Scenario";

const Funding = () => {
	return (
		<div className='funding'>
			<Divider />
			<div className='funding-heading'>
				<span>SCENARIO MODELLING FOR FUNDING ROUND</span>
			</div>
			<Divider />
			<Scenario1 />
			<Scenario2 />
			<Scenario3 />
			<div className='funding-btns'>
				<div className='group-btn'>
					<Button variant='outlined'>CANCEl</Button>
					<Button variant='contained' color='primary'>
						CREATE SCENARIO
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Funding;
