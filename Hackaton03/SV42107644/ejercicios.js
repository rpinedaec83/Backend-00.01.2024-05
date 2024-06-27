
//1. Hacer un algoritmo en JavaScript que lea un numero por el teclado y determinar si tiene tres digitos.
function ejercicio01() {
    let numero = prompt("Escribe un numero");

    if (numero === null) { return; }

    if (!isNaN(numero)) {
        if (numero > 99 && numero < 1000) {
            alert("Este numero tiene 3 digitos");
        } else {
            alert("Este numero NO tiene 3 digitos");
        }
    } else {
        alert("Este NO es un numero");
    }
}

//2. Hacer un algoritmo en JavaScript que lea un numero entero por el teclado y determinar si es negativo.
function ejercicio02() {
    let numero = prompt("Escribe un numero");

    if (numero === null) { return; }

    if (!isNaN(numero)) {
        if (numero > 0) {
            alert("El numero es positivo");
        } else {
            alert("El numero es negativo");
        }
    } else {
        alert("Este NO es un numero");
    }
}

//3. Hacer un algoritmo en JavaScript que lea un numero y determinar si termina en 4.
function ejercicio03() {
    let numero = prompt("Escribe un numero");

    if (numero === null) { return; }

    if (!isNaN(numero)) {
        let longitud = numero.length;
        let ultimoDigito = numero.substring(longitud - 1, longitud);
        if (ultimoDigito === 4) {
            alert("El numero termina en 4");
        } else {
            alert("El numero NO termina en 4");
        }
    } else {
        alert("Este NO es un numero");
    }
}

//4. Hacer un algoritmo en JavaScript que lea tres numeros enteros y los muestre de menor a mayor.
function ejercicio04() {
    const cantidadNumeros = 3;
    let arrNumeros = new Array(cantidadNumeros);

    alert(`Ingresaremos ${cantidadNumeros} numeros`);

    for (let i = 0; i < cantidadNumeros; i++) {
        let validacion = true;
        while (validacion) {
            let numero = prompt(`Ingrese numero ${i + 1}:`);
            if (!isNaN(numero) && numero !== "") {
                validacion = false;
                arrNumeros[i] = Number(numero);
            } else {
                alert("Ingreso un valor invalido");
            }
        }
    }

    //ordenando numeros
    for (let i = 0; i < cantidadNumeros - 1; i++) {
        for (let j = i + 1; j < cantidadNumeros; j++) {
            if (arrNumeros[j] < arrNumeros[i]) {
                [arrNumeros[i], arrNumeros[j]] = [arrNumeros[j], arrNumeros[i]];
            }
        }
    }

    let mensaje = "Los numeros ordenados ascendentemente son:\n";
    for (let i = 0; i < cantidadNumeros; i++) {
        mensaje += `${arrNumeros[i]}\n`;
    }

    alert(mensaje);
}


/*5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promocion de descuento para vender al mayor, 
esta dependera del numero de zapatos que se compren. 
Si son mas de diez, se les dara un 10% de descuento sobre el total de la compra; 
si el numero de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
y si son mas treinta zapatos se otorgara un 40% de descuento. El precio de cada zapato es de $80.*/
function ejercicio05() {
    const precioZapato = 80;
    let descuento = 0;

    let cantidadZapatos = prompt("Ingrese la cantidad de zapatos:");

    if (cantidadZapatos === null) { return; }

    if (!isNaN(cantidadZapatos) && cantidadZapatos > 0) {

        if (cantidadZapatos > 10 && cantidadZapatos <= 20) {
            descuento = 0.1;
        } else if (cantidadZapatos > 20 && cantidadZapatos <= 30) {
            descuento = 0.2;
        } else if (cantidadZapatos > 30) {
            descuento = 0.4;
        }

        let precioSinDescuento = cantidadZapatos * precioZapato;
        let montoDescuento = precioSinDescuento * descuento;
        let totalVenta = precioSinDescuento - montoDescuento;

        // Construir el mensaje final para mostrar al usuario
        let mensaje = `Cantidad de zapatos: ${cantidadZapatos}\n`;
        mensaje += `Total sin descuento: $${precioSinDescuento.toFixed(2)}\n`;

        if (descuento > 0) {
            mensaje += `Descuento aplicado: ${descuento * 100}%\n`;
            mensaje += `Monto del descuento:$${montoDescuento.toFixed(2)}\n`;
        } else {
            mensaje += "Ud no cuenta con descuento\n";
        }

        mensaje += `Total a pagar: $${totalVenta.toFixed(2)}`;

        // Mostrar el mensaje final al usuario
        alert(mensaje);
    } else {
        alert("Operacion invalida");
    }
}

