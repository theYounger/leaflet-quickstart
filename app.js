var tileOpts = {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 15,
    id: "mapbox.streets",
    accessToken: 'pk.eyJ1Ijoia3V5ZWhhcmEiLCJhIjoiY2l5bnZsbm5mMDAyNTRlbnpwbnpra2lwbyJ9.DmBIXGUHlZpZpU_MI8uMQQ',
}

var mymap = L.map("mapid").setView([36, -97], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', tileOpts)
    .addTo(mymap);
