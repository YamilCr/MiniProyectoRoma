var marker = L.marker([50.4501, 30.5234],
    {alt: 'Kyiv'}).addTo(map) // "Kyiv" is the accessible name of this marker
    .bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!').addTo(marker);