function divisionRestasSucesivas(dividendo, divisor) {
    if (divisor === 0) {
        return "Error: división por cero.";
    }

    let cociente = 0;
    let resto = dividendo;

    // Restas sucesivas
    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    return {
        cociente: cociente,
        resto: resto
    };
}

let dividendo = parseInt(prompt("Ingrese el dividendo (número entero):"));
let divisor = parseInt(prompt("Ingrese el divisor (número entero distinto de cero):"));

let resultado = divisionRestasSucesivas(dividendo, divisor);

console.log(`Dividendo: ${dividendo}`);
console.log(`Divisor: ${divisor}`);
console.log(`Cociente: ${resultado.cociente}`);
console.log(`Resto: ${resultado.resto}`);
