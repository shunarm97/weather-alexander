import { useEffect, useState } from "react";
import GetWather from "../services/GetWather";

const Temperature = () => {
    const [temperatura, setTemperatura] = useState([])
    
    useEffect(() => {
        GetWather()
        .then (response => {
            setTemperatura(response.data.main.temp)
         
        })
        .catch(err => {
            console.log(err)
        })

    }, [])
// console.log(temperatura)
    const reTemperatura = temperatura 
    // console.log(reTemperatura)
    return (
reTemperatura
)

}

export default Temperature;