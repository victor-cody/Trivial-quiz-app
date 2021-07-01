import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import './styles.scss';

const ProfileImage = () => {
	const { user } = useAuth0();
	const { name, picture} = user ;
	return (
		<Link className="d-flex align-items-center justify-content-between rounded-md px-2 py-2 bg-light profile" 
		to='#'>
			<span className="text-dark font-weight-bold profile-name">
				{name}
			</span>
			<img
				src={picture}
				alt={`${user}`}
				className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
			/>
		</Link>
	);
};

export default ProfileImage;