/*6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cual sera su sueldo semanal, 
se sabe que si trabaja 40 horas o menos, se le pagara $20 por hora, 
pero si trabaja mas de 40 horas entonces las horas extras se le pagaran a $25 por hora.*/
function ejercicio06() {
    const salarioHora = 20;
    const salarioHoraExtra = 25;
    const limiteHoras = 40;

    let cantidadHoras = prompt("Ingrese la cantidad de horas trabajadas:");


    if (cantidadHoras === null) { return; }

    if (!isNaN(cantidadHoras) && cantidadHoras > 0) {

        let salarioTotal, horasExtras = 0;

        if (cantidadHoras <= limiteHoras) {
            salarioTotal = cantidadHoras * salarioHora;
        } else {
            salarioTotal = limiteHoras * salarioHora;
            horasExtras = cantidadHoras - limiteHoras;
            salarioTotal += horasExtras * salarioHoraExtra;
        }

        let mensaje = `Ud trabajo ${horasExtras} horas extras\n`;
        mensaje += `El salario que le corresponde es: $${salarioTotal}`;

        alert(mensaje);
    } else {
        alert("Operacion invalida");
    }
}

/*7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresia 
dependiendo de su tipo, solo existen tres tipos de membresia, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento 
*/
function ejercicio07() {
    let descuento = 0;
    let membresia = prompt("Ingrese su tipo de membresia:");

    if (membresia === null) { return; }

    switch (membresia.toUpperCase()) {
        case "A":
            descuento = 0.1;
            break;
        case "B":
            descuento = 0.15;
            break;
        case "C":
            descuento = 0.2;
            break;
        default:
            alert("La membresia ingresada no es valida");
            return;
    }

    if (descuento > 0) {
        alert(`Le corresponde un descuento de ${descuento * 100}%`);
    } else {
        alert("Ud no cuenta con descuento");
    }
}

//8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobo o no.
function ejercicio08() {
    const notaMaxima = 20;
    const notaAprobatoria = 11;

    let nota1, nota2, nota3;
    let promedio;

    // Validacion de la primera nota
    let noEsNota = true;
    while (noEsNota) {
        nota1 = parseFloat(prompt("Ingrese la primera nota:"));
        if (!isNaN(nota1) && nota1 >= 0 && nota1 <= notaMaxima) {
            noEsNota = false;
        } else {
            alert("Ingrese una nota valida entre 0 y 20.");
        }
    }

    // Validacion de la segunda nota
    noEsNota = true;
    while (noEsNota) {
        nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
        if (!isNaN(nota2) && nota2 >= 0 && nota2 <= notaMaxima) {
            noEsNota = false;
        } else {
            alert("Ingrese una nota valida entre 0 y 20.");
        }
    }

    // Validacion de la tercera nota
    noEsNota = true;
    while (noEsNota) {
        nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
        if (!isNaN(nota3) && nota3 >= 0 && nota3 <= notaMaxima) {
            noEsNota = false;
        } else {
            alert("Ingrese una nota valida entre 0 y 20.");
        }
    }

    promedio = (nota1 + nota2 + nota3) / 3;
    let mensaje = ""
    if (promedio >= notaAprobatoria) {
        mensaje = "El estudiante aprobo.\n";
    } else {
        mensaje = "El estudiante no aprobo.\n";
    }
    mensaje += `Su promedio es: ${promedio.toFixed(2)}`

    alert(mensaje);
}

/*9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
se debe tomar en cuenta que si ganaba mas de $2000 tendra un aumento del 5%, 
si generaba menos de $2000 su aumento sera de un 10%.
*/
function ejercicio09() {
    const sueldoLimite = 2000;
    let aumento = 0;
    let sueldo = 0;

    let valorIngresado = prompt("Ingrese su sueldo:");

    if (valorIngresado === null) { return; }

    if (!isNaN(valorIngresado) && valorIngresado > 0) {
        sueldo = parseFloat(valorIngresado);
        if (sueldo > sueldoLimite) {
            aumento = 0.05;
        } else {
            aumento = 0.1;
        }

        let nuevoSueldo = sueldo + sueldo * aumento;
        let mensaje = `Ud aplica para un aumento de ${aumento * 100}%\n`;
        mensaje += `Su nuevo sueldo es: ${nuevoSueldo.toFixed(2)}`;

        alert(mensaje);
    } else {
        alert("Operacion invalida");
    }
}

//10. Hacer un algoritmo en JavaScript que diga si un numero es par o impar.
function ejercicio10() {
    let valorIngresado = prompt("Ingrese un numero entero:");

    if (valorIngresado === null) { return; }

    let numero = parseInt(valorIngresado);

    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert(`El numero ${numero} es par`);
        } else {
            alert(`El numero ${numero} es impar`);
        }
    } else {
        alert("Operacion invalida");
    }
}

