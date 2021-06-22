// var axios = require('axios');
// var data = JSON.stringify({
// 	"operation": "sql",
// 	"sql":"SELECT * FROM dev.dog where id = 1"
// });

// var config = {
//   method: 'post',
//   url: 'YOUR-INSTANCE-URL',
//   headers: { 
//     'Content-Type': 'application/json', 
//     'Authorization': 'Basic YOUR-AUTH-HEADER'
//   },
//   data : data
// };

// var axios = require('axios');
// var data = JSON.stringify({
// 	"operation": "update",
// 	"schema": "dev",
// 	"table": "dog",
// 	"records": [
// 		{
// 			"id": 1,
// 			"dog_name": "Penny B"
// 		}
// 	]
// });

// var config = {
// 	method: 'post',
// 	url: 'YOUR-INSTANCE-URL',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		'Authorization': 'Basic YOUR-AUTH-HEADER'
// 	},
// 	data: data
// };

// axios(config)
// 	.then(function (response) {
// 		console.log(JSON.stringify(response.data));
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

// var axios = require('axios');
// var data = JSON.stringify({
// 	"operation": "sql",
// 	"sql": "INSERT INTO dev.dog (id, name) VALUES(22, 'Simon')"
// });

// var config = {
// 	method: 'post',
// 	url: 'YOUR-INSTANCE-URL',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		'Authorization': 'Basic YOUR-AUTH-HEADER'
// 	},
// 	data: data
// };

// axios(config)
// 	.then(function (response) {
// 		console.log(JSON.stringify(response.data));
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});
