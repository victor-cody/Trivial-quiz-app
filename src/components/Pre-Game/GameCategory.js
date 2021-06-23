import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GameContex } from '../../contex/GameContex';
import './game-category.scss';

const GameCategory = ({ symbol, name, bg, category, des = '' }) => {

	const {setCategory} = useContext(GameContex)

	return (

		<Link to='/game'>
			<div class="col-md-5 my-3 mx-2 py-4  text-center category" style={{
				backgroundColor: bg
			}}
				onClick={() => setCategory(category)}
			>
				<span className='display-4' >{symbol}</span>
				<h3 class="text-capitalize mb-3 mt-2">{name}</h3>
				<p class="mb-0">{des}</p>
			</div>
		</Link>
	);
};

export default GameCategory;
