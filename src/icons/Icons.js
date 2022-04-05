import { useEffect, useState } from "react";
import GetWather from "../services/GetWather";

const Icons = () => {
    const [icon, setIcon] = useState([])
    
    useEffect(() => {
        GetWather()
        .then (response => {
            setIcon(response.data.weather[0].main)
         
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    const reIcon = icon
     
    const [time, seTime] = useState (true)
    
    // console.log(reIcon)

return (
   <div>
{/*    
//    <img src="./galery/tornado-icon.png" alt="" />
    <img src={time ? url('./galery/tornado-icon.png') : url('./galery/rain-icon.png')  } alt="" /> */}
    </div>
)

}

export default Icons;