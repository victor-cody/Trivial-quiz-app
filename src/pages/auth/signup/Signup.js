import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const SignUp = () => {
	const history = useHistory();

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setconfirmPassword] = useState('')

	const [error, setError] = useState('')
	return (
		<div>
			
		</div>
	);
};

export default SignUp;
