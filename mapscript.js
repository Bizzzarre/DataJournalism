mapboxgl.accessToken = 'pk.eyJ1IjoiaXJpbmEwNSIsImEiOiJjamh0aGR3c2EwZHRtM3BuNDF1dmhvcWFjIn0.4c44WtC0v__pCo2h9hNjag';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/irina05/cjhtile6ffpnc2sryrly8ri5f',
    logoPosition: 'bottom-left',
    center: [37.541938,55.808887],
    zoom: 11.66
});

function deflt() {
map.on('load', function () {
 
    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": "data.geojson"
        },
        "layout": {
            "icon-image": [ 'match',
                                ['get', 'station'],
                                'Aeroport', 'airport-15',
                                'Dinamo', 'star-15',
                                'Voykovskaya', 'triangle-15',
                                'marker-15'
                
                            ],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
    
map.on('click', 'points' ,function (e) {
    console.log(e.features[0]);
    if (e.features[0].properties["address"] != "None") {
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("<h3 style=\"margin:6px; color:rgba(245, 245, 245,1);\"> Цена: "+ e.features[0].properties['price'] + "</h3>\n"
            + "\n<p style=\"margin:6px;  color:rgba(235,235,235,1);\"> Комнаты: " + e.features[0].properties['rooms'] + "</p>"
        + "<p style=\"margin:6px;  color:rgba(235,235,235,1);\">" + "Площадь " + e.features[0].properties['area'] + "</p>"
        + "\n<p style=\"margin:6px; color:rgba(235, 235, 235, 1);\"> Расстояние до метро: " +  e.features[0].properties['distance'] + "</p>")
        .addTo(map);
    } else {
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("<h3 style=\"margin:6px;color:rgba(235,235,235,1);\">"
            + e.features[0].properties[address] + "</h3>\n" + "<p style=\"margin:6px;  color:rgba(235,235,235,1);\" > No information </p>")
        .addTo(map);
    }
});
});
}

map.on('mouseenter', 'points', function(e) {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'points', function(e) {
    map.getCanvas().style.cursor = '';
});


deflt();

function dst(from, to) {
     
    map.on('load', function () {
        if (map.getLayer('points') != undefined) {
            map.removeLayer('points');
        }
        map.addLayer({
            "id": "filtered",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": "data.geojson"
            },
            "layout": {
                "icon-image": 'circle-15',
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
            },
            'filter': ['all', ['<=', ['string', ['get', 'distance']], ['to-string', to]] , [">=", ['string', ['get', 'distance']], ['to-string', from]] ]
        })
    });
}


function cost(from, to) {
    map.on('load', function () {
        if (map.getLayer('points') != undefined) {
            map.removeLayer('points');
        }
        console.log('after');
        map.addLayer({
            "id": "filtered",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": "data.geojson"
            },
            "layout": {
                "icon-image": 'circle-15',
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
            },
            'filter': ['all', ['<=', ['string', ['get', 'price']], ['to-string', to]] , [">=", ['string', ['get', 'price']], ['to-string', from]] ]
        })
    });
}


function rms(name) {
    map.on('load', function () {
        if (map.getLayer('points') != undefined) {
            map.removeLayer('points');
        }
        map.addLayer({
            "id": "filtered",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": "data.geojson"
            },
            "layout": {
                "icon-image": 'circle-15',
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
            },
            'filter': ['==', ['string', ['get', 'rooms']], ['string', name]]
        })
    });
}

function area(from, to) {
    map.on('load', function () {
        if (map.getLayer('points') != undefined) {
            map.removeLayer('points');
        }
        map.addLayer({
            "id": "filtered",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": "data.geojson"
            },
            "layout": {
                "icon-image": 'circle-15',
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
            },
            'filter': ['all', ['<=', ['string', ['get', 'area']], ['to-string', to]] , [">=", ['string', ['get', 'area']], ['to-string', from]] ]
        })
    });
}


