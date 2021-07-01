import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const AuthenticationButton = () => {
	const { isAuthenticated } = useAuth0()
	return (
		< LogoutButton /> ?
			isAuthenticated :
		<LoginButton />

	);
};

export default AuthenticationButton;
