/** @format */
import "./Scenario.css";
import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

const Scenario = () => {
	return (
		<div className='scenario_one'>
			<div className='scenario_one-container'>
				<div className='scenario_heading'>
					<span className='equity-heading'>
						<span className='equity-text'>Initial</span> Details
					</span>
					<span>
						<ClearIcon className='clear' />
					</span>
				</div>

				<div className='scenario_detail'>
					<div className='detail-input'>
						<span className='detail_input_heading'>SCENARION NAMR</span>
						<input type='text'></input>
					</div>
					<div className='detail-input'>
						<span className='detail_input_heading'>PRE MONEY</span>
						<input type='text'></input>
					</div>
					<div className='detail-input'>
						<span className='detail_input_heading'>NEW INVESTMENT</span>
						<input type='text'></input>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Scenario;
