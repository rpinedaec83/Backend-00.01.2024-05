function calcularTotalConDescuento(cantidadZapatos) {
    const precioPorZapato = 80;
    let total = cantidadZapatos * precioPorZapato;
    let descuento = 0;

    if (cantidadZapatos > 30) {
        descuento = 0.40;
    } else if (cantidadZapatos > 20) {
        descuento = 0.20;
    } else if (cantidadZapatos > 10) {
        descuento = 0.10;
    }

    let totalConDescuento = total - (total * descuento);
    return totalConDescuento;
}

let cantidadZapatos = prompt("Ingrese la cantidad de zapatos que desea comprar:");

cantidadZapatos = Number(cantidadZapatos);

if (isNaN(cantidadZapatos) || cantidadZapatos <= 0) {
    console.log("Por favor, ingrese una cantidad válida de zapatos.");
} else {
    let totalAPagar = calcularTotalConDescuento(cantidadZapatos);
    console.log("El total a pagar con el descuento aplicado es: $" + totalAPagar.toFixed(2));
}
