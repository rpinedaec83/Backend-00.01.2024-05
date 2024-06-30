function ejercicio1() {

    let numero = parseInt(prompt("Escribe un numero"));
    if (numero > 99 && numero < 1000) {
        alert("Este numero tiene 3 digitos")
    } else {
        alert("Este numero tiene NO tiene 3 digitos")
    }
}

function ejercicio2() {
    let numero = parseInt(prompt("Escribe un numero"));
    if (numero < 0) {
        alert("El número ingresado es negativo");
    } else {
        alert("El número ingresado no es negativo");
    }
}

function ejercicio3() {
    let numero = parseInt(prompt("Escribe un número"));
    let ud;

    // Convertir número negativo a positivo
    if (numero < 0) {
        numero = numero * (-1);
    }

    // Obtener la última cifra del número
    ud = numero % 10;

    // Verificar si la última cifra es 4
    if (ud === 4) {
        alert("El número ingresado termina en 4");
    } else {
        alert("El número ingresado no termina en 4");
    }
}

function ejercicio4() {
    let numero1 = parseInt(prompt("Escribe el primer número"));
    let numero2 = parseInt(prompt("Escribe el segundo número"));
    let numero3 = parseInt(prompt("Escribe el tercer número"));
    let menor, medio, mayor;
    if (numero1 <= numero2 && numero1 <= numero3) {
        menor = numero1;
        if (numero2 <= numero3) {
            medio = numero2;
            mayor = numero3;
        } else {
            medio = numero3;
            mayor = numero2;
        }
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        menor = numero2;
        if (numero1 <= numero3) {
            medio = numero1;
            mayor = numero3;
        } else {
            medio = numero3;
            mayor = numero1;
        }

    } else {
        menor = numero3;
        if (numero1 <= numero2) {
            medio = numero1;
            mayor = numero2;
        } else {
            medio = numero2;
            mayor = numero1;
        }
    }
    alert(`Los numeros ordenados de menor a mayor son ${menor}, ${medio}, ${mayor}`);
}

function ejercicio5() {
    let numZapatos = parseInt(prompt("Ingrese el número de zapatos comprados"));
    let compra = 80 * numZapatos;
    if (numZapatos > 30) {
        des = 0.4 * compra;
    } else if (numZapatos > 20) {
        des = 0.2 * compra;
    } else if (numZapatos > 10) {
        des = 0.1 * compra;
    } else {
        alert(`Usted no aplica al descuento al por mayor, su total a pagar es $${compra}`);
    }

    let pagoTotal = compra - des;
    alert(`Su total a pagar es: $${pagoTotal}`);
}

function ejercicio6() {
    let horasT = parseInt(prompt("Ingrese el número de horas trabajadas"));
    let pago;
    if (horasT < 0) {
        alert(`El número de horas es invalido`);
    } else if (horasT > 40) {
        pago = 20 * 40 + 25 * (horasT - 40)
        alert(`Su pago total es: $${pago}`);

    } else if (horasT <= 40) {
        pago = 20 * horasT;
        alert(`Su pago total es: $${pago}`);
    }
}

function ejercicio7() {
    let tipoMembresia = prompt("Ingrese el tipo de membresía, digite A, B o C").toUpperCase();
    let monto = parseFloat(prompt("Ingrese el monto de su compra"));
    let des = 0;
    let PagoTotal;

    if (monto > 0) {
        if (tipoMembresia === 'A') {
            des = 0.1 * monto;
        } else if (tipoMembresia === 'B') {
            des = 0.15 * monto;
        } else if (tipoMembresia === 'C') {
            des = 0.2 * monto;
        } else {
            alert("Tipo de membresía inválido");
            return; // Termina la función si el tipo de membresía es inválido
        }

        PagoTotal = monto - des;
        alert(`Su pago total es: $${PagoTotal.toFixed(2)}`);
    } else {
        alert("Monto inválido");
    }
}


