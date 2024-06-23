function sumaNumeros(n1, n2) {

    return console.log("Suma=" + (n1 + n2))
}

function epotencia(n1, potencia) {

    return console.log((n1 ** potencia))
}
let sumCubos=(n1, n2, n3) =>{
    let cubN1 = n1 ** 3;
    let cubN2 = n2 ** 3;
    let cubN3 = n3 ** 3;
    let sumCub = cubN1 + cubN2 + cubN3;
    return alert("La suma de Cubos de: " + n1 + "," + n2 + "," + n3 + "=" + sumCub)
}
function areaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return alert("el Area del Triangulo de base: " + base + " y con Altura :" + altura + "=" + area)
}
function calculator(n1, n2, operador) {
    let resultado = 0
    switch (operador) {
        case "+":
            resultado = n1 + n2;

            break;
        case "-":
            resultado = n1 - n2;

            break;
        case "*":
            resultado = n1 * n2;

            break;
        case "/":
            resultado = n1 / n2;

            break;
        default:
            alert("El Operador no es Correcto")
            break;
    }
    return alert(n1 + " " + operador + " "+n2+"=" + resultado);
}

let arrowConcat=(nombre,edad)=>{
return alert("Hola mi Nombre es :"+nombre+ " y mi Edad es :"+edad);
}
function tipo(valor){
    return typeof valor;
}
function sumar(...numeros){
    return numeros.reduce((acumulador,numero)=>acumulador+numero,0);

}
function filtrarString(valores){
    return valores.filter(valor=>typeof valor==='string');
}

function mayorMenor(arr) {
    if (arr.length === 0) {
        throw new Error("La matriz no debe estar vacía.");
    }
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return alert(["el valor minimo es :"+min+", Valor Maximo es :"+ max]);
}

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

  function maximoArrays(arrays) {
    return arrays.map(subArray => {
        if (subArray.length === 0) {
            throw new Error("Cada submatriz debe contener al menos un número.");
        }
        return Math.max(...subArray);
    });
}
function primerIndiceUltimo(palabra, caracter) {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);

    if (primerIndice === -1) {
        return [-1, -1];
    }
    
    return [primerIndice, ultimoIndice];
}
  
function objectToArray(obj) {
    return Object.entries(obj);
}

const getBudgets = (presupuesto = []) => {
    const sumResult = presupuesto.reduce(
      (accumulator, currentValue) => accumulator + currentValue.capital,
   
      0
    );
   
    return sumResult;
  };
  function nombreEstudiantes(estudiantes) {
  
    if (!Array.isArray(estudiantes)) {
        throw new Error("La entrada debe ser una matriz.");
    }


    return estudiantes.map(estudiante => {
        if (estudiante && estudiante.name) {
            return estudiante.name;
        } else {
            throw new Error("Cada objeto de estudiante debe tener una propiedad 'name'.");
        }
    });
}
function objectToArray(obj) {
    return Object.entries(obj);
}
function sumaCuadrados(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
}
function multiplicarElementos(arr) {
    const elementos = arr.length;
    return arr.map(value => value * elementos);
}
function arrayAtras(n) {
    const result = [];
    for (let i = n; i >= 0; i--) {
        result.push(i);
    }
    return result;
}

function diferenciaMaxMin(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return max - min;
}
function filtraNumeros(arr) {
    return arr.filter(item => Number.isInteger(item));
}
function repeat(valor, cantidad) {
  
    return Array(cantidad).fill(valor);
}
function reemplazarVocales(cadena, vocal) {
    const vocales = /[aeiouAEIOU]/g;
    return cadena.replace(vocales, vocal);
}

function buscaNemo(sentence) {
    const palabras = sentence.split(" ");
    const posicion = palabras.findIndex(palabras => palabras === "Nemo") + 1;
    
    if (posicion > 0) {
        return `se encontro a nemo en : ${posicion}!`;
    } else {
        return "no se encontro a nemo :(";
    }
}

