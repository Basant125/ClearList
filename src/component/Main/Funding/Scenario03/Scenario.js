/** @format */

import React, { useState } from "react";
import "./Scenario.css";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {
	Button,
	FormControl,
	FormHelperText,
	MenuItem,
	Select,
} from "@material-ui/core";

const Scenario = () => {
	const [option, setOption] = useState("");
	const [investor, setInvestor] = useState("");

	const handleChange = (event) => {
		setOption(event.target.value);
	};

	const handleInvestor = (event) => {
		setInvestor(event.target.value);
	};
	return (
		<div className='scenario_one scenario_three'>
			<div className='scenario_one_container'>
				<div className='scenario_heading'>
					<span className='equity-heading'>
						<span className='equity-text'>ESOP/RSU pool </span> Details
					</span>
					<span>
						<KeyboardArrowUpIcon className='clear' />
					</span>
				</div>
				<div className='scenario-info'>
					<div className='scenario_detail scenario_two_detail'>
						<div className='detail-input detail-input-three'>
							<span className='detail_input_heading detail-input_heading_two '>
								CURRENT QUAMTITY , FDB PERCENTAGE
							</span>
							<span className='detail_input_heading '>
								48500, 5.2820% of FDB
							</span>
						</div>
						<div className='detail-input detail-input-three'>
							<span className='detail_input_heading detail-input_heading_two'>
								REVISED POOL
							</span>
							<FormControl sx={{ m: 1, minWidth: 120, borderBottom: "none" }}>
								<Select
									value={option}
									onChange={handleChange}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}>
									<MenuItem value=''>
										<em>Keep existing quantity</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</div>
						<div className='detail-input detail-input-three'>
							<span className='detail_input_heading detail-input_heading_two'>
								POST MONEY OPTION POOL
							</span>
							<input type='text'></input>
						</div>
						<div className='detail-input detail-input-three'>
							<span className='detail_input_heading detail-input_heading_two'>
								DILUTION METHODE
							</span>
							<FormControl sx={{ m: 1, minWidth: 120 }}>
								<Select
									value={investor}
									onChange={handleInvestor}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}>
									<MenuItem value=''>
										<em>Dilute only existing investor</em>
									</MenuItem>
									<MenuItem value={"investor1"}>investor1</MenuItem>
									<MenuItem value={"investor2"}>investor2</MenuItem>
									<MenuItem value={"investor3"}>investor3</MenuItem>
								</Select>
							</FormControl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Scenario;
