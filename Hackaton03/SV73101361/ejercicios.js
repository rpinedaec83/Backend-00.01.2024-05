//   1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.


function ejercicio1(){

    let numero  = parseInt(prompt("Escribe un numero"));
    if(numero>99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero tiene NO 3 digitos")
    }
}
// 2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

function ejercicio2(){
    let numero=parseInt(prompt("escriba un numero"));
    if (numero>0){
alert("El numero es positivo")
    }else{
    alert("Numero Negativo")
}

    }

// 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

    function ejercicio3(){
     let numero=prompt("ingrese Numero");
     let longitud=numero.length;
     let cad=numero.substring(longitud-1,longitud)
     if (cad==4){
        alert("El Numero Termina en 4")
    } else{
        alert("El Numero  no Termina en 4")
        }
    }

// 4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

    function ejercicio4(){
        let num1=parseInt(prompt("Ingrese Primer Numero"));
        let num2=parseInt(prompt("Ingrese segundo Numero"));
        let num3=parseInt(prompt("Ingrese tercer Numero"));

        if (num1>num2){
            temp=num1;
            num1=num2;
            num2=temp;
         }else if(num1>num3){
            temp=num1;
            num1=num3;
            num3=temp;
         }else if(num2>num3){
            temp=num2;
            num2=num3;
            num3=temp;

         }
         alert("los Numero Ordenados son "+num1+" - "+num2+" - "+num3)
    }

// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.


function ejercicio5(){
    let numZapatos=parseInt(prompt("Ingrese el número de zapatos que desea comprar:"));
    let desc=0;
    let precioTotal;

    if (numZapatos > 30) {
         descuento = 0.4;
    } else if (numZapatos > 20) {
         descuento = 0.2;
    } else if (numZapatos > 10) {
         descuento = 0.1;
    }

    precioTotal = numZapatos*80*(1-desc);
    alert("El precio a pagar por los zapatos es: "+ precioTotal)
}

// const price = 100; // Asigna un valor de precio para cada zapato.

//     function ejercicio5(cantidad) {
//       let descuento = 0;

//       if (cantidad > 30) {
//         descuento = 0.4;
//       } else if (cantidad > 20) {
//         descuento = 0.2;
//       } else if (cantidad > 10) {
//         descuento = 0.1;
//       }

//       const precioTotalSinDescuento = cantidad * price;
//       const precioTotalConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento * descuento);

//       return precioTotalConDescuento;
//     }

//     function ejecutarEjercicio() {
//       const cantidadDeZapatos = parseInt(document.getElementById('cantidad').value);
//       const precioAPagar = ejercicio5(cantidadDeZapatos);

//       document.getElementById('resultado').textContent = `Precio a pagar: ${precioAPagar}`;
//       console.log(precioAPagar);
//     }

// 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

function ejercicio6(){
    let horasTrabajadas=parseInt(prompt("Ingrese el número de horas trabajadas"));
    let pago;

    if (horasTrabajadas <= 40){
        pago = 20*horasTrabajadas;
    }
    else {
        pago =20*horasTrabajadas + 25*(horasTrabajadas-40);
    }
     alert("El sueldo semanal del trabajador es "+pago)
}


/* 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento
*/

const ejercicio7 = () => {
    let montoParcial = parseFloat(prompt("Ingrese el monto de compra:"));
    let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B, C):").toUpperCase();
    let desc = 0;
    let precioTotal;
  
    switch (tipoMembresia) {
      case 'A':
        desc = 0.10;
        break;
      case 'B':
        desc = 0.15;
        break;
      case 'C':
        desc = 0.20;
        break;
      default:
        console.log("Tipo de membresía no válido, no aplica descuento");
        alert("Tipo de membresía no válido, no aplica descuento");
        desc = 0;
        break;
    }
  
    precioTotal = montoParcial * (1 - desc);
    alert("Según su tipo de membresía, su monto total es: " + precioTotal.toFixed(2));
  };

  
// const ejercicio7 = (precioTotal, tipoMembresia) => {
//     let descuento = 0;
   
//     tipoMembresia= tipoMembresia.toLocaleUpperCase()
   
//     switch (tipoMembresia) {
//       case "A":
//         descuento = 0.1;
//         break;
//       case "B":
//         descuento = 0.15;
//         break;
//       case "C":
//         descuento = 0.2;
//       default:
//         console.log("tipo de membresia no valido, no aplica descuento");
//     }
   
