//Pregunta 1. Crea una función que retorne la suma de dos números.

function suma(a, b) {
    return a + b;
}

let resultado1 = suma(5, 5);
console.log(resultado1);


//Pregunta 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

let resultado2 = potencia(2, 3);
console.log(resultado2);


//Pregunta 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

function sumOfCubes(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + Math.pow(numero, 3), 0);
}

let resultado3 = sumOfCubes(1, 5, 9);
console.log(resultado3); 


//Pregunta 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3

function triArea(base, altura) {
    return (base * altura) / 2;
}

let resultado4 = triArea(3, 2);
console.log(resultado4); 



// Pregunta 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
//(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

function calculator(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case 'x':
        case '*':
            return num1 * num2;
        case '%':
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}

console.log(calculator(2, "/", 3)); 
console.log(calculator(4, "x", 2)); 


// 1. Pregunta ¿Cómo defines una función?

// Usando la palabra clave function -> function nombreFuncion ()

// Usando una variable -> let nombreFuncion = function ()

// Usando Arrow Function -> let nombreFuntion = () => { }

// Usando objeto -> const objeto = {nombreFuncion () { } }

// 2. Pregunta ¿Hasta cuantos argumentos puedes declarar en una función? 

// No hay limite, se puede declarar los argumentos que sean necesarios
