function copiarClave() {
    // Seleccionamos el elemento que contiene el texto
    var elemento = document.getElementById("clave");
    // Creamos un objeto de selección y un rango
    var rango = document.createRange();
    rango.selectNodeContents(elemento);
    // Limpiamos cualquier selección anterior
    var seleccion = window.getSelection();
    seleccion.removeAllRanges();
    // Añadimos el rango a la selección
    seleccion.addRange(rango);
    try {
        // Intentamos copiar el texto al portapapeles
        var exito = document.execCommand('copy');
        if (exito) {
            console.log("clave copiado al portapapeles. " + elemento.textContent);
        } else {
            console.log("No se pudo copiar el texto.");
        }
    } catch (err) {
        console.log("Hubo un error al intentar copiar el texto.");
    }
    // Limpiamos la selección
    seleccion.removeAllRanges();
}
function copiarNumero() {
    // Seleccionamos el elemento que contiene el texto
    var elemento = document.getElementById("numero");
    // Creamos un objeto de selección y un rango
    var rango = document.createRange();
    rango.selectNodeContents(elemento);
    // Limpiamos cualquier selección anterior
    var seleccion = window.getSelection();
    seleccion.removeAllRanges();
    // Añadimos el rango a la selección
    seleccion.addRange(rango);
    try {
        // Intentamos copiar el texto al portapapeles
        var exito = document.execCommand('copy');
        if (exito) {
            console.log("numero copiado al portapapeles. " + elemento.textContent);
        } else {
            console.log("No se pudo copiar el texto.");
        }
    } catch (err) {
        console.log("Hubo un error al intentar copiar el texto.");
    }
    // Limpiamos la selección
    seleccion.removeAllRanges();
}
function copiarTitular() {
    // Seleccionamos el elemento que contiene el texto
    var elemento = document.getElementById("titular");
    // Creamos un objeto de selección y un rango
    var rango = document.createRange();
    rango.selectNodeContents(elemento);
    // Limpiamos cualquier selección anterior
    var seleccion = window.getSelection();
    seleccion.removeAllRanges();
    // Añadimos el rango a la selección
    seleccion.addRange(rango);
    try {
        // Intentamos copiar el texto al portapapeles
        var exito = document.execCommand('copy');
        if (exito) {
            console.log("titular copiado al portapapeles. " + elemento.textContent);
        } else {
            console.log("No se pudo copiar el texto.");
        }
    } catch (err) {
        console.log("Hubo un error al intentar copiar el texto.");
    }
    // Limpiamos la selección
    seleccion.removeAllRanges();
}