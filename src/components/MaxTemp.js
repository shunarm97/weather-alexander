import { useEffect, useState } from "react";
import GetWather from "../services/GetWather";

const MaxTemp = () => {
    const [maxTempe, setMaxTempe] = useState([])
    
    useEffect(() => {
        GetWather()
        .then (response => {
            setMaxTempe(response.data.main.temp_max)
         
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    const reMaxTempe = maxTempe

    return (
    reMaxTempe
)

}

export default MaxTemp;