import axios from "axios"

    const GetWather = async (lati, long) => {
    
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=7424f6fe98101630b3edee58cf25df43&units=metric`
const req = await axios.get(URL);

return req
}

export default GetWather;