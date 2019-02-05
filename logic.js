// An array containing each bus stop location & name
var buses = [{
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
  location: [39.142, -94.698],
  name: "Leavenworth RD At 51st",
},
{
  location: [39.116, -94.665],
  name: "State Ave At 32nd",
},
{
  location: [39.115, -94.626],
  name: "Minnesota Ave At 7th",
},
{
  location: [39.113, -94.624],
  name: "Ann At 6th",
},
{
  location: [39.115402, -94.623961],
  name: "6th At Minnesota",
},
{
  location: [39.118362, -94.618684],
  name: "4th At Washington",
},
{
  location: [39.104825, -94.588241],
  name: "Broadway At 8th",
},
{
  location: [39.109611, -94.606704],
  name: "Woodswether At State",
},
{
  location: [39.116241, -94.79733],
  name: "State Ave At 94th",
},
{
  location: [39.12492, -94.828865],
  name: "Village West Pkwy At Sunflower",
},
{
  location: [39.114588, -94.621237],
  name: "Armstrong At 5th",
},
{
  location: [39.105501, -94.585218],
  name: "Wyandotte At 7th",
},
{
  location: [39.108894, -94.623922],
  name: "6th At Splitlog",
},
{
  location: [39.12317, -94.621339],
  name: "5th At Walker",
},
{
  location: [39.103804, -94.59824],
  name: "Forrester EB",
},
{
  location: [39.069728, -94.674726],
  name: "40th At Barber",
},
{
  location: [39.06607, -94.653814],
  name: "22nd At Douglass",
},
{
  location: [39.058606, -94.630629],
  name: "Southwest Blvd At Mill",
},
{
  location: [39.054793, -94.640562],
  name: "Merriam Ln & 12th",
},
{
  location: [39.073264, -94.660791],
  name: "Metropolitan At Joseph Segura",
},
{
  location: [39.139992, -94.65587],
  name: "2237 Quindaro",
},
{
  location: [39.132274, -94.668706],
  name: "34th At Haskell",
},
{
  location: [39.123889, -94.671953],
  name: "Wood At 3705 Wood",
},
{
  location: [39.127, -94.642955],
  name: "13th At Troup",
},
{
  location: [39.025707, -94.639602],
  name: "Roe At Johnson",
},
{
  location: [39.049184, -94.621198],
  name: "Mission At Seneca",
},
{
  location: [39.08155, -94.542978],
  name: "Indiana At 24th",
},
{
  location: [39.090986, -94.556347],
  name: "18th At Brooklyn",
},
{
  location: [39.0383, -94.540812],
  name: "Cleaver II Blvd At Cleavland",
},
{
  location: [39.099064, -94.518987],
  name: "Hardesty At Winner",
},
{
  location: [39.102248, -94.561795],
  name: "Marylou WMS At Highland",
},
{
  location: [39.104395, -94.508854],
  name: "Winner At Independence",
},
{
  location: [39.102401, -94.551385],
  name: "9th At Prospect",
},
{
  location: [39.102017, -94.57620],
  name: "10th At Cherry",
},
{
  location: [39.08581, -94.56367],
  name: "Vine At 22nd",
},
{
  location: [39.125774, -94.831945],
  name: "Stadium Dr At Village West",
},
{
  location: [39.094048, -94.533088],
  name: "Truman At Jackson",
},
{
  location: [39.1765522,-94.5005613],
  name: "World's of Fun Ave Main Entrance"
}
];

var busStops = [];

// Loop through the bust stops array and create one marker for each stop, bind a popup containing its name and add it to the map
for (var i = 0; i < buses.length; i++) {
   busStops.push(
  L.marker(buses[i].location).bindPopup("<h1>" + buses[i].name +"<h1>")
   );
}

