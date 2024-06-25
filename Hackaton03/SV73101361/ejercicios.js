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

function ejercicio11() {

    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número"));
    let num3 = parseInt(prompt("Ingrese el tercer número"));
    let mayor = num1;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    if (num2 > mayor) {
      mayor = num2;
    }
    if (num3 > mayor){
      mayor = num3;
    }

    alert("El numero mayor de los 3 números es:" + mayor);
}


// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

function ejercicio12() {

    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número"));
    let mayor = num1;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    if (num2 > mayor) {
      mayor = num2;
    }
    alert("El numero mayor de los 3 números es:" + mayor);
}

// 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

function ejercicio13() {

    let letra = prompt("Ingrese la letra que desea evaluar:").toLowerCase();
    
    if (letra.length !== 1 || (letra < 'a' || letra > 'z')) {
        alert("Por favor, ingrese una única letra válida.");
        return;
    }

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        alert("La letra es una vocal.");
    } else {
        alert("La letra no es una vocal.");
    }
 }

// 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

const ejercicio14 = () => {

    let num = parseInt(prompt("Ingrese un número entero positivo del 1 al 9:"));

    if (num < 1 || num > 9 || !Number.isInteger(num)) {
        alert("Por favor, ingrese un número entero válido entre 1 y 9.");
        return;
    }

    let esPrimo = true;
    if (num === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        alert(`El número ${num} es primo.`);
    } else {
        alert(`El número ${num} no es primo.`);
    }
};


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
     alert("El sueldo semanal del trabajador es "+ pago)
}

    // 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

