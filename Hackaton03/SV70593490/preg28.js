function sumaPrimerosCienNumeros() {
    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    return suma;
}

let resultado = sumaPrimerosCienNumeros();
console.log(`La suma de los primeros cien números es: ${resultado}`);
