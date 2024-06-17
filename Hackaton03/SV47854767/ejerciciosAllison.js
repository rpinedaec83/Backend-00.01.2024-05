function ejercicio1(){

    let numero  = parseInt(prompt("Escriba un numero"));
    if(numero>99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero tiene NO 3 digitos")
    }
}

function ejercicio2(){
    let numero=parseInt(prompt("Escriba un numero"));
    if (numero>0){
alert("El numero es positivo")
    }else{
    alert("El numero es negativo")
}

}

function ejercicio3(){
     let numero=prompt("Ingrese numero");
     let longitud=numero.length;
     let cad=numero.substring(longitud-1,longitud)
     if (cad==4){
        alert("El numero termina en 4")
    } else{
        alert("El numero no termina en 4")
        } 
    }


function ejercicio4(){
        let num1=parseInt(prompt("Ingrese primer Numero"));
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
         alert("Los numeros ordenados de menor y mayor son: "+num1+", "+num2+", "+num3)
    }

function ejercicio5() {
    function calcularPrecioTotal(cantidadDeZapatos) {
        const precioPorZapato = 80;
        let descuento = 0;
    
        if (cantidadDeZapatos > 30) {
            descuento = 0.40;
        } else if (cantidadDeZapatos > 20) {
            descuento = 0.20;
        } else if (cantidadDeZapatos > 10) {
            descuento = 0.10;
        }
    
        const precioTotalSinDescuento = cantidadDeZapatos * precioPorZapato;
        const precioTotalConDescuento = precioTotalSinDescuento * (1 - descuento);
    
        return precioTotalConDescuento;
    }
    
           const cantidadDeZapatos = parseInt(prompt("Ingrese la cantidad de zapatos"), 10);
        
        if ((cantidadDeZapatos) || cantidadDeZapatos <= 0) {
            alert("Por favor, ingrese un número válido de zapatos.");
            return;
        }
    
        const precioAPagar = calcularPrecioTotal(cantidadDeZapatos);
        alert(`Precio a pagar: $${precioAPagar.toFixed(2)}`);
    }
    
function ejercicio6() {
    const horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas en la semana"), 10);
            
    if ((horasTrabajadas) || horasTrabajadas < 0) {
        alert("Por favor, ingrese una cantidad válida de horas.");
        return;
    }
    
    const pagoPorHora = 20;
    const pagoPorHoraExtra = 25;
    const horasNormales = 40;
    let sueldoSemanal;
    
    if (horasTrabajadas <= horasNormales) {
        sueldoSemanal = horasTrabajadas * pagoPorHora;
    } else {
        const horasExtras = horasTrabajadas - horasNormales;
        sueldoSemanal = (horasNormales * pagoPorHora) + (horasExtras * pagoPorHoraExtra);
    }
    
    alert(`El sueldo semanal es: $${sueldoSemanal.toFixed(2)}`);
}

function ejercicio7() {
    const precioHelado = parseFloat(prompt("Ingrese el precio del helado:"));

    const tipoMembresia = prompt("Ingrese el tipo de membresía (A, B, C):").toUpperCase();

    let descuento = 0;

    switch (tipoMembresia) {
        case 'A':
            descuento = 0.10;
            break;
        case 'B':
            descuento = 0.15;
            break;
        case 'C':
            descuento = 0.20;
            break;
        default:
            alert("Tipo de membresía no válido. Por favor, ingrese A, B o C.");
            return;
    }

    const precioConDescuento = precioHelado * (1 - descuento);

    alert(`El precio con descuento es: $${precioConDescuento.toFixed(2)}`);
}

function ejercicio8() {
    const nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    const nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    const nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Por favor, ingrese valores numéricos para las notas.");
    return;
    }

    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 13.5) {
        alert(`El promedio es ${promedio.toFixed(2)}. ¡El estudiante aprobó!`);
    } else {
        alert(`El promedio es ${promedio.toFixed(2)}. El estudiante no aprobó.`);
    }
}


