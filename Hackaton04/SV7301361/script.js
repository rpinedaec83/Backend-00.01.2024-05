//   1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

// EL PROBLEMA:

// En este caso, definiremos una serie de problemas para resolverlos utilizando el lenguaje javascript, definiremos algoritmos por cada problema.

// 1. Crea una función que retorne la suma de dos números.

function ejercicio1(){
    let num1  = parseInt(prompt("Escribe el primer numero"));
    let num2  = parseInt(prompt("Escribe el segundo numero"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa solo números válidos.");
        return;
    }

    let suma= num1+num2;

    alert("La suma de ambos números es: " + suma)

}

// 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

function ejercicio2(){
    let num  = parseInt(prompt("Escribe el numero que desea potenciar"));
    let potencia  = parseInt(prompt("Escribe la potencia"));

    if (isNaN(num) || isNaN(potencia)) {
        alert("Por favor, ingresa solo números válidos.");
        return;
    }
    
    const elevarPotencia = (num, potencia) => Math.pow(num, potencia);

    alert(`El valor de la potencia de ${num} elevado a la ${potencia} es igual a ${elevarPotencia(num, potencia)}`);

}


// 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function ejercicio3() {
    let i = 1;
    let numbers = [];
    let num;

    do {
        num = parseInt(prompt(`Escribe el numero ${i} que deseas elevar al cubo, ingrese 0 para finalizar`));
        
        if (isNaN(num)) {
            alert("Por favor, ingresa solo números válidos.");
            continue;
        }
        
        if (num !== 0) {
            numbers.push(num);
            i++;
        }

    } while (num !== 0);

    let result = numbers.map(num => Math.pow(num, 3)); 

    result.forEach((value, index) => {
        alert(`El valor de la potencia de ${numbers[index]} elevado al cubo es igual a ${value}`);
    });
}


// 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
// triArea(3, 2) ➞ 3


function ejercicio4(){
    let base = parseInt(prompt("Escriba el valor de la base del triángulo"));
    let altura = parseInt(prompt("Escriba el valor de la altura del triángulo"));

    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor, ingresa solo números válidos.");
        return;
    }
    
    const triArea = (base, altura) => (base*altura)/2

    alert(`El área del triángulo es igual a ${triArea(base, altura)}`);

}

// 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
// (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

function ejercicio5() {
    let num1 = parseInt(prompt("Escriba el primer número"));
    let operador = prompt("Escriba la operación (+, -, /, x, %)");
    let num2 = parseInt(prompt("Escriba el segundo número"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa solo números válidos.");
        return;
    }

    const calculator = (num1, operador, num2) => {
        switch (operador) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "x":
                return num1 * num2;
            case "/":
                return num2 !== 0 ? num1 / num2 : "Error: División por cero";
            case "%":
                return num1 % num2;
            default:
                return "El parámetro no es reconocido";
        }
    };

    const resultado = calculator(num1, operador, num2);

    alert(`El resultado es: ${resultado}`);
}


// PREGUNTAS:

// -  ¿Cómo defines una función?
// Para definir una función en JavaScript, puedes utilizar la palabra clave function
// -  ¿Hasta cuantos argumentos puedes declarar en una función?

// Reto 2:

// - Ingresa al siguiente documento:
//     https://docs.google.com/document/d/1aJlprbfiKADx-IazY9MMaeB84gsUR-0engVPEkWipNc/edit
// - Define los algoritmos por cada ejercicio

//     Escribe los algoritmos en javascript


// 1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

function ejercicio6(){

    let nombre = prompt("Escriba su nombre");
    let apellido = prompt("Escriba su apellido");
    let edad = parseInt(prompt("Escriba su edad"));

const person = (nombre, apellido, edad) =>
  `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad} años`;

resultado = person(nombre, apellido, edad);
alert(`${resultado}`);

}
/* 2. Cree una función que tome números y devuelva la suma de sus cubos.
    sumOfCubes(1, 5, 9) ➞ 855
     Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
*/

