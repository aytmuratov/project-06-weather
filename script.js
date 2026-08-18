const weatherIcons={'Clear':'☀️','Clouds':'☁️','Rain':'🌧️','Drizzle':'🌦️','Thunderstorm':'⛈️','Snow':'❄️','Mist':'🌫️','Fog':'🌫️','Haze':'🌫️'};

const mockWeather={
    'london':{temp:18,desc:'Clouds',humidity:72,wind:15,feels:17,visibility:10},
    'new york':{temp:25,desc:'Clear',humidity:55,wind:12,feels:26,visibility:12},
    'tokyo':{temp:30,desc:'Clear',humidity:65,wind:8,feels:32,visibility:15},
    'paris':{temp:20,desc:'Rain',humidity:80,wind:20,feels:19,visibility:8},
    'moscow':{temp:12,desc:'Clouds',humidity:75,wind:18,feels:10,visibility:9},
    'dubai':{temp:38,desc:'Clear',humidity:30,wind:10,feels:40,visibility:15},
    'sydney':{temp:22,desc:'Clouds',humidity:60,wind:25,feels:21,visibility:11},
    'tashkent':{temp:33,desc:'Clear',humidity:25,wind:8,feels:34,visibility:14},
    'istanbul':{temp:28,desc:'Clouds',humidity:58,wind:14,feels:29,visibility:12},
    'berlin':{temp:19,desc:'Drizzle',humidity:70,wind:16,feels:18,visibility:9},
    'mumbai':{temp:32,desc:'Rain',humidity:85,wind:12,feels:35,visibility:7},
    'cairo':{temp:36,desc:'Clear',humidity:20,wind:10,feels:37,visibility:16}
};

function getWeather(){
    const city=document.getElementById('cityInput').value.trim().toLowerCase();
    if(!city){alert('Enter a city name!');return}
    const data=mockWeather[city]||{temp:Math.round(15+Math.random()*20),desc:['Clear','Clouds','Rain'][Math.floor(Math.random()*3)],humidity:Math.round(30+Math.random()*50),wind:Math.round(5+Math.random()*25),feels:0,visibility:Math.round(5+Math.random()*15)};
    if(!data.feels)data.feels=data.temp-2;
    const icon=weatherIcons[data.desc]||'🌤️';
    document.getElementById('city').textContent=city.split(' ').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
    document.getElementById('temp').textContent=data.temp+'°C';
    document.getElementById('desc').textContent=data.desc;
    document.getElementById('weatherIcon').textContent=icon;
    document.getElementById('humidity').textContent=data.humidity+'%';
    document.getElementById('wind').textContent=data.wind+' km/h';
    document.getElementById('feels').textContent=data.feels+'°C';
    document.getElementById('visibility').textContent=data.visibility+' km';
    renderForecast(city);
}

function renderForecast(city){
    const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const icons=['☀️','☁️','🌧️','⛅','🌤️','⛈️','🌦️'];
    const today=new Date().getDay();
    let html='';
    for(let i=1;i<=5;i++){
        const d=(today+i)%7;
        const t=Math.round(15+Math.random()*15);
        html+=`<div class="forecast-item"><div class="day">${days[d]}</div><div class="fc-icon">${icons[Math.floor(Math.random()*icons.length)]}</div><div class="fc-temp">${t}°</div></div>`;
    }
    document.getElementById('forecast').innerHTML=html;
}

document.getElementById('cityInput').addEventListener('keypress',(e)=>{if(e.key==='Enter')getWeather()});
getWeather();
