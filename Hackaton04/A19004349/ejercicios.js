function ejercicio1() {
    let a
    let b
    a = prompt('Ingerese primer numero')
    b = prompt('Ingerese segundo numero')
    a = parseInt(a)
    b = parseInt(b)
    alert(sumanumero(a, b))

}
const sumanumero = ((a, b) => {
    return a + b
})

function ejercicio2() {
    let a
    let b
    a = prompt('Ingerese el numero a potenciar')
    b = prompt('Ingerese la potencia')
    a = parseInt(a)
    b = parseInt(b)
    alert(potenciar(a, b))

}
const potenciar = ((a, b) => {
    return Math.pow(a, b)
})


function ejercicio2() {
    let a
    let b
    a = prompt('Ingerese el numero a potenciar')
    b = prompt('Ingerese la potencia')
    a = parseInt(a)
    b = parseInt(b)
    alert(potenciar(a, b))
}

function ejercicio3() {
    let num = []
    let seguir
    let continuar = true
    let total = 0
    while (continuar) {
        num.push(parseInt(prompt('Agregue un numero.')))
        seguir = prompt('Si desea agregar otro escriba "SI" caso contrario no escriba nada')
        if (seguir != 'SI') {
            continuar = false
        }

    }
    num.forEach(element => {
        total = total + (potenciar(element, 3))
    });
    alert(total)
}


function ejercicio4() {
    let a
    let b

    a = parseInt(prompt('Ingrese altura'))
    b = parseInt(prompt('Ingrese base'))

    alert((a * b) / 2)
}


function ejercicio5() {
    let a
    let b
    let op
    let total
    a = parseInt(prompt('Ingrese numero a'))
    b = parseInt(prompt('Ingrese numero b'))

    op = prompt('Ingrese una operacion matematica (+,-,/,x,%) ')
    switch (op) {
            case '+':
                total = a+b
                break;
            case '-':
                total = a-b
            break; case '/':
                total = a/b
            break; case 'x':
                total = a*b
            break; case '%':
                total = a%b
            break;

        default:
            alert('El parámetro no es reconocido')
            break;
    }
    if (total) {
        alert(total)

    }

}


function ejercicio1r2() {
    let nombre
    let apellidos
    let edad

    nombre = prompt('Ingrese un nombre')
    apellidos = prompt('Ingrese apellidos')
    edad = prompt('Ingrese su edad')
    

    saludo(nombre,apellidos,edad)
}
const saludo = ((nombre,apellidos,edad)=>
    {
        alert('Hola, soy '+nombre+ ' ' + apellidos + ' y mi edad es ' + edad + '')
    })


    function ejercicio3r2() {
      
        let valor
        valor = prompt('Ingrese un valor')
        alert(tipoDeValor(valor))
    }
    
    const tipoDeValor = ((valor) => {
        return typeof valor;
    })

    function ejercicio4r2() {
      
        let num = []
        let seguir
        let continuar = true
        let total = 0
        while (continuar) {
            num.push(parseInt(prompt('Agregue un numero.')))
            seguir = prompt('Si desea agregar otro escriba "SI" caso contrario no escriba nada')
            if (seguir != 'SI') {
                continuar = false
            }
    
        }
         
        alert('La suma de los números ingresados es: ' + sumarTodos(...num));

    }
    

    const sumarTodos = ((...numeros) => {
        return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
    })


   function ejercicio5r2() {
        const valores = [1, 'Hola',true,'hola'];

            alert(valores.filter(elemento => typeof elemento === 'string'))
        }


   function ejercicio6r2() {

    let matriz = [1, 2, 3, 4, 5];

    let minimo = Math.min(...matriz);
    let maximo = Math.max(...matriz);

        alert ([minimo,maximo])
    }    

