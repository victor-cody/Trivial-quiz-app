import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='container w-100 h-100 d-flex flex-column  justify-content-center align-items-center'>
			<div className="d-flex flex-column align-items-center justify-content-center">
				<h1 className='text-capitalize display-4 text-center'>Ready To Challenge Your Mind?</h1>

				<div className='mt-5 w-100 row justify-content-center align-items-spacearound' >
					<Link className="col-sm-7 a text-capitalize font-weight-bold btn my-3"
					to='/categories'
					>let's play</Link>
					<Link className="col-sm-7 a text-capitalize font-weight-bold btn my-3" to='/highcores' >check highscores</Link>
				</div>

			</div>
		</div>
	);
};

export default Home;
