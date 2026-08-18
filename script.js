const weatherData = {
    "new york": {
        city: "New York, US", icon: "☀️", temp: 24, desc: "Sunny",
        humidity: 45, wind: 12, visibility: 10, feelsLike: 26,
        hourly: [
            { time: "6AM", icon: "🌅", temp: 18 }, { time: "9AM", icon: "🌤️", temp: 21 },
            { time: "12PM", icon: "☀️", temp: 24 }, { time: "3PM", icon: "☀️", temp: 26 },
            { time: "6PM", icon: "🌤️", temp: 23 }, { time: "9PM", icon: "🌙", temp: 20 }
        ],
        forecast: [
            { day: "Mon", icon: "☀️", high: 26, low: 18 }, { day: "Tue", icon: "🌤️", high: 24, low: 17 },
            { day: "Wed", icon: "⛅", high: 22, low: 16 }, { day: "Thu", icon: "🌧️", high: 19, low: 14 },
            { day: "Fri", icon: "⛈️", high: 17, low: 13 }
        ]
    },
    "london": {
        city: "London, GB", icon: "🌧️", temp: 14, desc: "Light Rain",
        humidity: 78, wind: 20, visibility: 6, feelsLike: 12,
        hourly: [
            { time: "6AM", icon: "🌫️", temp: 10 }, { time: "9AM", icon: "🌧️", temp: 12 },
            { time: "12PM", icon: "🌧️", temp: 14 }, { time: "3PM", icon: "⛅", temp: 15 },
            { time: "6PM", icon: "🌥️", temp: 13 }, { time: "9PM", icon: "🌙", temp: 11 }
        ],
        forecast: [
            { day: "Mon", icon: "🌧️", high: 15, low: 10 }, { day: "Tue", icon: "🌧️", high: 14, low: 9 },
            { day: "Wed", icon: "⛅", high: 16, low: 11 }, { day: "Thu", icon: "🌤️", high: 18, low: 12 },
            { day: "Fri", icon: "☀️", high: 20, low: 13 }
        ]
    },
    "tokyo": {
        city: "Tokyo, JP", icon: "⛅", temp: 28, desc: "Partly Cloudy",
        humidity: 62, wind: 8, visibility: 9, feelsLike: 31,
        hourly: [
            { time: "6AM", icon: "🌤️", temp: 24 }, { time: "9AM", icon: "⛅", temp: 27 },
            { time: "12PM", icon: "⛅", temp: 28 }, { time: "3PM", icon: "🌤️", temp: 30 },
            { time: "6PM", icon: "🌤️", temp: 27 }, { time: "9PM", icon: "🌙", temp: 25 }
        ],
        forecast: [
            { day: "Mon", icon: "⛅", high: 30, low: 24 }, { day: "Tue", icon: "🌤️", high: 31, low: 25 },
            { day: "Wed", icon: "☀️", high: 32, low: 26 }, { day: "Thu", icon: "⛈️", high: 27, low: 22 },
            { day: "Fri", icon: "🌧️", high: 25, low: 21 }
        ]
    },
    "paris": {
        city: "Paris, FR", icon: "🌤️", temp: 20, desc: "Mostly Sunny",
        humidity: 52, wind: 15, visibility: 10, feelsLike: 21,
        hourly: [
            { time: "6AM", icon: "🌫️", temp: 16 }, { time: "9AM", icon: "🌤️", temp: 18 },
            { time: "12PM", icon: "☀️", temp: 20 }, { time: "3PM", icon: "☀️", temp: 21 },
            { time: "6PM", icon: "🌤️", temp: 19 }, { time: "9PM", icon: "🌙", temp: 17 }
        ],
        forecast: [
            { day: "Mon", icon: "🌤️", high: 21, low: 15 }, { day: "Tue", icon: "☀️", high: 23, low: 16 },
            { day: "Wed", icon: "⛅", high: 20, low: 14 }, { day: "Thu", icon: "🌧️", high: 17, low: 13 },
            { day: "Fri", icon: "🌤️", high: 19, low: 14 }
        ]
    },
    "dubai": {
        city: "Dubai, AE", icon: "☀️", temp: 42, desc: "Extremely Hot",
        humidity: 20, wind: 18, visibility: 10, feelsLike: 46,
        hourly: [
            { time: "6AM", icon: "🌅", temp: 34 }, { time: "9AM", icon: "☀️", temp: 38 },
            { time: "12PM", icon: "☀️", temp: 42 }, { time: "3PM", icon: "🔥", temp: 44 },
            { time: "6PM", icon: "☀️", temp: 40 }, { time: "9PM", icon: "🌙", temp: 36 }
        ],
        forecast: [
            { day: "Mon", icon: "☀️", high: 44, low: 34 }, { day: "Tue", icon: "☀️", high: 43, low: 33 },
            { day: "Wed", icon: "☀️", high: 45, low: 35 }, { day: "Thu", icon: "🌤️", high: 41, low: 32 },
            { day: "Fri", icon: "☀️", high: 43, low: 34 }
        ]
    },
    "sydney": {
        city: "Sydney, AU", icon: "🌤️", temp: 18, desc: "Pleasant",
        humidity: 55, wind: 22, visibility: 10, feelsLike: 17,
        hourly: [
            { time: "6AM", icon: "🌫️", temp: 14 }, { time: "9AM", icon: "🌤️", temp: 16 },
            { time: "12PM", icon: "☀️", temp: 18 }, { time: "3PM", icon: "🌤️", temp: 19 },
            { time: "6PM", icon: "🌥️", temp: 17 }, { time: "9PM", icon: "🌙", temp: 15 }
        ],
        forecast: [
            { day: "Mon", icon: "🌤️", high: 19, low: 13 }, { day: "Tue", icon: "☀️", high: 21, low: 14 },
            { day: "Wed", icon: "🌧️", high: 16, low: 12 }, { day: "Thu", icon: "🌧️", high: 15, low: 11 },
            { day: "Fri", icon: "⛅", high: 17, low: 12 }
        ]
    },
    "moscow": {
        city: "Moscow, RU", icon: "❄️", temp: -5, desc: "Snowy",
        humidity: 85, wind: 14, visibility: 3, feelsLike: -10,
        hourly: [
            { time: "6AM", icon: "🌨️", temp: -8 }, { time: "9AM", icon: "❄️", temp: -6 },
            { time: "12PM", icon: "❄️", temp: -5 }, { time: "3PM", icon: "🌨️", temp: -4 },
            { time: "6PM", icon: "🌫️", temp: -6 }, { time: "9PM", icon: "🌙", temp: -7 }
        ],
        forecast: [
            { day: "Mon", icon: "❄️", high: -3, low: -9 }, { day: "Tue", icon: "🌨️", high: -1, low: -7 },
            { day: "Wed", icon: "⛅", high: 2, low: -4 }, { day: "Thu", icon: "☀️", high: 4, low: -2 },
            { day: "Fri", icon: "🌤️", high: 3, low: -3 }
        ]
    }
};

