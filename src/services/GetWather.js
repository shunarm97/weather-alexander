import axios from "axios"
// import GetCoords from "./GetCoords";


 

    const GetWather = async () => {

        // console.log(cord)
// const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${<GetCoords/>}&lon=${GetCoords[1]}&appid=7424f6fe98101630b3edee58cf25df43&units=metric`
const URL ='https://api.openweathermap.org/data/2.5/weather?lat=-0.22302968597101966&lon=-79.15707207207741&appid=7424f6fe98101630b3edee58cf25df43&units=metric'
const req = await axios.get(URL);
// console.log(req)

return req
}

export default GetWather;