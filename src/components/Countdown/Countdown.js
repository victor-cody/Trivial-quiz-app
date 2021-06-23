import React from 'react';
import './count-down.scss';

const Countdown = ({ counter = 0 }) => {
	return (

		<div className="row w-100">
			<p className="col-md-5">Time Spent: <span class="timer-countdown"></span> { counter } Seconds </p>
			<div className="col-md-12 time w-100 bg-white">
				<div className="timer" style={{
					width: `${counter * 5}%`
				}} ></div>
			</div>
		</div>

	);
};

export default Countdown;
