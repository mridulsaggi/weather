let btn = document.getElementById("submit")
async function weather(city){
const url =`https://weatherapi-com.p.rapidapi.com/current.json?q=`+city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a5485a213msh500c7ff67ab2175p16815djsnf9f7e739e831',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
}

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    // console.log(result);
    cityname.innerHTML = city;
			// console.log(new Date(result.sunrise).toLocaleString());
			temp.innerHTML = result.current.temp_c;
			wind.innerHTML = result.current.condition.text;
            document.getElementById("type").src=result.current.condition.icon;
			humidity.innerHTML = result.current.humidity;
			feelslike.innerHTML = result.current.feelslike_c;
            region.innerHTML=result.location.region;
            country.innerHTML=result.location.country;
			console.log(result.current.temp_c);
			// console.log(response.temp);
} catch (error) {
    console.log("error is there");
	console.error(error);
}
}
weather("new delhi");
// weather("delhi")
btn.addEventListener("click", () => {
	city = inpcity.value
	// hi();
	weather(city);

})