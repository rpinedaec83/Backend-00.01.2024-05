function sumaImparesHastaN(n) {
    if (n <= 0 || !Number.isInteger(n)) {
        return "Ingrese un número entero positivo.";
    }

    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
        suma += i;
    }
    return suma;
}

let n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los números impares hasta n:"));
let resultado = sumaImparesHastaN(n);

console.log(`La suma de los números impares menores o iguales a ${n} es: ${resultado}`);
