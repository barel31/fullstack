const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
	// const telAvivCityCode = 'id=293397';
	const query = req.body.cityName;
	console.log('city name: ' + query);
	const APIKey = 'appid=acd35709b9488367f8977cdfad89ce46';
	const units = 'metric';
	const url = 'https://api.openweathermap.org/data/2.5/weather?&' + APIKey + '&q=' + query + '&units=' + units;
	https.get(url, function (response) {
		if (response.statusCode !== 200) {
			res.send('Invalid city name');
			return;
		}
		response.on('data', function (data) {
			const weatherData = JSON.parse(data);
			const description = weatherData.weather[0].description;
			const temp = weatherData.main.temp;
			const icon = weatherData.weather[0].icon;
			const cityName = weatherData.name;

			res.write('<p>The weather is currently ' + description + '<p>');

			res.write('\n<h1>The temprature in ' + cityName + ' is: ' + temp + ' degress Celius.<h1>');

			const iconUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
			res.write('<img src="' + iconUrl + '">');

			res.send();
		});
	});
});

app.listen(3000, function () {
	console.log('Server is running at port 3000.');
});
 