function ejercicio1(){

    let numero  = parseInt(prompt("Escribe un numero"));
    if(numero>99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero tiene NO 3 digitos")
    }
}

function ejercicio2(){
    let numero=parseInt(prompt("escriba un numero"));
    if (numero>0){
alert("El numero es positivo")
    }else{
    alert("Numero Negativo")
}

}

function ejercicio3(){
    let numero=prompt("Ingrese un Numero");
    let longitud=numero.length;
    let cad=numero.substring(longitud-1,longitud)
    if (cad==4){
       alert("El Numero Termina en 4")
   } else{
       alert("El Numero no Termina en 4")
       } 
   }

   function ejercicio4(){
        let numero1=prompt("Ingrese el Primer Numero");
      
        let numero2=prompt("Ingrese el Segundo Numero");
        
        let numero3=prompt("Ingrese el Tercer Numero");

        let menor, medio, mayor;

        if (numero1 <= numero2 && numero1 <= numero3) {
            menor = num1;
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
        alert("Los números ordenados de menor a mayor son: "+menor+" - "+medio+" - "+mayor)

   }

   function ejercicio5(){

    let numero_de_zapatos=prompt("Ingrese la cantidad de zapatos");

    let descuento, subtotal, total;
    subtotal = numero_de_zapatos * 80;
    descuento = 0;
    if(numero_de_zapatos > 10 && numero_de_zapatos <= 20)
        descuento = subtotal * 0.1;
    if(numero_de_zapatos > 20 && numero_de_zapatos <= 30)
        descuento = subtotal * 0.2;
    if(numero_de_zapatos > 30)
        descuento = subtotal * 0.4;
    total = subtotal - descuento;
    alert("El descuneto es: "+descuento) ;
    alert("El subtotal es: "+subtotal) ;
    alert("El total es: "+total);

}

function ejercicio6(){

    let horastrabajadas=prompt("Ingrese las horas trabajadas:");
    let horasex=prompt("Ingrese las horas extra trabajadas:");
    let total;

    if(horastrabajadas <= 40){
        total= horastrabajadas * 20;
      
        alert("Su sueldo es de: "+total);
    }else{
        horasex=horastrabajadas - 40;
        total=(horasex * 20)+(40 * 16);
        alert("Su sueldo es de: "+total);
}
}

function ejercicio7(){

    let letra=prompt("Ingrese solo una de las tres etras (A - B - C):")
    let precio=prompt("Ingrese el precio:")

    let total;

    if(letra === 'A'){

        total = precio * 0.10;

        alert("El precio es: "+ total);

    }else if(letra === 'B'){

        total = precio * 0.15;
        alert("El precio es: "+ total);
    }else if(letra === 'C'){

        total = precio * 0.20;
        alert("El precio es: "+ total);
    }else {
        alert("Letra ingresada no válida. Por favor, ingrese solo A, B o C. y en mayuscula");
    }

}

function ejercicio8(){

    let c1 = parseFloat(prompt("Ingrese la primera calificación:"));
let c2 = parseFloat(prompt("Ingrese la segunda calificación:"));
let c3 = parseFloat(prompt("Ingrese la tercera calificación:"));

    let promedio = (c1 + c2 + c3) / 3;

    alert ("El promedio es: "+ promedio.toFixed(2));

    if(promedio >= 0 && promedio <= 12){
        alert ("DESAPROBADO");
    }else if(promedio >= 13 && promedio <= 20){
        alert ("APROBADO");
    }
    
}

function ejercicio9(){

    let saldoActual = parseFloat(prompt("Ingrese el sueldo actual del trabajador:"));

    let aumento;
    let nuevoSaldo;

    if (saldoActual > 2000) {
        aumento = saldoActual * 0.05; 
    } else {
        aumento = saldoActual * 0.10;    
    }

    nuevoSaldo = saldoActual + aumento;
    alert("Salado actual: "+saldoActual.toFixed(2));
    alert("Aumento aplicado:"+aumento.toFixed(2));
    alert("Nuevo salario:"+nuevoSaldo.toFixed(2));

}

function ejercicio10(){

    let numero=parseInt(prompt("escriba un numero"));
    if (numero % 2 === 0){
    alert("El Numero es par")
    }else{
    alert("El Numero es impar")
}

}

function ejercicio11(){

let numero1 = parseFloat(prompt("Ingrese el Primer Numero:"));
let numero2 = parseFloat(prompt("Ingrese el Segundo Numero:"));
let numero3 = parseFloat(prompt("Ingrese el Tercer Numero:"));

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

alert("El número mayor es: " + mayor);
    
}

function ejercicio12(){
    let numero1 = parseFloat(prompt("Ingrese el Primer Numero:"));
    let numero2 = parseFloat(prompt("Ingrese el Segundo Numero:"));

    let menor, mayor;

    if (numero1 < numero2) {
        menor = numero1;
        
        }if(numero1 > numero2){
            mayor = numero1
        }else if(numero1 < numero2) {
            menor = numero1;
            
            }if(numero1 > numero2){
                mayor = numero1
            }else if(numero2<numero1){
                mayor=numero2
        }else if(numero2 < numero1){

            menor = numero2;
        }

        alert("El número mayor es: " + mayor);

}

function ejercicio13(){

    let letra = prompt("Ingrese una letra:");

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        alert(`La letra ${letra} es una vocal.`);
    } else {
        alert(`La letra ${letra} no es una vocal.`);
    }
     
}

