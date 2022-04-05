

const GetCoord = ()  =>  {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success)
    }
    else {
        alert ('No se pudo acceder a la Geo localizacion')
    }
   
  
function success (geoLocationPosition) {
let latitude = geoLocationPosition.coords.latitude;
let longitude = geoLocationPosition.coords.longitude;
console.log(latitude)
console.log(longitude)
    
// return (latitude, longitude)


    }
  return(
      <h1>holaaa</h1>
  )
    // return (success())
    
}
    export default GetCoord;