function capLast(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => {
        if (word.length > 0) {
            const lastIndex = word.length - 1;
            return word.slice(0, lastIndex) + word[lastIndex].toUpperCase();
        } else {
            return word;
        }
    });
    return capitalizedWords.join(" ");
}

document.getElementById("Ejercicio1").addEventListener("click", (e) => {
    e.preventDefault();
    let num1 = parseInt(prompt("ingrese Numero1"))
    let num2 = parseInt(prompt("ingrese Numero2"))
    sumaNumeros(num1, num2);
})
document.getElementById("Ejercicio2").addEventListener("click", (e) => {
    e.preventDefault();
    let num1 = parseInt(prompt("ingrese Numero"))
    let potencia = parseInt(prompt("ingrese potencia"))
    epotencia(num1, potencia);
})
document.getElementById("Ejercicio3").addEventListener("click", (e) => {
    e.preventDefault();
    let num1 = parseInt(prompt("ingrese Numero 1"))
    let num2 = parseInt(prompt("ingrese Numero 2"))
    let num3 = parseInt(prompt("ingrese Numero 3"))

    sumCubos(num1, num2, num3);
})
document.getElementById("reto2").addEventListener("click", (e) => {
    e.preventDefault();
    let num1 = parseInt(prompt("ingrese Numero 1"))
    let num2 = parseInt(prompt("ingrese Numero 2"))
    let num3 = parseInt(prompt("ingrese Numero 3"))

    sumCubos(num1, num2, num3);
})
document.getElementById("Ejercicio4").addEventListener("click", (e) => {
    e.preventDefault();
    let bas = parseInt(prompt("ingrese Base del Triangulo"))
    let alt = parseInt(prompt("ingrese Altura del Triandulo"))


    areaTriangulo(bas, alt);
})
document.getElementById("Ejercicio5").addEventListener("click", (e) => {
    e.preventDefault();
    let num1 = parseInt(prompt("ingrese Numero 1"))
    let num2 = parseInt(prompt("ingrese numeroc2"))
    let oper= prompt("ingrese Operador +,-,*,/")


    calculator(num1,num2,oper);
})
document.getElementById("reto1").addEventListener("click", (e) => {
    e.preventDefault();
    let nom= prompt("ingrese su Nombre")
    let edad= prompt("ingrese su Edad")
    arrowConcat(nom,edad);
})

