import {useAuth0} from '@auth0/auth0-react';

const LoginButton = () => {
	const { loginWithRedirect} = useAuth0()
	return (
		<button className="btn font-weight-bold a shine"
			onClick={() => loginWithRedirect({
				login_hint:""
			})}>
				Log In
		</button>
	);
};

export default LoginButton;
