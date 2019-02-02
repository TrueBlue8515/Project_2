// Create a map object


var mapLayer = MQ.mapLayer(),
    map;
map = L.map('map', {
    layers: mapLayer,
    center: [39.0997, -94.58],
    zoom: 12
});
L.control.layers({
    'Map': mapLayer,
    'Hybrid': MQ.hybridLayer(),
    'Satellite': MQ.satelliteLayer(),
    'Dark': MQ.darkLayer(),
    'Light': MQ.lightLayer(),
}, {
        'Traffic Flow': MQ.trafficLayer({ layers: ['flow'] }),
        'Traffic Incidents': MQ.trafficLayer({ layers: ['incidents'] })
    }).addTo(map)