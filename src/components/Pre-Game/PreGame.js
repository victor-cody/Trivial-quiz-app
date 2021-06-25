import React from 'react';
import GameCategory from './GameCategory';

const PreGame = () => {

	const categories = [
		{name:'css', category:'css', symbol:'🎨', bg:'#6C6CE5', des:`The Artistic Language of the web` },
		{ name:'javascript', category:'javascript',  symbol:'💰', bg:'#F9D74C', des:`The Programming Language of the web` },
		{ name:'html', category:'html',  symbol:'⚒', bg:'#F97B8B', des:`The Skeleton of every webpage` },
		{ name: 'python', category:'python',  symbol: '🐍', bg:'#28a745', des:`Hiss Hiss`}
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
						category = {category.category}
						symbol={category.symbol}
						bg={category.bg}
						des={category.des}
						/>
					))
				}
			</div>
		</div>
	);
};

export default PreGame;
