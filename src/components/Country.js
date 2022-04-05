import { useEffect, useState } from "react";
import GetWather from "../services/GetWather";

const Country = () => {
    const [pais, setPais] = useState([])
    
    useEffect(() => {
        GetWather()
        .then (response => {
            setPais(response.data.sys.country)
         
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    const rePais = pais

return (
    rePais
)

}

export default Country;