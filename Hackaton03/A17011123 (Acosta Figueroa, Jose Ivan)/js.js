// Función 1: Determinar si un número tiene tres dígitos.
function funcion1() {
    let numero = prompt("Ingrese un número:");
    if (numero >= 100 && numero <= 999) {
        console.log("El número tiene tres dígitos.");
    } else {
        console.log("El número no tiene tres dígitos.");
    }
}

// Función 2: Determinar si un número entero es negativo.
function funcion2() {
    let numero = prompt("Ingrese un número entero:");
    if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número no es negativo.");
    }
}

// Función 3: Determinar si un número termina en 4.
function funcion3() {
    let numero = prompt("Ingrese un número:");
    if (numero.endsWith('4')) {
        console.log("El número termina en 4.");
    } else {
        console.log("El número no termina en 4.");
    }
}

// Función 4: Mostrar tres números de menor a mayor.
function funcion4() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let num3 = prompt("Ingrese el tercer número:");
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    console.log("Números ordenados: ", numeros);
}

// Función 5: Calcular el descuento según la cantidad de zapatos comprados.
function funcion5() {
    let cantidad = prompt("Ingrese la cantidad de zapatos:");
    const precioPorZapato = 80;
    let descuento = 0;
    
    if (cantidad > 30) {
        descuento = 0.4;
    } else if (cantidad > 20) {
        descuento = 0.2;
    } else if (cantidad > 10) {
        descuento = 0.1;
    }

    let precioTotal = cantidad * precioPorZapato;
    let precioConDescuento = precioTotal - (precioTotal * descuento);
    console.log("El precio total con descuento es: $", precioConDescuento);
}

// Función 6: Calcular el sueldo semanal de un trabajador.
function funcion6() {
    let horas = prompt("Ingrese las horas trabajadas:");
    const tarifaNormal = 20;
    const tarifaExtra = 25;
    let sueldo;

    if (horas <= 40) {
        sueldo = horas * tarifaNormal;
    } else {
        let horasExtras = horas - 40;
        sueldo = (40 * tarifaNormal) + (horasExtras * tarifaExtra);
    }

    console.log("El sueldo semanal es: $ ", sueldo);
}

// Función 7: Calcular el descuento según el tipo de membresía.
function funcion7() {
    let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B, C):").toUpperCase();
    let precioCompra = prompt("Ingrese el precio de la compra:");
    let descuento;

    switch (tipoMembresia) {
        case 'A':
            descuento = 0.1;
            break;
        case 'B':
            descuento = 0.15;
            break;
        case 'C':
            descuento = 0.2;
            break;
        default:
            console.log("Tipo de membresía no válido.");
            return;
    }

    let precioFinal = precioCompra - (precioCompra * descuento);
    console.log("El precio con descuento es: $", precioFinal);
}

// Función 8: Calcular el promedio de tres notas y determinar si el estudiante aprobó.
function funcion8() {
    let nota1 = prompt("Ingrese la primera nota:");
    let nota2 = prompt("Ingrese la segunda nota:");
    let nota3 = prompt("Ingrese la tercera nota:");
    let promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

    if (promedio >= 11) {
        console.log("El estudiante aprobó con un promedio de: ", promedio);
    } else {
        console.log("El estudiante no aprobó. Su promedio es: ", promedio);
    }
}

// Función 9: Determinar el aumento de un trabajador según su salario.
function funcion9() {
    let salario = prompt("Ingrese el salario:");
    let aumento;

    if (salario > 2000) {
        aumento = 0.05;
    } else {
        aumento = 0.1;
    }

    let salarioConAumento = salario + (salario * aumento);
    console.log("El nuevo salario con aumento es: $", salarioConAumento);
}

// Función 10: Determinar si un número es par o impar.
function funcion10() {
    let numero = prompt("Ingrese un número:");
    if (numero % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}

// Función 11: Determinar el mayor de tres números.
function funcion11() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let num3 = prompt("Ingrese el tercer número:");
    let mayor = Math.max(num1, num2, num3);
    console.log("El mayor de los tres números es: ", mayor);
}

// Función 12: Determinar el mayor de dos números.
function funcion12() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let mayor = Math.max(num1, num2);
    console.log("El mayor de los dos números es: ", mayor);
}

// Función 13: Determinar si una letra es una vocal.
function funcion13() {
    let letra = prompt("Ingrese una letra:").toLowerCase();
    if ('aeiou'.includes(letra)) {
        console.log("La letra es una vocal.");
    } else {
        console.log("La letra no es una vocal.");
    }
}

// Función 14: Determinar si un número del 1 al 9 es primo.
function funcion14() {
    let numero = prompt("Ingrese un número del 1 al 9:");
    let esPrimo = true;

    if (numero < 2) {
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
        console.log("El número es primo.");
    } else {
        console.log("El número no es primo.");
    }
}

