// config map
let config = {
  minZoom: 1,
  maxZoom: 15,
};
// magnification with which the map will start
const zoom = 4;
// co-ordinates
const lat = -44.44;
const lng = -68.06;

const listInst = {
  IAFE: {
    titulo: 'IAFE',
    imagen:
      "https://lh3.googleusercontent.com/proxy/XzBXfZtFqgm2q5UA2yAk9xINnxwe6XVsZpyjJx7AiyXykpfBSiaGk331uWrzQ-djjjtcR6upTQH9IF5k6OukJFeuEOJLPf2CwWgIRBvFJlW25uKm54idfgF3dF32hm-8QkcQ33_G3c_RGkLR=s0-d",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
  },
};

const map = L.map("map", config).setView([lat, lng], zoom);

// calling map
var argenmap = new L.tileLayer(
  "https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png",
  {
    minZoom: 1,
    maxZoom: 20,
  }
).addTo(map);
//L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
// attribution:
// '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//}).addTo(map);

var pane = map.createPane("fixed", document.getElementById("map"));

// Coordenadas de los puertos
const createBodyPopup = (titulo,
  image,
  descripcion,
  direccion,
  localidad,
  provincia
) => {
  return `<div class="bodyPopup">
<h1 class="tituloPopup">${titulo}</h1>
<div class="contenedorImagenPopup">
    <img src="${image}" alt="" class="imagePopup">
</div>
<p class="informacionPopup">
<br><b>Descripción</b><br>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, eum odio. Porro blanditiis tempore laudantium autem reiciendis magnam. Ipsum perferendis nobis veniam! Alias, laborum officia. Perferendis eum exercitationem necessitatibus officiis?
${descripcion}<br>
 <b>Dirección</b><br>
 ${direccion} <br><br>
 <b>Localidad</b><br>
 ${localidad} <br><br>
 <b>Provincia</b><br>
 ${provincia}<br>
</p>
<div class="contendorBotonesPopup">
<button type="button" id="btnVer">Ver</button>
<button type="button" id="btnMapas">Mapas</button>
<button type="button" id="btnDatos">Datos</button>
</div>
</div>
`;
};
const points = [
  {
    lat: -34.5419214203672,
    lng: -58.4426215946441,
    text: `
     ${createBodyPopup(listInst.IAFE.titulo, listInst.IAFE.imagen)}`,
  },
  {
    lat: -38.0313568540783,
    lng: -57.5322375431191,
    text: "<h3>INIDEP</h3><br>Grab the lower right corner and reduce the width of the map.",
  },
  {
    lat: -38.6658512007599,
    lng: -62.2343722737833,
    text: "<h3>CIMAS</h3><br>Grab the lower right corner and reduce the width of the map.",
  },
  {
    lat: -42.6627066637157,
    lng: -65.004170827596,
    text: "<h3>CESIMAR</h3><br>Grab the lower right corner and reduce the width of the map.",
  },
  {
    lat: -45.8254438633127,
    lng: -67.4633783451962,
    text: "<h3>CIT - GOLFO SAN JORGE</h3><br>Grab the lower right corner and reduce the width of the map.",
  },
  {
    lat: -51.5330642603803,
    lng: -69.248236391595,
    text: "<h3>CIT - SANTA CRUZ</h3><br>Grab the lower right corner and reduce the width of the map.",
  },
  {
    lat: -54.7426387444932,
    lng: -68.3616337812203,
    text: "<h3>CADIC</h3><br>Grab the lower right corner and reduce the width of the map.",
  },
  {
    lat: -62.2377201064155,
    lng: -58.6670725759177,
    text: "<h3>, IAA BASE CARLINI</h3><br>Grab the lower right corner and reduce the width of the map.",
  },
];

// create new div icon width svg
const newIcon = L.divIcon({
  className: "marker",
  iconSize: [40, 40],
  iconAnchor: [12, 24],
  popupAnchor: [700, -16],
});

points.map(({ lat, lng, text }) => {
  // create marker and add to map
  const marker = L.marker([lat, lng], {
    // icon: newIcon,
  }).addTo(map);

  // create popup, set content
  const popup = L.popup({
    pane: "fixed",
    className: "popup-fixed test",
    autoPan: false,
  }).setContent(text);

  marker.bindPopup(popup).on("click", fitBoundsPadding);
});

// remove all animation class when popupclose
map.on("popupclose", function (e) {
  removeAllAnimationClassFromMap();
});

// ------------------------------------------------

const mediaQueryList = window.matchMedia("(min-width: 700px)");

mediaQueryList.addEventListener("change", (event) => onMediaQueryChange(event));

onMediaQueryChange(mediaQueryList);

function onMediaQueryChange(event) {
  if (event.matches) {
    document.documentElement.style.setProperty("--min-width", "true");
  } else {
    document.documentElement.style.removeProperty("--min-width");
  }
}

function fitBoundsPadding(e) {
  removeAllAnimationClassFromMap();
  // get with info div
  const boxInfoWith = document.querySelector(
    ".leaflet-popup-content-wrapper"
  ).offsetWidth;

  // add class to marker
  e.target._icon.classList.add("animation");

  // create a feature group, optionally given an initial set of layers
  const featureGroup = L.featureGroup([e.target]).addTo(map);

  // check if attribute exist
  const getPropertyWidth =
    document.documentElement.style.getPropertyValue("--min-width");

  // sets a map view that contains the given geographical bounds
  // with the maximum zoom level possible
   map.fitBounds(featureGroup.getBounds(), {
     paddingTopLeft: [getPropertyWidth ? -boxInfoWith : 0, 10],
   });
  
  document.querySelector(".leaflet-popup").style.position = "fixed";
}

function removeAllAnimationClassFromMap() {
  // get all animation class on map
  const animations = document.querySelectorAll(".animation");
  animations.forEach((animation) => {
    animation.classList.remove("animation");
  });

  // back to default position
  map.setView([lat, lng], zoom);
}
