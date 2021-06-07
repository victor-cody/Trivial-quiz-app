import React from 'react';
import GameCategory from './GameCategory';

const PreGame = () => {

	const categories = [
		{name:'css',symbol:'🎨', bg:'#6C6CE5' },
		{ name:'javascript', symbol:'💰', bg:'#F9D74C' },
		{ name:'html', symbol:'⚒', bg:'#F97B8B' },
		{ name: 'python', symbol: '🐍', bg:'#28a745'}
	];
	return (
		<div className="container">
			<h3 className="display-4">How To Play</h3>
			<ul>
				<li>Select A Category</li>
				<li>Answer 20 Trivia Questions based on that category</li>
				<li>You get 20 seconds time frame to answer each question. GoodLuck!!</li>
			</ul>
			<div className="row mt-3 justify-content-center">
				{
					categories.map((category,id) => (
						<GameCategory
						key={`item-${id}`}
						name={category.name}
						symbol={category.symbol}
						bg={category.bg}
						/>
					))
				}
			</div>
		</div>
	);
};

export default PreGame;
