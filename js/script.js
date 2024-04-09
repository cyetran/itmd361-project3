var map;
function initMap(){
  map = new Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 14
});
  
const marker = new AdvancedMarkerElement({
  map,
  position: { lat: 37.4239163, lng: -122.0947209 },
  });
}

initMap();
