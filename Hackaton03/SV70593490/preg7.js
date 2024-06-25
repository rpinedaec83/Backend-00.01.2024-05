function calcularTotalConDescuento(precioTotal, tipoMembresia) {
    let descuento = 0;

    switch (tipoMembresia.toUpperCase()) {
        case 'A':
            descuento = 0.10;
            break;
        case 'B':
            descuento = 0.15;
            break;
        case 'C':
            descuento = 0.20;
            break;
        default:
            console.log("Tipo de membresía no válida. No se aplicará descuento.");
            return precioTotal;
    }

    let totalConDescuento = precioTotal - (precioTotal * descuento);
    return totalConDescuento;
}

let precioTotal = prompt("Ingrese el precio total de la compra:");

precioTotal = Number(precioTotal);

let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):");

if (isNaN(precioTotal) || precioTotal < 0) {
    console.log("Por favor, ingrese un precio válido.");
} else {
    let totalAPagar = calcularTotalConDescuento(precioTotal, tipoMembresia);
    console.log("El total a pagar con el descuento aplicado es: $" + totalAPagar.toFixed(2));
}