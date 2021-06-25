import {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { GameContex } from '../../contex/GameContex';
import './game-category.scss';

const GameCategory = ({ symbol, name, bg, category, des = '' }) => {

	const history = useHistory();
	const {setCategory} = useContext(GameContex)

	return (


		<div className="col-md-5 my-3 mx-2 py-4 px-2  text-center category" style={{
				backgroundColor: bg
			}}
			onClick={() => {
				setCategory(category)
				history.push('/game')
			}}
			>
				<span className='display-4' >{symbol}</span>
			<h3 className="text-capitalize mb-3 mt-2">{name}</h3>
			<p className="mb-0">{des}</p>
			</div>

	);
};

export default GameCategory;
