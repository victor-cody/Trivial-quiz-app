import './game-category.scss';

const GameCategory = ({ symbol, name, bg }) => {
	return (

		<div class="col-md-5 my-3 mx-2 py-4  text-center category" style={ {
			backgroundColor:bg
			} }>
			<span className='display-4' >{symbol}</span>
			<h3 class="text-capitalize mb-3 mt-2">{name}</h3>
			<p class="mb-0">I Will help you build a nice and beautiful prototype website using FIGMA.</p>
		</div>
	);
};

export default GameCategory;
