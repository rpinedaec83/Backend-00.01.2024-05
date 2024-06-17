function mcdEuclides(a, b) {
    // Caso base
    if (b === 0) {
        return a;
    } else {
        return mcdEuclides(b, a % b);
    }
}

function calcularMCD() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, ingrese números válidos.");
        return;
    }

    let mcd = mcdEuclides(numero1, numero2);

    // Mostrar el resultado
    console.log(`El M.C.D de ${numero1} y ${numero2} es: ${mcd}`);
}

calcularMCD();
