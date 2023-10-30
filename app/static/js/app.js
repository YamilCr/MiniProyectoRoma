// config map
let config = {
  minZoom: 1,
  maxZoom: 15,
};
// magnification with which the map will start
const zoom = 5;
// co-ordinates
const lat = -49.0;
const lng = -60.0;

const listInst = {
  IAFE: {
    titulo: "IAFE",
    imagen: "IAFE.jpg",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork: "",
  },
  INIDEP: {
    titulo: "INIDEP",
    imagen: "INIDEP.jpg",
    descripcion:
      "Instituto Nacional de Investigación y Desarrollo Pesquero. Asesoramos en el uso racional de los recursos sostenibles con el objetivo de preservar el ecosistema marino para las generaciones futuras.",
    direccion: "Paseo Victoria Ocampo Nº1, Escollera Norte",
    localidad: "Mar del Plata",
    provincia: "Pcia de Buenos Aires",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork: "",
  },
  IADO: {
    titulo: "IADO",
    imagen: "IADO.jpg",
    descripcion:
      "Instituto Argentino de Oceanografía.",
    direccion: "FLorida 800",
    localidad: "Bahia Blanca",
    provincia: "Pcia de Buenos Aires",
    web: "https://iado.conicet.gov.ar/",
    geonode: "",
    geonetwork: "",
  },
  CIMAS: {
    titulo: "CIMAS",
    imagen: "CIMAS.png",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork: "",
  },
  CESIMAR: {
    titulo: "CESIMAR",
    imagen: "CESIMAR.png",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork: "",
  },
  IIDEPYS: {
    titulo: "IIDEPyS",
    imagen: "IIDEPYS.png",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork: "",
  },
  CITSC: {
    titulo: "CIT - Santa Cruz",
    imagen: "CITSC.png",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork: "",
  },
  CADIC: {
    titulo: "CADIC",
    imagen: "CADIC.png",
    descripcion:
      "Centro Austral de Investigaciones Científicas del Consejo Nacional de Investigaciones Científicas y Técnicas.",
    direccion: "Bernardo Houssay 200",
    localidad: "Ushuaia",
    provincia: "Tierra del Fuego",
    web: "https://cadic.conicet.gov.ar/",
    geonode: "",
    geonetwork:
      "http://roma-geonetwork.iado-conicet.gob.ar/geonetwork/srv/spa/catalog.search#/metadata/6f3c176f-00bf-494a-8a1d-1c2da32f7292",
  },
  CARLINI: {
    titulo: "IAA BASE CARLINI",
    imagen: "CARLINI.jpeg",
    descripcion:
      "El Instituto Antártico Argentino (IAA) es un organismo científico tecnológico, orientado bajo normas políticas del Estado nacional. Fue creado el 17 de abril de 1951 por el Decreto del Poder Ejecutivo Nacional Nº 7338. Su fundador y primer director fue el entonces Coronel Hernán Pujato. Es integrante activo del Sistema Nacional de Ciencia y Tecnología del Estado Argentino, y es pionero a nivel internacional en el desarrollo de investigación antártica.",
    direccion: "25 de mayo 1143",
    localidad: "San Martín",
    provincia: "Provincia de Buenos Aires",
    web: "https://www.cancilleria.gob.ar/es/iniciativas/dna/instituto-antartico-argentino",
    geonode: "http://roma-geonode.iado-conicet.gob.ar/catalogue/#/dataset/1",
    geonetwork:
      "http://roma-geonetwork.iado-conicet.gob.ar/geonetwork/srv/spa/catalog.search#/metadata/95a36b1c-9453-46fd-b445-111df068de42",
  },
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
    <img src="http://127.0.0.1:5000/static/img/${nodo.imagen}" alt="" class="imagePopup">
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
<a href="${nodo.geonode}"><button type="button" id="btnMapas">Visualizaciones</button></a>
<a href="${nodo.geonetwork}"><button type="button" id="btnDatos">Datos Históricos</button></a>
</div>
<div class="contendorBotonesPopup">

<div class="checkbox-wrapper-1">
  <input id="idGraficar" class="substituted" type="checkbox" aria-hidden="true" />
  <label for="idGraficar">Graficar</label>
</div>

</div>
<figure class="highcharts-figure ocultar">
    <div id="containerTemperatura"></div>
    <div id="containerSalinidad"></div>
    <div id="containerClorofila"></div>
</figure>
`;
};
const points = [
  {
    lat: -34.5608847,
    lng: -58.398997,
    text: `${createBodyPopup(listInst.IAFE)}`,
  },
  {
    lat: -38.0313568540783,
    lng: -57.5322375431191,
    text: `${createBodyPopup(listInst.INIDEP)}`,
  },
  {
    lat: -39.1477229,
    lng: -61.7234479,
    text: `${createBodyPopup(listInst.IADO)}`,
  },
  {
    lat: -41.697547101624025, 
    lng: -65.00690462220645,
    text: `${createBodyPopup(listInst.CIMAS)}`,
  },
  {
    lat: -42.73530287828471, 
    lng: -65.01912318222848,
    text: `${createBodyPopup(listInst.CESIMAR)}`,
  },
  {
    lat: -45.748891826180454, 
    lng: -67.36826705128189,
    text: `${createBodyPopup(listInst.IIDEPYS)}`,
  },
  {
    lat: -51.61110815930979, 
    lng: -69.21991599498516,
    text: `${createBodyPopup(listInst.CITSC)}`,
  },
  {
    lat: -54.8623557850555, 
    lng: -68.48162250527832,
    text: `${createBodyPopup(listInst.CADIC)}`,
  },
  {
    lat: -62.23777004636486, 
    lng: -58.66825021710155,
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

map.on("popupopen", function (e) {
  document.getElementById("idGraficar").addEventListener("change", () => {
    document.querySelector(".highcharts-figure").classList.toggle("ocultar");
  });
  Highcharts.chart("containerTemperatura", {
    title: {
      text: "Temperatura",
      align: "center",
    },

    yAxis: {
      title: {
        text: "Temperatura",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2020",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: "Installation & Developers",
        data: [
          43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
          161454, 154610,
        ],
      },
      {
        name: "Manufacturing",
        data: [
          24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243,
          31050,
        ],
      },
      {
        name: "Sales & Distribution",
        data: [
          11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213,
          25663,
        ],
      },
      {
        name: "Operations & Maintenance",
        data: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          11164,
          11218,
          10077,
        ],
      },
      {
        name: "Other",
        data: [
          21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906,
          10073,
        ],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
  Highcharts.chart("containerSalinidad", {
    chart: {
      type: "spline",
    },
    title: {
      text: "Salinidad",
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        // don't display the year
        month: "%e. %b",
        year: "%b",
      },
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Snow depth (m)",
      },
      min: 0,
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br>",
      pointFormat: "{point.x:%e. %b}: {point.y:.2f} m",
    },

    plotOptions: {
      series: {
        marker: {
          enabled: true,
          radius: 2.5,
        },
      },
    },

    colors: ["#6CF", "#39F", "#06C", "#036", "#000"],

    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis. Note that in JavaScript, months start
    // at 0 for January, 1 for February etc.
    series: [
      {
        name: "Winter 2019-2020",
        data: [
          [Date.UTC(1970, 9, 24), 0],
          [Date.UTC(1970, 9, 27), 0.12],
          [Date.UTC(1970, 9, 30), 0.09],
          [Date.UTC(1970, 10, 3), 0.13],
          [Date.UTC(1970, 10, 6), 0.12],
          [Date.UTC(1970, 10, 9), 0.13],
          [Date.UTC(1970, 10, 12), 0.13],
          [Date.UTC(1970, 10, 15), 0.16],
          [Date.UTC(1970, 10, 18), 0.19],
          [Date.UTC(1970, 10, 21), 0.25],
          [Date.UTC(1970, 10, 24), 0.26],
          [Date.UTC(1970, 10, 27), 0.24],
          [Date.UTC(1970, 10, 30), 0.25],
          [Date.UTC(1970, 11, 3), 0.26],
          [Date.UTC(1970, 11, 6), 0.36],
          [Date.UTC(1970, 11, 9), 0.43],
          [Date.UTC(1970, 11, 12), 0.32],
          [Date.UTC(1970, 11, 15), 0.48],
          [Date.UTC(1970, 11, 18), 0.5],
          [Date.UTC(1970, 11, 21), 0.44],
          [Date.UTC(1970, 11, 24), 0.43],
          [Date.UTC(1970, 11, 27), 0.45],
          [Date.UTC(1970, 11, 30), 0.4],
          [Date.UTC(1971, 0, 3), 0.39],
          [Date.UTC(1971, 0, 6), 0.56],
          [Date.UTC(1971, 0, 9), 0.57],
          [Date.UTC(1971, 0, 12), 0.68],
          [Date.UTC(1971, 0, 15), 0.93],
          [Date.UTC(1971, 0, 18), 1.11],
          [Date.UTC(1971, 0, 21), 1.01],
          [Date.UTC(1971, 0, 24), 0.99],
          [Date.UTC(1971, 0, 27), 1.17],
          [Date.UTC(1971, 0, 30), 1.24],
          [Date.UTC(1971, 1, 3), 1.41],
          [Date.UTC(1971, 1, 6), 1.47],
          [Date.UTC(1971, 1, 9), 1.4],
          [Date.UTC(1971, 1, 12), 1.92],
          [Date.UTC(1971, 1, 15), 2.03],
          [Date.UTC(1971, 1, 18), 2.46],
          [Date.UTC(1971, 1, 21), 2.53],
          [Date.UTC(1971, 1, 24), 2.73],
          [Date.UTC(1971, 1, 27), 2.67],
          [Date.UTC(1971, 2, 3), 2.65],
          [Date.UTC(1971, 2, 6), 2.62],
          [Date.UTC(1971, 2, 9), 2.79],
          [Date.UTC(1971, 2, 13), 2.93],
          [Date.UTC(1971, 2, 20), 3.09],
          [Date.UTC(1971, 2, 27), 2.76],
          [Date.UTC(1971, 2, 30), 2.73],
          [Date.UTC(1971, 3, 4), 2.9],
          [Date.UTC(1971, 3, 9), 2.77],
          [Date.UTC(1971, 3, 12), 2.78],
          [Date.UTC(1971, 3, 15), 2.76],
          [Date.UTC(1971, 3, 18), 2.76],
          [Date.UTC(1971, 3, 21), 2.7],
          [Date.UTC(1971, 3, 24), 2.61],
          [Date.UTC(1971, 3, 27), 2.52],
          [Date.UTC(1971, 3, 30), 2.53],
          [Date.UTC(1971, 4, 3), 2.55],
          [Date.UTC(1971, 4, 6), 2.52],
          [Date.UTC(1971, 4, 9), 2.44],
          [Date.UTC(1971, 4, 12), 2.43],
          [Date.UTC(1971, 4, 15), 2.43],
          [Date.UTC(1971, 4, 18), 2.48],
          [Date.UTC(1971, 4, 21), 2.41],
          [Date.UTC(1971, 4, 24), 2.16],
          [Date.UTC(1971, 4, 27), 2.01],
          [Date.UTC(1971, 4, 30), 1.88],
          [Date.UTC(1971, 5, 2), 1.62],
          [Date.UTC(1971, 5, 6), 1.43],
          [Date.UTC(1971, 5, 9), 1.3],
          [Date.UTC(1971, 5, 12), 1.11],
          [Date.UTC(1971, 5, 15), 0.84],
          [Date.UTC(1971, 5, 18), 0.54],
          [Date.UTC(1971, 5, 21), 0.19],
          [Date.UTC(1971, 5, 23), 0],
        ],
      },
      {
        name: "Winter 2020-2021",
        data: [
          [Date.UTC(1970, 10, 14), 0],
          [Date.UTC(1970, 11, 6), 0.35],
          [Date.UTC(1970, 11, 13), 0.35],
          [Date.UTC(1970, 11, 20), 0.33],
          [Date.UTC(1970, 11, 30), 0.53],
          [Date.UTC(1971, 0, 13), 0.62],
          [Date.UTC(1971, 0, 20), 0.6],
          [Date.UTC(1971, 1, 2), 0.69],
          [Date.UTC(1971, 1, 18), 0.67],
          [Date.UTC(1971, 1, 21), 0.65],
          [Date.UTC(1971, 1, 24), 0.66],
          [Date.UTC(1971, 1, 27), 0.66],
          [Date.UTC(1971, 2, 3), 0.61],
          [Date.UTC(1971, 2, 6), 0.6],
          [Date.UTC(1971, 2, 9), 0.69],
          [Date.UTC(1971, 2, 12), 0.66],
          [Date.UTC(1971, 2, 15), 0.75],
          [Date.UTC(1971, 2, 18), 0.76],
          [Date.UTC(1971, 2, 21), 0.75],
          [Date.UTC(1971, 2, 24), 0.69],
          [Date.UTC(1971, 2, 27), 0.82],
          [Date.UTC(1971, 2, 30), 0.86],
          [Date.UTC(1971, 3, 3), 0.81],
          [Date.UTC(1971, 3, 6), 1],
          [Date.UTC(1971, 3, 9), 1.15],
          [Date.UTC(1971, 3, 10), 1.35],
          [Date.UTC(1971, 3, 12), 1.26],
          [Date.UTC(1971, 3, 15), 1.18],
          [Date.UTC(1971, 3, 18), 1.14],
          [Date.UTC(1971, 3, 21), 1.04],
          [Date.UTC(1971, 3, 24), 1.06],
          [Date.UTC(1971, 3, 27), 1.05],
          [Date.UTC(1971, 3, 30), 1.03],
          [Date.UTC(1971, 4, 3), 1.01],
          [Date.UTC(1971, 4, 6), 0.98],
          [Date.UTC(1971, 4, 9), 0.94],
          [Date.UTC(1971, 4, 12), 0.8],
          [Date.UTC(1971, 4, 15), 0.61],
          [Date.UTC(1971, 4, 18), 0.43],
          [Date.UTC(1971, 4, 21), 0.29],
          [Date.UTC(1971, 4, 24), 0.1],
          [Date.UTC(1971, 4, 26), 0],
        ],
      },
      {
        name: "Winter 2021-2022",
        data: [
          [Date.UTC(1970, 10, 5), 0],
          [Date.UTC(1970, 10, 12), 0.1],
          [Date.UTC(1970, 10, 21), 0.15],
          [Date.UTC(1970, 10, 22), 0.19],
          [Date.UTC(1970, 10, 27), 0.17],
          [Date.UTC(1970, 10, 30), 0.27],
          [Date.UTC(1970, 11, 2), 0.25],
          [Date.UTC(1970, 11, 4), 0.27],
          [Date.UTC(1970, 11, 5), 0.26],
          [Date.UTC(1970, 11, 6), 0.25],
          [Date.UTC(1970, 11, 7), 0.26],
          [Date.UTC(1970, 11, 8), 0.26],
          [Date.UTC(1970, 11, 9), 0.25],
          [Date.UTC(1970, 11, 10), 0.25],
          [Date.UTC(1970, 11, 11), 0.25],
          [Date.UTC(1970, 11, 12), 0.26],
          [Date.UTC(1970, 11, 22), 0.22],
          [Date.UTC(1970, 11, 23), 0.22],
          [Date.UTC(1970, 11, 24), 0.22],
          [Date.UTC(1970, 11, 25), 0.24],
          [Date.UTC(1970, 11, 26), 0.24],
          [Date.UTC(1970, 11, 27), 0.24],
          [Date.UTC(1970, 11, 28), 0.24],
          [Date.UTC(1970, 11, 29), 0.24],
          [Date.UTC(1970, 11, 30), 0.22],
          [Date.UTC(1970, 11, 31), 0.18],
          [Date.UTC(1971, 0, 1), 0.17],
          [Date.UTC(1971, 0, 2), 0.23],
          [Date.UTC(1971, 0, 9), 0.5],
          [Date.UTC(1971, 0, 10), 0.5],
          [Date.UTC(1971, 0, 11), 0.53],
          [Date.UTC(1971, 0, 12), 0.48],
          [Date.UTC(1971, 0, 13), 0.4],
          [Date.UTC(1971, 0, 17), 0.36],
          [Date.UTC(1971, 0, 22), 0.69],
          [Date.UTC(1971, 0, 23), 0.62],
          [Date.UTC(1971, 0, 29), 0.72],
          [Date.UTC(1971, 1, 2), 0.95],
          [Date.UTC(1971, 1, 10), 1.73],
          [Date.UTC(1971, 1, 15), 1.76],
          [Date.UTC(1971, 1, 26), 2.18],
          [Date.UTC(1971, 2, 2), 2.22],
          [Date.UTC(1971, 2, 6), 2.13],
          [Date.UTC(1971, 2, 8), 2.11],
          [Date.UTC(1971, 2, 9), 2.12],
          [Date.UTC(1971, 2, 10), 2.11],
          [Date.UTC(1971, 2, 11), 2.09],
          [Date.UTC(1971, 2, 12), 2.08],
          [Date.UTC(1971, 2, 13), 2.08],
          [Date.UTC(1971, 2, 14), 2.07],
          [Date.UTC(1971, 2, 15), 2.08],
          [Date.UTC(1971, 2, 17), 2.12],
          [Date.UTC(1971, 2, 18), 2.19],
          [Date.UTC(1971, 2, 21), 2.11],
          [Date.UTC(1971, 2, 24), 2.1],
          [Date.UTC(1971, 2, 27), 1.89],
          [Date.UTC(1971, 2, 30), 1.92],
          [Date.UTC(1971, 3, 3), 1.9],
          [Date.UTC(1971, 3, 6), 1.95],
          [Date.UTC(1971, 3, 9), 1.94],
          [Date.UTC(1971, 3, 12), 2],
          [Date.UTC(1971, 3, 15), 1.9],
          [Date.UTC(1971, 3, 18), 1.84],
          [Date.UTC(1971, 3, 21), 1.75],
          [Date.UTC(1971, 3, 24), 1.69],
          [Date.UTC(1971, 3, 27), 1.64],
          [Date.UTC(1971, 3, 30), 1.64],
          [Date.UTC(1971, 4, 3), 1.58],
          [Date.UTC(1971, 4, 6), 1.52],
          [Date.UTC(1971, 4, 9), 1.43],
          [Date.UTC(1971, 4, 12), 1.42],
          [Date.UTC(1971, 4, 15), 1.37],
          [Date.UTC(1971, 4, 18), 1.26],
          [Date.UTC(1971, 4, 21), 1.11],
          [Date.UTC(1971, 4, 24), 0.92],
          [Date.UTC(1971, 4, 27), 0.75],
          [Date.UTC(1971, 4, 30), 0.55],
          [Date.UTC(1971, 5, 3), 0.35],
          [Date.UTC(1971, 5, 6), 0.21],
          [Date.UTC(1971, 5, 9), 0],
        ],
      },
    ],
  });
  Highcharts.chart("containerClorofila", {
    chart: {
      type: "spline",
    },
    title: {
      text: "Clorofila",
    },
    // subtitle: {
    //     text: 'Source: ' +
    //         '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
    //         'target="_blank">Wikipedia.com</a>'
    // },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      accessibility: {
        description: "Months of the year",
      },
    },
    yAxis: {
      title: {
        text: "Temperature",
      },
      labels: {
        format: "{value}°",
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: "#666666",
          lineWidth: 1,
        },
      },
    },
    series: [
      {
        name: "Tokyo",
        marker: {
          symbol: "square",
        },
        data: [
          5.2,
          5.7,
          8.7,
          13.9,
          18.2,
          21.4,
          25.0,
          {
            y: 26.4,
            marker: {
              symbol:
                "url(https://www.highcharts.com/samples/graphics/sun.png)",
            },
            accessibility: {
              description:
                "Sunny symbol, this is the warmest point in the chart.",
            },
          },
          22.8,
          17.5,
          12.1,
          7.6,
        ],
      },
      {
        name: "Bergen",
        marker: {
          symbol: "diamond",
        },
        data: [
          {
            y: 1.5,
            marker: {
              symbol:
                "url(https://www.highcharts.com/samples/graphics/snow.png)",
            },
            accessibility: {
              description:
                "Snowy symbol, this is the coldest point in the chart.",
            },
          },
          1.6,
          3.3,
          5.9,
          10.5,
          13.5,
          14.5,
          14.4,
          11.5,
          8.7,
          4.7,
          2.6,
        ],
      },
    ],
  });
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
//
