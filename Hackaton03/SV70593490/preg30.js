function sumaPrimerosCienNumeros() {
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    return suma;
}

let resultado = sumaPrimerosCienNumeros();
console.log(`La suma de los primeros cien números es: ${resultado}`);
