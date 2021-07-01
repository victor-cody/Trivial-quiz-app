import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
import ProfileImage from '../user-profile-image/ProfileImage';
import AuthenticationButton from '../auth-buttons/AuthenticationButton ';
import SignUpButton from '../auth-buttons/SignUpButton'



const Navbar = () => {

	const {
		isAuthenticated
	} = useAuth0();

	return (
		<div className="nav-container">
			<nav className="navbar px-2 py-1 align-items-center navbar-light navbar-expand-md">
				
					<NavLink className="router-link-exact-active" to='/'>
						Home
					</NavLink>
					<AuthenticationButton />
					{isAuthenticated ? <ProfileImage/> : <SignUpButton/>}
			</nav>
		</div>
	);
};

export default Navbar;
