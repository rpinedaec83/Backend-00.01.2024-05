function encontrarMayorYMenor() {
    let numeros = [];
    let cantidadNumeros = 20;

    for (let i = 0; i < cantidadNumeros; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(numero);
    }

    let mayor = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < cantidadNumeros; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    console.log(`El número mayor es: ${mayor}`);
    console.log(`El número menor es: ${menor}`);
}

encontrarMayorYMenor();
