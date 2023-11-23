
let marker, map;

// Inicializar y agregar el mapa
function initMap() {
    // localizacion en ecuador
    const milocalizacion = { lat: -2.20061, lng: -79.91684 }
    // mapa centrado en ecuador
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: milocalizacion,
    });
    // The marker, posicion
    const marker = new google.maps.Marker({
      position: milocalizacion,
      map: map,
    })
    
  }
  
  function geoposicion() {
      if (navigator.geolocation) {
        const geoloc = navigator.geolocation
        const watchPos = geoloc.watchPosition(position =>{
            console.log(position.coords);
        },error =>console.error(error), {time: 60000})
        
      } else {
        alert("tu navegador no admite geolocalizacion")
      }
  }

  function centrarMapa(position) {
    const nuevaPos = {
        lat: watchPosition.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos);
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
  }
  function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error);
    
  }
