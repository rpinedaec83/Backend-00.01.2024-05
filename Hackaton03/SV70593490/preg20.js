function operacionesConNumeros(num1, num2, num3, num4) {
    let cantidadPares = 0;
    let mayor = num1;

    if (num1 % 2 === 0) cantidadPares++;
    if (num2 % 2 === 0) cantidadPares++;
    if (num3 % 2 === 0) cantidadPares++;
    if (num4 % 2 === 0) cantidadPares++;

    if (num2 > mayor) mayor = num2;
    if (num3 > mayor) mayor = num3;
    if (num4 > mayor) mayor = num4;

    let resultado = "";

    if (num3 % 2 === 0) {
        let cuadradoSegundo = num2 * num2;
        resultado += `El cuadrado del segundo número es: ${cuadradoSegundo}\n`;
    }

    if (num1 < num4) {
        let media = (num1 + num2 + num3 + num4) / 4;
        resultado += `La media de los 4 números es: ${media}\n`;
    }

    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
        let sumaTotal = num1 + num2 + num3 + num4;
        resultado += `La suma de los 4 números es: ${sumaTotal}\n`;
    }

    resultado = `Cantidad de números pares: ${cantidadPares}\n` +
                `El mayor de los números es: ${mayor}\n` +
                resultado;

    return resultado;
}

let num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
let num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
let num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
let num4 = parseInt(prompt("Ingrese el cuarto número entero positivo:"));

let resultadoOperaciones = operacionesConNumeros(num1, num2, num3, num4);
console.log(resultadoOperaciones);
