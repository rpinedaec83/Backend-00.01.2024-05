
//1. Crea una función que retorne la suma de dos números.
const sumar = (numero1, numero2) => numero1 + numero2;

function r1ejercicio1() {
    let numero1 = solicitarNumero("Ingrese el primer número");
    

    let numero2 = solicitarNumero("Ingrese el segundo número");
    if (numero2 === null) return;

    alert(`La suma de los números es: ${sumar(numero1, numero2)} `);
}

//2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
function r1ejercicio2() {
    let base = solicitarNumero("Ingrese la base");
    if (base === null) return;

    let exponente = solicitarNumero("Ingrese el exponente");
    if (exponente === null) return;
    alert(`La potencia de ${base} elevado al exponente ${exponente} es: ${Math.pow(base, exponente)} `)
}

//3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
function sumOfCubes(...numeros) {
    return numeros.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}

function r1ejercicio3() {
    let numeros = [];
    while (true) {
        let numero = solicitarNumero("Ingrese un número:");
        if (numero === null) break;
        numeros.push(numero);

        let continuar = confirm("¿Quiere ingresar otro número?");
        if (!continuar) break;
    }

    let resultado = sumOfCubes(...numeros);
    alert(`La suma de los cubos de los números ingresados es: ${resultado}`);
}

//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
//triArea(3, 2) ➞ 3

const triArea = (base, altura) => (base * altura) / 2;

function r1ejercicio4() {
    let base = solicitarNumero("Ingrese la base del triángulo");
    if (base === null) return;

    let altura = solicitarNumero("Ingrese la altura del triángulo");
    if (altura === null) return;

    alert(`El área del triángulo es: ${triArea(base, altura).toFixed(2)} `);

}

//5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
//(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
const calculator = (numero1, operador, numero2) => {
    switch (operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case 'x':
            return numero1 * numero2;
        case '/':
            return numero1 / numero2;

        default:
            return "El parámetro no es reconocido";
    }
}

function r1ejercicio5() {
    let numero1 = solicitarNumero("Ingrese el primer número");
    if (numero1 === null) return;

    let numero2 = solicitarNumero("Ingrese el segundo número");
    if (numero2 === null) return;

    let operador
    while (true) {
        operador = prompt("Ingrese la operación matemática (+, -, x, /):");
        if (!["+", "-", "x", "/"].includes(operador)) {
            alert("Operación no válida");
        } else {
            break;
        }
    }

    alert(`El resultado de la operación ${numero1} ${operador} ${numero2} es: ${calculator(numero1, operador, numero2).toFixed(2)} `);
}

function solicitarNumero(mensaje) {
    while (true) {
        let numero = prompt(mensaje);
        if (numero === null) return null;

        if (!isNaN(numero)) {
            return parseInt(numero);
        } else {
            alert("Ingrese un valor válido");
        }
    }
}