function ejercicio9() {
    const salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));

    if (isNaN(salarioActual) || salarioActual <= 0) {
        alert("Por favor, ingrese un salario válido.");
        return;
    }

    let aumento = 0;

    if (salarioActual > 2000) {
        aumento = salarioActual * 0.05; 
    } else {
        aumento = salarioActual * 0.10;
    }

    const nuevoSalario = salarioActual + aumento;

    alert(`El aumento de salario es de $${aumento.toFixed(2)}. El nuevo salario es $${nuevoSalario.toFixed(2)}.`);
}

function ejercicio10() {
    const numero = parseInt(prompt("Ingrese un número para determinar si es par o impar:"))
    
    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    if (numero % 2 === 0) {
        alert(`${numero} es un número par.`);
    } else {
        alert(`${numero} es un número impar.`);
    }
}    

function ejercicio11() {
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    const numero3 = parseFloat(prompt("Ingrese el tercer número:"));

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    
    let numeroMayor = numero1;

    if (numero2 > numeroMayor) {
        numeroMayor = numero2;
    }

    if (numero3 > numeroMayor) {
        numeroMayor = numero3;
    }

    alert(`El número mayor es: ${numeroMayor}`);
}

function ejercicio12() {
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    let numeroMayor;

    if (numero1 > numero2) {
        numeroMayor = numero1;
    } else {
        numeroMayor = numero2;
    }


    alert(`El número mayor es: ${numeroMayor}`);
}


function ejercicio13() {
    const letra = prompt("Ingrese una letra para verificar si es una vocal:");
  
    if (!letra || letra.length !== 1) {
        alert("Por favor, ingrese una letra válida.");
        return;
    }

    const letraMinuscula = letra.toLowerCase();

    if (
        letraMinuscula === 'a' ||
        letraMinuscula === 'e' ||
        letraMinuscula === 'i' ||
        letraMinuscula === 'o' ||
        letraMinuscula === 'u'
    ) {
        alert(`La letra "${letra}" es una vocal.`);
    } else {
        alert(`La letra "${letra}" no es una vocal.`);
    }
}


