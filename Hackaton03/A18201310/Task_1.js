//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

function task_1(){
    let num = parseInt(prompt("Ingrese un numero: "));

    if (num > 99){
        alert("Tu numero tiene mas de 3 digitos.");
    } else {
        alert("Tu numero NO tiene mas de 3 digitos.");
    }
}

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar 
//si es negativo.

function task_2(){
    let num = parseInt(prompt("Ingrese un numero: "));

    if (num < 0){
        alert("El numero ingresado es negativo.");
    } else {
        alert("El numero ingresado es positivo.");
    }
}

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

function task_3(){
    let num = parseInt(prompt("Ingrese un numero: "));
    let endNum = num % 10;

    if(endNum == 4){
        alert("El ultimo digito del numero termina en 4.");
    } else {
        alert("El ultimo digito del numero no termina en 4.");
    }
}

//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

const resultado = (a, b) => {
    if (a > b){
        return a;
    } else {
        return b;
    }
}

function task_4(){
    let num1 = parseInt(prompt("Ingrese el primer numero: "));
    let num2 = parseInt(prompt("Ingrese el segundo numero: "));
    let num3 = parseInt(prompt("Ingrese el tercer numero: "));

    let mayor1 = resultado(num1, num2);
    let mayor2 = resultado(mayor1, num3);

    alert(`El numero mayor es: ${mayor2}`);
}

/**
 * 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento
 * para vender al mayor, esta dependerá del número de zapatos que se compren.
 * 1.Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
 * 2.si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento
 * 3.y si son más treinta zapatos se otorgará un 40% de descuento.
 * 4.El precio de cada zapato es de $80.
 */

function task_5(){
    let numDeZapatos = parseInt(prompt("Ingrese cuantos zapatos comprara: "));
    let precioTotal = numDeZapatos * 80;
    let descuento = 0;

    if (numDeZapatos > 30) {
        descuento = precioTotal * 0.40;
    } else if (numDeZapatos > 20) {
        descuento = precioTotal * 0.20;
    } else if (numDeZapatos > 10) {
        descuento = precioTotal * 0.10;
    }

    alert(`La cantidad de zapatos comprada es: ${numDeZapatos}, el precio real: ${precioTotal} y el precio con descuento es: ${precioTotal - descuento}.`);
}

//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal,
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas
//entonces las horas extras se le pagarán a $25 por hora.

function task_6(){
    let horas = parseInt(prompt("Ingrese las horas trabajadas: "));
    let horasRegulares = horas;
    let horasExtras = horasRegulares - 40;
    let pagoRegular = 0;
    let pagoExtra = 0;

    if (horasRegulares > 40) {
        for(let i = 1; i <= 40; i++){
            pagoRegular += 20;
        }
    } else {
        while (horasRegulares > 0) {
            pagoRegular += 20;
            horasRegulares -= 1;
        }
    }

    while (horasExtras > 0){
        pagoExtra += 25;
        horasExtras -= 1;
    }

    alert(`Su pago extra es: ${pagoExtra}\nTu pago regular es: ${pagoRegular}`);
}

/**
 * 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus
 *  clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, 
 * tipo B y tipo C. Los descuentos son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento
 */

function task_7(){
    let membresia = prompt("Ingrese su tipo de membresia: A, B, C");

    switch(membresia) {
        case "A":
            alert("Su tipo de membresia tiene un descuento del 10%");
            break;
        case "B":
            alert("Su tipo de membresia tiene un descuento del 15%");
            break;
        case "C":
            alert("Su tipo de membresia tiene un descuento del 20%");
            break;
        default:
            alert("Tipo de membresia invalido.");
    }
}

/**
 * 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si
 * el estudiante aprobó o no.
 */

function task_8(){
    let nota1 = parseInt(prompt("Ingrese primera nota: "));
    let nota2 = parseInt(prompt("Ingrese segunda nota: "));
    let nota3 = parseInt(prompt("Ingrese tercer nota: "));

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 15){
        alert(`Aprobado con ${promedio}`);
    } else {
        alert(`Desaprobado con ${promedio}`);
    }
}

/**
 * 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en
 *  cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento
 *  será de un 10%.
 */

function task_9(){
    
    let sueldo = parseInt(prompt("Ingrese cuanto gana: "));

    if(sueldo > 2000){
        alert(`Sueldo supera los 2000, tiene un aumento de: 10% - ${sueldo * 0.05}`);
    } else {
        alert(`Sueldo no supera los 2000, tiene un aumento de: 5% - ${sueldo * 0.10}`);
    }
}

/**
 * 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
 */

function task_10(){
    let num = parseInt(prompt("Ingrese un numero: "));

    if(num % 2 == 0){
        alert("Numero par");
    } else {
        alert("Numero impar");
    }
}

/**
 * 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
 */

function task_11(){
    let num1 = parseInt(prompt("Ingrese el primero numero: "));
    let num2 = parseInt(prompt("Ingrese el segundo numero: "));
    let num3 = parseInt(prompt("Ingrese el tercer numero: "));

    let mayor1 = resultado(num1, num2);
    let mayor2 = resultado(mayor1, num3);

    alert(`El numero mayor de ${num1}, ${num2}, ${num3} es: ${mayor2}`)
}

/**
 * 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
 */

function task_12(){
    let num1 = parseInt(prompt("Ingrese el primero numero: "));
    let num2 = parseInt(prompt("Ingrese el segundo numero: "));

    alert(`El numero mayor de: ${num1}, ${num2} es: ${resultado(num1, num2)}`);
}

/**
 * 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
 */

function task_13(){
    let letra = prompt("Ingrese una letra: ");

    switch(letra) {
        case "a":
            alert("Ingreso la vocal 'a'.");
            break;
        case "e":
            alert("Ingreso la vocal 'e'.");
            break;
        case "i":
            alert("Ingreso la vocal 'i'.");
            break;
        case "o":
            alert("Ingreso la vocal 'o'.");
            break;
        case "u":
            alert("Ingreso la vocal 'u'.");
            break;
        default:
            alert("No ingreso una vocal.");
            break;
    }
}

/**
 * 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine
 * si es un número primo.
 */

function task_14(){
}