function ejercicio16() {
    
    const diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    let num = parseInt(prompt("Por favor, ingrese un número del 1 al 7."));

        if (num < 1 || num > 7) {
            alert("Ingrese un número valido");            ;
        }

        dia = diasDeLaSemana[num-1]

        alert("Hoy estamos " + dia);
    }

    
    // 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

    const ejercicio17 = () => {

        let hora = prompt("Ingrese la hora en formato HH:MM:SS:");
    
        let regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
        if (!regex.test(hora)) {
            alert("Por favor, ingrese una hora válida en formato HH:MM:SS.");
            return;
        }
    
        let partes = hora.split(":");
        let horas = parseInt(partes[0]);
        let minutos = parseInt(partes[1]);
        let segundos = parseInt(partes[2]);
    
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
                minutos = 0;
                horas++;
                if (horas === 24) {
                    horas = 0;
                }
            }
        }
    
        let nuevaHora = 
            (horas < 10 ? "0" : "") + horas + ":" + 
            (minutos < 10 ? "0" : "") + minutos + ":" + 
            (segundos < 10 ? "0" : "") + segundos;
    
        alert(`La hora dentro de un segundo será: ${nuevaHora}`);
    };
    
    // 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

    //     $10. Si se compran unidades separadas hasta 9.

    //     $8. Si se compran entre 10 unidades hasta 99.

    //     $7. Entre 100 y 499 unidades.

    //     $6. Para mas de 500 unidades.

    //     La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

    const ejercicio18 = () => {

        let numCD =parseInt(prompt("Ingrese el numero de CD's que compro: "));
        let preciounit = 0;

        if (numCD>=500) {
            preciounit = 6;
        } else if (numCD>= 100 && numCD<=499) {
            preciounit = 7;
        }
          else if (numCD>= 10 && numCD<=99) {
            preciounit = 8;  
        }
          else {
            preciounit = 10;
            }
    let precioTotal = numCD * preciounit;
    let ganancia = precioTotal * 0.0825;
        
    alert(`El precio total para el cliente es: $${precioTotal.toFixed(2)}\nLa ganancia para el vendedor es: $${ganancia.toFixed(2)}`);
        };

    // 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

    //     Cajero (56$/día).

    //     Servidor (64$/día).

    //     Preparador de mezclas (80$/día).

    //     Mantenimiento (48$/día).

    //     El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

    const ejercicio19 = () => {
        // Leer el identificador del empleado
        let identificador = parseInt(prompt("Ingrese el número identificador del empleado:"));
        
        // Leer la cantidad de días trabajados
        let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados (máximo 6):"));
    
        // Validar las entradas
        if (isNaN(identificador) || isNaN(diasTrabajados) || diasTrabajados < 0 || diasTrabajados > 6) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }
    
        // Determinar el salario diario según el identificador del empleado
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
                alert("Identificador de empleado no válido.");
                return;
        }
    
        // Calcular el salario total
        let salarioTotal = salarioDiario * diasTrabajados;
    
        // Mostrar el resultado
        alert(`El salario total a pagar al empleado es: $${salarioTotal}`);
    };

    
    // 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

    //     ¿Cuántos números son Pares?

    //     ¿Cuál es el mayor de todos?

    //     Si el tercero es par, calcular el cuadrado del segundo.

    //     Si el primero es menor que el cuarto, calcular la media de los 4 números.

    //     Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

    const ejercicio20 = () => {

        let num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
        let num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
        let num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
        let num4 = parseInt(prompt("Ingrese el cuarto número entero positivo:"));
    
        if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || num1 <= 0 || num2 <= 0 || num3 <= 0 || num4 <= 0) {
            alert("Por favor, ingrese solo números enteros positivos.");
            return;
        }
    
        let pares = 0;
        if (num1 % 2 === 0) pares++;
        if (num2 % 2 === 0) pares++;
        if (num3 % 2 === 0) pares++;
        if (num4 % 2 === 0) pares++;
    
        let mayor = num1;
        if (num2 > mayor) mayor = num2;
        if (num3 > mayor) mayor = num3;
        if (num4 > mayor) mayor = num4;
    
        let cuadradoSegundo = null;
        if (num3 % 2 === 0) {
            cuadradoSegundo = num2 ** 2;
        }
    
        let media = null;
        if (num1 < num4) {
            media = (num1 + num2 + num3 + num4) / 4;
        }
    
        let suma = null;
        if (num2 > num3 && num3 > 50 && num3 < 700) {
            suma = num1 + num2 + num3 + num4;
        }
    
        let resultado = `Cantidad de números pares: ${pares}\nMayor de todos: ${mayor}`;
        if (cuadradoSegundo !== null) {
            resultado += `\nCuadrado del segundo número: ${cuadradoSegundo}`;
        }
        if (media !== null) {
            resultado += `\nMedia de los 4 números: ${media}`;
        }
        if (suma !== null) {
            resultado += `\nSuma de los 4 números: ${suma}`;
        }
        alert(resultado);
    };

    
    // 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

    const ejercicio21 = () => {
        let num = parseInt(prompt("Ingrese un numero entero positivo para calcular su factorial:")); 
        let factorial = 1;
        if (isNaN(num) || num < 0){
            alert ("Ingrese un número valido");
        }

        for(let i=1; i<=num; i++){
            factorial *= i
        }
        alert(`El factorial del número ${num} es ${factorial}`)
    }

    // 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.

    const ejercicio22 = () => {
        let num = parseInt(prompt("Ingrese un numero entero positivo para calcular la suma de los n primeros números:")); 
        let suma = null;
        if (isNaN(num) || num < 0){
            alert ("Ingrese un número valido");
        }
        for(let i=1; i<=num; i++){
            suma += i
        }
        alert(`La suma de los ${num} primeros números es ${suma}`)
    }

    // 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

    const ejercicio23 = () => {
        let num = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los números impares menores o iguales a n:")); 
        let suma = 0;
    
        if (isNaN(num) || num < 0) {
            alert("Ingrese un número válido");
            return;
        }
    
        for (let i = 1; i <= num; i++) {
            if (i % 2 !== 0) {
                suma += i;
            }
        }
    
        alert(`La suma de los números impares menores o iguales a ${num} es ${suma}`);
    };
    

    // 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

    const ejercicio24 = () => {
        let num = 1000
        let suma = 0;
    
        for (let i = 1; i <= num; i++) {
            if (i % 2 !== 1) {
                suma += i;
            }
        }
    
        alert(`La suma de todos los números pares hasta el número ${num} es ${suma}`);
    };
    

    // 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

    const ejercicio25 = () => {
        let num = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial:"));
    
        if (isNaN(num) || num < 0) {
            alert("Ingrese un número válido");
            return;
        }
    
        let factorial = 1;
        let i = num;
    
        do {
            factorial *= i;
            i--;
        } while (i > 0);
    
        alert(`El factorial del número ${num} es ${factorial}`);
    };

    // 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.


    const ejercicio26 = () => {
        let dividendo = parseInt(prompt("Ingrese el dividendo (número entero positivo):"));
        let divisor = parseInt(prompt("Ingrese el divisor (número entero positivo):"));
    
        if (isNaN(dividendo) || isNaN(divisor) || dividendo < 0 || divisor <= 0) {
            alert("Ingrese números válidos. El divisor debe ser mayor que 0.");
            return;
        }
    
        let cociente = 0;
        let resto = dividendo;
    
        // Calcular el cociente y el resto mediante restas sucesivas
        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }
    
        alert(`El cociente de la división es ${cociente} y el resto es ${resto}`);

     }

    // 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

    const ejercicio27 = () => {
        let suma = 0;
        let contador = 0;
        let numero;
    
        do {
            numero = parseFloat(prompt("Ingrese un número positivo (o un número negativo para terminar):"));
    
            if (numero >= 0) {
                suma += numero;
                contador++;
            }
        } while (numero >= 0);
    
        if (contador === 0) {
            alert("No se ingresaron números positivos.");
        } else {
            let media = suma / contador;
            alert(`La media de los números positivos ingresados es: ${media}`);
        }
    };

    // 28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

    function ejercicio28(){
        let suma= 0;
        let i=1;

        do {
            suma += i;
            i++;
        } while (i<=100);
      
        alert(`La suma de los 100 primeros números es: ${suma}`);
    }

    // 29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.

    function ejercicio29(){
        let suma= 0;
        let i=1;
        while (i<=100) {
            suma += i;
            i++;
        }
        alert(`La suma de los 100 primeros números es: ${suma}`);
    }

    // 30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.

    function ejercicio30(){
        let suma= 0;
        for (let i=1; i<=100;i++){
            suma += i;
        }
        alert(`La suma de los 100 primeros números es: ${suma}`);
    }


    // 31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.


    const ejercicio31 = () => {
        let sumaPares = 0;
        let sumaImpares = 0;
        let contadorPares = 0;
        let contadorImpares = 0;
    
        for (let i = 0; i < 10; i++) {
            let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    
            if (isNaN(num)) {
                alert("Ingrese un número válido");
                i--; 
                continue;
            }
    
            if (num % 2 === 0) {
                sumaPares += num;
                contadorPares++;
            } else {
                sumaImpares += num;
                contadorImpares++;
            }
        }
    
        let mediaPares = contadorPares === 0 ? 0 : sumaPares / contadorPares;
        let mediaImpares = contadorImpares === 0 ? 0 : sumaImpares / contadorImpares;
    
        alert(`La media de los números pares es: ${mediaPares}`);
        alert(`La media de los números impares es: ${mediaImpares}`);
    };
    
    // 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

    const ejercicio32 = () => {

        const provincias = {
            "Provincia1": ["Ciudad1_1", "Ciudad1_2", "Ciudad1_3"],
            "Provincia2": ["Ciudad2_1", "Ciudad2_2", "Ciudad2_3", "Ciudad2_4"],
            "Provincia3": ["Ciudad3_1", "Ciudad3_2", "Ciudad3_3", "Ciudad3_4"]
        };
    
        let ciudadMayor = '';
        let poblacionMayor = 0;
    
        for (let provincia in provincias) {
            for (let ciudad of provincias[provincia]) {
                let poblacion = parseInt(prompt(`Ingrese la población de ${ciudad} en ${provincia}:`));
    
                // Validar la entrada
                if (isNaN(poblacion) || poblacion < 0) {
                    alert("Ingrese un número válido para la población");
                    return; 
                }
    
                if (poblacion > poblacionMayor) {
                    poblacionMayor = poblacion;
                    ciudadMayor = ciudad;
                }
            }
        }
            alert(`La ciudad con la mayor población es ${ciudadMayor} con una población de ${poblacionMayor} personas.`);
    };

    // 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

    const ejercicio33 = () => {
        let continuar;
    
        do {
            let mensaje = prompt("Ingrese algo para continuar o cancelar para terminar:");
    
            if (mensaje === null) {
                break; 
            }
            alert(`Ingresaste: ${mensaje}`);
    
            continuar = confirm("¿Deseas continuar con el programa?");
        } while (continuar);
    
        alert("El programa ha terminado.");
    };
    
    

    // 34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.

    const ejercicio34 = () => {
        let tablaMultiplicar = '';
    
        for (let i = 1; i <= 9; i++) {
            tablaMultiplicar += `Tabla de multiplicar del ${i}:\n`;
            for (let j = 1; j <= 10; j++) {
                tablaMultiplicar += `${i} x ${j} = ${i * j}\n`;
            }
            tablaMultiplicar += '\n'; // Agregar un salto de línea entre cada tabla
        }
    
        alert(tablaMultiplicar);
    };
    

    // 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

    const ejercicio35 = () => {
        let mayor = 0;
        let menor = Infinity;
        for (let i = 0; i < 20; i++) {
            let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    
            if (isNaN(num)) {
                alert("Ingrese un número válido");
                i--; 
                continue;
            }
    
            if (num > mayor) {
                mayor = num;
            } 

            if (num < menor) {
                menor = num;
            } 
        }
    
        alert(`El número mayor de los 20 números es: ${mayor}`);
        alert(`El número menor de los 20 números es: ${menor}`);

    };

    // 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacc.

    const ejercicio36 = () => {
        let n = parseInt(prompt("Ingrese el número de términos de la serie de Fibonacci que desea calcular:"));
        let fibonacci = [0, 1]; 

        if (isNaN(n) || n <= 0) {
            alert("Ingrese un número entero positivo válido");
            return;
        }

        for (let i = 2; i < n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
            alert(`La serie de Fibonacci con ${n} términos es: ${fibonacci.slice(0, n).join(", ")}`);
    };
    

    // 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

    function ejercicio37(){
        let num1 = parseInt(prompt("Ingrese el primer numero:"));
        let num2 = parseInt(prompt("Ingrese el segundo numero:"));
    
        let a = num1;
        let b = num2;
        let temp = null;
        do {
            temp = b;
            b = a%b;
            a = temp;
        } while (b!= 0);

        alert(`El MCD de ${num1} y ${num2} es: ${a}`);
    }

    // 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

    const ejercicio38 = () => {
        let num = parseInt(prompt("Ingrese un número entero positivo para verificar si es un número perfecto:"));
    
        if (isNaN(num) || num <= 0) {
            alert("Ingrese un número entero positivo válido");
            return;
        }
        let sumaDivisores = 0;
    
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                sumaDivisores += i;
            }
        }
    
        if (sumaDivisores === num) {
            alert(`El número ${num} es un número perfecto.`);
        } else {
            alert(`El número ${num} no es un número perfecto.`);
        }
    };
    

    // 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

    //     Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...


    const ejercicio39 = () => {
        let iteraciones = parseInt(prompt("Ingrese el número de iteraciones para aproximar π:"));
    
        if (isNaN(iteraciones) || iteraciones <= 0) {
            alert("Ingrese un número entero positivo válido para las iteraciones");
            return;
        }
        let pi = 0;
        let signo = 1;
    
        for (let i = 0; i < iteraciones; i++) {
            pi += signo * (4 / (2 * i + 1));
            signo *= -1;
        }
    
        alert(`La aproximación de π después de ${iteraciones} iteraciones es: ${pi}`);
    };

    // 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

    //     Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

    const ejercicio40 = () => {
        let iteraciones = parseInt(prompt("Ingrese el número de iteraciones para aproximar π:"));
    
        if (isNaN(iteraciones) || iteraciones <= 0) {
            alert("Ingrese un número entero positivo válido para las iteraciones");
            return;
        }
        let pi = 3;
        let signo = 1;
    
        for (let i = 1; i <= iteraciones; i++) {
            pi += signo * (4 / ((2*i)*(2*i+1)*(2*i+2 )));
            signo *= -1;
        }
    
        alert(`La aproximación de π después de ${iteraciones} iteraciones es: ${pi}`);
    };