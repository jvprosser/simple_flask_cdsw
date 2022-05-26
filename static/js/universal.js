var map = L.map('map',{
  center:[40.75042,-73.98928],
  zoom:11
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker;
//map.on('click', function(e) {
//    if(marker)
//        map.removeLayer(marker);
//    console.log(e.latlng); // e is an event object (MouseEvent in this case)
//    marker = L.marker(e.latlng,{draggable:true}).addTo(map);
//});