function actualizar(){
const val = document.querySelector('input').value;

var resta =document.getElementById("cambiame").innerHTML;
document.getElementById("cambiame").innerHTML = resta-val;
}
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;