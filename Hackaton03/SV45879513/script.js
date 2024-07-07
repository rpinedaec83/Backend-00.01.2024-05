function Ejercico1() {
let numero = prompt("Por favor, ingrese un número:");
numero = Number(numero);
if (isNaN(numero)) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has ingresado un número válido!'
    });
} else {
    if (numero >= 100 && numero <= 999 || numero <= -100 && numero >= -999) {
        Swal.fire({
            icon: 'success',
            title: 'Número válido!',
            text: 'El número tiene tres dígitos.'
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Número inválido',
            text: 'El número no tiene tres dígitos.'
        });
    }
}

}

function Ejercico2() {
    let numero = prompt("Por favor, ingrese un número:");
numero = Number(numero);

if (isNaN(numero)) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has ingresado un número válido!'
    }); }
    else {
        if(numero>0){

            Swal.fire({
                icon: 'success',
                text: 'Valor positivo'
            });
        }else{
            Swal.fire({
                icon: 'success',
                text: 'Valor Negativo'
            });

        }
    
    }
}



function Ejercico3() {

    let numero = prompt("Por favor, ingrese un número:");
    numero = Number(numero);
    let numStr = numero.toString();
    ubicacion = numStr.length -1;
    Ultimo = numStr.charAt(ubicacion);
    if (isNaN(numero)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No has ingresado un número válido!'
        }); }
else{
    if(Ultimo == 4){
        Swal.fire({
            icon: 'success',
            text: 'Numero termina en 4'
        });
    }
    else{
        Swal.fire({
            icon: 'error',
            text: 'Numero no termina en 4'
        });
    }
}
    
}

function Ejercico4() {

let numero1 = parseInt(prompt("Ingrese el primer número entero:"));
let numero2 = parseInt(prompt("Ingrese el segundo número entero:"));
let numero3 = parseInt(prompt("Ingrese el tercer número entero:"));

//let numeros = [numero1, numero2, numero3];

// Variables temporales para ordenar
let menor, medio, mayor;


if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has ingresado un número válido!'
    }); }
    else{

         if(numero2>numero1){
            if(numero3>numero2){
                minimo = numero1;
                medio = numero2;
                maximo = numero3;
             }else{
                minimo = numero1
                medio = numero3;
                maximo = numero2;
             }
         }else{
            if(numero3>numero1){
                minimo = numero2
                medio = numero1;
                maximo = numero3;
             }else{
                minimo = numero2;
                medio = numero3;
                maximo = numero1;
             }
         }
        Swal.fire({
            icon: 'success',
            title: 'valores de menor a mayor',
             text: `${minimo}, ${medio} ,${maximo}`
        });     

    }


}

function Ejercico5() {
    let cantidadComprada = parseInt(prompt("Ingrese la cantidad de zapatos comprados:"));

    if (isNaN(cantidadComprada) || cantidadComprada < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese una cantidad válida de zapatos.'
        });
    } else {
        let resultado = calcularPrecioTotal(cantidadComprada);
    
         Swal.fire({
            icon: 'success',
            title: 'Resumen de compra',
            html: `
                <p><strong>Cantidad de zapatos comprados:</strong> ${resultado.cantidadZapatos}</p>
                <p><strong>Precio por zapato:</strong> $${resultado.precioPorZapato}</p>
                <p><strong>Total sin descuento:</strong> $${resultado.totalSinDescuento}</p>
                <p><strong>Descuento aplicado:</strong> ${resultado.descuento}%</p>
                <p><strong>Total con descuento:</strong> $${resultado.totalConDescuento}</p>
                <p><strong>Ahorro total:</strong> $${resultado.ahorro}</p>
            `
        });
    }
}

