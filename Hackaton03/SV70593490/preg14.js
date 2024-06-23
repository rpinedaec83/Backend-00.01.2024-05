function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero === 2 || numero === 3) {
        return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

let numero = prompt("Ingrese un número entre 1 y 10 (excepto 9):");

numero = parseInt(numero);

if (!isNaN(numero) && numero >= 1 && numero <= 10 && numero !== 9) {
    if (esPrimo(numero)) {
        console.log(`El número ${numero} es primo.`);
    } else {
        console.log(`El número ${numero} no es primo.`);
    }
} else {
    console.log("Por favor, ingrese un número válido entre 1 y 10 (excepto 9).");
}
