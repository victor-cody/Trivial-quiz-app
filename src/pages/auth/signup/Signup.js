import {hashSync} from 'bcrypt';
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../../components/Input/Input";

const SignUpForm = (e) => {
e.preventDefault()
const history = useHistory();
	if (localStorage.getItem('email')) setTimeout(() => {
		history.push('/')
	}, 1000);

const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setconfirmPassword] = useState("");

// const [error, setError] = useState("");

const data = JSON.stringify({
    "operation":"insert",
    "schema" :  "users",
    "table":"users",
    "records": [
      {
        "username" : username,
        "email": email,
        "password":hashSync(password, 10)
      }
    ]
});

const config = {
  method: 'post',
	url: process.env.REACT_APP_INSTANCE_URL,
  headers: { 
    'Content-Type': 'application/json', 
	  'Authorization': process.env.REACT_APP_AUTHENTICATION
  },
  data : data
};


async function signUpUser() {
	if (!(username.length > 0 && email.length > 0 && password === confirmPassword && password.length > 0)) return;

	try {
		const res = await axios(config);
		console.log(JSON.stringify(res.data))
		history.push('/auth/login')
	} catch (error) {
		 console.log(error);
	}
	
}

return (
<div className="wrapper">
	<div className="container d-flex justify-content-center align-items-center">
	<form action="" className="form" onSubmit={signUpUser} >
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
			type: "username",
			placeholder: "Username",
			value: username,
			name: "username",
			update: setUsername,
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

		<Input
		props={{
			type: "password",
			placeholder: "Confirm Password",
			value: confirmPassword,
			name: "email",
			update: setconfirmPassword,
		}}
		/>

				<button type="submit" className="a sign__up_button btn btn-teal">
			SignUp
		</button>
	</form>
	</div>
</div>
);
};

export default SignUpForm;
