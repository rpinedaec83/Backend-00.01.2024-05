//1.Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado
//“Hola mi nombre es sebastián yabiku y mi edad 33”
function task_1() {
  let nombre = prompt("Ingrese nombre: ");
  let apellido = prompt("Ingrese apellido: ");
  let edad = prompt("Ingrese edad: ");

  const oracion = (nombre, apellido, edad) =>
    `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;

  console.log(oracion(nombre, apellido, edad));
}

//2.Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

/**
-num1
-num2
-num3
-Number: Convierte cualquier tipo de dato (cadena, booleano, null, undefined, etc.) a un número
 */

function task_2() {
  let num1 = Number(prompt("Ingrese el primero número: "));
  let num2 = Number(prompt("Ingrese el segundo número: "));
  let num3 = Number(prompt("Ingrese el tercer número: "));

  const sumCubes = (n1, n2, n3) => n1 ** 3 + n2 ** 3 + n3 ** 3;

  console.log(sumCubes(num1, num2, num3));
}

/**
 * 3.Crear una funcion que me retorne el tipo de valor entregado,
 *  invocar la función para los distintos tipos de js
 */

function task_3() {
  let dato = prompt("Ingrese un dato: ");

  const tipoDe = (gato) => typeof gato;

  console.log(tipoDe(dato));
}

/**
 * 4.Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
 * funcion con parametros REST
 */

function suma(...numeros) {
  let total = 0;

  for (let i of numeros) {
    total += i;
  }

  return total;
}
//console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//console.log(suma(10, 20, 30, 40, 50));

/**
 * 5.Crear una función que reciba un array de valores y filtre los valores que no son string
 */
function notStrings(datos) {
  for (let i of datos) {
    if (typeof i !== "string") {
      console.log(`El dato: ${i} no es un string`);
    }
  }
}
//notStrings([1, 2, "hola", 3, 0]);

/**
 * Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
  minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
  -numMin
  -numMax
 */

function minMax(numeros) {
  let min = numeros[0];
  let max = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    //Iterar para el "minimo"
    if (numeros[i] < min) {
      min = numeros[i];
    }
    //Iterar para el "maximo"
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return `El numero menor es: ${min} y el maximo: ${max}`;
}

//console.log(minMax([1, 2, 3, 4, 5]));

/**
 * 7.Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y 
  devuelva una cadena en forma de un número de teléfono.
 */

function task7(numeros) {
  //Encontramos la posición del numero "9"
  let indiceNueve = numeros.indexOf(9);

  //Eliminamos el numero "9" de su posición
  numeros.splice(indiceNueve, 1);

  //lo agregamos al comienzo
  numeros.unshift(9);

  return numeros.join("");
}

//console.log(task7([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * 8.Cree una función que tome una matriz de matrices con números.
 * Devuelve una nueva matriz (única) con el mayor número de cada uno.
 * findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
 */

function findLargestNums(arr) {
  let arrMax = [];

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
      //console.log(arr[i][j]);
    }
    arrMax.push(max);
  }
  return arrMax;
}

//console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));

/**
 * 9.Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
 * charIndex("hello", "l") ➞ [2, 3]
 * --La primera "l" tiene índice 2, la última "l" tiene índice 3.--
 */
function charIndex(palabra, indice) {
  //copiamos la palabra
  let str = palabra;
  //indice 1 y 2;
  let indice_1, indice_2;

  //iteramos en la palabra
  for (let i = 0; i < str.length; i++) {
    if (indice_1 === undefined) {
      //comprobamos la posición donde está en indice
      if (str[i] === indice) {
        indice_1 = i;
        continue;
      }
    }
    if (indice_2 === undefined) {
      if (str[i] === indice) {
        indice_2 = i;
      }
    }
  }
  console.log(
    `La primera "${indice}" tiene índice ${indice_1}, la última "${indice}" tiene ${indice_2}.`
  );
}
//charIndex("pocos", "o");

/**
 * 10.Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un
 *  par clave-valor.
 * toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
 */

function toArray(objeto) {
  //Array donde estaran los otros arrays
  let arrPadre = [];

  //iteraremos en el objeto, para que los datos este dentro de un array
  //y este array agregarlo apenas terminmos de iterar el k,v al array
  //padre
  for (let key in objeto) {
    let arrHijo = [];
    arrHijo.push(key);
    arrHijo.push(objeto[key]);
    //console.log(key + ': ' + objeto[key]);
    arrPadre.push(arrHijo);
  }
  console.log(arrPadre);
}

let a = { a: 1, b: 2, c: 3, d: 4, e: 5 };
//toArray(a);

/**
 * 11.Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos
 *  de las personas.
 * getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }]) ➞ 65700
 */

function getBudgets(arr) {
  let suma = 0;

  for (let i = 0; i < arr.length; i++) {
    suma += arr[i].budget;
  }
  return suma;
}

let prueba = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

//3 objetos segun "length"
//console.log(prueba.length);
//console.log(prueba[0]);

//console.log(getBudgets(prueba));

/**
 * 12.Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
 */

function getStudentNames(objeto) {
  //array con los nombres de los estudiantes
  let nombres = [];

  //iteramos en el array de objetos para obtener los valores
  for (let i = 0; i < objeto.length; i++) {
    nombres.push(objeto[i].name);
  }
  console.log(nombres);
}

let a2 = [{ name: "Steve" }, { name: "Mike" }, { name: "John" }];
//getStudentNames(a2);

/**
 * 13.Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
 */
function objectToArray(objeto) {
  //array padre
  let arrPadre = [];

  //iteramos en el objeto, para obtener el k, v y agregarlo a un array hijo
  for (let key in objeto) {
    let arrHijo = [];
    arrHijo.push(key);
    arrHijo.push(objeto[key]);
    //console.log(key + ': ' + objeto[key]);
    arrPadre.push(arrHijo);
  }
  console.log(arrPadre);
}

let demo = { likes: 2, dislikes: 3, followers: 10 };
//objectToArray(demo);

/**
 * 14.Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  
 * incluyendo n.
 * squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
 */
function squaresSum(numero) {
  //Si tenemos "3" tenemos que iterar 3 veces, comenzando desde el 1 y
  //cada vez que iteremos obtendremos su cuadrado

  //Suma total de los numeros al cuadrado
  let suma = 0;

  //Iteramos las veces que tiene el valor "numero"
  for (let i = 1; i <= numero; i++) {
    suma += i * i;
    //console.log(i);
  }
  console.log(suma);
}

//squaresSum(3);




/**
 * 15.Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores 
 * en la matriz dada
 * multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
 */
function multiplyByLength(numero){
  //array nuevo
  let arr = [];
  //tamaño de la matriz
  let tamano = numero.length;
  
  for(let i = 0; i < numero.length; i++){
    arr.push(numero[i] * tamano);
  }
  console.log(arr);
}

//multiplyByLength([2, 3, 1, 0]);




/**
 * 16.Cree una función que tome un número como argumento y devuelva una matriz de números contando
 * desde este número a cero.
 * countdown(5) ➞ [5, 4, 3, 2, 1, 0]
 */
function countdown(numero){
  //array nuevo
  let arr = [];
  
  //iteramos desde el tamaño del array hasta el 0
  for(let i = numero; i >= 0; i--){
    arr.push(i);
  }
  console.log(arr);
}

// countdown(5);




/**
 * 17.Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y 
 * más pequeños.
 * diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
 * Smallest number is -50, biggest is 32.
 */
function diffMaxMin(numero){
  //debemos inicializar 2 variables para guardar la pequeña y la grande
  let min = numero[0], max = numero[0];
  
  //iteramos el array para obtener dichos datos "min" y "max"
  for(let i = 0; i < numero.length; i++){
    if(numero[i] < min){
      min = numero[i];
    }
    if(numero[i] > max){
      max = numero[i];
    }
    //console.log(numero[i]);
  }
  console.log(Math.abs(min - max));
}

// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);




/**
 * 18.Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo 
 * contenga enteros.
 * filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
 */
function filterList(numero){
  //array solamente con numeros
  let numeros = [];
  
  for(let i = 0; i < numero.length; i++){
    if(typeof(numero[i]) === "number"){
      numeros.push(numero[i]);
    }
    //console.log(typeof(numero[i]));
  }
  console.log(numeros);
}

// filterList([1, 2, 3, "x", "y", 10]);




/**
 * 19.Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) 
 * es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de 
 * veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
 * repeat(13, 5) ➞ [13, 13, 13, 13, 13]
 */
function repeat(numero, veces){
  //array donde guardaremos el numero repetido
  let arr = [];
  
  //iteramos la cantidad de veces "veces" y agregamos el "numero" en el array
  for(let i = 0; i < veces; i++){
    arr.push(numero);
  }
  console.log(arr);
}
// repeat(13, 5);




/**
 * Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las 
 * vocales en una cadena con una vocal especificada.
 * "apples and bananas".vreplace("u") ➞ "upplus und bununus"

 */
String.prototype.vreplace = function(vocal) {
  // Definimos una expresión regular para buscar todas las vocales (mayúsculas y minúsculas)
  const vocales = /[aeiouAEIOU]/g;
  // Usamos el método replace() para reemplazar todas las vocales con la vocal especificada
  return this.replace(vocales, vocal);
};


let str = "Hola Mundo";
let resultado = str.vreplace('i');
// console.log(resultado);