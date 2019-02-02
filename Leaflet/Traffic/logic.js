// Create a map object
var map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [39.0997, -94.58],
    zoom: 12
});

MQ.trafficLayer().addTo(map);