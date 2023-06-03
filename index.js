// let city = document.getElementById("inpcity").value

let btn = document.getElementById("submit")
// const url="https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi"
async function weather(city){
	console.log(city);

	// console.log(temp.innerHTML)
	const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+city;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '5a5485a213msh500c7ff67ab2175p16815djsnf9f7e739e831',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};

	// const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city;
	// const options = {
	// 	method: 'GET',
	// 	headers: {
	// 		'X-RapidAPI-Key': '5a5485a213msh500c7ff67ab2175p16815djsnf9f7e739e831',
	// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	// 	}
	// }
		// try {
			const result = await fetch(url, options).then(reponse => response.json());
			// const result = await response.json();
			console.log(result);
			console.log(result.current.temp_c);
			console.log(response.temp);
			cityname.innerHTML = city;
			// console.log(new Date(1685596295000).toLocaleString(result.sunrise));
			temp.innerHTML = result.temp;
			wind.innerHTML = result.wind_speed;
			humidity.innerHTML = result.humidity;
			feelslike.innerHTML = result.feels_like;

		// } catch (error) {
		// 	console.log("error")
		// 	console.error(error);
		// }
	};


weather("delhi")
btn.addEventListener("click", () => {
	city = inpcity.value
	// hi();
	weather(city);

})
// weather("delhi")
