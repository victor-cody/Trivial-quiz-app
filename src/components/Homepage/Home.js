import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='container w-100 h-100 d-flex flex-column  justify-content-center align-items-center'>
			<div className="d-flex flex-column align-items-center justify-content-center">
				<h1 className='text-capitalize display-4 text-center'>Ready To Challenge Your Mind?</h1>

				<div className='mt-5 w-100 row justify-content-center align-items-spacearound' >
					<Link className="col-sm-7 a text-capitalize font-weight-bold btn my-3 shine"
					to='/categories'
					>let's play <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-lg ml-1 mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09zM4.157 8.5H7a.5.5 0 01.478.647L6.11 13.59l5.732-6.09H9a.5.5 0 01-.478-.647L9.89 2.41 4.157 8.5z" clip-rule="evenodd"></path></svg></Link>

					<Link className="col-sm-7 a text-capitalize font-weight-bold btn my-3 shine" to='/highcores' >check highscores</Link>
				</div>

			</div>
		</div>
	);
};

export default Home;
