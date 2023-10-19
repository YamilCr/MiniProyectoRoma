// config map
let config = {
  minZoom: 1,
  maxZoom: 15,
};
// magnification with which the map will start
const zoom = 5;
// co-ordinates
const lat = -49.00;
const lng = -60.00;

const listInst = {
  IAFE: {
    titulo: 'IAFE',
    imagen:
      "https://lh3.googleusercontent.com/proxy/XzBXfZtFqgm2q5UA2yAk9xINnxwe6XVsZpyjJx7AiyXykpfBSiaGk331uWrzQ-djjjtcR6upTQH9IF5k6OukJFeuEOJLPf2CwWgIRBvFJlW25uKm54idfgF3dF32hm-8QkcQ33_G3c_RGkLR=s0-d",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork:"",
  },
  INIDEP: {
    titulo: 'INIDEP',
    imagen:
      "https://jornadasdelmar2018.exactas.uba.ar/wp-content/uploads/2017/06/logo-inidep-completo-300x300.jpg",
    descripcion: "Instituto Nacional de Investigación y Desarrollo Pesquero. Asesoramos en el uso racional de los recursos sostenibles con el objetivo de preservar el ecosistema marino para las generaciones futuras.",
    direccion: "Paseo Victoria Ocampo Nº1, Escollera Norte",
    localidad: "Mar del Plata",
    provincia: "Pcia de Buenos Aires",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork:"",
  },
  CIMAS: {
    titulo: 'CIMAS',
    imagen:
      "https://cimas.conicet.gov.ar/wp-content/uploads/sites/195/2023/03/CIMAS-CONICET-COMAHUE-web.png",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork:"",
  },
  CESIMAR: {
    titulo: 'CESIMAR',
    imagen:
      "https://cenpat.conicet.gov.ar/wp-content/uploads/sites/91/2021/01/logoCENPAT.png",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork:"",
  },
  IIDEPYS: {
    titulo: 'IIDEPyS',
    imagen:
      "https://lh3.googleusercontent.com/proxy/XzBXfZtFqgm2q5UA2yAk9xINnxwe6XVsZpyjJx7AiyXykpfBSiaGk331uWrzQ-djjjtcR6upTQH9IF5k6OukJFeuEOJLPf2CwWgIRBvFJlW25uKm54idfgF3dF32hm-8QkcQ33_G3c_RGkLR=s0-d",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork:"",
  },
  CITSC: {
    titulo: 'CIT - Santa Cruz',
    imagen:
      "https://www.unpa.edu.ar/sites/default/files/pagina_adjuntos/logo.png",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork:"",
  },
  CADIC: {
    titulo: 'CADIC',
    imagen:
      "https://cadic.conicet.gov.ar/wp-content/uploads/sites/19/2017/09/cadic_logo.png",
    descripcion: "Centro Austral de Investigaciones Científicas del Consejo Nacional de Investigaciones Científicas y Técnicas.",
    direccion: "Bernardo Houssay 200",
    localidad: "Ushuaia",
    provincia: "Tierra del Fuego",
    web: "https://cadic.conicet.gov.ar/",
    geonode: "",
    geonetwork:"http://roma-geonetwork.iado-conicet.gob.ar/geonetwork/srv/spa/catalog.search#/metadata/6f3c176f-00bf-494a-8a1d-1c2da32f7292",
  },
  CARLINI: {
    titulo: 'IAA BASE CARLINI',
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJWsPxUNt3hZl88XsD-bNZAhmYq3kb8fvqg&usqp=CAU",
    descripcion: "El Instituto Antártico Argentino (IAA) es un organismo científico tecnológico, orientado bajo normas políticas del Estado nacional. Fue creado el 17 de abril de 1951 por el Decreto del Poder Ejecutivo Nacional Nº 7338. Su fundador y primer director fue el entonces Coronel Hernán Pujato. Es integrante activo del Sistema Nacional de Ciencia y Tecnología del Estado Argentino, y es pionero a nivel internacional en el desarrollo de investigación antártica.",
    direccion: "25 de mayo 1143",
    localidad: "San Martín",
    provincia: "Provincia de Buenos Aires",
    web: "https://www.cancilleria.gob.ar/es/iniciativas/dna/instituto-antartico-argentino",
    geonode: "http://roma-geonode.iado-conicet.gob.ar/catalogue/#/dataset/1",
    geonetwork:"http://roma-geonetwork.iado-conicet.gob.ar/geonetwork/srv/spa/catalog.search#/metadata/95a36b1c-9453-46fd-b445-111df068de42",
  }

};

const map = L.map("map", config).setView([lat, lng], zoom);

// calling map
var argenmap = new L.tileLayer(
  "https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png",
  {
    minZoom: 1,
    maxZoom: 15,
  }
).addTo(map);

var pane = map.createPane("fixed", document.getElementById("map"));

// Coordenadas de los puertos
const createBodyPopup = (nodo) => {
  return `<div class="bodyPopup">
<h1 class="tituloPopup">${nodo.titulo}</h1>
<div class="contenedorImagenPopup">
    <img src="${nodo.imagen}" alt="" class="imagePopup">
</div>
<p class="informacionPopup">
<br><b>Descripción</b><br>
${nodo.descripcion}<br>
 <b>Dirección</b><br>
 ${nodo.direccion} <br><br>
 <b>Localidad</b><br>
 ${nodo.localidad} <br><br>
 <b>Provincia</b><br>
 ${nodo.provincia}<br>
</p>
<div class="contendorBotonesPopup">
<a href="${nodo.web}"><button type="button" id="btnVer">Web</button></a>
<a href="${nodo.geonode}"><button type="button" id="btnMapas">Geonode</button></a>
<a href="${nodo.geonetwork}"><button type="button" id="btnDatos">Geonetwork</button></a>
</div>
</div>
`;
};
const points = [
  {
    lat: -34.5419214203672,
    lng: -58.4426215946441,
    text: `${createBodyPopup(listInst.IAFE)}`,
  },
  {
    lat: -38.0313568540783,
    lng: -57.5322375431191,
    text: `${createBodyPopup(listInst.INIDEP)}`,
  },
  {
    lat: -38.6658512007599,
    lng: -62.2343722737833,
    text: `${createBodyPopup(listInst.CIMAS)}`,
  },
  {
    lat: -42.6627066637157,
    lng: -65.004170827596,
    text: `${createBodyPopup(listInst.CESIMAR)}`,
  },
  {
    lat: -45.8254438633127,
    lng: -67.4633783451962,
    text: `${createBodyPopup(listInst.IIDEPYS)}`,
  },
  {
    lat: -51.5330642603803,
    lng: -69.248236391595,
    text: `${createBodyPopup(listInst.CITSC)}`,
  },
  {
    lat: -54.7426387444932,
    lng: -68.3616337812203,
    text: `${createBodyPopup(listInst.CADIC)}`,
  },
  {
    lat: -62.2377201064155,
    lng: -58.6670725759177,
    text: `${createBodyPopup(listInst.CARLINI)}`,
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
