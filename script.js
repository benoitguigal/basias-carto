
var mymap = L.map('map').setView([48.609533, 2.473692], 10);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmVub2l0Z3VpZ2FsIiwiYSI6ImNqdThob2Y5MDA5Zmg0NG4wMHg4Ynl0MHgifQ.CpODeh1akjBOEIXye5JXcQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmVub2l0Z3VpZ2FsIiwiYSI6ImNqdThob2Y5MDA5Zmg0NG4wMHg4Ynl0MHgifQ.CpODeh1akjBOEIXye5JXcQ'
}).addTo(mymap);



Papa.parse("data/basias-essonne.csv", {
    download: true,
    header: true,
    complete: function(results) {
        results.data.forEach(function(record) {
            var marker = L.marker([record.latitude, record.longitude]).addTo(mymap)
            var label = record.raison_sociale + '\n' + record.adresse + '\n' + record.nom_commune;
            marker.bindPopup(label)
        })
    }
})