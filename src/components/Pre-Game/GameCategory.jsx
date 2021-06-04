import React from 'react';

const GameCategory = ({symbol, name}) => {
	return (
		<div class="category" data-category="general">
			<p data-category="general">{symbol}</p>
			<p data-category="general h2 text-capitalize">{name}</p>
		</div>
	);
};

export default GameCategory;
