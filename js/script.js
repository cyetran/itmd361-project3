var map;
async function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 41.834875, lng: -87.628093},
  zoom: 14
  }
  );
}

initMap();