function ejercicio14() {
    const numero = parseInt(prompt("Ingrese un número del 1 al 10 para verificar si es primo:"));

       if (numero < 1 || numero > 10 || isNaN(numero)) {
        alert("Por favor, ingrese un número válido del 1 al 10.");
        return;
    }

    function esPrimo(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    if (esPrimo(numero)) {
        alert(`El número ${numero} es primo.`);
    } else {
        alert(`El número ${numero} no es primo.`);
    }
}



function ejercicio15() {
    const centimetros = parseFloat(prompt("Ingrese la longitud en centímetros a convertir a pulgadas:"));
    const libras = parseFloat(prompt("Ingrese el peso en libras a convertir a kilogramos:"));

    if (isNaN(centimetros) || isNaN(libras)) {
    alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const pulgadas = centimetros / 2.54;
    const kilogramos = libras / 2.2046;

    alert(`${centimetros} centímetros equivalen a ${pulgadas.toFixed(2)} pulgadas.`);
    alert(`${libras} libras equivalen a ${kilogramos.toFixed(2)} kilogramos.`);
}



function ejercicio16() {
    const numero = parseInt(prompt("Ingrese un número del 1 al 7 para determinar el día de la semana:"));

    if (numero < 1 || numero > 7 || isNaN(numero)) {
        alert("Por favor, ingrese un número válido del 1 al 7.");
        return;
    }

    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    const diaCorrespondiente = dias[numero - 1];

    alert(`El número ${numero} corresponde a ${diaCorrespondiente}.`);
}


function ejercicio17() {
    const horaActual = prompt("Ingrese la hora en formato HH:MM:SS para calcular la hora siguiente:");

    const horaRegex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
    if (!horaRegex.test(horaActual)) {
        alert("Por favor, ingrese la hora en formato válido HH:MM:SS.");
        return;
    }

    const partesHora = horaActual.split(":");
    const horas = parseInt(partesHora[0]);
    const minutos = parseInt(partesHora[1]);
    const segundos = parseInt(partesHora[2]);

    let nuevaHora, nuevoMinuto, nuevoSegundo;

    nuevoSegundo = segundos + 1;
    if (nuevoSegundo === 60) {
        nuevoSegundo = 0;
        nuevoMinuto = minutos + 1;
        if (nuevoMinuto === 60) {
            nuevoMinuto = 0;
            nuevaHora = horas + 1;
            if (nuevaHora === 24) {
                nuevaHora = 0;
            }
        } else {
            nuevoMinuto = minutos + 1;
            nuevaHora = horas;
        }
    } else {
        nuevoSegundo = segundos + 1;
        nuevoMinuto = minutos;
        nuevaHora = horas;
    }

    const horaSiguiente = `${nuevaHora.toString().padStart(2, '0')}:${nuevoMinuto.toString().padStart(2, '0')}:${nuevoSegundo.toString().padStart(2, '0')}`;

  
    alert(`La hora un segundo después de ${horaActual} es ${horaSiguiente}.`);
}


function ejercicio18() {
    const cantidad = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese una cantidad válida mayor que cero.");
        return;
    }

    let precioUnitario, precioTotalCliente;

    if (cantidad <= 9) {
        precioUnitario = 10;
    } else if (cantidad >= 10 && cantidad <= 99) {
        precioUnitario = 8;
    } else if (cantidad >= 100 && cantidad <= 499) {
        precioUnitario = 7;
    } else {
        precioUnitario = 6;
    }

    precioTotalCliente = cantidad * precioUnitario;

    const gananciaVendedor = precioTotalCliente * 0.0825;

    alert(`Precio total para el cliente: $${precioTotalCliente.toFixed(2)}`);
    alert(`Ganancia para el vendedor: $${gananciaVendedor.toFixed(2)}`);
}

function ejercicio19() {
    const salariosDiarios = {
        1: 56,   // Cajero
        2: 64,   // Servidor
        3: 80,   // Preparador de mezclas
        4: 48    // Mantenimiento
    };

    const numeroEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (1 a 4):"));

    if (!(numeroEmpleado in salariosDiarios)) {
        alert("Número de empleado inválido. Por favor, ingrese un número del 1 al 4.");
        return;
    }

    const diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"));

    if (isNaN(diasTrabajados) || diasTrabajados <= 0 || diasTrabajados > 6) {
        alert("Cantidad de días trabajados inválida. Por favor, ingrese un número entre 1 y 6.");
        return;
    }

    const salarioDiario = salariosDiarios[numeroEmpleado];
    const salarioTotal = salarioDiario * diasTrabajados;

    alert(`El salario total a pagar al empleado es: $${salarioTotal}`);
}




function ejercicio20() {
    const num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
    const num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
    const num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
    const num4 = parseInt(prompt("Ingrese el cuarto número entero positivo:"));

    if (!(esEnteroPositivo(num1) && esEnteroPositivo(num2) && esEnteroPositivo(num3) && esEnteroPositivo(num4))) {
        alert("Por favor, ingrese números enteros positivos.");
        return;
    }

    let cantidadPares = contarPares(num1, num2, num3, num4);

    let mayor = encontrarMayor(num1, num2, num3, num4);

    let resultado = "";
    if (esPar(num3)) {
        resultado += `El cuadrado del segundo número es: ${num2 * num2}\n`;
    }

    if (num1 < num4) {
        const media = calcularMedia(num1, num2, num3, num4);
        resultado += `La media de los 4 números es: ${media}\n`;
    }

    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
        const sumaTotal = num1 + num2 + num3 + num4;
        resultado += `La suma de los 4 números es: ${sumaTotal}\n`;
    }
alert(`Operaciones realizadas:\n\nNúmero de pares: ${cantidadPares}\nMayor número: ${mayor}\n${resultado}`);
}

