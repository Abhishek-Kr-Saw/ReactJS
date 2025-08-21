import {useState} from 'react'
import SearchBox from './SearchBox'
import InfoCard from './InfoCard'

export default function WeatherApp() {
    let [weatherInfo , setWeatherInfo] = useState({
        city: "Dhanbad",
        feelsLike: 308.29,
        humidity: 61,
        temp: 304.17,
        tempMax: 304.17,
        tempMin:304.17,
        weather: "overcast clouds",
    })

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

  return (
    <div style={{textAlign : "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoCard info={weatherInfo}/>
    </div>
  )
}

