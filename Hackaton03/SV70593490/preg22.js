function sumaPrimerosNumeros(n) {
    if (n <= 0 || !Number.isInteger(n)) {
        return "Ingrese un número entero positivo.";
    }

    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}

let n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los primeros n números:"));
let resultado = sumaPrimerosNumeros(n);

console.log(`La suma de los primeros ${n} números es: ${resultado}`);