function calcularPrecioTotal(cantidadZapatos) {
    const precioPorZapato = 80;
    let totalSinDescuento = cantidadZapatos * precioPorZapato;
    let descuento = 0;

    if (cantidadZapatos > 30) {
        descuento = 0.4; // 40% de descuento
    } else if (cantidadZapatos >= 21 && cantidadZapatos <= 30) {
        descuento = 0.2; // 20% de descuento
    } else if (cantidadZapatos >= 11 && cantidadZapatos <= 20) {
        descuento = 0.1; // 10% de descuento
    }
    
    let totalConDescuento = totalSinDescuento * (1 - descuento);
    let ahorro = totalSinDescuento - totalConDescuento;

    return {
        cantidadZapatos: cantidadZapatos,
        precioPorZapato: precioPorZapato,
        totalSinDescuento: totalSinDescuento,
        descuento: descuento * 100, 
        totalConDescuento: totalConDescuento,
        ahorro: ahorro
    };
}

function Ejercico6() {
let horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas esta semana:"));
if (isNaN(horasTrabajadas) || horasTrabajadas < 0) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingrese un número válido de horas trabajadas.'
    });
} else {
    let sueldoSemana = calcularSueldo(horasTrabajadas);
    Swal.fire({
        icon: 'success',
        title: 'Sueldo Semanal',
        text: `El sueldo semanal para ${horasTrabajadas} horas trabajadas es: $${sueldoSemana}`
    });
}
}

function calcularSueldo(horasTrabajadas) {
    const pagoPorHoraNormal = 20;
    const pagoPorHoraExtra = 25;
    const horasNormales = 40;

    let sueldoSemanaNormal = 0;
    let sueldoSemanaExtra = 0;

    if (horasTrabajadas <= horasNormales) {
        sueldoSemanaNormal = horasTrabajadas * pagoPorHoraNormal;
    } else {
        sueldoSemanaNormal = horasNormales * pagoPorHoraNormal;
        let horasExtras = horasTrabajadas - horasNormales;
        sueldoSemanaExtra = horasExtras * pagoPorHoraExtra;
    }

    let sueldoTotal = sueldoSemanaNormal + sueldoSemanaExtra;

    return sueldoTotal;
}

function Ejercico7() {
    let tipoMembresia = prompt("Ingrese su tipo de membresía (A, B o C):").toUpperCase();
let montoCompra = parseFloat(prompt("Ingrese el monto de su compra en pesos:"));
if (isNaN(montoCompra) || montoCompra <= 0) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingrese un monto de compra válido.'
    });
} else {
    calcularDescuento(tipoMembresia, montoCompra);
}
}
function calcularDescuento(tipoMembresia, montoCompra) {
    let descuento = 0;

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
            descuento = 0; 
    }
    if (descuento > 0) {
        let montoDescuento = montoCompra * descuento;
        let totalPagar = montoCompra - montoDescuento;
        Swal.fire({
            icon: 'success',
            title: 'Descuento Aplicado',
            html: `
                <p>Tipo de membresía: ${tipoMembresia}</p>
                <p>Monto de compra: $${montoCompra}</p>
                <p>Descuento aplicado: ${descuento * 100}%</p>
                <p>Monto descontado: $${montoDescuento.toFixed(2)}</p>
                <p>Total a pagar: $${totalPagar.toFixed(2)}</p>
            `
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tipo de membresía no válido. Por favor, ingrese A, B o C.'
        });
    }
}   

function Ejercico8() {
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    if(nota1>20 || nota2>20 || nota3>20 ){
        Swal.fire({
            icon: 'error',
            title: 'Error de ingreso de notas',
            text: 'Nota maximo 20'
        });
    }
    else{


      if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Por favor, ingrese valores numéricos para las notas.'
          });
          return; 
      }
      let promedio = (nota1 + nota2 + nota3) / 3;
      let mensaje = '';
      if (promedio >= 14) {
          mensaje = `¡Felicitaciones! Su promedio es ${promedio.toFixed(2)}, usted ha aprobado.`;
      } else {
          mensaje = `Su promedio es ${promedio.toFixed(2)}. Lamentablemente, usted no ha aprobado.`;
      }
      Swal.fire({
          icon: 'info',
          title: 'Resultado del Estudiante',
          text: mensaje
      });
    }
}