//11. Hacer un algoritmo en JavaScript que lea tres numeros y diga cual es el mayor.
function ejercicio11() {
    const cantidad = 3;
    let listaIngresada = [];

    alert(`Ingrese ${cantidad} numeros enteros:`);

    for (let i = 0; i < cantidad; i++) {
        let validacion = true;
        while (validacion) {
            let valorIngresado = prompt(`Ingrese numero ${i + 1}:`);

            if (valorIngresado === null) {
                return;
            }

            if (!isNaN(valorIngresado)) {
                valorIngresado = parseInt(valorIngresado);
                listaIngresada.push(valorIngresado);
                validacion = false;
            } else {
                alert("Por favor, ingrese un numero entero valido.");
            }
        }
    }


    let numeroMayor = listaIngresada[0];

    for (let i = 1; i < cantidad; i++) {
        if (numeroMayor < listaIngresada[i]) {
            numeroMayor = listaIngresada[i];
        }
    }

    alert(`El numero mayor ingresado es: ${numeroMayor}`);
}

//12. Hacer un algoritmo en JavaScript que lea dos numeros y diga cual es el mayor.
function ejercicio12() {
    let primerNumero = parseInt(prompt("Ingrese primer numero:"));

    if (primerNumero === null) {
        return; // El usuario cancelo la entrada
    }

    while (isNaN(primerNumero)) {
        alert("Por favor, ingrese un numero entero valido.");
        primerNumero = parseInt(prompt("Ingrese primer numero:"));
        if (primerNumero === null) {
            return; // El usuario cancelo la entrada
        }
    }

    let segundoNumero = parseInt(prompt("Ingrese segundo numero:"));

    if (segundoNumero === null) {
        return; // El usuario cancelo la entrada
    }

    while (isNaN(segundoNumero)) {
        alert("Por favor, ingrese un numero entero valido.");
        segundoNumero = parseInt(prompt("Ingrese segundo numero:"));
        if (segundoNumero === null) {
            return; // El usuario cancelo la entrada
        }
    }

    if (primerNumero > segundoNumero) {
        alert(`El numero mayor es: ${primerNumero}`);
    } else {
        alert(`El numero mayor es: ${segundoNumero}`);
    }
}

//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio13() {
    let letra = prompt("Ingrese una letra:");

    if (letra === null) {
        return;
    }

    switch (letra.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            alert(`Ingresaste la vocal: ${letra}`);
            break;
        default:
            alert("No es una vocal");
    }
}

//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un numero primo.
function ejercicio14() {
    const limite = 10;
    let valorIngresado = prompt(`Ingrese un numero del 1 al ${limite}:`);

    if (valorIngresado === null) {
        return;
    }

    if (isNaN(valorIngresado) || valorIngresado === "") {
        alert("Debe ingresar un numero valido");
        return;
    }

    let numeroIngresado = parseInt(valorIngresado);

    if (numeroIngresado < 0) {
        alert("Este es un numero negativo");
    } else if (numeroIngresado > limite) {
        alert(`Este numero es mayor que ${limite}`);
    } else {
        if (numeroIngresado < 2) {
            alert("Este numero no es primo");
        } else if (numeroIngresado === 2) {
            alert("Este numero es primo");
        } else {
            let esPrimo = true;
            for (let i = 2; i <= Math.sqrt(numeroIngresado); i++) {
                if (numeroIngresado % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) {
                alert("Este numero es primo");
            } else {
                alert("Este numero no es primo");
            }
        }
    }
}

//15. Hacer un algoritmo en JavaScript que convierta centimetros a pulgadas y libras a kilogramos.
function ejercicio15() {
    const factorPulgadas = 0.393701;
    const factorKilogramos = 0.453592;
    let opcionIngresada;
    let bandera = true;

    while (bandera) {
        let valida = false;

        while (!valida) {
            opcionIngresada = prompt(
                "Ingrese una opcion:\n" +
                "  1. Convertir centimetros a pulgadas\n" +
                "  2. Convertir libras a kilogramos"
            );

            if (opcionIngresada === 1 || opcionIngresada === 2) {
                valida = true;
            } else {
                if (opcionIngresada === null) {
                    return;
                } else {
                    alert("Ingrese una opcion valida.");
                }
            }
        }


        valida = false;

        while (!valida) {
            let valorIngresado = prompt("Ingrese el valor a convertir:");

            if (!isNaN(valorIngresado)) {
                let valor = parseFloat(valorIngresado);
                switch (opcionIngresada) {
                    case "1":
                        let resultadoPulgadas = valor * factorPulgadas;
                        alert(`${valor} centimetros equivalen a ${resultadoPulgadas} pulgadas.`);
                        break;
                    case "2":
                        let resultadoKilogramos = valor * factorKilogramos;
                        alert(`${valor} libras equivalen a ${resultadoKilogramos} kilogramos.`);
                        break;

                }
                valida = true;
            } else {
                alert("Ingrese una un valor valido");
            }
        }


        if (!confirm("¿Desea realizar otra operacion?")) {
            bandera = false;
        }

    }
}

//16. Hacer un algoritmo en JavaScript que lea un numero y segun ese numero, indique el dia que corresponde.
function ejercicio16() {
    const diasMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const nombreMes = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const nombreDiaSemana = [
        "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"
    ];

    let bandera = true;

    while (bandera) {
        let numeroIngresado = prompt("Ingrese un numero entre 1 y 366 para calcular el dia del presente año:");

        if (numeroIngresado === null) return;

        numeroIngresado = parseInt(numeroIngresado, 10);

        if (!isNaN(numeroIngresado) && numeroIngresado >= 1 && numeroIngresado <= 366) {
            let mes = 0;
            let dia = parseInt(numeroIngresado);

            while (dia > diasMes[mes]) {
                dia -= diasMes[mes];
                mes++;
            }

            let diaSemana = 0;
            for (let i = 0; i < mes; i++) {
                diaSemana += diasMes[i];
            }
            diaSemana += dia - 1;
            diaSemana %= 7;

            let nombreDia = nombreDiaSemana[diaSemana];
            let mensaje = `Es ${nombreDia}, ${dia} de ${nombreMes[mes]}`;
            alert(mensaje);
        } else {
            alert("Ingreso un valor invalido");
        }

        if (!confirm("¿Desea realizar otra operacion?")) {
            bandera = false;
        }
    }
}

//17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio17() {
    function solicitarEntrada(mensaje, minimo, maximo) {
        while (true) {
            let numero = prompt(mensaje);
            if (numero === null) return null;

            if (!isNaN(numero) && numero >= minimo && numero <= maximo) {
                return parseInt(numero);
            } else {
                alert(`Ingrese un valor valido entre ${minimo} y ${maximo}`);
            }
        }
    }

    alert("Ingresaremos hh:mm:ss para calcular la hora ingresada mas un segundo");

    while (true) {
        let hh = solicitarEntrada("Ingresa hh (0 a 23)", 0, 23);
        if (hh === null) return;

        let mm = solicitarEntrada("Ingresa mm (0 a 59)", 0, 59);
        if (mm === null) return;

        let ss = solicitarEntrada("Ingresa ss (0 a 59)", 0, 59);
        if (ss === null) return;

        // Incrementar un segundo
        ss += 1;
        if (ss === 60) {
            ss = 0;
            mm += 1;
            if (mm === 60) {
                mm = 0;
                hh += 1;
                if (hh === 24) {
                    hh = 0;
                }
            }
        }

        alert(`La hora ingresada mas un segundo es: ${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`);

        if (!confirm("¿Desea realizar otra operacion?")) {
            return;
        }
    }
}

