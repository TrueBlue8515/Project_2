// Create a map object
var myMap = L.map("map", {
  center: [39.0997, -94.58],
  zoom: 4
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var busStops = [{
  location: [39.101832, -94.583153],
  name: "10th & Main",
},
{
  location: [39.100938, -94.586789],
  name: "11th At Central",
},
{
  location: [39.11, -94.67],
  name: "State At 38th",
},
{
  location: [39.142, -94.67],
  name: "Leavenworth RD a",
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < busStops.length; i++) {
  var stops = busStops[i];
  L.marker(stops.location)
    .bindPopup(stops.name)
    .addTo(myMap);
}