function ejercicio7r2(){

    try {
        const result = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
       
        alert(result);
      } catch (err) {
        alert("se presento un error: ", err.message);
      } 
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

      function ejercicio8r2(){

        try {
            const a = [4, 2, 7, 1];
            const b = [20, 70, 40, 90];
            const c = [1, 2, 0];

      const resultLarges = findLargestNums([a, b, c]);
      alert(resultLarges)
          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }
      const findLargestNums = (matriz = []) => {
        return matriz.map((subArray) => Math.max(...subArray));
      };
   

      function ejercicio9r2(){

        try {
            alert(charIndex("hello", "l"));
            alert(charIndex("circumlocution", "c"));

          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }

    function charIndex(palabra, caracter) {
        const primerIndice = palabra.indexOf(caracter);
        const ultimoIndice = palabra.lastIndexOf(caracter);
    
        if (primerIndice === -1) {
            return [-1, -1];
        }
    
        return [primerIndice, ultimoIndice];
    }

    function ejercicio10r2(){

        try {
            alert(toArray({ a: 1, b: 2 }));
            alert(Object.entries({ a: 1, b: 2 }));

          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }
        
    const toArray = (obj = {}) => {
        const result = [];
       
        for (const clave in obj) {
          result.push([clave, obj[clave]]);
        }
        return result;
      };
       
      const getBudgets = (budgets = []) => {
        const sumResult = budgets.reduce(
          (accumulator, currentValue) => accumulator + currentValue.budget,
       
          0
        );
       
        return sumResult;
      };
      function ejercicio11r2(){
     
        try {
            let result = getBudgets([
                { name: "John", age: 21, budget: 23000 },
                { name: "Steve", age: 32, budget: 40000 },
                { name: "Martin", age: 16, budget: 2700 },
              ])
              alert (result)

          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }
    function ejercicio12r2(){
     
        try {
            const estudiantes = [
                { name: "Steve" },
                { name: "Mike" },
                { name: "John" }
            ];
              alert (getStudentNames(estudiantes))

          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }

    function getStudentNames(estudiantes) {
        return estudiantes.map(estudiante => estudiante.name);
    }

    function ejercicio13r2(){
     
        try {
            const objeto = {
                likes: 2,
                dislikes: 3,
                followers: 10
            };
            
            alert(Object.entries(objeto))

          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }

    function ejercicio14r2(){
     
        try {
            alert(squaresSum(3));

            
          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }

    function squaresSum(n) {
        let suma = 0;
        for (let i = 1; i <= n; i++) {
            suma += i * i;
        }
        return suma;
    }
       
    function ejercicio15r2(){
     
        try {
            alert(multiplyByLength([2, 3, 1, 0])); 

            
          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }

    function multiplyByLength(arr) {
        const longitud = arr.length;
        return arr.map(valor => valor * longitud);
    }
   
    function ejercicio16r2(){
     
        try {
            let numero = parseInt(prompt('Ingrese un numero'))
            alert(countdown(numero));

            
          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }

    function countdown(numero) {
        const cuentaRegresiva = [];
        for (let i = numero; i >= 0; i--) {
            cuentaRegresiva.push(i);
        }
        return cuentaRegresiva;
    }

    function diffMaxMin(arr) {
        const minimo = Math.min(...arr);
        const maximo = Math.max(...arr);
        return maximo - minimo;
    }
    function ejercicio17r2(){
     
        try {
        alert(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

            
          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }

    function ejercicio18r2(){
     
        try {

        let arr = [1, 2, 3, "x", "y", 10]

        alert(arr.filter(elemento => Number.isInteger(elemento)))
          
            
          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }

    function ejercicio19r2(){
     
        try {

        alert(repeat(13, 5)); 

            
          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }
    
    function repeat(elemento, veces) {
        const resultado = [];
        for (let i = 0; i < veces; i++) {
            resultado.push(elemento);
        }
        return resultado;
    }

    function ejercicio20r2(){
     
        try {

           alert("apples and bananas".vreplace("u"));

            
          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }

    String.prototype.vreplace = function(vocal) {
        return this.replace(/[aeiou]/g, vocal);
    };

    function ejercicio21r2(){
    
        try {

            alert(findNemo("I am finding Nemo !"));
            
          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }
    function findNemo(cadena) {
        const palabras = cadena.split(' ');
        const posicion = palabras.indexOf('Nemo');
    
        if (posicion !== -1) {
            return `I found Nemo at ${posicion + 1}!`;
        } else {
            return "Nemo not found :(";
        }
    }
    function ejercicio22r2(){
    
        try {

          alert(capLast("hello")); // "hellO"
            
          } catch (err) {
            alert("se presento un error: ", err.message);
          } 
    }
    function capLast(cadena) {
        const palabras = cadena.split(' ');
    
        const palabrasCapitalizadas = palabras.map(palabra => {
            const ultimaLetra = palabra.slice(-1).toUpperCase();
            const restoPalabra = palabra.slice(0, -1);
            return restoPalabra + ultimaLetra;
        });
    
        return palabrasCapitalizadas.join(' ');
    }