/*18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribucion de CD virgenes. Los clientes pueden adquirir los articulos (supongamos un unico producto de una unica marca) por cantidad. Los precios son:
    $10. Si se compran unidades separadas hasta 9.
    $8. Si se compran entre 10 unidades hasta 99.
    $7. Entre 100 y 499 unidades.
    $6. Para mas de 500 unidades.
La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un numero de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
*/
function ejercicio18() {
    const comision = 0.0825;

    function solicitarDato(mensaje) {
        while (true) {
            let numero = prompt(mensaje);
            if (numero === null) return null;

            if (!isNaN(numero) && numero >= 0) {
                return parseInt(numero);
            } else {
                alert("Ingrese una cantidad valida");
            }
        }
    }

    function calcularPrecioUnitario(cantidad) {
        if (cantidad <= 9) {
            return 10;
        } else if (cantidad <= 99) {
            return 8;
        } else if (cantidad <= 499) {
            return 7;
        } else {
            return 6;
        }
    }

    function calcularPrecioTotal(cantidad, precioUnitario) {
        return cantidad * precioUnitario;
    }

    function calcularComision(precioTotal) {
        return precioTotal * comision;
    }

    while (true) {
        let cantidad = solicitarDato("Ingrese la cantidad de productos:");
        if (cantidad === null) return;

        let precioUnitario = calcularPrecioUnitario(cantidad);
        let precioTotal = calcularPrecioTotal(cantidad, precioUnitario);
        let comisionVendedor = calcularComision(precioTotal);

        let mensaje = `El precio total es: $${precioTotal.toFixed(2)}\n`;
        mensaje += `La ganancia del vendedor es: $${comisionVendedor.toFixed(2)}`;
        alert(mensaje);

        if (!confirm("¿Desea realizar otra operacion?")) {
            return;
        }
    }
}

