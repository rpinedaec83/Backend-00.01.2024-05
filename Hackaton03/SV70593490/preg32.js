function ciudadConMasPoblacion() {
    let provincias = ['Provincia A', 'Provincia B', 'Provincia C'];
    let ciudades = ['Ciudad 1', 'Ciudad 2', 'Ciudad 3', 'Ciudad 4', 'Ciudad 5', 
                    'Ciudad 6', 'Ciudad 7', 'Ciudad 8', 'Ciudad 9', 'Ciudad 10', 'Ciudad 11'];
    let poblaciones = [];

    for (let ciudad of ciudades) {
        let poblacion = parseInt(prompt(`Ingrese la población de ${ciudad}:`));
        poblaciones.push({ ciudad: ciudad, poblacion: poblacion });
    }

    let ciudadMayorPoblacion = '';
    let maxPoblacion = -1;

    for (let poblacion of poblaciones) {
        if (poblacion.poblacion > maxPoblacion) {
            maxPoblacion = poblacion.poblacion;
            ciudadMayorPoblacion = poblacion.ciudad;
        }
    }

    console.log(`La ciudad con mayor población es ${ciudadMayorPoblacion} con ${maxPoblacion} habitantes.`);
}

ciudadConMasPoblacion();
