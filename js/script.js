const citymap = {
  chicago: {
    center: { lat: 41.834875, lng: -87.628093},
    population: 100,
  },
};

var map;
async function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.834875, lng: -87.628093},
    zoom: 15,
    mapTypeId: "terrain",
  }
  );

  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100,
    });
  }
}

window.initMap = initMap;
