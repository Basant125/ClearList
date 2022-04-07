/** @format */

import React from "react";
import Debt from "./Debt";
import "./Equity.css";
import Holders from "./Holders";

const Equity = () => {
	return (
		<div className='equity'>
			<div className="'equity-container">
				<span className='equity-heading'>
					<span className='equity-text'>Equity</span> Distribution
				</span>
				<div className='current_hold equit_box'>
					<div className='current_hold-left'>
						<h5 className='equity-subheading'>Current Holding</h5>
						<span>
							₹ 14.28 cr Valutions <br /> as on <b>07 jun 2022</b>
						</span>
					</div>
					<div className='current-hold-right'>
						<Holders />
					</div>
				</div>
				<div className='debt equit_box'>
					<div className='debt-left'>
						<h5 className='equity-subheading'>
							<span>Debt</span>
						</h5>
						<span>
							₹ 5.02 cr debt <br /> as on <b>07 jun 2022</b>
						</span>
					</div>
					<div className='debt-right'>
						<Debt />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Equity;
