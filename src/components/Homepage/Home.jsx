import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='container w-100 d-flex justify-content-center align-items-center'>
			<div className="jumbotron d-flex flex-column align-items-center justify-content-center">
				<h1 className='text-title h1 text-center'>Ready To Challenge Your Mind?</h1>
				<div className='mt-5' >
					<Link className="a text-title">let's play</Link>
					<Link className="a text-title">check highscores</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
