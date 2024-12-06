document.addEventListener('DOMContentLoaded',()=>{
    const input = document.getElementById('location-input');
    const check = document.getElementById('check-btn');
    const error = document.getElementById('error-message');
    const cityName = document.getElementById('city-name');
    const description = document.getElementById('description');
    const temperature = document.getElementById('temperature');
    const weather = document.getElementById('weather-info');

    const apikey = "68fe8cbe58a900427b53522d09905a90";

    check.addEventListener('click',async ()=>{
        const city = input.value.trim();
        if(!city) return;
        try {
            const data = await fetchweather(city);
            displayWeather(data);
        } catch (error) {
            console.log(error);
        }
    });

    async function fetchweather(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        const response = await fetch(url);

        if(!response.ok){
            showError();
        }else{
            reset();
        }
        const data = await response.json();
        return data;
    }

    function displayWeather(data){
        console.log(data);
        const {name, main, weather, wind} = data;
        cityName.textContent = name;
        temperature.textContent = `${main.temp}`;
        description.textContent = `${weather[0].description} :Wind Speed ${wind.speed}`;
        reset();
    }

    function showError(){
        weather.classList.add('hidden');
        error.classList.remove('hidden');
    }

    function reset(){
        error.classList.add('hidden');
        weather.classList.remove('hidden');
    }
});