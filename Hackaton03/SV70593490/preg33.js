function programaConUsuario() {
    let continuar = true;

    while (continuar) {
        console.log("¡Hola! Este es mi programa.");

        let respuesta = prompt("¿Desea continuar con el programa? (Ingrese 's' para sí, cualquier otra cosa para no)");

        if (respuesta.toLowerCase() !== 's') {
            continuar = false;
        }
    }

    console.log("Programa finalizado.");
}

programaConUsuario();