function Ejercico9() {
    let salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador en pesos:"));
    if (isNaN(salarioActual) || salarioActual <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese un salario válido mayor que cero.'
        });
        return;
    }
    let aumento = 0;
    let nuevoSalario = 0;
    if (salarioActual > 2000) {
        aumento = salarioActual * 0.05; 
    } else {
        aumento = salarioActual * 0.10; 
    }
    nuevoSalario = salarioActual + aumento;
    Swal.fire({
        icon: 'success',
        title: 'Aumento Salarial',
        html: `
            <p>Salario actual: $${salarioActual.toFixed(2)}</p>
            <p>Porcentaje de aumento: ${aumento > 0 ? (aumento / salarioActual * 100).toFixed(2) : 0}%</p>
            <p>Nuevo salario con aumento: $${nuevoSalario.toFixed(2)}</p>
        `
    });
}


function Ejercico10() {

    let numero = parseInt(prompt("Ingresar un numero:"));

    if (isNaN(numero)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese un valor numerico'
        });
    }
    else{
    if (numero % 2 === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Número Par',
            text: `${numero} es un número PAR.`
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Número Impar',
            text: `${numero} es un número IMPAR.`
        });
    }
}
}
function Ejercico11() {
    let numero1 = parseInt(prompt("Ingrese el primer número entero:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número entero:"));
    let numero3 = parseInt(prompt("Ingrese el tercer número entero:"));
    
    //let numeros = [numero1, numero2, numero3];
    
    // Variables temporales para ordenar
    let menor, medio, mayor;
    
    
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No has ingresado un número válido!'
        }); }
        else{
            let numeros = [numero1, numero2, numero3];
    
             let maximo = Math.max(...numeros);
            Swal.fire({
                icon: 'success',
                title: 'valor maximo',
                 text: `El valor máximo de los números [${numeros}] es: ${maximo}`
            });     
    
        }
}
function Ejercico12() {
        let numero1 = parseFloat(prompt("Ingrese el primer número:"));
        let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

        if (isNaN(numero1) || isNaN(numero2)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, ingrese números válidos.'
            });
            return;
        }
            let mensaje;
        if (numero1 > numero2) {
            mensaje = `El número mayor es ${numero1}.`;
        } else if (numero2 > numero1) {
            mensaje = `El número mayor es ${numero2}.`;
        } else {
            mensaje = `Ambos números son iguales.`;
        }
        Swal.fire({
            icon: 'info',
            title: 'Resultado',
            text: mensaje
        });
}
function Ejercico13() {

    let letra = prompt("Ingrese una letra:");

    if (!letra || letra.length !== 1 || !/^[a-zA-Z]$/.test(letra)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese una sola letra válida.'
        });
        return; 
    }
    if (esVocal(letra)) {
        Swal.fire({
            icon: 'success',
            title: 'Resultado',
            text: `${letra} es una vocal.`
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Resultado',
            text: `${letra} no es una vocal.`
        });
    }
}

function esVocal(letra) {
    letra = letra.toLowerCase();
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(letra);
}

function Ejercico14() {
    let numero = parseInt(prompt("Ingrese un número entero positivo del 1 al 9:"));
    if (isNaN(numero) || numero < 1 || numero > 9) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese un número entero positivo válido del 1 al 9.'
        });
        return; 
    }
    if (esPrimo(numero)) {
        Swal.fire({
            icon: 'success',
            title: 'Resultado',
            text: `${numero} es un número primo.`
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Resultado',
            text: `${numero} no es un número primo.`
        });
    }
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
function Ejercico15() {
        let cm = parseFloat(prompt("Ingrese la cantidad en centímetros:"));
        let libras = parseFloat(prompt("Ingrese la cantidad en libras:"));
        if (isNaN(cm) || isNaN(libras) || cm < 0 || libras < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, ingrese cantidades válidas y positivas.'
            });
            return; 
        }
        let pulgadas = convertirCmAPulgadas(cm).toFixed(2);
        let kilogramos = convertirLibrasAKilogramos(libras).toFixed(2);
        Swal.fire({
            icon: 'success',
            title: 'Conversiones',
            html: `
                <p>${cm} centímetros son ${pulgadas} pulgadas.</p>
                <p>${libras} libras son ${kilogramos} kilogramos.</p>
            `
        });
}

