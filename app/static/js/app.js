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
  
  // calling map
  const map = L.map("map", config).setView([lat, lng], zoom);
  
  // Used to load and display tile layers on the map
  // Most tile servers require attribution, which you can set under `Layer`
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);