// 1. Crea una función que retorne la suma de dos números.
function ejercicio1() {
    
    const suma = (a, b) => {
        return a+b;
    };
    alert(suma(3,3));
}

// 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

function ejercicio2 () {
    const potencia = (a, b) => {
        return a**b;
    };
    alert(potencia(3,4));
}

// Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

function ejercicio3 () {
    const sumOfCubes = (a, b,c) => {
        return a**3+b**3+c**3;
    };
    alert(sumOfCubes(1,5,9));
}

// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3

function ejercicio4 () {
    const triArea = (altura,base) => {
        return altura*base/2;
    };
    alert("El area es "+triArea(4,6));
}


// Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

function ejercicio5 () {
    function calculator(a,operacion,b){
        if (operacion=="+") {
            return a+b;
        } else if (operacion=="-") {
            
            return a-b;
        } else if (operacion=="x") {
            return a*b;
        }else if (operacion=="/") {
            return a/b;
        }else if (operacion=="%"){
            return a%b;
        } else{
            return "Ingrese una opcion valida";
        }


    }
    alert(calculator(2,"·",3))
}

// Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
function adicional1() {
    const minombre = (nombre,apellido,edad) => {
        return `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`;
    };
    alert(minombre("Waldo","Castro",24));
}

// Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function adicional2() {
    
    const sumOfCubes = (...numeros) => numeros.reduce((acumulador, actual) => acumulador + Math.pow(actual, 3), 0);
    // Ejemplo de uso
    const resultado = sumOfCubes(1, 5, 9,7);
    alert ((resultado)); // 855
}

// Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

function adicional3() {
    function tipo (valor) {
        return typeof(valor);
    }
    alert(tipo(3.445));
}
// Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
function adicional4() {
    const sumatotal = (...numeros) => numeros.reduce((acumulador, actual) => acumulador + actual, 0);
    // Ejemplo de uso
    const resultado = sumatotal(1,1,1,1,1,1,1,1,1,1);
    alert ((resultado)); 
}
// Crear una función que reciba un array de valores y filtre los valores que no son string
function adicional5() {
    const filtro = (...parametros) => parametros.filter(parametro => typeof(parametro)!="string");
    // Ejemplo de uso
    const resultado = filtro(1,2,"juan",3.445,"liz");
    alert ((resultado)); 
}

// Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function adicional6() {
    const minMax = (...numeros) => [Math.min(...numeros), Math.max(...numeros)];
    // Ejemplo de uso
    const resultado = minMax(1,2,3,4,2,10000);
    alert ((resultado));  
}
// Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

function adicional7() {
    const formatPhoneNumber = (numeros) => {
        // Validar que la matriz tenga exactamente 10 elementos
        if (numeros.length !== 10) {
            throw new Error('La matriz debe contener exactamente 10 enteros.');
        }
    
        // Formato del número de teléfono
        let codigoArea = numeros.slice(0, 3).join('');
        let primerosDigitos = numeros.slice(3, 6).join('');
        let ultimosDigitos = numeros.slice(6).join('');
    
        return `(${codigoArea}) ${primerosDigitos}-${ultimosDigitos}`;
    };
    
    // Ejemplo de uso
    alert( resultado = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
     // "(123) 456-7890"
    
}

// Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function adicional8() {
    const findLargestNums = (matriz) => {
        // Utilizamos map para transformar cada subarray en su máximo número
        return matriz.map(subarray => Math.max(...subarray));
    };
    
    alert( resultado = findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
}
// Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// // The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞ [0, 8]
// // The first "c" has index 0, the last "c" has index 8.

function adicional9() {
    const charIndex = (palabra, caracter) => {
        const primerIndice = palabra.indexOf(caracter);
        const ultimoIndice = palabra.lastIndexOf(caracter);
    
        // Si el carácter no se encuentra en la palabra, devolvemos [-1, -1]
        if (primerIndice === -1) {
            return "No se encuentra el caracter";
        }
    
        return [primerIndice, ultimoIndice];
    };
    
    // Ejemplos de uso
    console.log(charIndex("hello", "l")); // [2, 3]
    console.log(charIndex("circumlocution", "c")); // [0, 8]
    alert(charIndex("javascript", "s")); // [-1, -1]
    
}

// Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function adicional10() {
    const toArray = (objetos) => {
        // Utilizamos map para transformar cada subarray en su máximo número
        return Object.entries(objetos);
    };
    alert(toArray({ a: 1, b: 2 }))
}
  
// Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

function adicional11() {

    function getBudgets(arr) {
        return arr.reduce((total, person) => total + person.budget, 0);
      }
      
      // Ejemplo de uso
      const people = [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 }
      ];
      
    alert(getBudgets(people)); // ➞ 65700

}

// Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]

function adicional12() {

    function getStudentNames(students) {
        return students.map(student => student.name)
      }
      
      // Ejemplo de uso
   
      
    alert(getStudentNames( [
        {  name: "Steve" },
        { name: "Mike" },
        { name: "John" }
      ])); 

}


// Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function adicional13() {
    function objectToArray(key_value) {
        return Object.entries(key_value);
      }
      
      // Ejemplo de uso
   
      
    alert(objectToArray( {
           likes: 2,
           dislikes: 3,
           followers: 10
         })); 

}

// Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// // 1² + 2² + 3² =
// // 1 + 4 + 9 =
// // 14

function adicional14() {
    function squaresSum(n) {
        let cont=0;
        let num=[];
        while (cont<n) {
            cont=cont+1;
            num.push(cont);
        }
        return num.reduce((accumulator,currentValue)=>accumulator+currentValue**2,0);
    }
    alert(squaresSum(4))
}
// Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
function adicional15() {
    function multiplyByLength(array) {
        return array.map(element => element*array.length);
    }
    alert(multiplyByLength([2, 3, 1, 0,456]))
}


// Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
function adicional16() {
    function countdown(n) {
        //let cont=0;
        let num=[n];
        while (n!=0) {
            n=n-1;
            num.push(n);
        }
        return num;
    }
    alert(countdown(5))
}

// Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// // Smallest number is -50, biggest is 32.
function adicional17() {

    const diffMaxMin = (...numeros) => [ Math.max(...numeros)-Math.min(...numeros)];
    // Ejemplo de uso
    const resultado = diffMaxMin(1,2,3,4,5000);
    alert ((resultado));  
}

// Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function adicional18() {
    const filterList = (...parametros) => parametros.filter(parametro => typeof(parametro)=="number");
    // Ejemplo de uso
    const resultado = filterList(1, 2, 3, "x", "y", 10);
    alert ((resultado)); 
}

// Cree una función que tome dos argumentos (elemento, tiempos). 
//El primer argumento (elemento) es el elemento que necesita repetirse, 
//mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir 
//el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]

function adicional19() {
    function repeat(element,time) {
        let matriz=[];
        for (let index = 0; index < time; index++) {
            matriz.push(element);
        }
        return matriz;
    }
    alert(repeat(13,5))
}
// Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

function adicional20() {
    String.prototype.vreplace = function(vowel) {
        // Definir una expresión regular que coincida con todas las vocales (mayúsculas y minúsculas)
        const vowels = /[aeiouAEIOU]/g;
        
        // Usar el método replace con la expresión regular y la vocal especificada
        return this.replace(vowels, vowel);
      };
      
      // Ejemplos de uso:
      alert("apples and bananas".vreplace("u")); // Output: "upplus und bununus"
      
}
// Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
function adicional21() {
    function findNemo(cadena) {
        let cadena_array= cadena.split(" ");
        let indexnemo=1+ cadena_array.indexOf("Nemo");
        return `I am found Nemo at ${indexnemo}!.`;
    }
    alert(findNemo("I am finding alright Nemo "))
}

// Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"

function adicional22() {
    function capLast(str) {
        // Divide la cadena en palabras usando el espacio como delimitador
        let words = str.split(' ');
        
        // Itera sobre cada palabra y capitaliza la última letra
        for (let i = 0; i < words.length; i++) {
          let word = words[i];
          if (word.length > 0) {
            words[i] = word.slice(0, -1) + word.slice(-1).toUpperCase();
          }
        }
        
        // Une las palabras modificadas de nuevo en una sola cadena y la devuelve
        return words.join(' ');
      }
      
      // Ejemplos de uso:
      console.log(capLast("hello"));   
}
  



 
  