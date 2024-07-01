function ejercicio1() {
    const primerNumero = parseFloat(prompt("Ingresa el primer número:"));
    const segundoNumero = parseFloat(prompt("Ingresa el segundo número:"));

    const sumarConIngresoDeDatos = () => primerNumero + segundoNumero;

    alert(`La suma es: ${sumarConIngresoDeDatos()}`);
}

function ejercicio2(){
        const base = parseFloat(prompt("Ingresa la base:"));
        const exponente = parseFloat(prompt("Ingresa el exponente:"));

        const calcularPotencia = (base, exponente) => base ** exponente;

        alert(`La potencia de ${base} elevado a ${exponente} es ${calcularPotencia(base,exponente)}`);

    
}

function ejercicio3() {

    const sumOfCubes = (...nums) => {
        return nums.reduce((sum, num) => sum + Math.pow(num, 3), 0);
    };

    alert(`La suma de cubos es ${sumOfCubes(1,5,9)}`);

}

function ejercicio4(){
    const base = parseFloat(prompt("Ingresa la altura:"));
    const altura = parseFloat(prompt("Ingresa la base:"));
    const triArea = (base, altura) => (base * altura) / 2;

    alert(`El Area de un triangulo con una base de ${base} y una altura de ${altura} es => ${triArea(base,altura)}`);
}

