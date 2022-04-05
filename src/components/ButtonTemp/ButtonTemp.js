import Temperature from '../Temperature';
import MaxTemp from '../MaxTemp';
import MinTemp from '../MinTemp';
import { useState } from 'react';
import './ButtonTemp.css';


const ButtonTemp = () => {
    const [celsious, setCelsious] = useState (true)
// console.log( typeof( <Temperature/>))

    return (
        // (<Temperature/> * (5/9)) + 32
        <div className='temperatures'>
             <h1>{celsious ? <Temperature/> : (<Temperature/> * (5/9)) + 32}° {celsious ? 'C' : 'F' }</h1>
             <div className='max-min'>
                 <p>Max temperatura: {celsious ? <MaxTemp/> : (<MinTemp/> * (5/9)) + 32}° {celsious ? 'C' : 'F' }</p>
                 <p>Min temperatura: {celsious ? <MinTemp/> : (<MinTemp/> * (5/9)) + 32}° {celsious ? 'C' : 'F' }</p>
            </div>
            <button onClick={() => setCelsious(!celsious)}>Cambiar</button>
        </div>
    )
};
export default ButtonTemp;