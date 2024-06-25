function calcularMediaParesImpares() {
    let numerosIngresados = [];
    let numerosPares = [];
    let numerosImpares = [];

    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numerosIngresados.push(numero);

        if (numero % 2 === 0) {
            numerosPares.push(numero);
        } else {
            numerosImpares.push(numero);
        }
    }

    let mediaPares = calcularMedia(numerosPares);

    let mediaImpares = calcularMedia(numerosImpares);

    console.log(`Números ingresados: ${numerosIngresados.join(', ')}`);
    console.log(`Números pares: ${numerosPares.join(', ')}`);
    console.log(`Números impares: ${numerosImpares.join(', ')}`);
    console.log(`Media de los números pares: ${mediaPares}`);
    console.log(`Media de los números impares: ${mediaImpares}`);
}

function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return "No se ingresaron números en esta categoría.";
    }

    let suma = numeros.reduce((acc, curr) => acc + curr, 0);
    let media = suma / numeros.length;
    return media;
}

calcularMediaParesImpares();
