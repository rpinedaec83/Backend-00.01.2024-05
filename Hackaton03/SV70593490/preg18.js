function calcularPrecioYGanancia(cantidad) {
    let precioUnitario;
    let gananciaPorcentaje = 8.25 / 100;

    if (cantidad >= 1 && cantidad <= 9) {
        precioUnitario = 10;
    } else if (cantidad >= 10 && cantidad <= 99) {
        precioUnitario = 8;
    } else if (cantidad >= 100 && cantidad <= 499) {
        precioUnitario = 7;
    } else if (cantidad >= 500) {
        precioUnitario = 6;
    } else {
        return "Cantidad inválida. Ingrese un número positivo.";
    }

    let precioTotal = cantidad * precioUnitario;

    let ganancia = precioTotal * gananciaPorcentaje;

    return {
        precioTotal: precioTotal,
        gananciaVendedor: ganancia
    };
}

let cantidadCDs = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));
let resultado = calcularPrecioYGanancia(cantidadCDs);

if (typeof resultado === 'string') {
    console.log(resultado);
} else {
    console.log(`Precio total para el cliente: $${resultado.precioTotal}`);
    console.log(`Ganancia para el vendedor: $${resultado.gananciaVendedor.toFixed(2)}`);
}
