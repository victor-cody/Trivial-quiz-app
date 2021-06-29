import {useState, useEffect} from "react";

export default function useAxios(url) {
	const [request, setRequest] = useState({
		loading: false,
		error: null,
		data: null,
	});
	console.log(url);

	useEffect(() => {
		setRequest({
			loading: true,
			data: null,
		});

		fetch(url)
			.then(res => res.json())
			.then(value => {
				console.log(value);
				setRequest({
					loading: false,
					error: null,
					data: value
				})
			})
			.catch(err => {
				console.log(err);
				setRequest({
					loading: false,
					error: err
				});
			});

		// axios
		// 	.get(url)
		// 	.then(response => {
		// 		console.log(response);
		// 		setRequest({
		// 			loading: false,
		// 			error: false,
		// 			data: response,
		// 		});
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 		setRequest({
		// 			loading: false,
		// 			error: err
		// 		});
		// 	});

	}, [url]);

	return request;
}
