function calcularMediaNumerosPositivos() {
    let suma = 0;
    let contador = 0;

    while (true) {
        let numero = parseInt(prompt("Ingrese un número positivo (o un número negativo para terminar):"));

        if (numero < 0) {
            break;
        }

        suma += numero;
        contador++;
    }

    if (contador === 0) {
        return "No se ingresaron números positivos.";
    }

    let media = suma / contador;
    return `La media de los números positivos ingresados es: ${media}`;
}

let resultado = calcularMediaNumerosPositivos();
console.log(resultado);
