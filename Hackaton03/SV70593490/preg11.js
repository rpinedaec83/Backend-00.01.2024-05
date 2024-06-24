function encontrarMayor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");
let numero3 = prompt("Ingrese el tercer número:");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
numero3 = parseFloat(numero3);

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    console.log("Por favor, ingrese números válidos.");
} else {
    let mayor = encontrarMayor(numero1, numero2, numero3);
    console.log("El número mayor es: " + mayor);
}
