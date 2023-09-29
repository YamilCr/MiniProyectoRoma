// class Popups {
//     constructor(nombre, descripcion, direccion, localidad, provincia, contacto) {
//         this.popup = L.popup({keepInView:true,closeButton:false})
//         .setContent("<h1>" + nombre + "</h1><p>" + descripcion + "</p><h2>Direccion</h2><p>" + direccion + "</p><h2>Localidad</h2><p>" + localidad + "</p><h2>Provincia</h2><p>" + provincia + "</p><h2>Contacto</h2><p>" + contacto + "</p>");
//     }
// }

// // var map = L.map('map').setView([51.505, -0.09], 13);
// // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //     maxZoom: 19,
// //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// // }).addTo(map);

// // var marker = L.marker([50.4501, 30.5234],
// //     {alt: 'Kyiv'}).addTo(map) // "Kyiv" is the accessible name of this marker
// //     .bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!').addTo(marker);

// var popup = new Popups("Prueba", "desc", "dir 123", "local", "chubut", "1234567");

// document.getElementById('btnPrueba').addEventListener('click', function(e){
//     document.getElementById('popupPrueba').innerHTML=popup;
//     console.log(popup);
// })

/* eslint-disable no-undef */
/**
 * Simple map
 */

// config map
let config = {
    minZoom: 0,
    maxZoom: 18,
  };
// magnification with which the map will start
const zoom = 4;
// co-ordinates
const lat = -44.44;
const lng = -68.06;

// coordinate array with popup text
let points = [
    [-34.5419214203672, -58.4426215946441, "IAFE/CIMA/DCG/IIPA/DNGAAyEA/IGEBA/INQUIMAE/PNA"],
    [-38.0313568540783, -57.5322375431191, "INIDEP"],
    [-38.6658512007599, -62.2343722737833, "IADO"],
    [-40.6286873079791, -64.187055309402, "CIMAS"],
    [-42.6627066637157, -65.004170827596, "CESIMAR"],
    [-45.8254438633127, -67.4633783451962, "CIT - GOLFO SAN JORGE"],
    [-51.5330642603803, -69.248236391595, "CIT - SANTA CRUZ"],
    [-54.7426387444932, -68.3616337812203, "CADIC"],
    [-62.2377201064155, -58.6670725759177, "IAA BASE CARLINI"],
  ];

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map); 

// loop that adds many markers to the map
for (let i = 0; i < points.length; i++) {
    const [lat, lng, popupText] = points[i];
  
    marker = new L.marker([lat, lng]).bindPopup(popupText).addTo(map);
  }