function convertirCmAPulgadas(cm) {
    return cm * 0.393701;
}
function convertirLibrasAKilogramos(libras) {
    return libras * 0.453592;
}
function Ejercico16() {
    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
    if (isNaN(numero) || numero < 1 || numero > 7) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese un número válido del 1 al 7.'
        });
        return; 
    }
    let dia = determinarDiaDeLaSemana(numero);
    Swal.fire({
        icon: 'info',
        title: 'Día de la Semana',
        text: `El número ${numero} corresponde a ${dia}.`
    });
}
function determinarDiaDeLaSemana(numero) {
    let dia;

    switch (numero) {
        case 1:
            dia = 'Lunes';
            break;
        case 2:
            dia = 'Martes';
            break;
        case 3:
            dia = 'Miércoles';
            break;
        case 4:
            dia = 'Jueves';
            break;
        case 5:
            dia = 'Viernes';
            break;
        case 6:
            dia = 'Sábado';
            break;
        case 7:
            dia = 'Domingo';
            break;
        default:
            dia = null; 
    }

    return dia;
}

function Ejercico17() {
    let hora = prompt("Ingrese una hora en formato hh:mm:ss:");
    let regexHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    if (!regexHora.test(hora)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese una hora válida en formato hh:mm:ss.'
        });
        return;
    }
    let nuevaHora = agregarUnSegundo(hora);
    Swal.fire({
        icon: 'info',
        title: 'Nueva Hora',
        text: `Un segundo después de ${hora} es ${nuevaHora}.`
    });
}
function agregarUnSegundo(hora) {
    let partes = hora.split(':');
    let horas = parseInt(partes[0]);
    let minutos = parseInt(partes[1]);
    let segundos = parseInt(partes[2]);
    let fecha = new Date();
    fecha.setHours(horas);
    fecha.setMinutes(minutos);
    fecha.setSeconds(segundos);
    fecha.setSeconds(fecha.getSeconds() + 1);
    let nuevaHora = fecha.toTimeString().split(' ')[0];
    return nuevaHora;
}
function Ejercico18() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de CDs que desea comprar:"));
    if (isNaN(cantidad) || cantidad < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese una cantidad válida de CDs.'
        });
        return; 
    }
    let precioUnitario = determinarPrecioUnitario(cantidad);
    let precioTotal = precioUnitario * cantidad;
    let ganancia = precioTotal * 0.0825;
    Swal.fire({
        icon: 'info',
        title: 'Resultados de la Venta',
        html: `
            <p>Precio total para el cliente: $${precioTotal.toFixed(2)}</p>
            <p>Ganancia para el vendedor: $${ganancia.toFixed(2)}</p>
        `
    });

}
function determinarPrecioUnitario(cantidad) {
    if (cantidad >= 1 && cantidad <= 9) {
        return 10;
    } else if (cantidad >= 10 && cantidad <= 99) {
        return 8;
    } else if (cantidad >= 100 && cantidad <= 499) {
        return 7;
    } else if (cantidad >= 500) {
        return 6;
    } else {
        return 0; 
    }
}
function Ejercico19() {
    let identificador = parseInt(prompt("Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):"));
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"));
    if (isNaN(identificador) || identificador < 1 || identificador > 4 || isNaN(diasTrabajados) || diasTrabajados < 1 || diasTrabajados > 6) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese valores válidos para el identificador del empleado y los días trabajados.'
        });
        return; 
    }
    let salarioDiario = determinarSalarioDiario(identificador);
    let salarioTotal = salarioDiario * diasTrabajados;
    Swal.fire({
        icon: 'info',
        title: 'Salario Total',
        text: `El salario total para el empleado con identificador ${identificador} por ${diasTrabajados} días de trabajo es $${salarioTotal}.`
    });
}
function determinarSalarioDiario(identificador) {
    switch (identificador) {
        case 1: 
            return 56;
        case 2: 
            return 64;
        case 3: 
            return 80;
        case 4: 
            return 48;
        default:
            return null;
    }
}
function Ejercico20() {
    let num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
    let num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
    let num4 = parseInt(prompt("Ingrese el cuarto número entero positivo:"));
    if (isNaN(num1) || num1 <= 0 || isNaN(num2) || num2 <= 0 || isNaN(num3) || num3 <= 0 || isNaN(num4) || num4 <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese números enteros positivos válidos.'
        });
        return; 
    }
    let numeros = [num1, num2, num3, num4];
    let pares = numeros.filter(n => n % 2 === 0).length;
    let mayor = Math.max(num1, num2, num3, num4);
    let cuadradoSegundo = null;
    if (num3 % 2 === 0) {
        cuadradoSegundo = num2 ** 2;
    }
    let media = null;
    if (num1 < num4) {
        media = (num1 + num2 + num3 + num4) / 4;
    }
    let suma = null;
    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
        suma = num1 + num2 + num3 + num4;
    }
    let resultado = `
        <p>¿Cuántos números son Pares?: ${pares}</p>
        <p>¿Cuál es el mayor de todos?: ${mayor}</p>
    `;
    if (cuadradoSegundo !== null) {
        resultado += `<p>El cuadrado del segundo número es: ${cuadradoSegundo}</p>`;
    }
    if (media !== null) {
        resultado += `<p>La media de los 4 números es: ${media}</p>`;
    }
    if (suma !== null) {
        resultado += `<p>La suma de los 4 números es: ${suma}</p>`;
    }

    Swal.fire({
        icon: 'info',
        title: 'Resultados',
        html: resultado
    });
}