function ejercicio8() {
    let nota1 = parseFloat(prompt("Ingrese la nota1: "));
    let nota2 = parseFloat(prompt("Ingrese la nota2: "));
    let nota3 = parseFloat(prompt("Ingrese la nota3: "));
    let promedio;
    if (nota1 < 0 || nota1 > 20 || nota2 < 0 || nota2 > 20 || nota3 < 0 || nota3 > 20) {
        alert(`Nota invalida`);
    } else {
        promedio = (nota1 + nota2 + nota3) / 3;
        if (promedio >= 13) {
            alert(`El promedio del estudiante es ${promedio}, por lo tanto esta aprobado`);
        } else {
            alert(`El promedio del estudiante es ${promedio}, por lo tanto no esta aprobado`);
        }
    }
}

function ejercicio9() {
    let sueldo = parseFloat(prompt("Ingrese el sueldo del trabajador:"));
    let aumento;
    let total;
    if (sueldo < 0) {
        alert(`El numero ingresado es invalido`);
    } else if (sueldo > 2000) {
        aumento = 0.05 * sueldo;
    } else {
        aumento = 0.10 * sueldo;
    }
    total = sueldo + aumento;
    alert(`El sueldo actual es $${total} ya que se tuvo un aumento de $${aumento}`);
}

function ejercicio10() {
    let numero = parseInt(prompt("Escribe el número"));
    if (numero % 2 == 0) {
        alert(`El numero es par`);
    } else {
        alert(`El numero es impar`);
    }
}

function ejercicio11() {
    let numero1 = parseInt(prompt("Escribe el número1"));
    let numero2 = parseInt(prompt("Escribe el número2"));
    let numero3 = parseInt(prompt("Escribe el número3"));
    if (numero1 == numero2 && numero2 == numero3) {
        alert(`Los numeros son iguales`);
    } else {
        if (numero1 > numero2 && numero1 > numero3) {
            alert(`El número mayor es ${numero1}`);
        } else {
            if (numero2 > numero1 && numero2 > numero3) {
                alert(`El número mayor es ${numero2}`);
            } else {
                alert(`El número mayor es ${numero3}`);
            }
        }
    }
}

function ejercicio12() {
    let numero1 = parseInt(prompt("Escribe el número1"));
    let numero2 = parseInt(prompt("Escribe el número2"));
    if (numero1 == numero2) {
        alert(`Los números son iguales`);
    } else if (numero1 > numero2) {
        alert(`El número mayor es ${numero1}`);
    } else {
        alert(`El número mayor es ${numero2}`);
    }
}

function ejercicio13() {
    let letra = prompt("Ingresa la letra").toLocaleLowerCase();
    if (letra.length !== 1) {
        alert("Por favor, ingrese solo una letra.");
        return;
    }
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            alert("La letra ingresada es una vocal.");
            break;
        default:
            alert("La letra ingresada no es una vocal.");
    }
}

function ejercicio14() {
    let num;
    let esPrimo;

    do {
        num = parseInt(prompt("Ingrese un número entero positivo del 1 al 10: "));
    } while (num < 1 || num > 10);

    esPrimo = true;

    if (num === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                esPrimo = false;
                break; // Termina el bucle si encuentra un divisor
            }
        }
    }

    if (esPrimo) {
        alert("El número " + num + " es primo.");
    } else {
        alert("El número " + num + " no es primo.");
    }
}

function ejercicio15() {
    let cm = parseFloat(prompt("Ingrese la cantidad de centímetros"));
    let libras = parseFloat(prompt("Ingrese la cantidad de libras"));
    let pulg, kg;
    pulg = cm * 0.393701;
    kg = libras * 0.453592;
    alert(`La cantidad en pulgadas es ${pulg} y la cantidad en kilogramos es ${kg}`)
}

function ejercicio16() {
    let num;
    do {
        num = parseInt(prompt("Ingrese un número entre 1 y 7"));
    } while (num < 1 || num > 7);

    switch (num) {
        case 1:
            alert("Lunes")
            break;
        case 2:
            alert("Martes")
            break;
        case 3:
            alert("Miercoles")
            break;
        case 4:
            alert("Jueves")
            break;
        case 5:
            alert("Viernes")
            break;
        case 6:
            alert("Sabado")
            break;
        case 7:
            alert("Domingo")
            break;
    }
}

