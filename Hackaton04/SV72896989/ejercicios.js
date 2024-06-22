//RETO 1

function ejercicio1_reto1(){

    let a = parseFloat(prompt("Ingrese el primer numero"));
    let b = parseFloat(prompt("Ingrese el segundo numero"));
    let suma = a + b;
    alert("La suma de los dos numeros es " + suma);

}

function ejercicio2_reto1(){

    let base = parseFloat(prompt("Ingrese el numero a potenciar"));
    let exponente = parseFloat(prompt("Ingrese el exponente"))
    let potencia = Math.pow(base, exponente);
    alert("La potencia " + base + " elevado a la " + exponente + " es " + potencia)

}

function ejercicio3_reto1(){

    // Como quiero que el usuario ingrese los numeros cuyos cubos se sumaran, pedire que los separe por comas para que ingrese cuantos desee
    let input = prompt("Ingrese los numeros separados por comas");

    // Ahora convertire el string en un array de numeros
    let numbers = input.split(",").map(num => Number(num.trim()));
  
    // Creo la función para el calculo de la suma de los cubos
    const sumOfCubes = (...numbers) => {
      return numbers.reduce(
        (accumulator, currentValue) => accumulator + Math.pow(currentValue, 3),
        0
      );
    };
  
    let resultado = sumOfCubes(...numbers);
  
    alert(`La suma de los cubos de los numeros ingresados es ${resultado}`);
    
}

function ejercicio4_reto1() {

    let base = prompt("Ingrese la base del triangulo");
    base = Number(base);

    let altura = prompt("Ingrese la altura del triangulo:");
    altura = Number(altura);

    let area = (base * altura) / 2;

    alert(`El area del triangulo es ${area}`);

}

function ejercicio5_reto1() {
    let numero_1 = prompt("Ingrese el primer numero");
    let operador = prompt("Ingrese la operación matematica (+, -, /, x, %)");
    let numero_2 = prompt("Ingrese el segundo numero");

    numero_1 = Number(numero_1);
    numero_2 = Number(numero_2);

    let resultado;

    switch (operador) {
        case '+':
            resultado = numero_1 + numero_2;
            break;
        case '-':
            resultado = numero_1 - numero_2;
            break;
        case '/':
            resultado = numero_1 / numero_2;
            break;
        case 'x':
            resultado = numero_1 * numero_2;
            break;
        case '%':
            resultado = numero_1 % numero_2;
            break;
        default:
            resultado = "El parametro no es reconocido";
            break;
    }

    alert(`El resultado es ${resultado}`);
}

//RETO 2

function ejercicio1_reto2() {
    
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = prompt("Ingrese su edad");
    
    const mensaje = (nombre, apellido, edad) => {
        return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
    };
   
    alert(mensaje(nombre, apellido, edad));

}

function ejercicio2_reto2(){

    // Como quiero que el usuario ingrese los numeros cuyos cubos se sumaran, pedire que los separe por comas para que ingrese cuantos desee
    let input = prompt("Ingrese los numeros separados por comas");

    // Ahora convertire el string en un array de numeros
    let numbers = input.split(",").map(num => Number(num.trim()));
  
    // Creo la función para el calculo de la suma de los cubos
    const sumOfCubes = (...numbers) => {
      return numbers.reduce(
        (accumulator, currentValue) => accumulator + Math.pow(currentValue, 3),
        0
      );
    };
  
    let resultado = sumOfCubes(...numbers);
  
    alert(`La suma de los cubos de los numeros ingresados es ${resultado}`);
    
}

function ejercicio3_reto2(){
    
    const typeValue = (valor) => typeof valor;
 
    // Como prompt cambia cualquier valor que ingrese el usuario a string, opte porque el parametro se modifique desde aqui. Uso "hola" como ejemplo
    alert("El tipo de valor es " + typeValue("hola"));

};
    