function ejercicio7() {
    let i = 1;
    let numbers = [];
    let num;

    do {
        num = parseInt(prompt(`Escribe el número ${i} que deseas elevar al cubo, ingrese 0 para finalizar`));
        
        if (isNaN(num)) {
            alert("Por favor, ingresa solo números válidos.");
            continue;
        }
        
        if (num !== 0) {
            numbers.push(num);
            i++;
        }

    } while (num !== 0);

    const sumOfCubes = (numbers) => {
        return numbers.reduce((sum, num) => sum + Math.pow(num, 3), 0);
    };

    let resultado = sumOfCubes(numbers);

    alert(`La suma de los cubos es: ${resultado}`);
}


// 3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

function ejercicio8() {
    let valor = prompt("Ingrese alguna variable");

    const tipoDeValor = (valor) => {
        if (!isNaN(valor) && valor.trim() !== "") {
            return "number";
        }
        
        // Convertir "true" y "false" en booleanos
        if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
            return "boolean";
        }

        return typeof valor;
    };

    let tipo = tipoDeValor(valor);
    alert(`El tipo de valor ingresado es: ${tipo}`);
}

// 4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

function ejercicio10() {
    let valores = prompt("Ingrese los números a sumar separados por comas (por ejemplo: 1, 2, 3)");

    const sumarNumeros = (...numeros) => {
        return numeros.reduce((suma, num) => suma + num, 0);
    };

    let numerosArray = valores.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numerosArray.length === 0) {
        alert("Por favor, ingresa solo números válidos.");
        return;
    }

    let suma = sumarNumeros(...numerosArray);
    alert(`La suma de los números es: ${suma}`);
}


// 5. Crear una función que reciba un array de valores y filtre los valores que no son string

function ejercicio11() {
    let valores = prompt("Ingrese los valores separados por comas (por ejemplo: 1, hola, true, 42, mundo)");

    const filtrarStrings = (...valores) => {
        return valores.filter(valor => typeof valor === 'string');
    };

    let valoresArray = valores.split(',').map(valor => valor.trim());

    let resultado = filtrarStrings(...valoresArray);
    alert(`Los valores que son strings son: ${resultado.join(', ')}`);
}



// 6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function ejercicio12(){
    let input = prompt("Ingrese los numeros del array separados por coma (por ejemplo: 1,3,5,6)");

    let valueInput = input.split(',').map(valor => valor.trim());


    if (valueInput.length === 0) {
      return [];
    }
    
    let min = Math.min(...valueInput);
    let max = Math.max(...valueInput);
    alert(`El valor minimo del arreglo es ${min} y el valor maximo es ${max}`);

  }

// 7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

function ejercicio13() {
    let input = prompt("Ingrese un numero de telefono que tenga 10 digitos (Ejm: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0)");
  
    let numbers = input.split(',').map(num => parseInt(num.trim()));
  
    if (numbers.length != 10) {
      throw new Error("El array debe contener 10 numeros enteros");
    }
  
    let areaCode = numbers.slice(0, 3).join('');
    let firstPart = numbers.slice(3, 6).join('');
    let secondPart = numbers.slice(6).join('');
  
    let phoneNumber = `(${areaCode}) ${firstPart}-${secondPart}`;
  
    alert(`Número de teléfono formateado es ${phoneNumber}`);
  }
  
// 8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function ejercicio14() {
    let numMatrices = parseInt(prompt("Ingrese el número de matrices que evaluará:"));
    let matrices = [];

    for (let i = 0; i < numMatrices; i++) {
      let input = prompt(`Ingrese los números de la matriz ${i + 1} separados por comas (Ejm: 4, 2, 7, 1):`);
      let matriz = input.split(',').map(num => parseInt(num.trim()));
      matrices.push(matriz);
    }

    let findLargestNums = matrices.map(array => Math.max(...array));
    alert(`Los mayores números de cada matriz son: ${findLargestNums}`);
  }


// 9. Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞ [0, 8]
//  The first "c" has index 0, the last "c" has index 8.

