import { useEffect, useState } from "react";
import GetWather from "../../services/GetWather";
import './Icons.css'
const Icons = () => {
    const [icon, setIcon] = useState([])
    const [idIcon, setIdIcon] = useState([])
    
    useEffect(() => {
        GetWather()
        .then (response => {
            setIcon(response.data.weather[0].main)
            setIdIcon(response.data.weather[0].icon)
         
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    const reIcon = icon

return (
   <div>
       <div className="img">
           <img src={`http://openweathermap.org/img/wn/${idIcon}@2x.png`} alt="" />
       </div>
       <p>{reIcon}</p>
    </div>
)

}

export default Icons;