/*19. Hacer un algoritmo en JavaScript para una heladeria se tienen 4 tipos de empleados 
ordenados de la siguiente forma con su numero identificador y salario diario correspondiente:
    Cajero (56$/dia).
    Servidor (64$/dia).
    Preparador de mezclas (80$/dia).
    Mantenimiento (48$/dia).
El dueño de la tienda desea tener un programa donde solo ingrese dos numeros enteros que representen al numero identificador del empleado y la cantidad de dias que trabajo en la semana (6 dias maximos). Y el programa le mostrara por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingreso
*/
function ejercicio19() {
    const salarios = [56.00, 64.00, 80.00, 48.00];

    function solicitarDato(mensaje, rangoMin, rangoMax) {
        while (true) {
            let numero = prompt(mensaje);
            if (numero === null) return null;

            if (!isNaN(numero) && numero >= rangoMin && numero <= rangoMax) {
                return parseInt(numero);
            } else {
                alert(`Ingrese una opcion valida entre ${rangoMin} y ${rangoMax}`);
            }
        }
    }

    while (true) {
        let mensajeIdentificador = `Ingrese el identificador del empleado: 
        1. Cajero ($56/dia)
        2. Servidor ($64/dia)
        3. Preparador de mezclas ($80/dia)
        4. Mantenimiento ($48/dia)`;

        let identificador = solicitarDato(mensajeIdentificador, 1, 4);
        if (identificador === null) return;

        let cantidadDias = solicitarDato("Ingrese la cantidad de dias trabajados del empleado (maximo 6):", 0, 6);
        if (cantidadDias === null) return;

        let sueldo = salarios[identificador - 1] * cantidadDias;

        let mensaje = `Ud debe pagar al empleado: $${sueldo.toFixed(2)}, por los ${cantidadDias} dias trabajados`;
        alert(mensaje);

        if (!confirm("¿Desea realizar otra operacion?")) {
            return;
        }
    }
}
/*20. Hacer un algoritmo en JavaScript que que lea 4 numeros enteros positivos y verifique y realice las siguientes operaciones:
    ¿Cuantos numeros son Pares?
    ¿Cual es el mayor de todos?
    Si el tercero es par, calcular el cuadrado del segundo.
    Si el primero es menor que el cuarto, calcular la media de los 4 numeros.
    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condicion, calcular la suma de los 4 numeros.
*/
function ejercicio20() {
    const cantidad = 4;
    let numerosIngresados = new Array(cantidad);
    let mensaje = "";

    alert(`Se debe ingresar ${cantidad} numeros positivos para calcular: 
    - Cantidad de numeros pares
    - El mayor de todos los numeros
    - Si el tercero es par, calcular el cuadrado del segundo
    - Si el primero es menor que el cuarto, calcular la media de los 4 numeros
    - Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700, calcular sumatoria`);

    function solicitarNumero(mensaje) {
        while (true) {
            let numero = prompt(mensaje);
            if (numero === null) return null;

            if (!isNaN(numero) && numero >= 0) {
                return parseFloat(numero);
            } else {
                alert("Ingrese un valor valido");
            }
        }
    }

    function contarPares(numerosIngresados) {
        let pares = 0;
        for (let i = 0; i < cantidad; i++) {
            if (numerosIngresados[i] % 2 === 0) {
                pares++;
            }
        }
        return pares;
    }

    function hallarMayor(numerosIngresados) {
        let numeroMayor = numerosIngresados[0];
        for (let i = 1; i < cantidad; i++) {
            if (numerosIngresados[i] > numeroMayor) {
                numeroMayor = numerosIngresados[i];
            }
        }
        return numeroMayor;
    }

    function sumarNumeros(numerosIngresados) {
        let sumatoria = 0;
        for (let i = 0; i < cantidad; i++) {
            sumatoria += numerosIngresados[i];

        }
        return sumatoria;
    }

    while (true) {
        for (let i = 0; i < cantidad; i++) {
            let numero = solicitarNumero(`Ingrese el numero ${i + 1}:`);
            if (numero === null) return;
            numerosIngresados[i] = numero;
        }


        mensaje += `Cantidad de numeros pares: ${contarPares(numerosIngresados)}\n`;

        mensaje += `El numero mayor es: ${hallarMayor(numerosIngresados)}\n`;

        if (numerosIngresados[2] % 2 === 0) {
            mensaje += `El cuadrado del segundo es ${numerosIngresados[1] ** 2}\n`;
        }

        let sumatoria = sumarNumeros(numerosIngresados);

        if (numerosIngresados[0] < numerosIngresados[3]) {
            let media = sumatoria / cantidad;
            mensaje += `La media es: ${media}\n`;
        }

        if (numerosIngresados[1] > numerosIngresados[2]) {
            if (numerosIngresados[2] >= 50 && numerosIngresados[2] <= 700) {
                mensaje += `La suma de los 4 numeros es: ${sumatoria}\n`;
            }
        }

        alert(mensaje);

        if (!confirm("¿Desea realizar otra operacion?")) {
            return;
        }
    }
}

//21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un numero.
function ejercicio21() {

    while (true) {
        let numero = prompt("Ingrese un numero para calcular su factorial:");

        if (numero === null) return;

        if (!isNaN(numero) && numero !== "") {
            let factorial = calcularFactorial(parseInt(numero));

            alert(`El factorial de ${numero} es: ${factorial}`);
        } else {
            alert("No ha ingresado un numero valido.");
        }

        if (!confirm("¿Desea realizar otra operacion?")) {
            break;
        }
    }

}

//22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros numeros.
function ejercicio22() {
    while (true) {
        let limite = prompt("Ingrese un numero para calcular la suma de los primeros n numeros:");

        if (limite === null) return;

        if (!isNaN(limite) && limite >= 0) {
            limite = parseInt(limite);
            let sumatoria = 0;

            for (let i = 1; i <= limite; i++) {
                sumatoria += i;
            }

            alert(`La sumatoria de los primeros ${limite} numeros es: ${sumatoria}`);
        } else {
            alert("Por favor, ingrese un valor valido (numero mayor o igual a 0).");
        }

        if (!confirm("¿Desea realizar otra operacion?")) {
            break;
        }
    }
}

