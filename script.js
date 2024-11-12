const apiKey = "ce0c9c39aefeb793372071aa0be6ced9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbtn = document.querySelector(".searchbox button");
const searchinput = document.querySelector(".searchbox input");



async function checkWeather(value){
    document.getElementById("loader").hidden = false;

    try {
        const response = await fetch(apiUrl + value + `&appid=${apiKey}`);
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector("#humidity_amount").innerHTML = `<p>Humidity: ${data.main.humidity} %</p>`;
        document.querySelector("#wind_speed").innerHTML = `<p>Wind Speed: ${data.wind.speed} Km/h</p>`;
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
        alert("city Not found");
        // Optionally handle the error, e.g., show an error message to the user
    } finally {
        // Hide the loader after fetching data or if an error occurs
        document.getElementById("loader").hidden = true;
    }
}

searchbtn.addEventListener("click" ,() =>{
    let value = searchinput.value;
    checkWeather(value);
})