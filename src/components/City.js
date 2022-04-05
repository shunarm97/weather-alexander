import { useEffect, useState } from "react";
import GetWather from "../services/GetWather";

const City = () => {
    const [ciudad, setCiudad] = useState([])
    
    useEffect(() => {
        GetWather()
        .then (response => {
            setCiudad(response.data.name)
         
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    const reCiudad = ciudad

return (
    reCiudad
)

}

export default City;