import axios from 'axios';
import { useState } from 'react';

const Weather = () =>{
    const [weather, setWeather] = useState("")
    const apiCall = (e) => {
        e.preventDefault();
        const city = e.target.elements.loc.value;
        console.log(e)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=997ea79e1c9575bd4f087cf90e68205d&units=metric`

        axios.get(url).then((response)=>
            setWeather({
                city : response.data.name,
                temp : response.data.main.temp,
                lat : response.data.coord.lat,
                lon : response.data.coord.lon,
                humidity : response.data.main.humidity,
            })
        )
    }
    const WeatherDetails = () =>{
        return(
            <div>
                <h1>City : {weather.city}</h1>
                <h1>Temperature : {weather.temp} &#x2103;</h1>
                <h2>Latitude : {weather.lat} | Longitude : {weather.lon}</h2>
                {/* <h2>Longitude : {weather.lon}</h2> */}
                <h2>Humidity : {weather.humidity} %</h2>
            </div>
        )
    }
    return(
        <div>
            <form onSubmit={apiCall}>
                <input type="text" placeholder="Enter City" name="loc" required></input>
                <button>Submit</button>
            </form>
            <WeatherDetails/>
        </div>
    )
}

export default Weather;