// Función 15: Convertir centímetros a pulgadas y libras a kilogramos.
function funcion15() {
    let centimetros = prompt("Ingrese la cantidad en centímetros:");
    let pulgadas = centimetros / 2.54;
    console.log(`${centimetros} cm son ${pulgadas.toFixed(2)} pulgadas.`);

    let libras = prompt("Ingrese la cantidad en libras:");
    let kilogramos = libras / 2.20462;
    console.log(`${libras} libras son ${kilogramos.toFixed(2)} kilogramos.`);
}

// Función 16: Determinar el día de la semana según un número.
function funcion16() {
    let numero = prompt("Ingrese un número del 1 al 7:");
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    console.log("El día de la semana es: ", dias[numero - 1]);
}

// Función 17: Calcular la hora dentro de un segundo.
function funcion17() {
    let hora = prompt("Ingrese la hora (HH:MM:SS):");
    let partes = hora.split(':');
    let horas = parseInt(partes[0]);
    let minutos = parseInt(partes[1]);
    let segundos = parseInt(partes[2]);

    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    if (horas === 24) {
        horas = 0;
    }

    console.log(`La hora dentro de un segundo será: ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`);
}

// Función 18: Calcular el precio total para el cliente y la ganancia del vendedor.
function funcion18() {
    let cantidadCDs = prompt("Ingrese la cantidad de CDs a comprar:");
    let precioPorCD;
    if (cantidadCDs >= 500) {
        precioPorCD = 6;
    } else if (cantidadCDs >= 100) {
        precioPorCD = 7;
    } else if (cantidadCDs >= 10) {
        precioPorCD = 8;
    } else {
        precioPorCD = 10;
    }

    let precioTotal = cantidadCDs * precioPorCD;
    let ganancia = precioTotal * 0.0825;
    console.log(`El precio total es: $${precioTotal}. La ganancia del vendedor es: $${ganancia.toFixed(2)}`);
}

// Función 19: Calcular el salario de un empleado según su número identificador y días trabajados.
function funcion19() {
    let idEmpleado = prompt("Ingrese el número identificador del empleado (1-Cajero, 2-Servidor, 3-Preparador, 4-Mantenimiento):");
    let diasTrabajados = prompt("Ingrese la cantidad de días trabajados:");
    let salarioDiario;

    switch (idEmpleado) {
        case '1':
            salarioDiario = 56;
            break;
        case '2':
            salarioDiario = 64;
            break;
        case '3':
            salarioDiario = 80;
            break;
        case '4':
            salarioDiario = 48;
            break;
        default:
            console.log("Número identificador no válido.");
            return;
    }

    let salarioTotal = salarioDiario * diasTrabajados;
    console.log(`El salario total del empleado es: $${salarioTotal}`);
}

// Función 20: Realizar operaciones con cuatro números enteros positivos.
function funcion20() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let num3 = prompt("Ingrese el tercer número:");
    let num4 = prompt("Ingrese el cuarto número:");

    let pares = [num1, num2, num3, num4].filter(n => n % 2 === 0).length;
    console.log(`Cantidad de números pares: ${pares}`);

    let mayor = Math.max(num1, num2, num3, num4);
    console.log(`El número mayor es: ${mayor}`);

    if (num3 % 2 === 0) {
        console.log(`El cuadrado del segundo número es: ${num2 ** 2}`);
    }

    if (num1 < num4) {
        let media = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4)) / 4;
        console.log(`La media de los cuatro números es: ${media}`);
    }

    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
        let suma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4);
        console.log(`La suma de los cuatro números es: ${suma}`);
    }
}

