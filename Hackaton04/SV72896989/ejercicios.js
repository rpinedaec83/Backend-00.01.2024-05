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