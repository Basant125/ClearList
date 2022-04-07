/** @format */

import React from "react";
import "./Holders.css";

const Holders = () => {
	return (
		<div className='holders'>
			<div className='holder'>
				<div className='holder-heading'>
					<span>
						<b>Founder 1</b>
					</span>
					<span> 1500 Shares </span>
				</div>
				<div className='graph graph-left'>
					<span>EQ-15%</span>
				</div>
			</div>
			<div className='holder'>
				<div className='holder-heading'>
					<span>
						<b>Founder 2</b>
					</span>
					<span>1500 Shares </span>
				</div>
				<div className='graph'>
					<span>EQ-15%</span>
				</div>
			</div>
			<div className='holder'>
				<div className='holder-heading'>
					<span>
						<b>Founder 3</b>
					</span>
					<span> 1500 Shares </span>
				</div>
				<div className='graph'>
					<span>EQ-15%</span>
				</div>
			</div>
			<div className='holder'>
				<div className='holder-heading'>
					<span>
						<b>Founder 4</b>
					</span>
					<span>1500 Shares </span>
				</div>
				<div className='graph'>
					<span>EQ-15%</span>
				</div>
			</div>
			<div className='holder'>
				<div className='holder-heading'>
					<span>
						<b>ESOP Pool</b>
					</span>
					<span>1500 Shares</span>
				</div>
				<div className='graph graph_esop'>
					<span>EQ-15%</span>
				</div>
			</div>
			<div className='holder'>
				<div className='holder-heading'>
					<span>
						<b>Others </b>
					</span>
					<span>7500 Shares</span>
				</div>
				<div className='graph  graph-right'>
					<span>EQ-15%</span>
				</div>
			</div>
		</div>
	);
};

export default Holders;
