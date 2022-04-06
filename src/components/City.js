import { useEffect, useState } from "react";
import GetWather from "../services/GetWather";

const City = () => {
    const [ciudad, setCiudad] = useState([])
    const [pais, setPais] = useState([])
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(posicion => {


        GetWather(posicion.coords.latitude, posicion.coords.longitude)
        .then (response => {
            setCiudad(response.data.name)
            setPais(response.data.sys.country)
         
        })
        .catch(err => {
            console.log(err)
        })
    })

    }, [])

return (
    <h2>{ciudad}, {pais}</h2>
)

}

export default City;