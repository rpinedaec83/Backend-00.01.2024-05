function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return "El factorial no está definido para números negativos ni para números no enteros.";
    }

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

let numero = parseInt(prompt("Ingrese un número para calcular su factorial de forma recursiva:"));
let resultado = factorial(numero);

console.log(`El factorial de ${numero} calculado de forma recursiva es: ${resultado}`);
