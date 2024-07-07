//1. Crea una función que retorne la suma de dos números.
function ejercicio1(){
    const suma=(a,b)=>a+b;
    let a  = parseInt(prompt("Escribe un numero"));
    let b  = parseInt(prompt("Escribe un numero"));
    alert("La suma de los numero ingresados es "+suma(a,b))
}
//2. Crea una función que retorne la potencia de un número dado, esta función deberá 
//recibir la potencia y el número a potenciar.
function ejercicio2(){
    const potencia=(a,b)=>Math.pow(a, b);
    let a  = parseInt(prompt("Escribe un numero"));
    let b  = parseInt(prompt("Escribe un numero"));
   alert("Resultado es "+potencia(a,b))
}
//3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
function ejercicio3(){
    let data=[]
    let cantidad  = parseInt(prompt("Escribe la cantidad de numeros que va a ingresar"));
    for (let index = 0; index < cantidad; index++) {
        data.push(parseInt(prompt("Escribe un numero")));
    }
    let inicio=0
    const allSumOfCubes2 = (...numbers) => {
        return numbers.reduce((accumulator, currentValue) => accumulator + Math.pow(currentValue, 3),
        inicio
      );
    }
       
    const resultData =allSumOfCubes2(...data) ;
    alert("La suma de cubos de los numeros es "+resultData);
}
//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
//triArea(3, 2) ➞ 3
function ejercicio4(){
    const area=(a,b)=>(a*b)/2;
    let h  = parseInt(prompt("Ingrese la altura del triangulo"));
    let b  = parseInt(prompt("Ingrese la base del triangulo"));   
    alert("Area del triangulo es "+area(h,b))
}
/*5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
(+,-,/,x,%), y si la operación no es correcta que envié un mensaje 
“El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4*/
function ejercicio5(){
    const calculator = (num1, opc, num2) => {
        switch (opc) {
            case "+":
              return num1 + num2;
            case "-":
              return num1 - num2;
            case "/":
              return num1 / num2;
            case "x":
              return num1 * num2;
            case "%":
              return num1 % num2;        
            default:
              return "El parametro no es valido";
        }
            
    }
    let a  = parseInt(prompt("Escribe un numero"));
    let par = prompt("Ingrese un operador matematico (+,-,/,x,%)")
    let b  = parseInt(prompt("Escribe un numero"));  
    alert("El resultado de "+a+" "+par+" "+b+" = "+calculator(a, par, b));
}

