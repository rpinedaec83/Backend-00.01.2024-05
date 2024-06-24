//1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
const concatenarDatos = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;

function r2ejercicio1() {
    let nombre = prompt("Ingrese su nombre:");
    if (nombre === null) return;
    let apellido = prompt("Ingrese su apellido:");
    if (apellido === null) return;
    let edad = solicitarNumero("Ingrese su edad:");
    if (edad === null) return;

    alert(concatenarDatos(nombre, apellido, edad));
}

//2. Cree una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
function r2ejercicio2() {
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

//3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
 /* Undefined: representa una variable que no ha sido declarada o a la cual no se le ha asignado un valor.
    Boolean: representa un valor lógico y puede tener dos valores, ya sean true o false. 
    Number: permite representar y manipular valores numéricos como «37» o «-9.25».
    String: representa datos textuales (cadenas de caracteres).
    BigInt: representa valores numéricos que son demasiado grandes para ser representados por el tipo de dato number.     
    Null: representa la ausencia intencional de cualquier valor, un valor nulo o «vacío».
    Object: representa una colección de datos definidos y entidades más complejas.
    Function: es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor Object. Son objetos con la capacidad de ser ejecutables.
*/
const typeOfValue = (valor) => typeof valor;

function r2ejercicio3() {
    let mensaje = "";
    mensaje += `El tipo de dato de ${undefined} es: ${typeOfValue(undefined)}\n`
    mensaje += `El tipo de dato de ${true} es: ${typeOfValue(true)}\n`
    mensaje += `El tipo de dato de ${20} es: ${typeOfValue(20)}\n`
    mensaje += `El tipo de dato de ${'Hola, ¿cómo estás?'} es: ${typeOfValue('Hola, ¿cómo estás?')}\n`
    mensaje += `El tipo de dato de ${12345678901234567890n} es: ${typeOfValue(12345678901234567890n)}\n`
    mensaje += `El tipo de dato de ${null} es: ${typeOfValue(null)}\n`
    let Persona = {nombre: 'Juan', edad: 30, genero: 'masculino'}
    mensaje += `El tipo de dato de Persona = {nombre: 'Juan', edad: 30, genero: 'masculino'} es: ${typeOfValue(Persona)}\n`
    mensaje += `El tipo de dato de sfunction sumar(a, b){ return a+b} es: ${typeOfValue(function sumar(a, b){ return a+b})}\n`
   
    alert(mensaje);
}

//4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
function sumerNumeros(...numeros) {
    return numeros.reduce((sum, num) => sum + num, 0);
}

function r2ejercicio4(){
    let numeros = [];
    while (true) {
        let numero = solicitarNumero("Ingrese un número:");
        if (numero === null) break;
        numeros.push(numero);

        let continuar = confirm("¿Quiere ingresar otro número?");
        if (!continuar) break;
    }

    let resultado = sumerNumeros(...numeros);
    alert(`La suma de los números ingresados es: ${resultado}`);
}

//5. Crear una función que reciba un array de valores y filtre los valores que no son string 
function filtrarStrings(array) {
    // Filtrar valores que sean de tipo 'string'
    return array.filter(valor => typeof valor  === 'string' && isNaN(valor));
}

function r2ejercicio5(){
    let valores = [];
    while (true) {
        let valor = prompt("Ingrese variable:");
        if (valor === null) break;
        valores.push(valor);

        let continuar = confirm("¿Quiere ingresar otra variable?");
        if (!continuar) break;
    }

    let resultado = filtrarStrings(valores);
    let mensaje = "";
    for (let i = 0; i < resultado.length; i++) {
        console
        mensaje += resultado[i]+"\n";
    } 
    alert(`El arreglo filtrado: \n`+mensaje);
}

//6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
const minMax = (numeros) => {
    let min = Math.min(...numeros);
    let max = Math.max(...numeros);
    return [min, max];
};

function r2ejercicio6(){
    let numeros = [];
    while (true) {
        let numero = solicitarNumero("Ingrese un número:");
        if (numero === null) break;
        numeros.push(numero);
    }

    let resultado = minMax(numeros);
    alert(`El número mínimo es ${resultado[0]} y el número máximo es ${resultado[1]}`);
}

//7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
const formatPhoneNumber = (numeros) => {
    let parte1 = numeros.slice(0, 3).join('');
    let parte2 = numeros.slice(3, 6).join('');
    let parte3 = numeros.slice(6, 10).join('');
    return `(${parte1}) ${parte2}-${parte3}`;
};

function r2ejercicio7(){
    let numeros = [];
    while (numeros.length < 10) {
        let numero = solicitarNumero("Ingrese un número entre 0 y 9:");
        if (numero === null) break;
        if (numero >= 0 && numero <= 9) {
            numeros.push(numero);
        } else {
            alert("Ingrese un número válido");
        }
    }

    if (numeros.length === 10) {
        let resultado = formatPhoneNumber(numeros);
        alert(`El número de teléfono formateado es: ${resultado}`);
    }
}

//8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
const findLargestNums= (matriz) => {
    let resultados = [];
    for (let arr of matriz) {
        let maximo = Math.max(...arr);
        resultados.push(maximo);
    }
    return resultados;
};

function r2ejercicio8(){
    let matriz = [];
    while (true) {
        let subMatriz = [];
        while (true) {
            let numero = solicitarNumero("Ingrese un número para la matriz (o deje vacío para finalizar la submatriz, con dos blancos se finalizará el ingreso):");
            if (numero === null || isNaN(numero)) break;
            subMatriz.push(numero);
        }
        if (subMatriz.length > 0) {
            matriz.push(subMatriz);
        } else {
            break;
        }
    }

    let resultado = findLargestNums(matriz);
    alert(`La matriz con los mayores números de cada submatriz es: [${resultado.join(', ')}]`);
}

//9. Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3]
//The first "l" has index 2, the last "l" has index 3.
//charIndex("circumlocution", "c") ➞ [0, 8]
//The first "c" has index 0, the last "c" has index 8.
const charIndex = (palabra, caracter) => {
    let primerIndice = palabra.indexOf(caracter);
    let ultimoIndice = palabra.lastIndexOf(caracter);
    return [primerIndice, ultimoIndice];
};
function r2ejercicio9(){
    let palabra = prompt("Ingrese una palabra:");
    if (palabra === null ) return;
    let caracter
    while (true){
        caracter = prompt("Ingrese un carácter para buscar:");
        if (caracter === null ) return;
        if (caracter.length ===1) {
            break;
        }else{
            alert("Ingrese un valor válido")
        }
    }
    

    let resultado = charIndex(palabra, caracter);
    alert(`El primer índice de "${caracter}" es ${resultado[0]}, y el último índice es ${resultado[1]}`);
}

//10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
const toArray = (objeto) => {
    return Object.entries(objeto);
};

function r2ejercicio10(){
    let clave;
    let valor;
    let objeto = {};
    while (true) {
        clave = prompt("Ingrese la clave (deje vacío para finalizar):");
        if (!clave) break;

        let valor = prompt(`Ingrese el valor para ${clave}:`);
        objeto[clave] = valor;
    }

    let resultado = toArray(objeto)
    alert(`La matriz de pares clave-valor es: ${JSON.stringify(resultado)}`);
}

//11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
//getBudgets([
//  { name: "John", age: 21, budget: 23000 },
//  { name: "Steve",  age: 32, budget: 40000 },
//  { name: "Martin",  age: 16, budget: 2700 }
//]) ➞ 65700
const getBudgets = (personas) => {
    let sumaPresupuestos = 0;
    for (let persona of personas) {
        sumaPresupuestos += persona.budget;
    }
    return sumaPresupuestos;
};

function r2ejercicio11(){
    let personas = [];
    while (true) { 
        let nombre = prompt("Ingrese el nombre de la persona (deje vacío para finalizar):");
        if (!nombre) break;

        let edad = solicitarNumero(`Ingrese la edad de ${nombre}:`);
        let presupuesto = solicitarNumero(`Ingrese el presupuesto de ${nombre}:`);

        personas.push({ name: nombre, age: edad, budget: presupuesto });
    }

    let resultado = getBudgets(personas);
    alert(`La suma de los presupuestos de las personas es: ${resultado}`);
}

//12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
//getStudentNames([
//  { name: "Steve" },
//  { name: "Mike" },
//  { name: "John" }
//]) ➞ ["Becky", "John", "Steve"]
const getStudentNames = (estudiantes) => {
    let nombres = estudiantes.map(estudiante => estudiante.name);
    return nombres;
}; 

function r2ejercicio12(){
    let estudiantes = [];
    while (true) {
        let nombre = prompt("Ingrese el nombre del estudiante (deje vacío para finalizar):");
        if (!nombre) break;
        estudiantes.push({ name: nombre });
    }

    let resultado = getStudentNames(estudiantes);
    alert(`La matriz de nombres de estudiantes es: ${JSON.stringify(resultado)}`);
}

//13. Escriba una función que convierta un objeto en una matriz de claves y valores.
//objectToArray({
//  likes: 2,
//  dislikes: 3,
//  followers: 10
//}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
const objectToArray = (objeto) => {
    let matriz = [];
    for (let clave in objeto) {
        matriz.push([clave, objeto[clave]]);
    }
    return matriz;
};

function r2ejercicio13(){
    let objeto = {};
    while (true) {
        let clave = prompt("Ingrese la clave (deje vacío para finalizar):");
        if (!clave) break;
        let valor = prompt(`Ingrese el valor para ${clave}:`);
        objeto[clave] = valor;
    }

    let resultado = objectToArray(objeto);
    alert(`La matriz de claves y valores es: ${JSON.stringify(resultado)}`);
}

//14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
const squaresSum = (n) => {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * i; // Agrega el cuadrado del número actual a la suma
    }
    return suma;
};
function r2ejercicio14(){
    let n = solicitarNumero("Ingrese un número:");
    if (n === null) return;

    let resultado = squaresSum(n);
    alert(`La suma de los números cuadrados hasta ${n} es: ${resultado}`);
}

