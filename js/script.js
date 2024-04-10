const citymap = {
  chicago: {
    center: {lat: 41.834712, lng: -87.626598},
    population: 100,
  },
};

var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.834875, lng: -87.628093},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    mapTypeControlOptions:{
    position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  });
  
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.15,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100,
    });
  }
  
  var infoWindow = new google.maps.InfoWindow({
      content: '<h3>Draggable Marker</h3><p>Welcome to Illinois Institute of Technology!!</p>'
    });
  
  var Marker = new google.maps.Marker({
      position: { lat: 41.834712, lng: -87.626598},map,
      animation: google.maps.Animation.BOUNCE,
      icon: 'media/images/desktopicon.png'
    });
  
  Marker.addListener('click', function() {
        infoWindow.open(map, Marker)
    });
}

window.initMap = initMap;
