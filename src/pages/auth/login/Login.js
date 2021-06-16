import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Input from '../../../components/Input/Input';
import { hashSync } from 'bcrypt';

const LoginForm = () => {

	const history = useHistory()
	if (localStorage.getItem('email')) setTimeout(() => {
		history.push('/')
	}, 1000);

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const data = JSON.stringify({
		"operation": "insert",
		"schema": "users",
		"table": "users",
		"records": [
			{
				"username": username,
				"email": email,
				"password": hashSync(password, 10)
			}
		]
	});

	async function handelSubmit() {
		try {
			const isUser = axios.get(process.env.REACT_APP_INSTANCE_URL,{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': process.env.REACT_APP_AUTHENTICATION
				},
				data: data
			});
			localStorage.setItem('email', email)
		} catch (error) {
			
		}
	}

	return (
		<div className="wrapper">
			<div className="container">
				<form action="" className="form" onSubmit={handelSubmit}>

					<Input
						props={{
							type: "email",
							placeholder: "Email",
							value: email,
							name: "email",
							update: setEmail,
						}}
					/>

					<Input
						props={{
							type: "password",
							placeholder: "Password",
							value: password,
							name: "password",
							update: setPassword,
						}}
					/>

					<div align="center">
						<button type="submit" className="button" onClick={handelSubmit} >
							<span>Sign in</span>
						</button>
					</div>

				</form>
			</div>
		</div>
	);
};

export default LoginForm;