document.getElementById("reto3").addEventListener("click", (e) => {
    e.preventDefault();
    
   alert(tipo(45));
   alert(tipo("HOLA"));
   alert(tipo(true));
   alert(tipo(Function()));
})
document.getElementById("reto5").addEventListener("click", (e) => {
    e.preventDefault();
    let datos=prompt("ingrese valores separados por ,")
    let arrayValores=datos.split(',').map(valor=>valor.trim());
    let soloString=filtrarString(arrayValores);
    alert(soloString.join(','))
})
/**formatPhoneNumber */
document.getElementById("reto6").addEventListener("click", (e) => {
    e.preventDefault();
    let datos=prompt("ingrese valores separados por ,")
    const cadenaNumeros = datos.split(",").map(str => str.trim());
    const numeros = cadenaNumeros.map(Number);
    if (numeros.some(isNaN)) {
        throw new Error("Todos los valores ingresados deben ser números válidos.");
    }
    try {
        
        
        mayorMenor(numeros);
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
})
document.getElementById("reto7").addEventListener("click", (e) => {
    e.preventDefault();
    let datos=prompt("ingrese valores separados por ,")
    let cadena = datos.split(",").map(str => str.trim());
    try {
        const result = formatPhoneNumber(cadena);
       
        alert(result);
      } catch (err) {
        alert.error("se presento un error: ", err.message);
      }

})

document.getElementById("reto8").addEventListener("click", (e) => {
    e.preventDefault();
    let datos=prompt("ingrese primer array valores separados por ,")
    let cadena = datos.split(",").map(str => str.trim());
    let numeros = cadena.map(Number);
    let datos1=prompt("ingrese segundo array valores separados por ,")
    let cadena1 = datos1.split(",").map(str => str.trim());
    let numeros1= cadena1.map(Number);
    try {
        const maxNumbers = maximoArrays([numeros,numeros1]);
        alert(maxNumbers); // Salida: [9, 8, 10, 15]
    } catch (error) {
        console.error(error.message);
    }

})
document.getElementById("reto9").addEventListener("click", (e) => {
    e.preventDefault();
    let palabra=prompt("ingrese Palabra")
    let caracter=prompt("ingrese Caracter a Buscar")
   alert (primerIndiceUltimo(palabra,caracter))
})
document.getElementById("reto10").addEventListener("click", (e) => {
    e.preventDefault();
    const obj = { a: 1, b: 2 };
const array = objectToArray(obj);
alert(array);
})

document.getElementById("reto11").addEventListener("click", (e) => {
    e.preventDefault();
    const resultBudgets = getBudgets([
        { name: "John", age: 21, capital: 23000 },
        { name: "Steve", age: 32, capital: 40000 },
        { name: "Martin", age: 16, capital: 2700 },
      ]);
      alert(resultBudgets)
})

document.getElementById("reto12").addEventListener("click", (e) => {
    e.preventDefault();
    const students = [
        { name: 'Juan', age: 20 },
        { name: 'Ana', age: 22 },
        { name: 'Carlos', age: 21 }
    ];
      alert(nombreEstudiantes(students));
})
document.getElementById("reto13").addEventListener("click", (e) => {
    e.preventDefault();
    const exampleObject = {
        likes: 2,
        dislikes: 3,
        followers: 10
    };
      alert(objectToArray(exampleObject));
})

document.getElementById("reto14").addEventListener("click", (e) => {
    e.preventDefault();
   let n1 =parseInt(prompt("ingrese Numero"))
      alert(sumaCuadrados(n1));
})

document.getElementById("reto15").addEventListener("click", (e) => {
    e.preventDefault();
    let datos1=prompt("ingrese valores separados por ,")
    let cadena1 = datos1.split(",").map(str => str.trim());
    let numeros1= cadena1.map(Number);
    alert(multiplicarElementos(numeros1));
})
document.getElementById("reto16").addEventListener("click", (e) => {
    e.preventDefault();
    let dato=parseInt(prompt("ingrese Numero"))
    
    alert(arrayAtras(dato));
})
document.getElementById("reto17").addEventListener("click", (e) => {
    e.preventDefault();
    let datos1=prompt("ingrese valores separados por ,")
    let cadena1 = datos1.split(",").map(str => str.trim());
    let numeros1= cadena1.map(Number);
    alert(diferenciaMaxMin(numeros1));
})
document.getElementById("reto18").addEventListener("click", (e) => {
    e.preventDefault();
 
    
    alert(filtraNumeros([1, "a", "b", 0, 15]));
})
document.getElementById("reto19").addEventListener("click", (e) => {
    e.preventDefault();
    let valor=prompt("ingrese elemnto a repetir")
    let can=parseInt(prompt("ingrese cantidad de repeticion"))
    
    alert(repeat(valor,can));
})
document.getElementById("reto20").addEventListener("click", (e) => {
    e.preventDefault();
    let cadena=prompt("ingrese cadena")
    let vocal=prompt("ingrese vocal a reemplazar")
    
    alert(reemplazarVocales(cadena,vocal));
})
document.getElementById("reto21").addEventListener("click", (e) => {
    e.preventDefault();
    let cadena=prompt("ingrese cadena")
 
    
    alert(buscaNemo(cadena));
})

document.getElementById("reto22").addEventListener("click", (e) => {
    e.preventDefault();
    let cadena=prompt("ingrese cadena")
 
    
    alert(capLast(cadena));
})
