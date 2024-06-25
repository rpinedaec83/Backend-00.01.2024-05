function sumaNumerosParesHasta1000() {
    let suma = 0;

    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }

    return suma;
}

let resultado = sumaNumerosParesHasta1000();
console.log(`La suma de todos los números pares hasta 1000 es: ${resultado}`);