//     const precioConDescuento = precioTotal - precioTotal * descuento;
   
//     return precioConDescuento;
//   };
   
//   let precioInput = parseFloat(prompt("Ingrese el precio total de la compra:"));
   
//   let tipoMembresia = prompt("Ingrese el tipo de menbresia (A,B,C):");
   
//   let precioFinal = calcularPrecioConDescuento(precioInput, tipoMembresia);
   
//   console.log("precio con descuento a pagar es igual a: " + precioFinal);


// 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.


function ejercicio8(){
    let nota1=parseInt(prompt("Ingrese la nota1:"));
    let nota2=parseInt(prompt("Ingrese la nota2:"));
    let nota3=parseInt(prompt("Ingrese la nota3:"));

    let promedio= (nota1+nota2+nota3)/3;

    if (promedio >= 11){
        alert("Usted ha aprobado el curso con:"+ promedio)
    }
    else {
        alert("Usted ha reprobado el curso con:"+ promedio)
    }
}


// 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

const ejercicio9 = () => {
    // Obtener el salario actual del trabajador
    let salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));
    let aumento;
  
    // Determinar el aumento basado en el salario actual
    if (salarioActual > 2000) {
      aumento = salarioActual * 0.05;
    } else {
      aumento = salarioActual * 0.10;
    }
  
    // Calcular el nuevo salario
    let nuevoSalario = salarioActual + aumento;
  
    // Mostrar el resultado
    alert(`El aumento es de: $${aumento.toFixed(2)}\nEl nuevo salario es de: $${nuevoSalario.toFixed(2)}`);
  };
  
// 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.

function ejercicio10() {
    let numero = parseInt(prompt("Ingrese un número:"));
    
    if (numero % 2 === 0) {
      alert("El número " + numero + " es par.");
      console.log("El número " + numero + " es par.");
    } else {
      alert("El número " + numero + " es impar.");
      console.log("El número " + numero + " es impar.");
    }
  }
// const determinarParidad = (numero) => {
//     if (numero % 2 === 0) {
//       return "El numero es par";
//     } else {
//       return "El numero es impar";
//     }
//   };
   
//   let numeroParidad = parseInt(prompt("Ingrese un numero "));
   
//   let resultado = determinarParidad(numeroParidad);
   
//   console.log(resultado);

    // 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

    // 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

    // 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

// 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

// const esPrimo = (numero) => {
//     if (numero <= 1) return false;
//     if (numero <= 3) return true;
//     if (numero % 2 === 0 || numero % 3 == 0) return false;
   
//     for (let i = 5; i * i < numero; i += 6) {
//       if (numero % i === 0 || numero % (i + 2) == 0) return false;
//     }
   
//     return true;
//   };
   
//   const numeroInput = parseInt(prompt("ingrese un numero entre el 1 y 9"));
   
//   if (numeroInput >= 1 && numeroInput <= 9) {
//     const resultado = esPrimo(numeroInput);
   
//     console.log(resultado);
//   } else {
//     console.log("numero ingresado esta fuera del rango");

// 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

function ejercicio15(){
    let horasTrabajadas=parseInt(prompt("Ingrese el número de horas trabajadas"));
    let pago;

    if (horasTrabajadas <= 40){
        pago = 20*horasTrabajadas;
    }
    else {
        pago =20*horasTrabajadas + 25*(horasTrabajadas-40);
    }
     alert("El sueldo semanal del trabajador es "+pago)
}

    // 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

    // 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

    // 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

    //     $10. Si se compran unidades separadas hasta 9.

    //     $8. Si se compran entre 10 unidades hasta 99.

    //     $7. Entre 100 y 499 unidades.

    //     $6. Para mas de 500 unidades.

    //     La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

    // 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

    //     Cajero (56$/día).

    //     Servidor (64$/día).

    //     Preparador de mezclas (80$/día).

    //     Mantenimiento (48$/día).

    //     El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

    // 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

    //     ¿Cuántos números son Pares?

    //     ¿Cuál es el mayor de todos?

    //     Si el tercero es par, calcular el cuadrado del segundo.

    //     Si el primero es menor que el cuarto, calcular la media de los 4 números.

    //     Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

    // 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

    // 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.

    // 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

    // 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

    // 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

    // 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

    // 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

    // 28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

    // 29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.

    // 30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.

    // 31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

    // 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

    // 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

    // 34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.

    // 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

    // 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacc.

    // 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

    // 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

    // 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

    //     Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

    // 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

    //     Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...