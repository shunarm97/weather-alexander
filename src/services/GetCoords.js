import { useEffect, useState } from "react"

const GetCoords = () => {



if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success)
}
else {
    alert ('No se pudo acceder a la Geo localizacion')
}

    const [lati, setLati] = useState(0)
    const [longi, setLongi] = useState(0)
    
    function success(position) {
        setLati(position.coords.latitude)
        setLongi(position.coords.longitude)
    }

    const cord = [lati,longi]
    // console.log(cord)
 
return cord;
}
    export default GetCoords;