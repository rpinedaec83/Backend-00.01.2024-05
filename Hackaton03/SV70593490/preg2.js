function esNegativo(numero) {
    return numero < 0;
}

let numero = prompt("Ingrese un número entero:");

numero = Number(numero);

if (isNaN(numero)) {
    console.log("Por favor, ingrese un número entero válido.");
} else {
    if (esNegativo(numero)) {
        console.log("El número es negativo.");
    } else {
        console.log("El número no es negativo.");
    }
}
