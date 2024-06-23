function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Los números son iguales";
    }
}

let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Por favor, ingrese números válidos.");
} else {
    let mayor = encontrarMayor(numero1, numero2);

    if (typeof mayor === 'number') {
        console.log("El número mayor es: " + mayor);
    } else {
        console.log(mayor);
    }
}
