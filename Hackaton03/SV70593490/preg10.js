function determinarParidad(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

function verificarNumeros() {
    let numeros = prompt("Ingrese números separados por coma (,):");

    let arrayNumeros = numeros.split(",").map(num => parseInt(num.trim(), 10));

    arrayNumeros.forEach(numero => {
        if (!isNaN(numero)) {
            let paridad = determinarParidad(numero);
            console.log(`El número ${numero} es ${paridad}.`);
        } else {
            console.log(`"${numero}" no es un número válido.`);
        }
    });
}

verificarNumeros();