//23. Hacer un algoritmo en JavaScript para calcular la suma de los numeros impares menores o iguales a n.
function ejercicio23() {
    while (true) {
        let limite = prompt("Ingrese un numero para calcular la suma de los numeros impares menores o iguales a n:");

        if (limite === null) return;

        if (!isNaN(limite) && limite >= 0) {
            limite = parseInt(limite);
            let sumatoria = 0;

            for (let i = 1; i <= limite; i++) {
                if (i % 2 !== 0) {
                    sumatoria += i;
                }
            }

            alert(`La sumatoria de los numeros impares menores o iguales a ${limite} es: ${sumatoria}`);
        } else {
            alert("Por favor, ingrese un valor valido (numero mayor o igual a 0).");
        }

        if (!confirm("¿Desea realizar otra operacion?")) {
            break;
        }
    }
}

//24. Hacer un algoritmo en JavaScript para realizar la suma de todos los numeros pares hasta el 1000.
function ejercicio24() {
    let sumatoria = 0;
    const limite = 1000;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            sumatoria += i;
        }
    }

    alert(`La suma de los ${limite} primeros numeros pares es: ${sumatoria}`);
}

//25. Hacer un algoritmo en JavaScript para calcular el factorial de un numero de una forma distinta.
function ejercicio25() {

    while (true) {
        let valor = prompt("Ingrese un numero para calcular su factorial");

        if (valor === null) return;

        if (!isNaN(valor) && valor.trim() !== '') {
            alert("El factorial es: ", calcularFactorial(parseInt(valor)));
        } else {
            alert("Este no es un numero");
        }

        if (!confirm("¿Desea realizar otra operacion?")) {
            break;
        }
    }
}

//26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function ejercicio26() {
    function solicitarNumero(mensaje) {
        while (true) {
            let numero = prompt(mensaje);
            if (numero === null) return null;

            if (!isNaN(numero) && numero >= 0) {
                return parseFloat(numero);
            } else {
                alert("Ingrese un valor valido");
            }
        }
    }
    
    while (true) {
        let primerNumero = solicitarNumero("Ingrese el primer numero");
        if (primerNumero === null) return;

        let segundoNumero = solicitarNumero("Ingrese el segundo numero");
        if (segundoNumero === null) return;

        if (segundoNumero === 0) {
            alert("No se puede dividir entre 0. Ingrese otro segundo numero.");
            continue;
        }


        let resto = primerNumero % segundoNumero;
        let cociente = (primerNumero - resto) / segundoNumero;

        alert(`Resultado: Cociente ${cociente}, Resto ${resto}`);

        if (!confirm("¿Desea realizar otra operacion?")) {
            break;
        }
    }
}

//27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de numeros positivos, se debe acabar el programa al ingresar un numero negativo.
function ejercicio27() {
    let tamanyo = 0;
    let sumatoria = 0;
    let lista = [];
  

    alert("Ingrese numeros positivos para determinar la media. Para terminar, ingrese un valor negativo.");

    while (true) {
        let valor = prompt("Ingrese un numero:");

        if (valor === null) return;

        if (isNaN(valor)) {
            alert("Ingrese un valor numerico valido.");
            continue;
        }
        let numero = parseInt(valor);
        if ( numero >= 0) {
            lista.push(numero);
            tamanyo++;
        } else {
            break; 
        }
    }

    if (tamanyo === 0) {
        alert("No se ingresaron numeros positivos.");
        return;
    }

    // Calcular la sumatoria
    for (let i = 0; i < tamanyo; i++) {
        sumatoria += lista[i];
    }

    // Calcular la media
    let media = sumatoria / tamanyo;

    alert(`La media de los numeros positivos es: ${media}`);
}

//28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien numeros con un ciclo repetir.
function ejercicio28() {
    let sumatoria = 0;
    let limite = 100;
    let i = 1;

    do {
        sumatoria += i;
        i++;
    } while (i <= limite);

    alert(`La suma de los ${limite} primeros numeros es: ${sumatoria}`);
    
}

//29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien numeros con un ciclo mientras.
function ejercicio29() {
    let sumatoria = 0;
    let limite = 100;
    let i = 1;

    while (i <= limite) {
        sumatoria += i;
        i++;
    }

    alert(`La suma de los ${limite} primeros numeros es: ${sumatoria}`);
}

//30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien numeros con un ciclo para.
function ejercicio30() {
    let sumatoria = 0;
    let limite = 100;

    for (let i = 1; i <= limite; i++) {
        sumatoria += i;
    }

    alert(`La suma de los ${limite} primeros numeros es: ${sumatoria}`);
}

