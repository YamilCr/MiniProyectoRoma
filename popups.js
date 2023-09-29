class Popups {
    constructor(nombre, descripcion, direccion, localidad, provincia, contacto) {
        this.popup = L.popup({keepInView:true,closeButton:false})
        .setContent("<h1>" + nombre + "</h1><p>" + descripcion + "</p><h2>Direccion</h2><p>" + direccion + "</p><h2>Localidad</h2><p>" + localidad + "</p><h2>Provincia</h2><p>" + provincia + "</p><h2>Contacto</h2><p>" + contacto + "</p>");
    }
}
