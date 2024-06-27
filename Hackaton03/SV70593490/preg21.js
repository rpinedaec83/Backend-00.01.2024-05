function calcularFactorialRecursivo(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calcularFactorialRecursivo(n - 1);
    }
}

function calcularFactorialIterativo(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));

let factorialRecursivo = calcularFactorialRecursivo(numero);
console.log(`Factorial usando recursión: El factorial de ${numero} es ${factorialRecursivo}`);

let factorialIterativo = calcularFactorialIterativo(numero);
console.log(`Factorial usando iteración: El factorial de ${numero} es ${factorialIterativo}`);
