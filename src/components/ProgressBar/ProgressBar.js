import React, { useContext } from 'react';
import { GameContex } from '../../contex/GameContex';
import 'progress_bar.scss';

const ProgressBar = ({ counter }) => {

	const { MAX_QUESTIONS } = useContext(GameContex)

	return (
		<div className="progress-bar">
			<div className="progress-bar__full"
				style={{
					width: `${(counter / MAX_QUESTIONS) * 100}%`
				}}
			></div>
		</div>
	);
};

export default ProgressBar;
