
import { useEffect, useState  } from 'react';
import GetWather from '../../services/GetWather';
import './ButtonTemp.css';


const ButtonTemp = () => {
    const [celsious, setCelsious] = useState (true)
    const   [temperatura, setTemperatura] = useState ([])
    const   [maxTem, setMaxTem] = useState ([])
    const   [minTem, setMinTem] = useState ([])

    useEffect(() => {
        GetWather()
        .then (response => {
            setTemperatura(response.data.main.temp)
            setMaxTem(response.data.main.temp_max)
            setMinTem(response.data.main.temp_min)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])
// console.log(temperatura)
// console.log(maxTem)
// console.log(minTem)

    return (
        <div className='temperatures'>
             <h1>{celsious ? temperatura : ((temperatura * (5/9)) + 32).toFixed(2) }° {celsious ? 'C' : 'F' }</h1>
             <div className='max-min'>
                 <p>Max temperatura: {celsious ? maxTem : ((maxTem * (5/9)) + 32).toFixed(2) }° {celsious ? 'C' : 'F' }</p>
                 <p>Min temperatura: {celsious ? minTem : ((minTem * (5/9)) + 32).toFixed(2) }° {celsious ? 'C' : 'F' }</p>
            </div>
            <button onClick={() => setCelsious(!celsious)}>Cambiar</button>
        </div>
    )
};
export default ButtonTemp;