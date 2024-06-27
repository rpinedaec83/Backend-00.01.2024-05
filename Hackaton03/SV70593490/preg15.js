function centimetrosAPulgadas(centimetros) {
    return centimetros / 2.54;
}

function librasAKilogramos(libras) {
    return libras * 0.453592;
}

function leerNumero(mensaje) {
    let numero = prompt(mensaje);
    numero = parseFloat(numero);
    if (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");
        return null;
    }
    return numero;
}

function mostrarConversiones(centimetros, libras) {
    let pulgadas = centimetrosAPulgadas(centimetros);
    let kilogramos = librasAKilogramos(libras);

    console.log(`${centimetros} centímetros equivalen a ${pulgadas.toFixed(2)} pulgadas.`);
    console.log(`${libras} libras equivalen a ${kilogramos.toFixed(2)} kilogramos.`);
}

let centimetros = leerNumero("Ingrese la longitud en centímetros:");
let libras = leerNumero("Ingrese el peso en libras:");

if (centimetros !== null && libras !== null) {
    mostrarConversiones(centimetros, libras);
}