function Ejercico21() {
    let numero = parseInt(prompt("Ingrese un número entero para calcular su factorial:"));
    if (isNaN(numero)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese un número entero válido.'
        });
        return;
    }
    let resultado = calcularFactorial(numero);
    Swal.fire({
        icon: 'info',
        title: 'Factorial Calculado',
        html: `<p>El factorial de ${numero} es: ${resultado}</p>`
    });
}
function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    if (numero === 0) {
        return 1;
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    return factorial;
}
function Ejercico22() {
    let numero = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los primeros n números:"));
    if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese un número entero positivo válido.'
        });
        return;
    }
    let resultado = calcularSumaNumeros(numero);
    Swal.fire({
        icon: 'info',
        title: 'Suma de los primeros n números',
        html: `<p>La suma de los primeros ${numero} números es: ${resultado}</p>`
    });
}

function calcularSumaNumeros(n) {
    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        return "Por favor, ingrese un número entero positivo válido.";
    }
    let suma = (n * (n + 1)) / 2;

    return suma;
}

function Ejercico23() {
    let numero = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los números impares menores o iguales a él:"));
    if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese un número entero positivo válido.'
        });
        return;
    }
    let resultado = calcularSumaImpares(numero);
    Swal.fire({
        icon: 'info',
        title: 'Suma de los números impares menores o iguales a n',
        html: `<p>La suma de los números impares menores o iguales a ${numero} es: ${resultado}</p>`
    });
}

function calcularSumaImpares(n) {
    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        return "Por favor, ingrese un número entero positivo válido.";
    }
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
    }

    return suma;
}

function Ejercico24() {
    let resultado = calcularSumaParesHasta1000();
    Swal.fire({
        icon: 'info',
        title: 'Suma de todos los números pares hasta 1000',
        html: `<p>La suma de todos los números pares hasta 1000 es: ${resultado}</p>`
    });
}
function calcularSumaParesHasta1000() {
    let suma = 0;
    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    return suma;
}