function esEnteroPositivo(num) {
    return Number.isInteger(num) && num > 0;
}

function esPar(num) {
    return num % 2 === 0;
}

function contarPares(num1, num2, num3, num4) {
    let contador = 0;
    if (esPar(num1)) contador++;
    if (esPar(num2)) contador++;
    if (esPar(num3)) contador++;
    if (esPar(num4)) contador++;
    return contador;
}

function encontrarMayor(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4);
}

function calcularMedia(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}


function ejercicio21() {
    const numero = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial:"));

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }

    alert(`El factorial de ${numero} es: ${factorial}`);
}



function ejercicio22() {
    const n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los primeros n números:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    alert(`La suma de los primeros ${n} números es: ${suma}`);
}


function ejercicio23 () {
    const n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los números impares menores o iguales a n:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
        suma += i;
    }

    alert(`La suma de los números impares menores o iguales a ${n} es: ${suma}`);
}



function ejercicio24() {
    let suma = 0;

    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }

    alert(`La suma de todos los números pares hasta 1000 es: ${suma}`);
}


function ejercicio25() {
    const numero = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial:"));

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    const factorial = factorialRecursivo(numero);

    alert(`El factorial de ${numero} es: ${factorial}`);
}

function factorialRecursivo(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorialRecursivo(n - 1);
}



function ejercicio26() {
    const dividendo = parseInt(prompt("Ingrese el dividendo:"));
    const divisor = parseInt(prompt("Ingrese el divisor:"));

    if (isNaN(dividendo) || isNaN(divisor) || divisor === 0) {
        alert("Por favor, ingrese un divisor distinto de cero.");
        return;
    }

    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    alert(`El cociente es: ${cociente}\nEl resto es: ${resto}`);
}


function ejercicio27() {
    const dividendo = parseInt(prompt("Ingrese el dividendo:"));
    const divisor = parseInt(prompt("Ingrese el divisor:"));

    if (isNaN(dividendo) || isNaN(divisor) || divisor === 0) {
        alert("Por favor, ingrese un divisor distinto de cero.");
        return;
    }

    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    alert(`El cociente es: ${cociente}\nEl resto es: ${resto}`);
}



function ejercicio28() {
    let suma = 0;
    let numero = 1;
    
    do {
        suma += numero;
            numero++;
        } while (numero <= 100);
    
    alert(`La suma de los primeros cien números es: ${suma}`);
}


function ejercicio29() {
    let suma = 0;
    let numero = 1;

    while (numero <= 100) {
        suma += numero;
        numero++;
    }

    alert(`La suma de los primeros cien números es: ${suma}`);
}


function ejercicio30() {
    let suma = 0;

    for (let numero = 1; numero <= 100; numero++) {
        suma += numero;
    }

    alert(`La suma de los primeros cien números es: ${suma}`);
}


function ejercicio31() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));

        if (numero % 2 === 0) {
            sumaPares += numero;
            contadorPares++;
        } else {
            sumaImpares += numero;
            contadorImpares++;
        }
    }

    let mediaPares = contadorPares > 0 ? sumaPares / contadorPares : 0;
    let mediaImpares = contadorImpares > 0 ? sumaImpares / contadorImpares : 0;

    alert(`La media de los números pares es: ${mediaPares.toFixed(2)}`);
    alert(`La media de los números impares es: ${mediaImpares.toFixed(2)}`);
}