//31. Hacer un algoritmo en JavaScript parar calcular la media de los numeros pares e impares, solo se ingresara diez numeros.
function ejercicio31() {
    let limite = 10;
    let contador = 1;
    let sumatoria = 0;

    alert("Ingrese 10 numeros para calcular su media:");

    do {
        let valor = prompt(`Ingrese el numero ${contador}:`);
        if (valor === null) return;
        
        if (!isNaN(valor) && valor.trim() !== '') {
            sumatoria += parseInt(valor);
            contador++;
        }  else {
            alert("Ingrese un valor valido")
        }

    } while (contador <= limite);

    alert(`La media de los numeros es: ${sumatoria / limite}`);
}

/*32. Se quiere saber cual es la ciudad con la poblacion de mas personas, son tres provincias y once ciudades,
 hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
*/
function ejercicio32() {
    let cantProvincias = 3;
    let cantCiudades = 11;
    let provincias = [];
    let ciudades = [];
    let i = 1;

    alert(`Ingrese las ${cantProvincias} provincias:`);

    // Ingreso de provincias
    for (i = 1; i <= cantProvincias; i++) {
        let provincia = prompt(`Ingrese el nombre de la provincia #${i}:`)
        if (provincia ===  null) 
            return;
        else provincias.push(provincia);
    }

    i = 1;

    alert(`Ingrese las ${cantCiudades} ciudades:`);

    // Ingreso de ciudades
    for (i = 1; i <= cantCiudades; i++) {
        let ciudad = prompt(`Ingrese el nombre de la ciudad #${i}:`)
        if (ciudad ===  null) return;
        ciudades.push([ciudad, '', 0]); // inicializamos con valores vacios y 0
        console.log ("marca 1")
        let listaProvincias = '';
        for (let j = 1; j <= cantProvincias; j++) {
            listaProvincias += `${j} - ${provincias[j - 1]}\n`;
        }
        listaProvincias += `${cantProvincias + 1} - No pertenece a ninguna provincia`;
        console.log ("lista provincias ", listaProvincias)
        
        let provincia;
        console.log ("marca 1 fin")
        while (true) {
            provincia = parseInt(prompt(`Ingrese el numero de la provincia para ${ciudad}:\n\n${listaProvincias}`));
            if (provincia > 0 && provincia <= cantProvincias + 1) {
                if (provincia <= cantProvincias) {
                    ciudades[i - 1][1] = provincias[provincia - 1];
                } else {
                    ciudades[i - 1][1] = "sin provincia";
                }
                break;
            } else {
                alert("Ingrese un valor valido.");
            }
        }

        let poblacion;
        while (true) {
            poblacion = prompt(`Ingrese la poblacion de ${ciudad}:`);
            if (!isNaN(poblacion) && poblacion > 0) {
                ciudades[i - 1][2] = parseInt(poblacion);
                break;
            } else {
                alert("Ingrese un valor valido.");
            }
        }
    }

    // Encontrar ciudad con mayor poblacion
    let mayorPoblacion = 0;
    for (let i = 1; i < cantCiudades; i++) {
        if (ciudades[i][2] > ciudades[mayorPoblacion][2]) {
            mayorPoblacion = i;
        }
    }

    // Mostrar resultados
    let result = "Ud ingreso:\n\n";
    for (let i = 0; i < cantCiudades; i++) {
        result += `Ciudad: ${ciudades[i][0]}, Provincia: ${ciudades[i][1]}, Poblacion: ${ciudades[i][2]}\n`;
    }

    result += "\nLa ciudad con mayor poblacion es:\n";
    result += `Ciudad: ${ciudades[mayorPoblacion][0]}, Provincia: ${ciudades[mayorPoblacion][1]}, Poblacion: ${ciudades[mayorPoblacion][2]}`;

    alert(result);
}

//33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function ejercicio33() {
    let continuar = true;

    while (continuar) {
        alert("¡Hola!");

        let opcion = prompt("¿Desea continuar? Presione S para si o N para no").toUpperCase();

        while (opcion !== "S" && opcion !== "N") {
            alert("Ingrese una opcion valida (S para si o N para no).");
            opcion = prompt("¿Desea continuar? Presione S para si o N para no").toUpperCase();
        }

        if (opcion === "N") {
            continuar = false;
        }
    }
}

//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los numeros del uno nueve.
function ejercicio34() {
    let limite = 9;
    let maximo = 12;
   

    alert(`Esta es la tabla de multiplicar de los numeros del 1 al ${limite}`);

    for (let i = 1; i <= limite; i++) {
        let mensaje = `Tabla del ${i}:\n`;
        for (let j = 1; j <= maximo; j++) {
            mensaje += `${i} x ${j} = ${i * j}\n`;
        }
        alert(mensaje);
    }


}

