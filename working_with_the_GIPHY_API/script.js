var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=WiijRnJiLpbaWvOffwYYnvSR6Ji1G5Qg&tag=squirrels&rating=g');

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);
}

request.send();