function ejercicio17() {
    let hora = parseInt(prompt("Ingrese la hora (formato 24 horas)"));
    let minutos = parseInt(prompt("Ingrese los minutos"));
    let segundo = parseInt(prompt("Ingrese los segundos"));
    if (hora < 0 || hora > 23 || minutos < 0 || minutos > 59 || segundo < 0 || segundo > 59) {
        alert(`Valores no validos`);
    } else {
        segundo = segundo + 1;
        if (segundo === 60) {
            segundo = 0;
            minutos = minutos + 1;
        }
        if (minutos === 60) {
            minutos = 0;
            hora = hora + 1;
        }
        if (hora === 24) {
            hora = 0;
        }
        alert(`La hora dentro de un segundo es: ${hora}:${minutos}:${segundo}`)
    }
}

function ejercicio18() {
    let numCDs = parseInt(prompt("Ingrese el número de CDs:"));
    let precioTC;
    let ganancia;
    if (numCDs >= 500) {
        precioTC = 6 * numCDs;
    } else if (numCDs >= 100 && numCDs <= 499) {
        precioTC = 7 * numCDs;
    } else if (numCDs >= 10 && numCDs <= 99) {
        precioTC = 8 * numCDs;
    } else if (numCDs <= 9) {
        precioTC = 10 * numCDs;
    }
    ganancia = 0.0825 * precioTC;
    alert(`El precio total para el cliente es $${precioTC} y la ganancia del vendedor es $${ganancia}`);
}

function ejercicio19() {
    let idEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento): "));
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6):"));
    let identificadorValido;
    let salarioDiario;
    if (diasTrabajados < 0 || diasTrabajados > 6) {
        alert(`La cantidad de días trabajados debe estar entre 0 y 6.`);
    } else {
        identificadorValido = true;
        switch (idEmpleado) {
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
                alert(`El número identificador del empleado es inválido.`);
                identificadorValido = false;
        }

        if (identificadorValido) {
            pagoTotal = salarioDiario * diasTrabajados;
            alert(`El pago total del empleado es $${pagoTotal}`);
        }
    }
}

function ejercicio20() {
    let num1, num2, num3, num4;

    // Solicitar el primer número
    while (true) {
        num1 = parseInt(prompt("Ingrese el primer número:"));
        if (num1 > 0) break;
        alert("Por favor, ingrese un número entero positivo.");
    }

    // Solicitar el segundo número
    while (true) {
        num2 = parseInt(prompt("Ingrese el segundo número:"));
        if (num2 > 0) break;
        alert("Por favor, ingrese un número entero positivo.");
    }

    // Solicitar el tercer número
    while (true) {
        num3 = parseInt(prompt("Ingrese el tercer número:"));
        if (num3 > 0) break;
        alert("Por favor, ingrese un número entero positivo.");
    }

    // Solicitar el cuarto número
    while (true) {
        num4 = parseInt(prompt("Ingrese el cuarto número:"));
        if (num4 > 0) break;
        alert("Por favor, ingrese un número entero positivo.");
    }

    // Verificar cuántos números son pares
    const numeros = [num1, num2, num3, num4];
    let pares = numeros.filter(num => num % 2 === 0).length;
    alert(`Cantidad de números pares: ${pares}`);

    // Encontrar el mayor de todos
    let mayor = Math.max(num1, num2, num3, num4);
    alert(`El mayor de todos los números es: ${mayor}`);

    // Si el tercer número es par, calcular el cuadrado del segundo
    if (num3 % 2 === 0) {
        let cuadradoSegundo = num2 ** 2;
        alert(`El cuadrado del segundo número es: ${cuadradoSegundo}`);
    }

    // Si el primer número es menor que el cuarto, calcular la media de los 4 números
    if (num1 < num4) {
        let media = (num1 + num2 + num3 + num4) / 4;
        alert(`La media de los 4 números es: ${media}`);
    }

    // Si el segundo número es mayor que el tercero
    if (num2 > num3) {
        // Verificar si el tercero está entre 50 y 700
        if (num3 >= 50 && num3 <= 700) {
            let suma = num1 + num2 + num3 + num4;
            alert(`El tercero está entre 50 y 700, y la suma de los 4 números es: ${suma}`);
        } else {
            alert("El tercero no está entre 50 y 700.");
        }
    }
}