function ejercicio5(){
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    const operacion = prompt("Ingresar operador suma +, resta -, multiplicacion *, division %:");
    const calculator = (num1, operacion, num2) => {
        switch (operacion) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '/':
                return num1 / num2;
            case 'x':
                return num1 * num2;
            case '%':
                return num1 % num2;
            default:
                return "El parámetro no es reconocido";
        }
    };
    
    alert(`El resultado de la operacion ${operacion} es => ${calculator(num1, operacion, num2)}`);   
}
function ejercicio1_2(){
    const nombre = prompt("Ingresa Nombre:");
    const apellido = prompt("Ingresa Apellido:");
    const edad = prompt("Ingresa Edad:");
    const crearMensaje = (nombre, apellido, edad) => `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;

    alert(`${crearMensaje(nombre, apellido, edad)}`);   

}

function ejercicio2_2(){
    const primerNumero = parseFloat(prompt("Ingresa el primer número:"));
    const segundoNumero = parseFloat(prompt("Ingresa el segundo número:"));
    const tercerNumero = parseFloat(prompt("Ingresa el tercer número:"));

    const nums = [primerNumero, segundoNumero, tercerNumero];
    const sumOfCubes = (...nums) => {
        return nums.reduce((sum, num) => sum + Math.pow(num, 3), 0);
    };

    alert(`La suma de cubos es ${sumOfCubes(primerNumero,segundoNumero,tercerNumero)}`);

}

function ejercicio3_2(){
    let valor = prompt("Ingrese alguna variable");

    const tipoDeValor = (valor) => {
        if (!isNaN(valor) && valor.trim() !== "") {
            return "number";
        }
        if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
            return "boolean";
        }
        return typeof valor;
    };
    let tipo = tipoDeValor(valor);
    alert(`El tipo de valor ingresado es: ${tipo}`);
  };

  function ejercicio4_2(){
    let num = [];
    let continuar = true;
while (continuar) {
  let entrada = prompt('Agregue un número o finalice con "".');
  if (entrada === "") {
    continuar = false;
  }else{
    let numero = parseFloat(entrada);
    num.push(numero);
  }
}
let suma = num.reduce((total, numero) => total + numero, 0);
alert('La suma de los números ingresados es: ' + suma);
  }
  
  function ejercicio5_2() {
    let arr = []; 
    let input = prompt("Ingrese elementos separados por comas:");
    let elementos = input.split(",");
    for (let elemento of elementos) {
        let valor = parseFloat(elemento.trim()); 
        if (!isNaN(valor)) {
            arr.push(valor); 
        } else {
            arr.push(elemento.trim());
        }
    }
    let matriz = arr.filter(item => typeof item === 'string');
    alert(`${JSON.stringify(matriz)}`);
}

  function ejercicio6_2(){
    let arr =[1, 2, 3, 4, 5];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    alert(`El min y el max del array ${arr} es: ${min} y ${max}`);  
      
  }
  
  function ejercicio7_2(){
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        let firstPart = numbers.slice(0, 3).join('');
        let secondPart = numbers.slice(3, 6).join('');
        let thirdPart = numbers.slice(6, 10).join('');
        alert(`El numero de telefono es:(${firstPart}) ${secondPart}-${thirdPart}`);  
    }
    
function ejercicio8_2(){
        let matrix = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
        let largestNums = matrix.map(subarray => Math.max(...subarray));
        alert(`El min y el max del array ${largestNums}`); 
    }
    
function ejercicio9_2(){
    let word = prompt('Ingresar una palabra: ');
    let char  = prompt('Ingresar Caracter :');
        let firstIndex = word.indexOf(char); 
        let lastIndex = word.lastIndexOf(char); 
        if (firstIndex !== -1 && lastIndex !== -1) {
            alert(`Index [${firstIndex},  ${lastIndex}]` ); 
        } else {
            alert(`El carácter no se encuentra en la palabra.`); 

        }

    }
    
function ejercicio10_2(){
    let obj = { a: 1, b: 2 };
    let toArray = () =>Object.entries(obj);
    arrayResultante = toArray(obj);
    alert(`Matriz  ${JSON.stringify(obj)}  en array  ${JSON.stringify(arrayResultante)}}`);  
}

function ejercicio11_2() {
    let arr = [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 }
    ];
    let totalBudget = 0;
    for (let person of arr) {
        totalBudget += person.budget;
    }
    alert(`El presupuesto Acumulado es  ${totalBudget}` ); 
}

function ejercicio12_2() {
    let students = [  { name: "Steve" },
        { name: "Mike" },
        { name: "John" }];
    let lista = students.map(student => student.name);

    alert(`La lista de nombre es  ${lista}` );
}

function ejercicio13_2() {
let obj = {likes: 2, dislikes: 3, followers: 10};
    
    let obj2 = () => Object.entries(obj);
    resultante = obj2(obj)
    alert(`${JSON.stringify(resultante)}}`);
}

function ejercicio14_2() {
    let n = prompt("Ingrese los numero a sumar");

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;  
    }
    alert(`la suma de los cuadrados es  ${sum}` );
}

function ejercicio15_2() {
    let matriz = [];
    let matriz2 = [];     
    let input = prompt("Ingrese números separados por comas:");
    let numeros = input.split(",");
    for (let numero of numeros) {
        matriz.push(Number(numero.trim())); 
    }
    let length = matriz.length; 
    matriz2 = matriz.map(num => num * length);
    alert(`${JSON.stringify(matriz2)}`);

}

function ejercicio16_2() {
    let numero = parseFloat(prompt("Ingresa el primer número:"));
    let resultado = [];
    for (let i = numero; i >= 0; i--) {
        resultado.push(i);
    }
    alert(`${JSON.stringify(resultado)}`);
}

function ejercicio17_2() {
    let matriz = [];
    let input = prompt("Ingrese números separados por comas:");
    let numeros = input.split(",");
    for (let numero of numeros) {
        matriz.push(Number(numero.trim())); 
    }
    let min = Math.min(...matriz);
    let max = Math.max(...matriz);
    let diferencia = max - min;
    alert(`La diferencia es  ${diferencia}` ); 
}

function ejercicio18_2() {
    let arr = []; 
    let input = prompt("Ingrese elementos separados por comas:");
    let elementos = input.split(",");
    for (let elemento of elementos) {
        let valor = parseFloat(elemento.trim()); 
        if (!isNaN(valor)) {
            arr.push(valor); 
        } else {
            arr.push(elemento.trim());
        }
    }
    let matriz = [];
    matriz = arr.filter(item => typeof item === 'number' && Number.isInteger(item));
    alert(`${JSON.stringify(matriz)}`);
}

function ejercicio19_2() {
    let elemento = parseFloat(prompt("Ingresa número:"));
    let veces = parseFloat(prompt("Ingresa Repeticiones:"));
    let resultado = [];
    for (let i = 0; i < veces; i++) {
        resultado.push(elemento);
    }
    alert(`${JSON.stringify(resultado)}`);
}

String.prototype.vreplace = function(vocalReemplazo) {
    const vocales = /[aeiou]/g;
    return this.replace(vocales, vocalReemplazo);
};

function ejercicio20_2() {
    let texto = "apples and bananas";
    let resultado = texto.vreplace("u");
    alert(`Cadena reemplazada  ${resultado}` ); 
}

function ejercicio21_2() {
    let sentence = prompt("Ingresar una cadena de texto que lleve Nemo");
    let palabras = sentence.split(' ');
    let posicion = palabras.findIndex(palabra => palabra === "Nemo");
    if (posicion !== -1) {
        let ordenPalabra = posicion + 1;
        alert(`I found Nemo at ${ordenPalabra}!` );
    } else {
        alert("Nemo not found :(");
    }
}

function ejercicio22_2() {
    let str = prompt("Ingresar una palabra");
    let palabras = str.split(' ');
    let resultado = palabras.map(palabra => {
        if (palabra.length === 0) {
            return palabra;
        } else {
            let ultimaLetra = palabra.slice(-1).toUpperCase(); 
            return palabra.slice(0, -1) + ultimaLetra; 
        }
    });
    alert(`Palabra modificada ${resultado}` );
}