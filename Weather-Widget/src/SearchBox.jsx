import React , {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "459203368a97e58a72b5ea7597b354cd";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        try{
            let result = {
                city : city ,
                temp : jsonResponse.main.temp,
                tempMax : jsonResponse.main.temp_max,
                tempMin : jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather:  jsonResponse.weather[0].description,
            }
            return result;
        }catch(error){
            throw error
        }
    }

    let handleChange = (event) =>{
        setCity(event.target.value);
        console.log(event.target.value)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let info = await getWeatherInfo();
            updateInfo(info);
            setCity("");
            setError(false);
        }catch(error) {
            setError(true);
        }
    }
  return (
    <>
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" onChange={handleChange}/>
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>No such place exits in API!</p>}
            </form>
        </div>
    </>
  )
}

export default SearchBox