function ejercicio21() {
    let n = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial:"));
    let factorial = 1;
    if (n < 0) {
        alert(`El número debe ser un entero positivo.`)
    } else if (n == 0) {
        alert(`El factorial de ${n} es ${factorial}`);
    } else {
        for (let i = 1; i <= n; i++) {
            factorial = factorial * i;
        }
        alert(`El factorial de ${n} es ${factorial}`);
    }
}

function ejercicio22() {
    let n;
    let suma = 0;
    while (true) {
        n = parseInt(prompt("Ingresa el número"));
        if (n > 0) break;
        alert("Por favor, ingrese un número entero positivo.");
    }
    suma = n * (n + 1) / 2;
    alert(`La suma de los ${n} primeros números es ${suma}`);
}

function ejercicio23() {
    let n;
    let suma = 0;
    while (true) {
        n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los números impares menores o iguales a n:"));
        if (n > 0) break;
        alert("Por favor, ingrese un número entero positivo.");
    }

    for (i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            suma = suma + i;

        }

    }

    alert(`La suma de los números impares menores o iguales a ${n} es ${suma}`);

}

function ejercicio24() {
    let suma = 0;
    for (i = 2; i <= 1000; i += 2) {
        suma = suma + i;
    }

    alert(`La suma de los números pares del 1 al 1000 es ${suma}`);
}

function ejercicio25() {
    n = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial:"));
    let factorial = 1;
    let i = 1;
    if (n < 0) {
        alert(`Ingrese un número positivo`);
    } else {
        while (i <= n) {
            factorial *= i;
            i++;
        }

        alert(`El factorial de ${n} es ${factorial}`);
    }
}

function ejercicio26() {
    dividendo = parseInt(prompt("Ingrese el dividendo"));
    divisor = parseInt(prompt("Ingrese el divisor"));
    let cociente;
    let resto;
    if (dividendo > 0 && divisor > 0) {
        cociente = 0;
        resto = dividendo;
        while (resto >= divisor) {
            resto = resto - divisor;
            cociente = cociente + 1;
        }

        alert(`El cociente es: ${cociente} y el resto es: ${resto}`);
    } else {
        alert(`El dividendo y el divisor deben ser números positivos.`);
    }
}

function ejercicio27() {
    let num;
    let suma = 0;
    let contador = 0;
    let media;

    do {
        num = parseInt(prompt("Ingrese números positivos para calcular la media (ingrese un número negativo para terminar):"));

        if (num >= 0) {
            suma += num;
            contador++;
        }
    } while (num >= 0);

    if (contador > 0) {
        media = suma / contador;
        alert(`La media de los números ingresados es ${media}`);
    } else {
        alert(`No se ingresaron números positivos`);
    }
}

function ejercicio28() {
    let suma = 0;
    let contador = 1;
    do {
        suma = suma + contador;
        contador = contador + 1;
    } while (contador <= 100)
    alert(`La suma de los primeros cien números es ${suma}`);
}

function ejercicio29() {
    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    alert(`La suma de los primeros cien números es ${suma}`);
}

function ejercicio30() {
    let suma = 0;
    for (let i = 0; i <= 100; i++) {
        suma = suma + i;
    }
    alert(`La suma de los primeros cien números es ${suma}`);
}

