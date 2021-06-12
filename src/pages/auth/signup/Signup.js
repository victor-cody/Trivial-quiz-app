import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Input from '../../../components/Input/Input';

const SignUpForm = () => {
	const history = useHistory();

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setconfirmPassword] = useState('')

	const [error, setError] = useState('')
	return (
		<div className="wrapper">
			<div className="container">
				<form action="" className="form">
					<Input 
					props
					/>
				</form>
			</div>
		</div>
	);
};

export default SignUpForm;