//35. Hacer un algoritmo en JavaScript que nos permita saber cual es el numero mayor y menor, se debe ingresar solo veinte numeros.
function ejercicio35() {
    let limite = 20;
    let contador = 1;
    let valorMayor, valorMenor;

    alert("Ingrese 20 numeros para identificar cual es mayor y cual es menor.");

    while (contador <= limite) {
        let valor = prompt(`Ingrese el valor #${contador}:`);

        if (valor ===  null) return;

        if (!isNaN(valor)) {
            let numero = parseInt(valor)
            if (contador !== 1){
                if (numero > valorMayor) {
                    valorMayor = numero;
                }
                if (numero < valorMenor) {
                    valorMenor = numero;
                }
            }else {
                valorMayor = numero;
                valorMenor = numero;
            }
            contador++;
        } else {
            alert("Ingrese un valor valido");
        }

    }

    alert(`El valor mayor es: ${valorMayor}\nEl valor menor es: ${valorMenor}`);
}

//36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacc.
function ejercicio36() {
    let serieFibonacci = "Serie de Fibonacci:\n";

    let valor = prompt("Ingrese un numero para calcular la serie Fibonacci:");

    if (valor ===  null) return;

    if (!isNaN(valor) && valor > 0) {
        let numero = parseInt(valor);
        let a = 0, b = 1;
        
        serieFibonacci += a + "\n";
        serieFibonacci += b + "\n";

        for (let i = 3; i <= numero; i++) {
            let fibonacci = a + b;
            serieFibonacci += fibonacci + "\n";
            a = b;
            b = fibonacci;
        }

        alert(serieFibonacci);
    } else {
        alert("Debe ingresar un numero valido mayor que 0");
    }
}

//37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un numero por medio del algoritmo de Euclides.
function ejercicio37() {
    function obtenerNumero(mensaje) {
        console.log("marca 1")
        while (true){
            let valor = prompt(mensaje);
            console.log(valor)
            if (valor === null) { return null; }
            console.log("marca 2")
            if (isNaN(valor)) {
                alert("Ingrese un numero valido.");
            }else{
                console.log("marca 3")
                return parseInt(valor);
            }
        }
    }
    
    function calcularMCD(a, b) {
        while (b !== 0) {
            let auxiliar = b;
            b = a % b;
            a = auxiliar;
        }
        return a;
    }

    let primerNumero = obtenerNumero("Ingrese el primer numero para determinar el Maximo Comun Divisor (MCD) mediante el algoritmo de Euclides:");
    console.log("marca 4 ",primerNumero )
    if (primerNumero === null) return; // Si el usuario cancela o ingresa un valor invalido
    console.log("marca 5")
    let segundoNumero = obtenerNumero("Ingrese el segundo numero:");
    if (segundoNumero === null) return; // Si el usuario cancela o ingresa un valor invalido
    console.log("marca 6", segundoNumero)
    let mcd = calcularMCD(primerNumero, segundoNumero);
    alert("El MCD es: " + mcd);
}

//38. Hacer un algoritmo en JavaScript que nos permita saber si un numero es un numero perfecto.
function ejercicio38() {
    while (true) {
        let valorIngresado = prompt("Ingrese un numero para determinar si es un numero perfecto");

        if (valorIngresado === null) return;

        if (!isNaN(valorIngresado) && valorIngresado.trim() !== '') {
            let numeroIngresado = parseInt(valorIngresado);

            if (esPerfecto(numeroIngresado)) {
                alert("Este numero es perfecto");
            } else {
                alert("Este numero no es perfecto");
            }
        } else {
            alert("Este no es un numero");
        }

        if (!confirm("¿Desea realizar otra operacion?")) {
            break;
        }
    }
}

function esPerfecto(numeroIngresado) {
    let sumatoria = 0;

    for (let i = 1; i < numeroIngresado; i++) {
        if (numeroIngresado % i === 0) {
            sumatoria += i;
        }
    }

    return sumatoria === numeroIngresado;
}

/*39. Hacer un algoritmo en JavaScript que cumpla con la aproximacion del numero pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
*/
function ejercicio39() {
    let limite = 8;
    let factor = 1;
    let piGregoryLeibniz = 0;

    alert("Esta es la aproximacion del numero pi con la serie de Gregory-Leibniz:");

    for (let i = 1; i <= limite; i++) {
        piGregoryLeibniz += factor * 4 / (i * 2 - 1);
        factor = factor * (-1);
    }

    alert(`El valor es: ${piGregoryLeibniz}`);
}

/*40. Hacer un algoritmo en JavaScript que cumpla con la aproximacion del numero pi con la serie de Nilakantha. La formula que se debe aplicar es:
    Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
*/
function ejercicio40() {
    let limite = 7;
    let factor = 1;
    let piNilakantha = 3;

    alert("Esta es la aproximacion del numero pi con la serie de Nilakantha:");

    for (let i = 2; i <= limite; i++) {
        piNilakantha += factor * 4 / ((i * 2 - 2) * (i * 2 - 1) * (i * 2));
        factor = factor * (-1);
    }

    alert(`El valor es: ${piNilakantha}`);
}

function calcularFactorial(numero) {
    let numFactorial = 1;
    for (let i = 1; i <= numero; i++) {
        numFactorial *= i;
    }
    return numFactorial;
}