function tieneTresDigitos(numero) {
    let numeroStr = numero.toString();
    
    return (numeroStr.length === 3) || (numeroStr.length === 4 && numeroStr[0] === '-');
}

let numero = prompt("Ingrese un número:");

numero = Number(numero);

if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
} else {
    if (tieneTresDigitos(numero)) {
        alert("El número tiene tres dígitos.");
    } else {
        alert("El número no tiene tres dígitos.");
    }
}
