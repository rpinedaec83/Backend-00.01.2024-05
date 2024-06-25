function terminaEnCuatro(numero) {
    let numeroStr = numero.toString();
    
    return numeroStr.charAt(numeroStr.length - 1) === '4';
}

let numero = prompt("Ingrese un número:");

numero = Number(numero);

if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    if (terminaEnCuatro(numero)) {
        console.log("El número termina en 4.");
    } else {
        console.log("El número no termina en 4.");
    }
}
