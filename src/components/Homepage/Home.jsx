import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='container w-100 h-100 d-flex flex-column  justify-content-center align-items-center'>
			<div className="d-flex flex-column align-items-center justify-content-center">
				<h1 className='text-capitalize display-4 text-center'>Ready To Challenge Your Mind?</h1>

				<div className='mt-5 row justify-content-spacearound align-items-spacearound' >
					<Link className="col-sm-9  a text-capitalize font-weight-bold btn mx-1 my-2">let's play</Link>
					<Link className="col-sm-9  a text-capitalize font-weight-bold btn mx-1 my-2">check highscores</Link>
				</div>

			</div>
		</div>
	);
};

export default Home;
