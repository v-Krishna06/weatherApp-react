import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    
    const [weatherInfo,setWeatherInfo] = useState({
        
        city:"Goa",
        feelslike:25.25,
        temp:30.21,
        tempMax:40.37,
        tempMin:20.84,
        humidity:57,
        weather:"haze",
    
    })
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);

    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Krishna</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}