//15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
const multiplyByLength = (array) => {
    let length = array.length;
    return array.map(valor => valor * length);
};

function r2ejercicio15(){
    let array = [];
    while (true) {
        let valor = solicitarNumero("Ingrese un número para la matriz:");
        if (valor === null) break;
        array.push(valor);
        let continuar = confirm("¿Quiere ingresar otro número?");
        if (!continuar) break;
        
    }

    let resultado = multiplyByLength(array);
    alert(`El resultado de multiplicar cada valor por la longitud de la matriz es: ${resultado}`);
}

//16. Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]
const countdown = (numero) => {
    let array = [];
    for (let i = numero; i >= 0; i--) {
        array.push(i);
    }
    return array;
};

function r2ejercicio16(){
    let numero = solicitarNumero("Ingrese un número para comenzar el conteo:");
    if (numero === null) return;

    let resultado = countdown(numero);
    alert(`La matriz de números contando desde ${numero} a 0 es: [${resultado}]`)
}

//17. Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
//Smallest number is -50, biggest is 32.
const diffMaxMin = (array) => {
    if (array.length === 0) return 0; // Si la matriz está vacía, retorna 0

    let min = array[0];
    let max = array[0];

    // Itera sobre la matriz para encontrar el mínimo y el máximo
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    // Calcula la diferencia entre el máximo y el mínimo
    return max - min;
};