function getWeather(city) {
    const key = city.toLowerCase().trim();
    return weatherData[key] || null;
}

function getRandomCity() {
    const keys = Object.keys(weatherData);
    return weatherData[keys[Math.floor(Math.random() * keys.length)]];
}

function renderWeather(data) {
    document.getElementById('cityName').textContent = data.city;
    document.getElementById('weatherIcon').textContent = data.icon;
    document.getElementById('temperature').textContent = data.temp + '°C';
    document.getElementById('description').textContent = data.desc;
    document.getElementById('humidity').textContent = data.humidity + '%';
    document.getElementById('wind').textContent = data.wind + ' km/h';
    document.getElementById('visibility').textContent = data.visibility + ' km';
    document.getElementById('feelsLike').textContent = data.feelsLike + '°C';

    const forecastGrid = document.getElementById('forecastGrid');
    forecastGrid.innerHTML = '';
    data.forecast.forEach(f => {
        forecastGrid.innerHTML += `
            <div class="forecast-card">
                <div class="day">${f.day}</div>
                <div class="icon">${f.icon}</div>
                <div class="temps"><span class="high">${f.high}°</span> <span class="low">${f.low}°</span></div>
            </div>`;
    });

    const hourlyScroll = document.getElementById('hourlyScroll');
    hourlyScroll.innerHTML = '';
    data.hourly.forEach(h => {
        hourlyScroll.innerHTML += `
            <div class="hourly-card">
                <div class="time">${h.time}</div>
                <div class="h-icon">${h.icon}</div>
                <div class="h-temp">${h.temp}°</div>
            </div>`;
    });
}

function searchCity() {
    const input = document.getElementById('cityInput').value;
    if (!input.trim()) return;
    const data = getWeather(input);
    if (data) {
        renderWeather(data);
        document.getElementById('cityInput').value = '';
    } else {
        const cities = Object.keys(weatherData).join(', ');
        alert('City not found. Available: ' + cities);
    }
}

document.getElementById('searchBtn').addEventListener('click', searchCity);
document.getElementById('cityInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') searchCity();
});

renderWeather(getRandomCity());