function ejercicio31() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i}:`));

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

    alert(`La media de los números pares es: ${mediaPares}`);
    alert(`La media de los números impares es: ${mediaImpares}`);
}

function ejercicio32() {
    let provincias = 3;
    let ciudadesPorProvincia = 11;
    let poblacionMaxima = -1;
    let ciudadMasPoblada = "";

    for (let provincia = 1; provincia <= provincias; provincia++) {
        for (let ciudad = 1; ciudad <= ciudadesPorProvincia; ciudad++) {
            let poblacion = parseInt(prompt(`Ingrese la población de la ciudad ${ciudad} de la provincia ${provincia}:`));

            if (!isNaN(poblacion) && poblacion > poblacionMaxima) {
                poblacionMaxima = poblacion;
                ciudadMasPoblada = `Ciudad ${ciudad} de la provincia ${provincia}`;
            }
        }
    }

    if (poblacionMaxima === -1) {
        alert("No se ingresaron datos válidos.");
    } else {
        alert(`La ciudad con la población más alta es ${ciudadMasPoblada}, con una población de ${poblacionMaxima} personas.`);
    }
}

function ejercicio33() {
    let opcion;
    do {
        opcion = prompt("Desea continuar con el programa? (S/N)").toUpperCase();
    } while (opcion !== "N");
}

function ejercicio34() {
    for (let i = 1; i <= 9; i++) {
        let mensaje = `Tabla de multiplicar del ${i}:\n`;
        for (let j = 1; j <= 12; j++) {
            mensaje += `${i} x ${j} = ${i * j}\n`;
        }
        alert(mensaje);
    }
}

function ejercicio35(){
    let numeros = []; // Arreglo para almacenar los números ingresados

    // Solicitar al usuario ingresar veinte números
    for (let i = 0; i < 20; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(numero); // Agregar el número ingresado al arreglo
    }

    // Encontrar el número mayor y menor
    let mayor = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    // Mostrar resultados
    alert(`El número mayor es: ${mayor}\nEl número menor es: ${menor}`);
}

function ejercicio36(){
    let num = parseInt(prompt("Ingrese la cantidad de términos de la serie de Fibonacci que desea calcular:"));
    
    if (num < 0) {
        alert("Ingrese un número positivo.");
    } else {
        let a = 0;
        let b = 1;
        let mensaje = `Serie de Fibonacci hasta el término ${num}:\n`;
        mensaje += `${a}\n${b}\n`;

        for (let i = 3; i <= num; i++) {
            let siguiente = a + b;
            mensaje += `${siguiente}\n`;
            a = b;
            b = siguiente;
        }

        alert(mensaje);
    }
}

function ejercicio37() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
    } else {
        let a = numero1;
        let b = numero2;
        let residuo;

        while (b !== 0) {
            residuo = a % b;
            a = b;
            b = residuo;
        }

        alert(`El máximo común divisor (M.C.D) de ${numero1} y ${numero2} es: ${a}`);
    }
}

function ejercicio38(){
    let num = parseInt(prompt("Ingrese un número para verificar si es un número perfecto:"));
    let sumaDivisores = 0;

    for (let divisor = 1; divisor <= num / 2; divisor++) {
        if (num % divisor === 0) {
            sumaDivisores += divisor;
        }
    }

    if (sumaDivisores === num) {
        alert(`El número ${num} es un número perfecto.`);
    } else {
        alert(`El número ${num} no es un número perfecto.`);
    }
}

function ejercicio39(){
    let n = parseInt(prompt("Ingrese la cantidad de términos para aproximar Pi:"));
    let resultado = 0;
    let signo = 1;

    for (let i = 0; i < n; i++) {
        let termino = 4 / (2 * i + 1);
        resultado = resultado + signo * termino;
        signo = signo * (-1);
    }

    alert(`La aproximación de Pi con ${n} términos es: ${resultado}`);
}

function ejercicio40(){

        let terminos = parseInt(prompt("Ingrese la cantidad de términos para aproximar Pi:"));
        let aprox_pi = 3.0;
        let signo = 1;
        let denominador = 2.0;
    
        for (let i = 1; i <= terminos; i++) {
            aprox_pi = aprox_pi + signo * 4 / (denominador * (denominador + 1) * (denominador + 2));
            signo = signo * (-1);
            denominador = denominador + 2;
        }
    
        alert(`La aproximación de Pi con ${terminos} términos es: ${aprox_pi}`);

    
}