function r2ejercicio17(){
    let array = [];
    while (true) {
        let valor = solicitarNumero("Ingrese un número para la matriz:");
        if (valor === null) break;
        array.push(valor);
        let continuar = confirm("¿Quiere ingresar otro número?");
        if (!continuar){
            if (array.length < 2) {
                alert("Ingrese al menos dos números");
            } else {
                break;
            }
        }   
    }

    let resultado = diffMaxMin(array);
    alert(`La diferencia entre el número más grande y el más pequeño es: ${resultado}`);

}

//18. Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
const filterList = (array) => {
    // Utiliza el método filter para filtrar los elementos que sean enteros
    return array.filter(element => !(isNaN(element)) && Number.isInteger(parseFloat(element)));
};

function r2ejercicio18(){
    let elementos = [];

    while (true) {
        let valor = prompt("Ingrese un valor para la matriz:");
        if (valor === null) break;
        elementos.push(valor);
        let continuar = confirm("¿Quiere ingresar otro valor?");
        if (!continuar) break;
    }

    let resultado = filterList(elementos);

    alert(`Matriz original: [${elementos}]
Matriz filtrada (solo enteros): [${resultado}]`);
}

//19. Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]
function repeat(numero, repeticiones) {
    return Array.from({ length: repeticiones }, () => numero);
}

function r2ejercicio19(){
    let numero = solicitarNumero("Ingrese el número que desea repetir:");
    if (numero === null) return;
    let repeticiones
    while (true) {
        repeticiones = solicitarNumero("Ingrese el la cantidad que desee repetir el número ingresado anteriomente:");
         if (repeticiones === null) return;
         if (repeticiones > 0) {
            break;
        } else {
            alert("Ingrese una cantidad válida");
        }
    }

    let resultado = repeat(numero, repeticiones);
    alert(`Resultado: [${resultado}]`);
}

//20. Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"
String.prototype.vreplace = function(vocal) {
    const vocales = /[aeiou]/gi;
    return this.replace(vocales, vocal);
};

function r2ejercicio20(){
    let texto = prompt("Ingrese una cadena de texto:");
    if (texto === null) return;
    let vocal 
    while (true) {
        vocal = prompt("Ingrese la vocal con la que desea reemplazar las vocales:");
        if (vocal === null) return;
        if (vocal.length === 1) {
            break;
        } else {
            alert("Ingrese un valor válido");
        }
    }
    let resultado = texto.vreplace(vocal);
    alert(`Resultado: ${resultado}`);
}

