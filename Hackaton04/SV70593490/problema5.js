// Definición de la función calculator
function calculator(num1, operacion, num2) {
    switch (operacion) {
        case'+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        case '%':
            return num1 % num2;
        default:
            return "No es correcto";
    }
}
