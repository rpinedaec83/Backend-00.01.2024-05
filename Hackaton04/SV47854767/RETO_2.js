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