function ejercicio15() {
    let input = prompt("Ingrese la palabra y el caracter para indicar el primer y el último índice. Ejm: hello, l ó circumlocution, c");

    if (!input || input.indexOf(',') === -1) {
        alert("Entrada no válida, siga el formato correcto. Ejm: hello, l");
        return;
    }

    let parts = input.split(',');
    let word = parts[0].trim();
    let char = parts[1].trim();

    if (word.length === 0 || char.length !== 1) {
        alert("Entrada no válida. Asegúrese de ingresar una palabra y un solo carácter.");
        return;
    }

    let firstIndex = word.indexOf(char);
    let lastIndex = word.lastIndexOf(char);

    if (firstIndex === -1) {
        alert(`El carácter '${char}' no se encuentra en la palabra '${word}'.`);
        return;
    }

    alert(`Los índices del carácter '${char}' en la palabra '${word}' son: [${firstIndex}, ${lastIndex}]`);
}


// 10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function ejercicio16() {

    const obj = { a: 1, b: 2, c: 3 };

    alert("Objeto original: " + JSON.stringify(obj));
  
    const entriesArray = Object.entries(obj);
  
    alert("Array modificado: " + JSON.stringify(entriesArray));
  
  }
  

// 11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700


function ejercicio17() {

    function getBudgets(arr) {
      alert("Matriz original (presupuestos): " + JSON.stringify(arr));
  
      const totalBudget = arr.reduce((sum, person) => sum + person.budget, 0);
  
      alert("Suma de presupuestos: " + totalBudget);
  
      return totalBudget;
    }
  
      const people = [
      { name: "John", age: 21, budget: 23000 },
      { name: "Steve", age: 32, budget: 40000 },
      { name: "Martin", age: 16, budget: 2700 }
    ];
    getBudgets(people);
  }

// 12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]

function ejercicio18(){
    function getStudentNames(array){
        alert("Matriz original (estudiantes): "+ JSON.stringify(array));
        const studentNames = array.map(student => student.name);
        alert("Nombres de estudiantes: " + JSON.stringify(studentNames));
        return studentNames;
    }

    const students = [
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
      ];
    getStudentNames(students);
}

  
// 13. Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function ejercicio19() {
    function objectToArray(obj) {
      alert("Objeto original: " + JSON.stringify(obj));
      const entriesArray = Object.entries(obj);
      alert("Array modificado: " + JSON.stringify(entriesArray));
      return entriesArray;
    }
      const exampleObj = {
      likes: 2,
      dislikes: 3,
      followers: 10
    };
    objectToArray(exampleObj);
  }
  

// 14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// // 1² + 2² + 3² =
// // 1 + 4 + 9 =
// // 14

function ejercicio20() {
    let num = parseInt(prompt("Ingrese el número 'n' para calcular la suma de todos los números cuadrados hasta el 'n': "));
    let sum = 0;
    if (isNaN(num)) {
        alert("Por favor, ingresa solo números válidos.");
        return;
    }

    for (let i = 1; i <= num; i++) {
      sum +=Math.pow(i,2)
    }

    alert(`La suma de todos los números cuadrados hasta el 'n' es: ${sum}`);
  }

//15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function ejercicio21() {
    function multiplyByLength(arr) {
      return arr.map(num => num * arr.length);
    }

    let input = prompt("Ingrese los valores de la matriz separados por comas (ejm: 2, 3, 1, 0):");
    let values = input.split(',').map(num => parseInt(num.trim()));
  
    if (values.some(isNaN)) {
      alert("Por favor, ingrese solo números válidos separados por comas.");
      return;
    }
    let result = multiplyByLength(values);
  
    alert(`La matriz resultante es: [${result.join(', ')}]`);
  }
  
  

// Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]


