// PREGUNTA 1
// Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado 
//“Hola mi nombre es sebastián yabiku y mi edad 33”

const saludo = (nombre, apellido, edad) => {
    return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
};

console.log(saludo("Allison", "Martinez", 31)); 

// PREGUNTA 2
// Cree una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sumOfCubes(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + Math.pow(numero, 3), 0);
}

let resultado3 = sumOfCubes(1, 5, 9);
console.log(resultado3); 


// PREGUNTA 3
// Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

function TipoDeValor(valor) {
    return typeof valor;
}

console.log(TipoDeValor("Allison"));


// PREGUNTA 4
// Crear una función que reciba n cantidad de argumentos y los sume (utilizar parametros rest)

function sumar(...numeros) {
    let suma = 0;
    
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}

console.log(sumar(25, 32, 69));


// PREGUNTA 5
// Crear una función que reciba un array de valores y filtre los valores que no son string

function filtrarNoStrings(array) {
    return array.filter(elemento => typeof elemento !== 'string');
}

let datos = [56, "Hola", true, "123", false, "ella"];
let noStrings = filtrarNoStrings(datos);
console.log(noStrings);



// PREGUNTA 6
// Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden. minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function minMax(numeros) {
    let minimo = Math.min(...numeros);
    let maximo = Math.max(...numeros);
    
    return [minimo, maximo];
}

console.log(minMax([1, 2, 3, 4, 5])); 



// PREGUNTA 7
// Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono. 
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

const formatPhoneNumber = (phoneNumber = []) => {
    [1, 2, 3, 4, 5];
    if (phoneNumber.length !== 10) {
      throw new Error(`La matriz debe contener 10 numeros enteros`);
    }
   
    const part1 = phoneNumber.slice(0, 3).join("");
    const part2 = phoneNumber.slice(3, 6).join("");
    const part3 = phoneNumber.slice(6, 10).join("");
   
    return `(${part1}) ${part2}-${part3}`;
  };
 
  try {
    const result = formatPhoneNumber([5,6,7,9,0,1,4,2,3,8]);
   
    console.log(result);
  } catch (err) {
    console.error("se presento un error: ", err.message);
  }



// PREGUNTA 8
// Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function findLargestNums(matrix) {
     return matrix.map(submatrix => Math.max(...submatrix));
}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));


// PREGUNTA 9
// Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
// charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

function charIndex(word, char) {
    let firstIndex = word.indexOf(char);
    let lastIndex = word.lastIndexOf(char);
    
    return [firstIndex, lastIndex];
}

console.log(charIndex("hello", "l"));
console.log(charIndex("circumlocution", "c"));


// PREGUNTA 10
// Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function toArray(obj) {
    return Object.entries(obj);
}

console.log(toArray({ a: 1, b: 2 }));

// PREGUNTA 11
// Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
// getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//   ]) ➞ 65700
  
function getBudgets(arr) {
    let totalBudget = 0;

    for (let i = 0; i < arr.length; i++) {
        totalBudget += arr[i].budget;
    }

    return totalBudget;
}

console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]));


// PREGUNTA 12
// Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
// getStudentNames([
//     { name: "Steve" },
//     { name: "Mike" },
//     { name: "John" }
//   ]) ➞ ["Becky", "John", "Steve"]
  
function getStudentNames(students) {
   return students.map(student => student.name);
}

console.log(getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]));

// PREGUNTA 13
//Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10
//   }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(obj) {
    return Object.entries(obj);
}

console.log(objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}));

// PREGUNTA 14
// Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados incluyendo n.
// squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

function squaresSum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }

    return sum;
}

console.log(squaresSum(3));


// PREGUNTA 15
// Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function multiplyByLength(arr) {
    let length = arr.length;
    let multipliedArray = [];

    for (let i = 0; i < arr.length; i++) {
        multipliedArray.push(arr[i] * length);
    }

    return multipliedArray;
}

console.log(multiplyByLength([2, 3, 1, 0]));



// PREGUNTA 16
// Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function countdown(num) {
    let result = [];

    for (let i = num; i >= 0; i--) {
        result.push(i);
    }

    return result;
}

console.log(countdown(8));


//PREGUNTA 17
// Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function diffMaxMin(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max - min;
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));



// PREGUNTA 18
// Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function filterList(arr) {
    return arr.filter(item => typeof item === 'number' && Number.isInteger(item));
}

console.log(filterList([1, 2, 3, "x", "y", 10]));



// PREGUNTA 19
// Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, 
// mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]


function repeat(elemento, veces) {
    let resultado = [];

    for (let i = 0; i < veces; i++) {
        resultado.push(elemento);
    }

    return resultado;
}

console.log(repeat(16, 7));



// PREGUNTA 20
// Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

String.prototype.vreplace = function(vowel) {
    let regex = /[aeiou]/gi;
    return this.replace(regex, vowel);
};

console.log("manzanas y sandias".vreplace("u"));



// PREGUNTA 21
// Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: 
//"¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"


function findNemo(sentence) {
    let words = sentence.split(' ');
    
    let nemoIndex = words.indexOf('Nemo');

    if (nemoIndex !== -1) {
        return `¡Encontré a Nemo en el ${nemoIndex + 1}!`;
    } else {
        return "No encontré a Nemo";
    }
}

console.log(findNemo("Buscando a Nemo!"));
console.log(findNemo("No estoy buscando!"));



// PREGUNTA 22
// Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"

function capLast(str) {
    let words = str.split(' ');

    let capitalizedWords = words.map(word => {
       if (word.length > 0) {
            let lastChar = word.slice(-1).toUpperCase();
            return word.slice(0, -1) + lastChar;
        } else {
            return word;
        }
    });

    return capitalizedWords.join(' ');
}

console.log(capLast("hola"));
console.log(capLast("allison"));

