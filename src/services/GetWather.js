import axios from "axios"


const GetWather = async () => {
const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=-0.162458&lon=-79.147523&appid=7424f6fe98101630b3edee58cf25df43&units=metric'
const req = await axios.get(URL);
// console.log(req)

return req

} 

export default GetWather;