function ejercicio32() {
    let provincia1 = [];
    let provincia2 = [];
    let provincia3 = [];

    for (let i = 0; i < 11; i++) {
        let poblacion = parseInt(prompt(`Ingrese la población de la ciudad ${i + 1} de la provincia 1:`));
        provincia1.push(poblacion);
    }

    for (let i = 0; i < 11; i++) {
        let poblacion = parseInt(prompt(`Ingrese la población de la ciudad ${i + 1} de la provincia 2:`));
        provincia2.push(poblacion);
    }

    for (let i = 0; i < 11; i++) {
        let poblacion = parseInt(prompt(`Ingrese la población de la ciudad ${i + 1} de la provincia 3:`));
        provincia3.push(poblacion);
    }

    let mayorPoblacion = Math.max(...provincia1, ...provincia2, ...provincia3);

    let provincia = '';
    let ciudad = '';

    if (provincia1.includes(mayorPoblacion)) {
        provincia = 'Provincia 1';
        ciudad = `Ciudad ${provincia1.indexOf(mayorPoblacion) + 1}`;
    } else if (provincia2.includes(mayorPoblacion)) {
        provincia = 'Provincia 2';
        ciudad = `Ciudad ${provincia2.indexOf(mayorPoblacion) + 1}`;
    } else if (provincia3.includes(mayorPoblacion)) {
        provincia = 'Provincia 3';
        ciudad = `Ciudad ${provincia3.indexOf(mayorPoblacion) + 1}`;
    }

    alert(`La ciudad con la mayor población es ${ciudad} de la ${provincia}, con una población de ${mayorPoblacion} personas.`);
}


function ejercicio33() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt("¿Deseas continuar con el programa? (Ingresa 'S' para si y 'N' para no)");

        if (opcion.toLowerCase() !== 's') {
            continuar = false;
            alert("Programa finalizado.");
        } else {
            alert("Continuando con el programa...");
        }
    }
}


function ejercicio34() {
    let tabla = '';

    for (let i = 1; i <= 9; i++) {
        tabla += `Tabla de multiplicar del ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            tabla += `${i} x ${j} = ${i * j}\n`;
        }
        tabla += '\n'; 
    }

    alert(tabla);
}



function ejercicio35() {
    let numeros = [];
    let numeroMayor = -Infinity;
    let numeroMenor = Infinity;

    for (let i = 0; i < 20; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(numero);

        if (numero > numeroMayor) {
            numeroMayor = numero;
        }
        if (numero < numeroMenor) {
            numeroMenor = numero;
        }
    }

    alert(`El número mayor es: ${numeroMayor}\nEl número menor es: ${numeroMenor}`);
}



function ejercicio36() {
    let n = parseInt(prompt("Ingrese el número de términos de la serie de Fibonacci que desea calcular:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número positivo mayor que cero.");
        return;
    }

    let fibonacci = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonacci.push(0);
        } else if (i === 1) {
            fibonacci.push(1);
        } else {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }

    alert(`Serie de Fibonacci con ${n} términos: ${fibonacci.join(', ')}`);
}




function ejercicio37() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));

    let a = Math.abs(numero1);
    let b = Math.abs(numero2);

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    alert(`El M.C.D. de ${numero1} y ${numero2} es: ${a}`);
}


function ejercicio38() {
    let numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));
    
    if (numero <= 0) {
        alert("Por favor, ingrese un número positivo mayor que cero.");
        return;
    }

    let sumaDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === numero) {
        alert(`${numero} es un número perfecto.`);
    } else {
        alert(`${numero} no es un número perfecto.`);
    }
}


function ejercicio39() {
    let n = parseInt(prompt("Ingrese el número de términos para aproximar Pi:"));
    let pi = 0;
    
    for (let i = 0; i < n; i++) {
        pi += 4 * (Math.pow(-1, i) / (2 * i + 1));
    }

    alert(`Aproximación de Pi con ${n} términos: ${pi}`);
}


function ejercicio40() {
    let n = parseInt(prompt("Ingrese el número de términos para aproximar Pi:"));
    let pi = 3;
    let signo = 1;

    for (let i = 1; i <= n; i++) {
        let denominador = 2 * i * (2 * i + 1) * (2 * i + 2);
        pi += signo * (4 / denominador);
        signo = -signo;
    }

    alert(`Aproximación de Pi con ${n} términos: ${pi}`);
}













