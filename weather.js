const apiKey = 'bff3de8316ee7c09cd0a59ceef2ef2b5'; // Вставьте ваш ключ от OpenWeatherMap

// Функция для получения погоды по городу
function getWeather(city, weatherTitleId, weatherDescriptionId, temperatureId) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weather = data.weather[0].description;
                const temp = data.main.temp;
                const cityName = data.name;

                // Заполнение информации о погоде
                document.getElementById(weatherTitleId).textContent = `Погода в городе: ${cityName}`;
                document.getElementById(weatherDescriptionId).textContent = `Описание: ${weather}`;
                document.getElementById(temperatureId).textContent = `Температура: ${temp}°C`;
            } else {
                // Если город не найден
                document.getElementById(weatherTitleId).textContent = 'Город не найден';
                document.getElementById(weatherDescriptionId).textContent = '';
                document.getElementById(temperatureId).textContent = '';
            }
        })
        .catch(error => {
            console.error('Ошибка получения данных о погоде:', error);
            document.getElementById(weatherTitleId).textContent = 'Ошибка при загрузке данных';
        });
}

// Пример вызова 
getWeather('Maldives', 'maldivesWeatherTitle', 'maldivesWeatherDescription', 'maldivesTemperature');
getWeather('Bali', 'baliWeatherTitle', 'baliWeatherDescription', 'baliTemperature');
getWeather('Paris', 'parisWeatherTitle', 'parisWeatherDescription', 'parisTemperature');
getWeather('Tokyo', 'tokyoWeatherTitle', 'tokyoWeatherDescription', 'tokyoTemperature');
getWeather('Barcelona', 'barcelonaWeatherTitle', 'barcelonaWeatherDescription', 'barcelonaTemperature');