// An array containing top 25 attractions location & name
var attractions = [
  {
  location: [39.0809, -94.5860],
  name: "WWI Museum",
  },
  {
    location: [39.1767, -94.4867],
    name: "World's of Fun",
  },
  {
    location: [39.0913, -94.5626],
    name: "Negro Leagues Baseball Museum",
  },
  {
    location: [39.0073, -94.5295],
    name: "Kansas City Zoo",
  },
  {
    location: [39.0418, -94.5916],
    name: "Country Club Plaza",
  },
  {
    location: [39.0760, -94.4135],
    name: "Leila's Hair Museum",
  },
  {
    location: [39.0916, -94.5627],
    name: "American Jazz Museum",
  },
  {
    location: [39.0450, -94.5809],
    name: "Nelson-Atkins Museum of Art",
  },
  {
    location: [39.0983, -94.5803],
    name: "College Basketball Experience",
  },
  {
    location: [39.1095, -94.5815],
    name: "Arabia Steamboat Museum",
  },
  {
    location: [339.0464, -94.5851],
    name: "Kemper Museum",
  },
  {
    location: [39.0308, -94.5821],
    name: "Nat'l Museum of Toys & Miniatures",
  },
  {
    location: [39.1025, -94.5839],
    name: "Kansas City Public Library",
  },
  {
    location: [39.0517, -94.4803],
    name: "Kauffman Stadium",
  },
  {
    location: [39.0810, -94.5816],
    name: "Crown Center",
  },
  {
    location: [39.0821, -94.5967],
    name: "Boulevard Brewing Company",
  },
  {
    location: [39.0942, -94.5877],
    name: "Kauffman Center for the Performing Arts",
  },
  {
    location: [39.0314, -94.5945],
    name: "Jacob L. Loose Park",
  },
  {
    location: [39.1187, -94.6004],
    name: "National Airline History Museum",
  },
  {
    location: [39.0168, -94.5924],
    name: "Wornall House Museum",
  },
  {
    location: [39.115789, -94.831061],
    name: "Kansas Speedway",
  },
  {
    location: [39.1207, -94.8030],
    name: "Schlitterbahn Waterpark",
  },
  {
    location: [39.0910, -94.4265],
    name: "Community of Christ Temple",
  },
  {
    location: [39.1205, -94.5488],
    name: "Knuckleheads Saloon",
  },
  {
    location: [39.1082, -94.5904],
    name: "Escape Room Kansas City",
  },
  {
    location: [39.0853, -94.5856],
    name: "Union Station",
  },
];

//create empty array for main attractions

var mainAttractions = [];

// Loop through the main attraction array and create one marker for each stop, bind a popup containing its name and add it to the map
for (var i = 0; i < attractions.length; i++) {
   mainAttractions.push(
  L.marker(attractions[i].location).bindPopup("<h1>" + attractions[i].name +"<h1>")
   );
}

// Add all the bus markers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var busLayer = L.layerGroup(busStops);

//same thing for main attractions
var attractionsLayer = L.layerGroup(mainAttractions);

// Define variables for our tile layers
var street = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});


var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  Street: street,
  Dark: dark
};

// Overlays that may be toggled on or off
var overlayMaps = {
  Buses: busLayer,
  Attractions: attractionsLayer
};
// Create a map object
var myMap = L.map("map", {
  center: [39.0997, -94.58],
  zoom: 13,
  layers: [street, busLayer]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);

// Connect a purple polygon from one end of street car route to other
L.polygon([
  [39.084143, -94.58388],
  [39.105393, -94.582982],
  [39.105430, -94.581680],
  [39.107330, -94.581338],
  [39.108521,-94.581658],
  [39.108773,-94.580468],
  [39.110330,-94.581004],
  [39.109615,-94.584592],
  [39.107970,-94.584102],
  [39.102241,-94.583200],
  [39.084158,-94.584441]
], {
  color: "purple",
  fillColor: "purple",
  fillOpacity: 0.75
}).addTo(myMap);

// Create a red circle over P&L
L.circle([39.0989, -94.5824], {
  color: "red",
  fillColor: "red",
  fillOpacity: 0.75,
  radius: 500
}).addTo(myMap);

// Create a red circle over River Market
L.circle([39.1101, -94.5818], {
  color: "red",
  fillColor: "red",
  fillOpacity: 0.75,
  radius: 500
}).addTo(myMap);

// Create a red circle over Country Club Plaza
L.circle([39.0418, -94.5916], {
  color: "red",
  fillColor: "red",
  fillOpacity: 0.75,
  radius: 500
}).addTo(myMap);

// Create a red circle over Zona Rosa
L.circle([39.2505, -94.6634], {
  color: "red",
  fillColor: "red",
  fillOpacity: 0.75,
  radius: 500
}).addTo(myMap);

// Create a red circle over Crossroads
L.circle([39.0930, -94.5857], {
  color: "red",
  fillColor: "red",
  fillOpacity: 0.75,
  radius: 500
}).addTo(myMap);

// Create a red circle over Westport
L.circle([39.0587, -94.5986], {
  color: "red",
  fillColor: "red",
  fillOpacity: 0.75,
  radius: 500
}).addTo(myMap);