function ejercicio22() {
    let num = parseInt(prompt("Ingrese el número 'n' para hacer un contador del 0 hasta el número 'n': "));
    let array = [];

    if (isNaN(num)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    for (let i = 0; i <= num; i++) {
        array.push(i);
    }

    alert(`El contador hasta el número 'n' es: ${array.join(', ')}`);
}

// Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// // Smallest number is -50, biggest is 32.


function ejercicio23() {
    function diffMaxMin(arr) {
      let maxNum = Math.max(...arr);
      let minNum = Math.min(...arr);
      let difference = maxNum - minNum;

      alert(`El número más grande es ${maxNum}, el número más pequeño es ${minNum}. La diferencia es ${difference}.`);
      return difference;
    }
  
    let input = prompt("Ingrese los valores de la matriz separados por comas (ejm: 2, 3, 1, 0):");
    let values = input.split(',').map(num => parseInt(num.trim()));
  
    if (values.some(isNaN)) {
      alert("Por favor, ingrese solo números válidos separados por comas.");
      return;
    }
  
    diffMaxMin(values);
  }

// Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function ejercicio24() {
    function filterList(arr) {
      return arr.filter(item => Number.isInteger(item));
    }
  
    let input = prompt("Ingrese los valores de la matriz separados por comas (ejm: 2, 3, 1, 0, 'x', 'y', 10):");
    let values = input.split(',').map(item => {
      let trimmedItem = item.trim();
      return isNaN(trimmedItem) ? trimmedItem : parseInt(trimmedItem);
    });
  
    let filteredValues = filterList(values);
  
    alert(`La matriz filtrada que solo contiene enteros es: [${filteredValues.join(', ')}]`);
  }
  

// Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]


function ejercicio24() {
    function repeat(element, times) {
      let result = [];
      for (let i = 0; i < times; i++) {
        result.push(element);
      }
      return result;
    }
  
    let input = prompt("Ingrese el elemento y las veces que quiere repetir el elemento, debe tener el siguiente formato: 13,5");
    let [element, times] = input.split(',').map(item => item.trim());
  
    element = isNaN(element) ? element : parseInt(element);
    times = parseInt(times);
  
    if (isNaN(times) || times < 0) {
      alert("Por favor, ingrese un número válido de veces.");
      return;
    }
  
    let result = repeat(element, times);
  
    alert(`La matriz resultante es: [${result.join(', ')}]`);
  }


// Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

function ejercicio25() {
    // Extender el prototipo de cadena para incluir la función vreplace
    String.prototype.vreplace = function(vowel) {
      return this.replace(/[aeiou]/gi, vowel);
    }
  
    let inputString = prompt("Ingrese una cadena (ejm: apples and bananas):");
    let inputVowel = prompt("Ingrese una vocal para reemplazar las existentes en la cadena (ejm: u):");
  
    if (!/[aeiou]/i.test(inputVowel) || inputVowel.length !== 1) {
      alert("Por favor, ingrese una única vocal válida.");
      return;
    }
  
    let result = inputString.vreplace(inputVowel);
    alert(`La cadena resultante es: ${result}`);
  }

  
// Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

function ejercicio26() {
    function findNemo(sentence) {
      let words = sentence.split(' ');
      let position = words.indexOf("Nemo") + 1;
  
      if (position > 0) {
        return `¡Encontré a Nemo en la posición ${position}!`;
      } else {
        return "Nemo no se encontró en la cadena.";
      }
    }
  
    let input = prompt("Ingrese una cadena de palabras (ejm: I am finding Nemo !):");
    let result = findNemo(input);
  
    alert(result);
  }
  
  
// Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"

function ejercicio27() {
    function capLast(sentence) {
      let words = sentence.split(' ');
      let capitalizedWords = words.map(word => {
        if (word.length === 0) return word; 
        return word.slice(0, -1) + word.slice(-1).toUpperCase();
      });
      return capitalizedWords.join(' ');
    }
  
    let input = prompt("Ingrese una cadena de palabras (ejm: hello world):");
    let result = capLast(input);
  
    alert(result);
  }
  

// ### V. Solución del reto
// Para que el reto esté cumplido al 100%, se deben haber respondido las preguntas planteadas y se deben haber resuelto los ejercicios
// ### VI. Presentación del Reto
// El documento debe ser presentado de manera individual o grupal (según se coordine con el docente)
// El tiempo de cada presentación lo definirá el docente a cargo
// ### VII. Feedback
// El docente dará feedback a los estudiantes sobre los ejercicios realizados
  