function Ejercico25() {
    let numero = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial:"));
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese un número entero positivo válido.'
        });
        return;
    }
    let resultado = factorialConReduce(numero);
    Swal.fire({
        icon: 'info',
        title: 'Factorial Calculado',
        html: `<p>El factorial de ${numero} es: ${resultado}</p>`
    });
}

function factorialConReduce(numero) {
    if (!Number.isInteger(numero) || numero < 0) {
        return "El factorial está definido solo para números enteros positivos.";
    }
    let numeros = Array.from({ length: numero }, (_, index) => index + 1);
    let factorial = numeros.reduce((acumulador, valorActual) => acumulador * valorActual, 1);

    return factorial;
}
function Ejercico26() {
    let dividendo = parseInt(prompt("Ingrese el dividendo (número entero positivo):"));
    let divisor = parseInt(prompt("Ingrese el divisor (número entero positivo):"));
    if (!Number.isInteger(dividendo) || !Number.isInteger(divisor) || dividendo < 0 || divisor <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese números enteros positivos válidos.'
        });
        return;
    }
    let resultado = calcularCocienteResto(dividendo, divisor);
    Swal.fire({
        icon: 'info',
        title: 'Cociente y Resto Calculados',
        html: `<p>Dividendo: ${dividendo}, Divisor: ${divisor}</p>
               <p>Cociente: ${resultado.cociente}</p>
               <p>Resto: ${resultado.resto}</p>`
    });
}
function calcularCocienteResto(dividendo, divisor) {
    if (!Number.isInteger(dividendo) || !Number.isInteger(divisor) || dividendo < 0 || divisor <= 0) {
        return "Por favor, ingrese números enteros positivos válidos.";
    }
    let cociente = 0;
    let resto = dividendo;
    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }
    return {
        cociente: cociente,
        resto: resto
    };
}
function Ejercico27() {
    let suma = 0;
    let cantidad = 0;
    while (true) {
        let numero = parseInt(prompt("Ingrese un número positivo (o un número negativo para terminar):"));
        if (numero < 0) {
            break;
        }
        if (!isNaN(numero) && numero >= 0) {
            suma += numero;
            cantidad++;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingrese un número positivo válido.'
            });
        }
    }
    if (cantidad > 0) {
        let media = suma / cantidad;
        Swal.fire({
            icon: 'info',
            title: 'Media Calculada',
            html: `<p>La media de los números ingresados es: ${media.toFixed(2)}</p>`
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Sin Números Válidos',
            text: 'No se ingresaron números positivos para calcular la media.'
        });
    }
}
function Ejercico28() {

    let resultado = calcularSumaPrimerosCien();
    Swal.fire({
        icon: 'info',
        title: 'Suma de los primeros cien números',
        html: `<p>La suma de los primeros cien números es: ${resultado}</p>`
    });

}
function calcularSumaPrimerosCien() {
    let suma = 0;
    let contador = 1;
    do {
        suma += contador;
        contador++;
    } while (contador <= 100);

    return suma;
}
function Ejercico29() {
    let resultado = calcularSumaPrimerosCienWhile();
    Swal.fire({
        icon: 'info',
        title: 'Suma de los primeros cien números con ciclo while',
        html: `<p>La suma de los primeros cien números es: ${resultado}</p>`
    });
}
function calcularSumaPrimerosCienWhile() {
    let suma = 0;
    let contador = 1;
    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    return suma;
}
function Ejercico30() {
    let resultado = calcularSumaPrimerosCienFor();
    Swal.fire({
        icon: 'info',
        title: 'Suma de los primeros cien números con ciclo for',
        html: `<p>La suma de los primeros cien números es: ${resultado}</p>`
    });
}
function calcularSumaPrimerosCienFor() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    return suma;
}
function Ejercico31() {
    let numerosIngresados = [];
    let sumaPares = 0, sumaImpares = 0;
    let cantidadPares = 0, cantidadImpares = 0;
    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i}:`));
        while (isNaN(numero)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingrese un número válido.'
            });
            numero = parseInt(prompt(`Ingrese el número ${i}:`));
        }
        numerosIngresados.push(numero);
        if (numero % 2 === 0) {
            sumaPares += numero;
            cantidadPares++;
        } else {
            sumaImpares += numero;
            cantidadImpares++;
        }
    }
    let mediaPares = cantidadPares > 0 ? sumaPares / cantidadPares : 0;
    let mediaImpares = cantidadImpares > 0 ? sumaImpares / cantidadImpares : 0;
    Swal.fire({
        icon: 'info',
        title: 'Resultados',
        html: `
            <p>Media de números pares: ${mediaPares.toFixed(2)}</p>
            <p>Media de números impares: ${mediaImpares.toFixed(2)}</p>
        `
    });
}
function Ejercico32() {
    let poblacion = [
        [120000, 150000, 180000],   
        [130000, 160000, 190000],  
        [140000, 170000, 200000]    
    ];
        let maxPoblacion = 0;
        let provinciaMax = 0;
        let ciudadMax = 0;
        for (let provincia = 0; provincia < poblacion.length; provincia++) {
            for (let ciudad = 0; ciudad < poblacion[provincia].length; ciudad++) {
                if (poblacion[provincia][ciudad] > maxPoblacion) {
                    maxPoblacion = poblacion[provincia][ciudad];
                    provinciaMax = provincia + 1; 
                    ciudadMax = ciudad + 1;       
                }
            }
        }
        Swal.fire({
            icon: 'info',
            title: 'Ciudad con más población',
            html: `<p>La ciudad con más población está en la Provincia ${provinciaMax}, Ciudad ${ciudadMax}. Población: ${maxPoblacion}</p>`
        });
}
function Ejercico33() {
    do {
        let numero = parseInt(prompt("Ingrese un número:"));

        if (!isNaN(numero)) {
            Swal.fire({
                icon: 'success',
                title: 'Número ingresado',
                text: `Has ingresado el número ${numero}`
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No has ingresado un número válido.'
            });
        }
        var continuar = confirm("¿Deseas continuar con el programa?");
    } while (continuar);

    Swal.fire({
        icon: 'info',
        title: 'Fin del programa',
        text: 'Has decidido salir del programa. ¡Hasta luego!'
    });
}

function Ejercico34() {
    let numero = prompt("Por favor, ingrese un número:");
    numero = Number(numero);
    if (isNaN(numero)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No has ingresado un número válido.'
        });

    }
    else{
        let tablaHtml = '<div style="text-align: center;">';
        tablaHtml += `<h3>Tabla de multiplicar del ${numero}:</h3>`;
        tablaHtml += '<table style="margin: auto; border-collapse: collapse; text-align: center;">';
        tablaHtml += '<thead><tr><th style="border: 1px solid black; padding: 8px;">Multiplicador</th><th style="border: 1px solid black; padding: 8px;">Resultado</th></tr></thead>';
        tablaHtml += '<tbody>';
        for (let j = 1; j <= 10; j++) {
            let resultado = numero * j;
            tablaHtml += `<tr><td style="border: 1px solid black; padding: 8px;">${j}</td><td style="border: 1px solid black; padding: 8px;">${resultado}</td></tr>`;

        }
        tablaHtml += '</tbody>';
        tablaHtml += '</table>';
        tablaHtml += '</div>';

        Swal.fire({
            icon: 'info',
            title: `Tabla de multiplicar del ${numero}`,
            html: tablaHtml
        });
    
}
}
function Ejercico35() {
    let numeros = []; 
    let contador = 0;
    while (contador < 20) {
        let numero = prompt(`Ingrese el número ${contador + 1}:`);
        numero = Number(numero);

        if (isNaN(numero)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No has ingresado un número válido.'
            });
            continue; 
        }
        numeros.push(numero); 
        contador++; 
    }
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
    Swal.fire({
        icon: 'info',
        title: 'Resultados',
        html: `<p>El número mayor es: ${mayor}</p><p>El número menor es: ${menor}</p>`
    });
}
function Ejercico36() {

    let numero = prompt("Por favor, ingrese un número:");
    numero = Number(numero);
    if (isNaN(numero)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No has ingresado un número válido.'
        });

    }
    else{
        let n = numero;
        let serie = [];
    if (n >= 1) {
        serie.push(0);
    }
    if (n >= 2) {
        serie.push(1);
    }
    for (let i = 2; i < n; i++) {
        serie[i] = serie[i - 1] + serie[i - 2];
    }
    let listaHtml = '<ol>';
    for (let i = 0; i < serie.length; i++) {
        listaHtml += `<li>${serie[i]}</li>`;
    }
    listaHtml += '</ol>';
    Swal.fire({
        icon: 'info',
        title: `Serie de Fibonacci (${n} números)`,
        html: listaHtml
    }); 
}
}
function Ejercico37() {

    let numero1 = prompt("Ingrese el primer número:");
    let numero2 = prompt("Ingrese el segundo número:");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese números válidos.'
        });
        return;
    }
    let mcd = mcdEuclides(numero1, numero2);
    Swal.fire({
        icon: 'info',
        title: 'Máximo Común Divisor (M.C.D.)',
        html: `<p>El M.C.D. de ${numero1} y ${numero2} es: <strong>${mcd}</strong></p>`
    });
}
function mcdEuclides(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function Ejercico38() {
    let numero = prompt("Ingrese un número para verificar si es perfecto:");
    numero = parseInt(numero);

    if (isNaN(numero) || numero <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese un número entero positivo válido.'
        });
        return;
    }

    let esPerfecto = esNumeroPerfecto(numero);
    Swal.fire({
        icon: esPerfecto ? 'success' : 'error',
        title: esPerfecto ? 'Número Perfecto' : 'No es Número Perfecto',
        text: `El número ${numero} ${esPerfecto ? 'es' : 'no es'} un número perfecto.`
    });
}
function esNumeroPerfecto(numero) {
    if (numero <= 1) {
        return false; 
    }

    let sumaDivisores = 0;

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}
function Ejercico39() { 
    const numTerminos = parseInt(prompt("Ingrese el número de términos para la aproximación de Pi:"));
    if (isNaN(numTerminos) || numTerminos <= 0) {
        alert("Por favor ingrese un número válido mayor que cero.");
        return;
    }
    const resultadoPi = calcularPi(numTerminos);
    Swal.fire({
        icon: 'info',
        title: 'Aproximación de Pi con la serie de Gregory-Leibniz',
        html: `Usando ${numTerminos} términos, el valor aproximado de Pi es: <strong>${resultadoPi}</strong>`,
    });
}
function calcularPi(numTerminos) {
    let pi = 0;
    let signo = 1;
    for (let i = 0; i < numTerminos; i++) {
        let denominador = 2 * i + 1;
        pi += signo * (4 / denominador);
        signo *= -1; 
    }
    return pi;
}
function Ejercico40() {
    const numTerminos = parseInt(prompt("Ingrese el número de términos para la aproximación de Pi:"));

    if (isNaN(numTerminos) || numTerminos <= 0) {
        alert("Por favor ingrese un número válido mayor que cero.");
        return;
    }

    const resultadoPi = calcularPi(numTerminos);
    Swal.fire({
        icon: 'info',
        title: 'Aproximación de Pi con la serie de Nilakantha',
        html: `Usando ${numTerminos} términos, el valor aproximado de Pi es: <strong>${resultadoPi}</strong>`,
       
    });
}
function calcularPi(numTerminos) {
    let pi = 3;
    let denominador = 2;
    let signo = 1;

    for (let i = 0; i < numTerminos; i++) {
        pi += signo * (4 / (denominador * (denominador + 1) * (denominador + 2)));
        denominador += 2;
        signo *= -1; // Cambiar el signo para el siguiente término
    }

    return pi;
}