function ejercicio1(){

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = prompt("Ingrese su edad");
    
    let saludar = (nombre, apellido, edad) => {
        alert("Hola mi nombre es " + nombre + " " + apellido + " y mi edad " + edad+ " años");
    };
    
    saludar(nombre, apellido, edad);

}

function ejercicio2(){
    let numero1 = prompt("Ingrese el primer Numero");
    let numero2 = prompt("Ingrese el segundo Numero");
    let numero3 = prompt("Ingrese el tercer Numero");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    numero3 = parseInt(numero3);

    function sumOfCubes(...numeros) {
        let sumaCubos = 0;
        for (let i = 0; i < numeros.length; i++) {
            sumaCubos += Math.pow(numeros[i], 3);
        }
        return sumaCubos;
    }
    
    let resultado = sumOfCubes(numero1, numero2, numero3);

    alert("La suma de los cubos de los tres números es: " + resultado);
}

function ejercicion4(){
    function sumar(...numeros) {
        let suma = 0;
        for (let numero of numeros) {
            suma += numero;
        }
        return suma;
    }

    console.log(sumar(1, 2, 3)); 
    console.log(sumar(5, 10, 15, 20)); 
    console.log(sumar(2)); 
    console.log(sumar()); 
}

function ejercicio6(){
    function minMax(arr) {
        if (arr.length === 0) {
            return [];
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
    
        return [min, max];
    }
    
    console.log(minMax([1, 2, 3, 4, 5])); 
    console.log(minMax([10, 5, 3, 8, 1])); 
    console.log(minMax([-1, 0, 2, -5, 10])); 
    console.log(minMax([])); 
    }

function ejercicio7(){
    function NumeroTelefono(numero) {
        if (numero.length !== 10) {
            return "Solo debe ingresar exactamente 10 números.";
        }
        let digito_1 = numero.slice(0, 3).join('');
        let digito_2 = numero.slice(3, 6).join('');
        let digito_3 = numero.slice(6, 10).join('');

        return `(${digito_1}) ${digito_2}-${digito_3}`;
    }

    console.log(NumeroTelefono([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
    console.log(NumeroTelefono([0, 9, 8, 7, 6, 5, 4, 3, 2, 1])); 
    
}

function ejercicio8(){

    function numeros(m) {
        let n = [];
        for (let sm of m) {
            let maxNumeros = Math.max(...sm);
            n.push(maxNumeros);
        }

        return n;
    }
    
    console.log(numeros([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); 
    console.log(numeros([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    console.log(numeros([[10, 20], [30, 40, 50], [1]]));

}

function ejercicio10(){
    function toArray(objeto) {

        return Object.entries(objeto);
    }
    
    console.log(toArray({ a: 1, b: 2 }));
}
//ejercicio 11

function getBudgets(personas) {

    let sumaPresupuestos = 0;

    for (let persona of personas) {

        sumaPresupuestos += persona.budget;
    }

    return sumaPresupuestos;
}
console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
]));

//ejercicio 12

function nombres(estudiantes) {
    let nombresEstudiantes = estudiantes.map(estudiante => estudiante.name);
    return nombresEstudiantes;
}

console.log(nombres([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
]));

//ejercicio 13

function lista(objeto) {
   
    return Object.entries(objeto);
}


console.log(lista({
    likes: 2,
    dislikes: 3,
    followers: 10
}));

//ejercicio 18

function lista(arr) {
   
    let filteredArray = arr.filter(elemento => numero.isInteger(elemento));
    return filteredArray;
}

console.log(lista([1, 2, 3, "x", "y", 10])); 

//ejercicio 19

function repetir(elemento, veces) {
   
    let resultado = [];

    
    if (veces <= 0) {
        return resultado; 
    }

   
    for (let i = 0; i < veces; i++) {
        resultado.push(elemento);
    }

    return resultado;
}

console.log(repetir(13, 5));




