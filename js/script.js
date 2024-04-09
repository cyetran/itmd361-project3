var map
function initMap(){
  map = new Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 14
});
const marker = new AdvancedMarkerElement({
  map,
  position: accra,
    });
}

initMap();
window.addEventListener('load', init);
