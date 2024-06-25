function ejercicio1(){

    let numero  = parseInt(prompt("Escribe un numero"));
    if(numero>99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero tiene NO 3 digitos")
    }
}

function ejercicio2(){

    let numero  = parseInt(prompt("Escribe un numero"));
    if(numero< 0){
        alert("Este numero es negativo")
    }else{
        alert("Este numero tiene NO es negativo")
    }
}
function ejercicio3(){

  let numero = prompt("Ingrese un número:");
  numero = parseInt(numero);
  let numeroStr = numero.toString();
  let ultimoCaracter = numeroStr.charAt(numeroStr.length - 1);
  
  if (ultimoCaracter === '4') {
    alert("El número termina en 4.");
  } else {
    alert("El número no termina en 4.");
  }
}

function ejercicio4(){

    let numero1 = prompt("Ingrese primer número:");
    let numero2 = prompt("Ingrese segundo número:");
    let numero3 = prompt("Ingrese tercer número:");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    numero3 = parseInt(numero3);

    let array = [numero1,numero2,numero3]
    array.sort(function(a,b){
       return a-b
    })
    alert("Los numero en orden son" + array.join(", "));

  }

  function ejercicio5(){

    let numero1 = prompt("Ingrese el numero de zapatos a comprar:");
    let precio = 80
    let total
    numero1 = parseInt(numero1);

    if (numero1 > 10 && numero1 < 20) {
        total = (precio * numero1) - ((precio * numero1) * 0.1);
    } else if (numero1 >= 20 && numero1 < 30) { 
        total = (precio * numero1) - ((precio * numero1) * 0.2);
    } else if (numero1 >= 30) {
        total = (precio * numero1) - ((precio * numero1) * 0.40); 
    } else {
        total = numero1 * precio;
    }
    


    alert("El total es "+total);

  }
  function ejercicio6(){

    let numero1 = prompt("Ingrese el numero de horas trabajadas");
    let total
    numero1 = parseInt(numero1);
    if (numero1 <=40) {
        total = numero1*20
    }else
    {
        total = numero1*25
    }


    alert("El total es "+total);

  }
  function ejercicio7(){

    let numero1 = prompt("Ingrese el importe total");
    let Membresia = prompt("Ingrese el tipo de membresia: A,B o C");

    let total
    let descuento
    numero1 = parseInt(numero1);
    switch (Membresia) {
        case Membresia === "A" :
          descuento = 0.1  
            break;
        case Membresia ==="B" :
          descuento = 0.15  
            break;
        case Membresia ==="C" :
          descuento = 0.2  
            break;
    
        default:
            descuento = 0
            break;
    }
    total = numero1 - (numero1 * descuento)

    alert("El total es "+total);

  }
  function ejercicio8(){

    let nota1 = prompt("Ingrese la nota 1");
    let nota2 = prompt("Ingrese la nota 2");
    let nota3 = prompt("Ingrese la nota 3");
    let promedio
    nota1 = parseFloat(nota1)
    nota2 = parseFloat(nota2)
    nota3 = parseFloat(nota3)

    promedio = (nota1+nota2+nota3)/3
    if (promedio >= 10.5) {
        alert("Aprobo - el promedio es "+promedio)        
    }else
    {
        alert("No Aprobo el promedio es "+promedio)      
    }
    
  }
  function ejercicio9(){

    let sueldo = prompt("Ingresar sueldo del trabajador");
    let nuevosueldo
    
    
    sueldo = parseFloat(sueldo)
    if (sueldo >= 2000)
        {
            nuevosueldo = sueldo+(sueldo *0.05)
        } else{
            nuevosueldo = sueldo+(sueldo *0.1)
        }
    alert("El nuevo sueldo es: "+nuevosueldo)
  }

  function ejercicio10(){

    let numero = prompt("Ingrese un numero");
    numero = parseInt(numero)
    if (numero%2 ===0) {
        alert("El numero es par")
    }else{
        alert("El numero es impar")

    }
  }

  function ejercicio11(){

     let numero1 = prompt("Ingrese primer número:");
    let numero2 = prompt("Ingrese segundo número:");
    let numero3 = prompt("Ingrese tercer número:");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    numero3 = parseInt(numero3);

    let array = [numero1,numero2,numero3]
    array.sort(function(a,b){
       return a-b
    })
    alert("El mayor es: " + array[2]);

  }
  function ejercicio12(){

    let numero1 = prompt("Ingrese primer número:");
   let numero2 = prompt("Ingrese segundo número:");
   

   numero1 = parseInt(numero1);
   numero2 = parseInt(numero2);


   let array = [numero1,numero2]
   array.sort(function(a,b){
      return a-b
   })
   alert("El mayor es: " + array[1]);

 }
 function ejercicio13(){

    let letra = prompt("Ingrese una letra:").toLowerCase();

    switch (letra) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            alert(letra + " es una vocal.");
            break;
        default:
            alert(letra + " no es una vocal.");
            break;
    }
    

 }
 function ejercicio14(){

    let numero = parseInt(prompt("Ingrese un entero positivo del 1 al 9:"));

    if (numero < 1 || numero > 9) {
        alert("El número ingresado está fuera del rango permitido.");
    } else {
        let esPrimo = true;
    
        if (numero === 1) {
            esPrimo = false; 
        } else {
            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }
    
        if (esPrimo) {
            alert(numero + " es un número primo.");
        } else {
            alert(numero + " no es un número primo.");
        }
    }
    
    

 }

 function ejercicio15(){

    let centimetros = parseFloat(prompt("Ingrese la cantidad en centímetros:"));
    let libras = parseFloat(prompt("Ingrese la cantidad en libras:"));

    let pulgadas = centimetros / 2.54;

    let kilogramos = libras / 2.20462;
    
    alert(centimetros + " centímetros son " + pulgadas.toFixed(2) + " pulgadas.");
    alert(libras + " libras son " + kilogramos.toFixed(2) + " kilogramos.");

 }
 function ejercicio16(){

    let numero = parseInt(prompt("Ingrese un entero positivo del 1 al 9:"));

    if (numero < 1 || numero > 9) {
        alert("El número ingresado está fuera del rango permitido.");
    } else {
        let esPrimo = true;
    
        if (numero === 1) {
            esPrimo = false; 
        } else {
            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }
    
        if (esPrimo) {
            alert(numero + " es un número primo.");
        } else {
            alert(numero + " no es un número primo.");
        }
    }
 }
 function ejercicio17(){

    let horaIngresada = prompt("Ingrese la hora en formato HH:MM:SS:");
    
   
    let partesHora = horaIngresada.split(":");
    let horas = parseInt(partesHora[0]);
    let minutos = parseInt(partesHora[1]);
    let segundos = parseInt(partesHora[2]);


    let fecha = new Date();
    fecha.setHours(horas);
    fecha.setMinutes(minutos);
    fecha.setSeconds(segundos);

    fecha.setSeconds(fecha.getSeconds() + 1);


    let nuevasHoras = fecha.getHours().toString().padStart(2, '0');
    let nuevosMinutos = fecha.getMinutes().toString().padStart(2, '0');
    let nuevosSegundos = fecha.getSeconds().toString().padStart(2, '0');


    alert("La hora dentro de un segundo será: " + nuevasHoras + ":" + nuevosMinutos + ":" + nuevosSegundos);

 }

 function ejercicio18(){

    let cantidad = parseInt(prompt("Ingrese la cantidad de CDs a comprar:"));

    let precioPorUnidad;

    if (cantidad >= 1 && cantidad <= 9) {
        precioPorUnidad = 10;
    } else if (cantidad >= 10 && cantidad <= 99) {
        precioPorUnidad = 8;
    } else if (cantidad >= 100 && cantidad <= 499) {
        precioPorUnidad = 7;
    } else if (cantidad >= 500) {
        precioPorUnidad = 6;
    } else {
        alert("Cantidad inválida. Por favor ingrese un número positivo.");
        return;
    }

    let precioTotal = cantidad * precioPorUnidad;

    let gananciaVendedor = precioTotal * 0.0825;


    alert("El precio total para el cliente es: $" + precioTotal.toFixed(2));
    alert("La ganancia para el vendedor es: $" + gananciaVendedor.toFixed(2));

 }

 function ejercicio19(){

    let identificador = parseInt(prompt("Ingrese el número identificador del empleado (1-Cajero, 2-Servidor, 3-Preparador de mezclas, 4-Mantenimiento):"));
    
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6):"));
    
    if (diasTrabajados < 0  || diasTrabajados > 6) {
        alert("La cantidad de días trabajados debe ser entre 0 y 6.");
        return;
    }

    let salarioDiario;

    switch (identificador) {
        case 1:
            salarioDiario = 56;
            break;
        case 2:
            salarioDiario = 64;
            break;
        case 3:
            salarioDiario = 80;
            break;
        case 4:
            salarioDiario = 48;
            break;
        default:
            alert("Identificador de empleado inválido. Por favor ingrese un número entre 1 y 4.");
            return;
    }

    let salarioTotal = salarioDiario * diasTrabajados;
    alert("El salario total que se debe pagar al empleado es: $" + salarioTotal.toFixed(2));

 }

 function ejercicio20(){

    let num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
    let num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
    let num4 = parseInt(prompt("Ingrese el cuarto número entero positivo:"));

    let cantidadPares = 0;
    if (num1 % 2 === 0) cantidadPares++;
    if (num2 % 2 === 0) cantidadPares++;
    if (num3 % 2 === 0) cantidadPares++;
    if (num4 % 2 === 0) cantidadPares++;

    let mayor = num1;
    if (num2 > mayor) mayor = num2;
    if (num3 > mayor) mayor = num3;
    if (num4 > mayor) mayor = num4;

    let resultado1 = (num3 % 2 === 0) ? num2 * num2 : null;

    let resultado2 = (num1 < num4) ? (num1 + num2 + num3 + num4) / 4 : null;


    let resultado3 = (num2 > num3) ? (num3 % num1 === 0) : null;

    alert("Cantidad de números pares: " + cantidadPares);
    alert("El número más grande es: " + mayor);
    if (resultado1 !== null) {
        alert("El cuadrado del segundo número es: " + resultado1);
    }
    if (resultado2 !== null) {
        alert("La media de los 4 números es: " + resultado2);
    }
    if (resultado3 !== null) {
        alert("¿El tercer número es divisible por el primero? " + resultado3);
    }

 }
 function ejercicio21(){

    let num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
    let num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
    let num4 = parseInt(prompt("Ingrese el cuarto número entero positivo:"));

    let cantidadPares = 0;
    if (num1 % 2 === 0) cantidadPares++;
    if (num2 % 2 === 0) cantidadPares++;
    if (num3 % 2 === 0) cantidadPares++;
    if (num4 % 2 === 0) cantidadPares++;

    let mayor = num1;
    if (num2 > mayor) mayor = num2;
    if (num3 > mayor) mayor = num3;
    if (num4 > mayor) mayor = num4;

    let resultado1 = (num3 % 2 === 0) ? num2 * num2 : null;

    let resultado2 = (num1 < num4) ? (num1 + num2 + num3 + num4) / 4 : null;


    let resultado3 = (num2 > num3) ? (num3 % num1 === 0) : null;

    alert("Cantidad de números pares: " + cantidadPares);
    alert("El número más grande es: " + mayor);
    if (resultado1 !== null) {
        alert("El cuadrado del segundo número es: " + resultado1);
    }
    if (resultado2 !== null) {
        alert("La media de los 4 números es: " + resultado2);
    }
    if (resultado3 !== null) {
        alert("¿El tercer número es divisible por el primero? " + resultado3);
    }

 }
 function ejercicio22(){

    let numero = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los primeros números:"));

    if (numero <= 0 || !Number.isInteger(numero)) {
        alert("Por favor ingrese un número entero positivo.");
        return;
    }

    let suma = 0;

    for (let i = 1; i <= numero; i++) {
        suma += i;
    }

    alert("La suma de los primeros " + numero + " números es: " + suma);

 }
 function ejercicio23(){

    let numero = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los números impares menores o iguales a él:"));

    if (numero <= 0 || !Number.isInteger(numero)) {
        alert("Por favor ingrese un número entero positivo.");
        return;
    }

    let suma = 0;

    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
    }
    alert("La suma de los números impares menores o iguales a " + numero + " es: " + suma);


    
 }

 function ejercicio24(){

    let suma = 0;

 for (let i = 2; i <= 1000; i += 2) {
     suma += i;
 }

alert("La suma de todos los números pares hasta 1000 es:", suma);
    
 }
 function ejercicio25(){

    let numero = parseInt(prompt("Ingrese un número entero para calcular su factorial:"));
    let resultado = factorial(numero);
    
   alert(`El factorial de ${numero} es:`, resultado);

    
 }

 function factorial(n) {
   
    if (n < 0 || !Number.isInteger(n)) {
        return "El factorial es indefinido para números negativos o no enteros.";
    }

   
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

function ejercicio26(){

    let dividendo = parseInt(prompt("Ingrese el dividendo (número positivo):"));
    let divisor = parseInt(prompt("Ingrese el divisor (número positivo):"));

    let resultado = divisionRestasSucesivas(dividendo, divisor);

   alert(`Resultado de la división ${dividendo} / ${divisor}:`);
   alert("Cociente:", resultado.cociente);
   alert("Resto:", resultado.resto);
    
 }
 function divisionRestasSucesivas(dividendo, divisor) {
    // Validar que los números sean positivos
    if (dividendo < 0 || divisor <= 0) {
        return "Error: Los números deben ser positivos.";
    }

    let cociente = 0;
    let resto = dividendo;

    // Calcular cociente y resto usando restas sucesivas
    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    return {
        cociente: cociente,
        resto: resto
    };
}

function ejercicio27(){

    let suma = 0;
    let cantidadNumeros = 0;

    while (true) {
        let numero = parseInt(prompt("Ingrese un número positivo (ingrese un número negativo para terminar):"));

        if (numero < 0) {
            break; // Terminar el bucle si se ingresa un número negativo
        }

        suma += numero;
        cantidadNumeros++;
    }

    if (cantidadNumeros === 0) {
       alert("No se ingresaron números positivos.");
        return;
    }

    let media = suma / cantidadNumeros;
   alert(`La media de los números ingresados es: ${media}`);
    
 }
 function ejercicio28(){

    let suma = 0;
    let cantidadNumeros = 0;

    while (true) {
        let numero = parseInt(prompt("Ingrese un número positivo (ingrese un número negativo para terminar):"));

        if (numero < 0) {
            break; // Terminar el bucle si se ingresa un número negativo
        }

        suma += numero;
        cantidadNumeros++;
    }

    if (cantidadNumeros === 0) {
       alert("No se ingresaron números positivos.");
        return;
    }

    let media = suma / cantidadNumeros;
   alert(`La media de los números ingresados es: ${media}`);
    
 }

 function ejercicio29(){

    let suma = 0;
    let numero = 1;
   
    while (numero <= 100) {
        suma += numero;
        numero++;
    }
   
    alert("La suma es: "+ suma)
    
 }

 function ejercicio30(){

    let suma = 0;

    for (let numero = 1; numero <= 100; numero++) {
        suma += numero;
    }

    alert("La suma es: "+ suma)
    
 }