/*Utilizando función arrow, crear una función que reciba como parámetros 
un nombre, apellido y edad y los retorne en un string concatenado 
“Hola mi nombre es sebastián yabiku y mi edad 33”*/
function ejercicio1_2(){
    const cadena = (a,b,c) =>`Hola mi nombres es ${a} ${b} y mi edad ${c}`
    let nom  = (prompt("Ingrese su nombre"));
    let apell  = (prompt("Ingrese su apellido"));
    let edad  = (prompt("Ingrese su edad"));
    alert(cadena(nom,apell,edad))
}
//Cree una función que tome números y devuelva la suma de sus cubos.
function ejercicio2_2(){
    let data=[]
    let cantidad  = parseInt(prompt("Escribe la cantidad de numeros que va a ingresar"));
    for (let index = 0; index < cantidad; index++) {
        data.push(parseInt(prompt("Escribe un numero")));
    }
    let inicio=0
    const allSumOfCubes2 = (...numbers) => {
        return numbers.reduce((accumulator, currentValue) => accumulator + Math.pow(currentValue, 3),
        inicio
      );
    }
       
    const resultData =allSumOfCubes2(...data) ;
    alert("La suma de cubos de los numeros es "+resultData);
}
//Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
function ejercicio3_2(){
    const typeValue = (valor) => typeof valor;
    let dato = prompt("Ingrese un dato")
    alert("El tipo de datos es "+typeValue(dato));
}
//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
function ejercicio4_2(){
    let data=[]
    let cantidad  = parseInt(prompt("Escribe la cantidad de numeros que va a ingresar"));
    for (let index = 0; index < cantidad; index++) {
        data.push(parseInt(prompt("Escribe un numero")));
    }
    let inicio=0
    const allSumOfCubes2 = (...numbers) => {
        return numbers.reduce((accumulator, currentValue) => accumulator + currentValue,
        inicio
      );
    }
       
    const resultData =allSumOfCubes2(...data) ;
    alert("La suma de los numeros es "+resultData);
}
//Crear una función que reciba un array de valores y filtre los valores que no son string
function ejercicio5_2(){
    const typeValue = (valor) => typeof valor;
    let data=[]
    let cantidad  = parseInt(prompt("Escribe la cantidad de datos que va a ingresar"));
    for (let index = 0; index < cantidad; index++) {
        data.push(parseInt(prompt("Escribe un numero")));
        data.push(prompt("Escribe una letra"));
    }
    let data_nuevo=[]
    for (let index = 0; index < data.length; index++) {
        if (typeValue(data[index])!=='string') {
            data_nuevo.push(data[index])
        } 
    }
    alert(data_nuevo)
    //El codigo funciona, pero como todos los datos ue se ingresa son string por eso coloque unos DATOS int PARA DIFERENCIARLOS
}
//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
function ejercicio6_2(){
    let data=[]
    let cantidad  = parseInt(prompt("Escribe la cantidad de numeros que va a ingresar"));
    for (let index = 0; index < cantidad; index++) {
        data.push(parseInt(prompt("Escribe un numero")));
    }
    function max_min(matriz=[]) {
        let data=[]
        data.push(Math.min(...matriz))
        data.push(Math.max(...matriz))
        return data
    }
    alert("El valor maximo y minimo son "+max_min(data))
}
//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
function ejercicio7_2(){
    const formatPhoneNumber = (phoneNumber = []) => {
        
        const part1 = phoneNumber.slice(0, 3).join("");
        const part2 = phoneNumber.slice(3, 6).join("");
        const part3 = phoneNumber.slice(6, 10).join("");
       
        return `(${part1}) ${part2}-${part3}`;
    }
    let data=[]
    for (let index = 0; index < 10; index++) {
        data.push(parseInt(prompt("Escribe un numero")));
    }

    const result = formatPhoneNumber(data);
    alert(result);
     
}
//Cree una función que tome una matriz de matrices con números. 
//Devuelve una nueva matriz (única) con el mayor número de cada uno.
function ejercicio8_2(){
    const findLargestNums = (matriz=[]) => {
        return matriz.map((subArray) => Math.max(...subArray));
      };
       
      const a = [4, 2, 7, 1];
      const b = [20, 70, 40, 90];
      const c = [1, 2, 0];
       
      const resultLarges = findLargestNums([a, b, c]);
       
      alert(resultLarges);
}
//Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
function ejercicio9_2(){
    function charIndex(word, char) {
        const firstIndex = word.indexOf(char);
        const lastIndex = word.lastIndexOf(char); 
        
        if (firstIndex === -1) {
            return "No se encontro la letra";
        }
        
        return [firstIndex, lastIndex];
    }
    let texto = prompt("Ingreso un texto")
    let letra = prompt("Ingrese la letra que desee saber sus indices")
    let data=charIndex(texto,letra)
    if (data.length===2) {
        alert(data)
    } else {
        alert(data)
    }
}
//Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
function ejercicio10_2(){
    const toArray = (obj = {}) => {
        const result = [];
       
        for (const clave in obj) {
          result.push([clave, obj[clave]]);
        }
        return result;
      };
       
      alert(JSON.stringify(toArray({ a: 1, b: 2 })));
      //alert(Object.entries({ a: 1, b: 2 }));
}
//Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
function ejercicio11_2(){
    const getBudgets = (budgets = []) => {
        const sumResult = budgets.reduce(
          (accumulator, currentValue) => accumulator + currentValue.budget,
       
          0
        );
       
        return sumResult;
      };
       
      const resultBudgets = getBudgets([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
      ]);
      alert(resultBudgets)
}
//Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
function ejercicio12_2(){
    function getStudentNames(students=[]) {
        return students.map(student => student.name);
    }
    const resultStudenNames = getStudentNames([
        { name: "John"},
        { name: "Steve"},
        { name: "Martin"},
    ]);
    alert(JSON.stringify(resultStudenNames))
}
//Escriba una función que convierta un objeto en una matriz de claves y valores.
function ejercicio13_2(){
    const objectToArray = (obj = {}) => {
        const result = [];
       
        for (const clave in obj) {
          result.push([clave, obj[clave]]);
        }
        return result;
      };
    const result= objectToArray({
        likes: 2,
        dislikes: 3,
        followers: 10
      })
    alert(JSON.stringify(result))  
}
//Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
function ejercicio14_2(){
    let num = parseInt(prompt("Ingrese un numero"))
    const sumacuadrado = (num)=>{
        let suma=0
        for (let index = 1; index <= num; index++){
            suma=suma+Math.pow(index,2)
        }
        return suma;   
    }

    const suma=sumacuadrado(num)
    alert("La suma de cuadrado es "+suma)
}
//Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
function ejercicio15_2(){
    const multiplyByLength = (arr=[]) => {
        const length = arr.length; 
        return arr.map(value => value * length); 
    };
    let data=[]
    let cantidad  = parseInt(prompt("Escribe la cantidad de numeros que va a ingresar"));
    for (let index = 0; index < cantidad; index++) {
        data.push(parseInt(prompt("Escribe un numero")));
    }
    alert(multiplyByLength(data))
}
//Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
function ejercicio16_2(){
    const countdown = (num) => {
        const result = [];
        for (let i = num; i >= 0; i--) {
            result.push(i);
        }
        return result;
    };
    let num = parseInt(prompt("Ingrese un numero"))
    alert(countdown(num))
}
//Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
function ejercicio17_2(){
    let data=[]
    let cantidad  = parseInt(prompt("Escribe la cantidad de numeros que va a ingresar"));
    for (let index = 0; index < cantidad; index++) {
        data.push(parseInt(prompt("Escribe un numero")));
    }
    function max_min(matriz=[]) {
        let data=0
        data = (Math.max(...matriz))-(Math.min(...matriz))
        return data
    }
    alert("La diferencia entre el maximo y minimo valor es "+max_min(data))
}
//Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
function ejercicio18_2(){
    let data=[1, 2, 3, "x", "y", 10]
    const arr = (data=[])=>{
        let data_nuevo=[]
        for (let index = 0; index < data.length; index++) {
            if (typeof (data[index])!=='string') {
                data_nuevo.push(data[index])
            } 
        }
        return data_nuevo
    }
    alert(arr(data))
}
/*Cree una función que tome dos argumentos (elemento, tiempos). 
El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) 
es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.*/
function ejercicio19_2(){
    const repeatElement = (num, rep) => {
        const result = [];
        for (let i = 0; i < rep; i++) {
            result.push(num);
        }
        return result;
    };
    let num = parseInt(prompt("Escribe un numero"))
    let rep = parseInt(prompt("La cantidad que desee q se repita"))
    alert(repeatElement(num,rep))
}
//Escriba una función, .vreplace () que extienda el prototipo de 
//cadena reemplazando todas las vocales en una cadena con una vocal especificada.
function ejercicio20_2(){
    String.prototype.vreplace = function(vocal) {
        const vocales = /[aeiouAEIOU]/g;
        return this.replace(vocales, vocal);
    };
    let texto = (prompt("Escribe un texto"))
    let vocal = (prompt("Escribe la vocal que desee colocar"))
    alert(texto.vreplace(vocal));
}
//Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y 
//devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
function ejercicio21_2(){
    const buscador = (sentence,palabra) => {
        const words = sentence.split(' ');
        const position = words.indexOf(palabra) + 1;
        if (position > 0) {
            return `¡Encontré a "${palabra}" en ${position}!`;
        } else {
            return `"${palabra}" no está en la cadena.`;
        }
    };
    let texto = (prompt("Escribe un texto"))
    let palabra = (prompt("Escribe la palabra que desee encontrar"))
    alert(buscador(texto,palabra));
}
//Cree una función que capitalice la última letra de cada palabra.
function ejercicio22_2(){
    const capitalice = (texto) =>{
        const texto1SinUltimaLetra = texto.slice(0, -1)
        const ultimaLetraMayuscula = texto.charAt(texto.length - 1).toUpperCase();
        return texto1SinUltimaLetra+ultimaLetraMayuscula
    }
    let texto = (prompt("Escribe un texto"))
    alert(capitalice(texto))
}