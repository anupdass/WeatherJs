import React, { useEffect, useState } from 'react';
import './Home.css'


const url = "https://api.openweathermap.org/data/2.5/weather?q="
const apiKey = "1e7d8c4b1ff359efc256829aef032514"
// let city = 'dhaka';

const Home = () => {
    const [city, setCity] = useState('dhaka')
    const [weather, setWeather] = useState([])

    const handelCity = (city) => {
        setCity(city.target.value)
    }

    useEffect(() => {
        fetch(`${url}${city}&units=metric&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => setWeather(data))
    }, [city])


    // Date 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return (
        <div className="main-div">
            <div className="content">
                <h3>Search Your City </h3>
                <br />
                <input  type="text" placeholder="search Your City" onBlur={handelCity} />
                <button >Search</button>
                {
                    weather.main === undefined ?
                        <h1>No data Found</h1>
                        :
                        <div style={{marginTop:'10px',backgroundColor:'gray',borderRadius:"5px",padding:'10px'}} >
                            <h2>{weather.name}</h2>
                            <h1>{Math.round(weather.main.temp)}<span>&deg;C</span> </h1>
                            <h2>{weather.weather[0].description}</h2>
                            <h4>{today}</h4>
                        </div>
                }
            </div>
        </div>
    );
};

export default Home;