//21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
function findNemo(frase) {
    // Dividir la cadena en palabras utilizando split
    let palabras = frase.split(" ");
    
    // Encontrar la posición de la palabra "Nemo"
    let posicion = palabras.findIndex(palabra => palabra.toLowerCase() === "nemo") + 1;
    
    // Construir el mensaje de salida
    if (posicion !== 0) {
        return `I found Nemo at ${posicion}!`;
    } else {
        return "Nemo not found :(";
    }
}

function r2ejercicio21(){
    let frase = prompt("Ingrese una frase que contenga la palabra 'Nemo':");
    if (frase === null) return;

    let resultado = findNemo(frase);
    alert(resultado);
}

//22. Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"
function capLast(cadena) {
    // Dividir la cadena en palabras
    let palabras = cadena.split(" ");
    
    // Iterar sobre cada palabra
    let resultado = palabras.map(palabra => {
        // Obtener la última letra y las letras previas
        let lastIndex = palabra.length - 1;
        let lastChar = palabra[lastIndex].toUpperCase();
        
        // Reconstruir la palabra con la última letra capitalizada
        return palabra.slice(0, lastIndex) + lastChar;
    });
    
    // Unir las palabras nuevamente en una cadena
    return resultado.join(" ");
}

function r2ejercicio22(){
    let input = prompt("Ingrese una frase o palabra:");
    if (input === null) return;

    let resultado = capLast(input);
    alert(resultado);
}


const descripcionesReto2 = [
    "01. Ingrese su nombre, apellido y edad para devolver la concatenación",
    "02. Ingrese números para devolver la suma de sus cubos. Ejemplo: sumOfCubes(1, 5, 9) ➞ 855",
    "03. Usar una función para mostrar los diferentes tipos en JS",
    "04. Ingrese números para devolver la suma de ellos",
    "05. Ingresa valores para filtrar aquellos que no son string",
    "06. Ingrese una matriz de números para devolver los mínimos y máximos. Ejemplo: minMax([1, 2, 3, 4, 5]) ➞ [1, 5]",
    "07. Ingrese una matriz de 10 enteros (entre 0 y 9) para mostrar una cadena en forma de un número de teléfono. Ejemplo: (123) 456-7890",
    "08. Ingrese una matriz de matrices de números para mostrar una nueva matriz con el mayor número de cada uno.",
    "09. Ingrese una palabra y un caracter para devolver el primer y el último índice del caracter repetido. Ejemplo: charIndex(\"hello\", \"l\") ➞ [2, 3]",
    "10. Ingrese un objeto de una propiedades para convertirlo en una matriz. Ejemplo: toArray({ a: 1, b: 2 }) ➞ [[\"a\", 1], [\"b\", 2]]",
    "11. Ingrese una matriz con objetos para calcular la suma de los presupuestos de las personas. Ejemplo:\ngetBudgets([{ name: \"John\", age: 21, budget: 23000 }\,\n{ name: \"Steve\",  age: 32, budget: 40000 }\,\n{ name: \"Martin\",  age: 16, budget: 2700 }]) ➞ 65700",
    "12. Ingrese una matriz de estudiantes para devilver una matriz de nombres de estudiantes ",
    "13. Ingrese un objeto para convertirlo en una matriz de claves y valores.",
    "14. Ingrese un número para calcular la suma del cuadrado de sus predecesores enteros hasta el 1, incluyendo a sí mismo",
    "15. Ingrese una matriz para calcular la multiplicación de cada valor por la cantidad de valores de la matriz",
    "16. Ingrese un número para devolver una matriz de números contando desde este número a cero",
    "17. Ingrese una matriz para devolver la diferencia entre el mayor y el menor",
    "18. Ingrese una matriz para devolverla filtrada dejando solo los valores enteros",
    "19. Ingrese 2 números para crear una matriz donde el primer número será el valor que se repetirá la cantidad de veces ingresada en el segundo número",
    "20. Ingrese una cadena y una vocal para reemplaza todas las vocales de la cadena con la vocal ingresada",
    "21. Ingrese una cadena para encontrar la posición de la palabra Nemo",
    "22. Ingrese una palabra para devolver la misma palabra con su última letra en mayúscula"
 ]

document.addEventListener('DOMContentLoaded', function() {
    const ejerciciosReto2Container = document.getElementById('ejerciciosReto2');

    for (let i = 1; i <= 22; i++) {
        const ejercicioDescription = descripcionesReto2[i - 1];

        const ejercicioHTML = `
            <div class="col-md-12 mb-3">
                <div class="row exercise">
                    <div class="col-md-6">
                        <p>${ejercicioDescription}</p>
                    </div>
                    <div class="col-md-6 text-center"> 
                        <button class="btn btn-secondary" onclick="r2ejercicio${i}()">Ejercicio ${i}</button>
                    </div>
                </div>
            </div>
        `;

        ejerciciosReto2Container.innerHTML += ejercicioHTML;
    }
});