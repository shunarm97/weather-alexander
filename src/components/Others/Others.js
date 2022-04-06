import { useEffect, useState } from "react";
import GetWather from "../../services/GetWather";
import './Others.css'



const Others = () => {
    const [pressure, setPressure] = useState([])
    const [humidity, setHumidity] = useState([])
    const [speedWind, setSpeedWind] = useState([])
    
    useEffect(() => {
        GetWather()
        .then (response => {
            setPressure(response.data.main.pressure)
            setHumidity(response.data.main.humidity)
            setSpeedWind(response.data.wind.speed)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

return (
   <div className="Others">
       <p>{pressure} <br /> Presion </p>
       <p>{humidity} <br /> Humedad </p>
       <p>{speedWind} K/H <br /> Velocidad de Viento </p>
    </div>
)

}

export default Others;