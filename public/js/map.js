var map = L.map("map").setView([48.8582746, 2.3766474], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([48.8582746, 2.3766474]).addTo(map);
marker.bindPopup("<b>Ocoffee Shop</b><br>27 rue Popincourt,<br> Paris 75011<br><b>Venez nous retrouver sur place<b>").openPopup();