function ejercicio15(){

    let centimetros = parseFloat(prompt("Ingrese los Centimetros a convertir: "));
    let libras = parseFloat(prompt("Ingrese las libras a convertir: "));

    pulgadas= centimetros / 2.54;
    kilogramos= libras * 0.45359237;

    alert("La cantidad en pulgadas es: "+pulgadas.toFixed(2))
    alert  ("La cantidad en kilogramos es: "+kilogramos.toFixed(2));

}

function ejercicio16(){

    let numero= prompt("Igrese un numero del 1 al 7:");

    if(numero === '1'){
        alert("LUNES");
    }else if(numero === '2'){
        alert("MARTES");
    }else if(numero === '3'){
        alert("MIERCOLES");
    }else if(numero === '4'){
        alert("JUEVES");
    }else if(numero === '5'){
        alert("VIERNES");
    }else if(numero === '6'){
        alert("SABADO");
    }else if(numero === '7'){
        alert("DOMINGO");
    }else{
        alert("NUMERO NO VALIDO, INGRESAR UN NUMERO DEL 1 AL 7");
    }
}

function ejercicio17(){
    let hora= parseInt(prompt("Igrese la hora:"));
    let minutos= parseInt(prompt("Igrese los minutos:"));
    let segundo= parseInt(prompt("Igrese los segundos:"));

    if(hora <0 || hora >23 || minutos<0 || minutos>59 || segundo<0 || segundo>59){

        alert("NO VALIDO");
    }else{
        segundo = segundo +1;
    }
    if(segundo  == '60'){

        segundo = 0
			minutos = minutos +1;

    }if(minutos == '60'){

        minutos = 0
				hora=hora+1;

    }if( hora =='24'){
        hora=0
    }

    alert("La hora dentro de un segundo es: "+hora+":"+minutos+":"+segundo);
}

function ejercicio18(){

    let cantidad=parseInt(prompt("Igrese la la cantidad de CD´s"));

    if(cantidad <= 9){
        precio_u = 10
    }else if(cantidad >= 10 & cantidad <= 99){
        precio_u = 7

    }else{
        precio_u = 6
    }

    total = cantidad * precio_u
    ganancia = total * 0.0825 

    alert("El precio total para el cliente es: " +total)
    alert("La ganancia para el vendedor es: " +ganancia)
}

function ejercicio22(){

    let n = parseInt(prompt("Escriba el valor de n: "));

    if(n <= 0){
       alert("El valor de n debe ser mayor que cero.");

    }else{

        suma = (n * (n + 1)) / 2
        alert( "La suma de los primeros "+ n+" numeros es: "+ suma);

    }

}

function ejercicio27(){
   
    let suma = 0;
    let contador = 0;
    do {
        n = parseInt(prompt("Escriba una lista de números positivos. Ingrese un número negativo para terminar."));
    
        if (n < 0) {
            if (contador === 0) {
                alert("No se ingresaron números positivos.");
            } else {
                alert("La media de los números ingresados es: " + (suma / contador));
            }
        } else {
            suma = suma + n;
            contador = contador + 1;
        }
    } while (n >= 0);
}

function ejercicio28(){

let contador = 1;
let suma = 0;

while (contador <= 100) {
    suma = suma + contador;
    contador = contador + 1;
}

alert("La suma de los primeros cien números es: " + suma);

}

function ejercicio29(){
    let contador = 1;
let suma = 0;

while (contador <= 100) {
    suma = suma + contador;
    contador = contador + 1;
}

alert("La suma de los primeros cien números es: " + suma);
}

function ejercicio30(){
let suma=0;

for (let numero = 1; numero <= 100; numero++) {
    suma = suma + numero;
}
alert("La suma de los primeros cien numeros es: "+ suma);

}

function ejercicio31(){
    let sumaPares = 0
    let sumaImpares = 0
    let cantidadPares = 0
    let cantidadImpares = 0

    for (let contador = 1; contador <= 10; contador++) {
        let numero = parseInt(prompt("Escriba el número " + contador + ":"));
    
        if (numero % 2 === 0) {
            sumaPares = sumaPares + numero;
            cantidadPares = cantidadPares + 1;
        } else {
            sumaImpares = sumaImpares + numero;
            cantidadImpares = cantidadImpares + 1;
        }
    }
    if(cantidadPares > 0){
        mediaImpares = sumaImpares / cantidadImpares
       alert("La media de los números impares es: "+ mediaImpares);
    }else{
        alert("No se ingresaron números impares.");
    }
}

function ejercicio33(){
    let continuar;

do {
    let suma = 0;

    console.log("Ingrese tres números:");

    for (let n = 1; n <= 3; n++) {
        let numero = parseInt(prompt("Número " + n + ":"));
        suma = suma + numero;
    }

    console.log("La suma de los números ingresados es: " + suma);

    continuar = prompt("¿Desea continuar? Escriba 'S' para continuar y 'N' para terminar:").toLowerCase();
} while (continuar !== 'n');
}

function ejercicio35(){

    let mayor = -9999999;
let menor = 9999999;

for (let i = 1; i <= 20; i++) {
    let numero1 = parseInt(prompt("Escriba el número " + i + ":"));

    if (numero1 > mayor) {
        mayor = numero1;
    }

    if (numero1 < menor) {
        menor = numero1;
    }
}

alert("El número mayor es: "+ mayor);
alert("El número menor es: "+menor);

}