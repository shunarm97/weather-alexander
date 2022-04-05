import { useEffect, useState } from "react";
import GetWather from "../services/GetWather";

const MinTemp = () => {
    const [minTempe, setMinTempe] = useState([])
    
    useEffect(() => {
        GetWather()
        .then (response => {
            setMinTempe(response.data.main.temp_min)
         
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    const reMinTempe = minTempe
    
    return (
    reMinTempe
)

}

export default MinTemp;