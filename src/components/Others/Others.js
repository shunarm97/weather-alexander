import { useEffect, useState } from "react";
import GetWather from "../../services/GetWather";
import './Others.css'



const Others = () => {
    const [pressure, setPressure] = useState([])
    const [humidity, setHumidity] = useState([])
    const [speedWind, setSpeedWind] = useState([])
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(posicion => {


        GetWather(posicion.coords.latitude, posicion.coords.longitude)
        .then (response => {
            setPressure(response.data.main.pressure)
            setHumidity(response.data.main.humidity)
            setSpeedWind(response.data.wind.speed)
        })
        .catch(err => {
            console.log(err)
        })
    })

    }, [])

return (
   <div className="Others">
       <p>{pressure} <br /> Presion </p>
       <p>{humidity}  %<br /> Humedad </p>
       <p>{speedWind} m/s <br /> Velocidad de Viento </p>
    </div>
)

}

export default Others;