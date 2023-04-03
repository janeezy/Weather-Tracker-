'use strict';
const tempContainer = document.querySelector('.temp-container');
const chartContainerSection = document.querySelector('.chart-container');
const distanceLabelElement = document.querySelector('#distanceLabel');
const inputElement = document.querySelector('#cityInput');

let cityLatitude = 0;
let cityLongitude = 0;
let nearestStationLat = 0;
let nearestStationLng = 0;
let chart;
const geocoder = new google.maps.Geocoder();

// Step 1 => Get city from user
function onSubmit() {
	if (chart) {
		//if chart exist
		chart.destroy(); //destroy chart.
	}
	getCityLongitudeAndLatitude(inputElement.value);

	displayChart();
}

// Step 2 => Get the longitude and latitude of the city by using google maps api
const getCityLongitudeAndLatitude = (cityName) => {
	geocoder.geocode({ address: `${cityName} City` }, function (results, status) {
		if (status === 'OK') {
			const location = results[0].geometry.location;
			cityLatitude = location.lat();
			cityLongitude = location.lng();

			getNearestWeatherStation();

			const distance = getDistanceBetweenTwoLocationsInKm(
				cityLatitude,
				cityLongitude,
				nearestStationLat,
				nearestStationLng
			);

			distanceLabelElement.innerHTML = `The distance between ${cityName} and the nearest weather station is  ${distance.toFixed(
				2
			)}km`;
		} else {
			alert(
				'We are unable to determine your location, please enter a valid city'
			);
		}
	});
};

// Step 3 => Pass the longitude and latitude gotten in Step 2 to the external api that returns the nearest weather station from the city the user entered
const getNearestWeatherStation = () => {
	fetch(
		`https://api.openweathermap.org/data/2.5/find?lat=${cityLatitude}&lon=${cityLongitude}&API_KEY`
	)
		.then((response) => response.json())
		.then((data) => {
			const coord = data.list[0].coord;

			nearestStationLat = coord.lat;
			nearestStationLng = coord.lon;
			chartContainerSection.style.display = 'block';
			tempContainer.style.display = 'block ';
		})
		.catch((error) => {
			// handle any errors that occur
			console.error(error);
		});
};
// displaychart
const displayChart = () => {
	const cityData = localStorage.getItem(inputElement.value.toLowerCase());
	if (!cityData) {
		alert(
			`Error! we don't have ${inputElement.value} in our database, but you  can try any of  these cities such as hesse, bavaria, saxony.`
		);
	}
	const cityTempArr = JSON.parse(cityData).map(Number);
	const ctx = document.getElementById('myChart');

	chart = new Chart(ctx, {
		type: 'line',

		data: {
			labels: [
				'1924-2023',
				'1974-2023',
				'1961-1990',
				'1994-2023',
				'2014-2023',
				'Current Month',
			],
			datasets: [
				{
					label: 'variants',
					data: cityTempArr,
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	});
};