// Función 21: Calcular el factorial de un número.
function funcion21() {
    let numero = prompt("Ingrese un número:");
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es: ${factorial}`);
}

// Función 22: Calcular la suma de los n primeros números.
function funcion22() {
    let n = prompt("Ingrese el valor de n:");
    let suma = (n * (n + 1)) / 2;
    console.log(`La suma de los primeros ${n} números es: ${suma}`);
}

// Función 23: Calcular la suma de los números impares menores o iguales a n.
function funcion23() {
    let n = prompt("Ingrese el valor de n:");
    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
        suma += i;
    }
    console.log(`La suma de los números impares menores o iguales a ${n} es: ${suma}`);
}

// Función 24: Calcular la suma de todos los números pares hasta el 1000.
function funcion24() {
    let suma = 0;
    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    console.log(`La suma de todos los números pares hasta el 1000 es: ${suma}`);
}

// Función 25: Calcular el factorial de un número de una forma distinta.
function funcion25() {
    let numero = prompt("Ingrese un número:");
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    console.log(`El factorial de ${numero} es: ${factorial(numero)}`);
}

// Función 26: Calcular el resto y cociente por medio de restas sucesivas.
function funcion26() {
    let dividendo = prompt("Ingrese el dividendo:");
    let divisor = prompt("Ingrese el divisor:");
    let cociente = 0;
    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }
    console.log(`El cociente es: ${cociente} y el resto es: ${dividendo}`);
}

// Función 27: Calcular la media de una lista indefinida de números positivos.
function funcion27() {
    let suma = 0;
    let contador = 0;
    while (true) {
        let numero = prompt("Ingrese un número positivo (o un número negativo para terminar):");
        if (numero < 0) {
            break;
        }
        suma += parseFloat(numero);
        contador++;
    }
    let media = suma / contador;
    console.log(`La media de los números positivos es: ${media}`);
}

// Función 28: Calcular la suma de los primeros cien números con un ciclo repetir.
function funcion28() {
    let suma = 0;
    let i = 1;
    do {
        suma += i;
        i++;
    } while (i <= 100);
    console.log(`La suma de los primeros cien números es: ${suma}`);
}

// Función 29: Calcular la suma de los primeros cien números con un ciclo mientras.
function funcion29() {
    let suma = 0;
    let i = 1;
    while (i <= 100) {
        suma += i;
        i++;
    }
    console.log(`La suma de los primeros cien números es: ${suma}`);
}

// Función 30: Calcular la suma de los primeros cien números con un ciclo para.
function funcion30() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    console.log(`La suma de los primeros cien números es: ${suma}`);
}

// Función 31: Calcular la media de los números pares e impares, sólo se ingresarán diez números.
function funcion31() {
    let pares = [];
    let impares = [];
    for (let i = 1; i <= 10; i++) {
        let numero = prompt(`Ingrese el número ${i}:`);
        if (numero % 2 === 0) {
            pares.push(parseFloat(numero));
        } else {
            impares.push(parseFloat(numero));
        }
    }
    let mediaPares = pares.reduce((a, b) => a + b, 0) / pares.length;
    let mediaImpares = impares.reduce((a, b) => a + b, 0) / impares.length;
    console.log(`La media de los números pares es: ${mediaPares}`);
    console.log(`La media de los números impares es: ${mediaImpares}`);
}

// Función 32: Determinar la ciudad con la población más grande.
function funcion32() {
    let ciudades = [
        { nombre: "Ciudad A", poblacion: prompt("Ingrese la población de la Ciudad A:") },
        { nombre: "Ciudad B", poblacion: prompt("Ingrese la población de la Ciudad B:") },
        { nombre: "Ciudad C", poblacion: prompt("Ingrese la población de la Ciudad C:") },
        // Agrega más ciudades si es necesario
    ];
    let ciudadMayor = ciudades.reduce((prev, current) => (prev.poblacion > current.poblacion) ? prev : current);
    console.log(`La ciudad con la mayor población es: ${ciudadMayor.nombre} con una población de ${ciudadMayor.poblacion}`);
}

// Función 33: Permitir al usuario continuar con el programa.
function funcion33() {
    while (true) {
        let continuar = prompt("¿Desea continuar con el programa? (s/n):");
        if (continuar.toLowerCase() !== 's') {
            break;
        }
    }
    console.log("El programa ha terminado.");
}

// Función 34: Imprimir la tabla de multiplicar de los números del 1 al 9.
function funcion34() {
    for (let i = 1; i <= 9; i++) {
        console.log(`Tabla de multiplicar del ${i}`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

// Función 35: Determinar el número mayor y menor de veinte números ingresados.
function funcion35() {
    let numeros = [];
    for (let i = 1; i <= 20; i++) {
        numeros.push(prompt(`Ingrese el número ${i}:`));
    }
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);
    console.log(`El número mayor es: ${mayor}`);
    console.log(`El número menor es: ${menor}`);
}

// Función 36: Calcular la serie de Fibonacci.
function funcion36() {
    let n = prompt("Ingrese la cantidad de términos de la serie de Fibonacci:");
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    console.log(`Los primeros ${n} términos de la serie de Fibonacci son: ${fibonacci.join(", ")}`);
}

// Función 37: Calcular el M.C.D de un número por medio del algoritmo de Euclides.
function funcion37() {
    let a = prompt("Ingrese el primer número:");
    let b = prompt("Ingrese el segundo número:");
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log(`El M.C.D. de los dos números es: ${a}`);
}

// Función 38: Determinar si un número es un número perfecto.
function funcion38() {
    let numero = prompt("Ingrese un número:");
    let suma = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    if (suma === parseFloat(numero)) {
        console.log(`${numero} es un número perfecto.`);
    } else {
        console.log(`${numero} no es un número perfecto.`);
    }
}

// Función 39: Aproximar el valor de Pi con la serie de Gregory-Leibniz.
function funcion39() {
    let iteraciones = prompt("Ingrese el número de iteraciones:");
    let pi = 0;
    for (let i = 0; i < iteraciones; i++) {
        pi += (Math.pow(-1, i) / (2 * i + 1));
    }
    pi *= 4;
    console.log(`El valor aproximado de Pi es: ${pi}`);
}

// Función 40: Aproximar el valor de Pi con la serie de Nilakantha.
function funcion40() {
    let iteraciones = prompt("Ingrese el número de iteraciones:");
    let pi = 3;
    let signo = 1;
    for (let i = 2; i < 2 * iteraciones; i += 2) {
        pi += signo * (4 / (i * (i + 1) * (i + 2)));
        signo *= -1;
    }
    console.log(`El valor aproximado de Pi es: ${pi}`);
}
 