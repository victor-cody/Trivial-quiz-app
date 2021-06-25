import React from 'react';
import './_option-styles.scss';

const GameOption = ({ option, text, id, callback }) => {

	return (
			
			<div class="choice row align-items-center border-white mb-3 rounded-sm bg-light"
			onClick = {callback}
			>
				<p class="choice__option col-md-3 px-3 py-3">{option}</p>
				<p class="choice__text col-md-9 px-3 py-3" data-choiceNumber={id}>{text}</p>
			</div>

	);
};

export default GameOption;
