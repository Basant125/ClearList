/** @format */

import React from "react";
import "./Scenario.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Button } from "@material-ui/core";
const Scenario = () => {
	return (
		<div className='scenario_one scenario_two'>
			<div className='scenario_one-container'>
				<div className='scenario_heading'>
					<div className='equity-heading equity-heading-update'>
						<span className='equity-text'>Initial</span> Details
						<div>
							<span className='equity-text remaining-invest'>
								Remaining to envest
							</span>
							$10,000
							<span className='equity-text'>(50%)</span>
						</div>
					</div>
					<span>
						<AddIcon className='clear' />
					</span>
				</div>
				<div className='scenario_detail scenario_two_detail'>
					<div className='detail-input'>
						<span className='detail_input_heading detail-input_heading_two '>
							INVESTOR NAME
						</span>
						<input type='text'></input>
					</div>
					<div className='detail-input'>
						<span className='detail_input_heading detail-input_heading_two'>
							SECURITY TYPE
						</span>
						<span style={{ display: "block" }} className='securityType'>
							COMMON STOCK
						</span>
					</div>
					<div className='detail-input'>
						<span className='detail_input_heading detail-input_heading_two'>
							INVESMENT AMOUNT
						</span>
						<input type='text'></input>
					</div>
					<div className='detail-input'>
						<div className='detail_input_heading detail-input_heading_two'></div>
						<Button variant='contained' className='btn'>
							CONFIRM INVESTMENT
						</Button>
					</div>
					<div className='detail-input'>
						<div className='detail_input_heading detail-input_heading_two'>
							<RemoveIcon className='clear remove' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Scenario;
