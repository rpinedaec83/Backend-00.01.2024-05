function ejercicio1(){

    let numero  = parseInt(prompt("Escribe un numero"));
    if(numero>99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero no tiene 3 digitos")
    }
}

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio2(){
    let numero  = parseInt(prompt("Escribe un numero"));
    if(numero>=0){
        alert("No es un numero negativo")
    }else{
        alert("Es un numero negativo")
    }
}

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio3(){
    let numero  = parseInt(prompt("Escribe un numero ENTERO"));
    if(numero%10===4){
        alert("Numero termina en 4")
    }else{
        alert("Numero NO termina en 4")
    }
}
//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio4(){
    
    let a  = parseInt(prompt("Escribe un numero"));
    let b  = parseInt(prompt("Escribe un numero"));
    let c  = parseInt(prompt("Escribe un numero"));

    if (a <= b && a <= c) {
        menor = a;
        if (b <= c) {
            medio = b;
            mayor = c;
        } else {
            medio = c;
            mayor = b;
        }
    } else if (b <= a && b <= c) {
        menor = b;
        if (a <= c) {
            medio = a;
            mayor = c;
        } else {
            medio = c;
            mayor = a;
        }
    } else {
        menor = c;
        if (a <= b) {
            medio = a;
            mayor = b;
        } else {
            medio = b;
            mayor = a;
        }
    }
    alert(menor+" "+medio+" "+mayor)
}

/*5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una 
promoción de descuento para vender al mayor, esta dependerá del número de zapatos 
que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
si el número de zapatos es mayor 
de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son 
más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.*/
function ejercicio5(){
    const costo = 80
    let zapatos  = parseInt(prompt("Ingrese el numero de zapatos vendidos"));
    if (zapatos>30) {
        alert("Total a pagar "+costo*zapatos*0.6)
    }else if(zapatos>20) {
        alert("Total a pagar "+costo*zapatos*0.8)
    }else if(zapatos>10){
        alert("Total a pagar "+costo*zapatos*0.9)
    }else{
        alert("Total a pagar "+costo*zapatos)
    }
    
}

/*6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a 
saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
se le pagará $20 por hora, pero si trabaja más de 40 horas entonces 
las horas extras se le pagarán a $25 por hora.*/
function ejercicio6(){
    let horasTrabajo  = parseInt(prompt("Ingrese las horas de tabajo de la semana"));
    if (horasTrabajo<=40) {
        pago=horasTrabajo*20
        alert("El pago que le corresponde al trabajor es "+pago)
    }else{
        pago=40*20+25*(horasTrabajo-40)
        alert("El pago que le corresponde al trabajor es "+pago)
    }
   

}
/*7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento 
por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres 
tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento

   */
function ejercicio7(){
    let monto  = parseInt(prompt("Ingrese el monto a pagar"));
    let membresia  = prompt("Ingrese el tipo de membresia");
    membresia = membresia.toUpperCase()
    switch (membresia) {
        case 'A':
            alert(monto*0.9) // 10% de descuento
            break;
        case 'B':
            alert(monto*0.85) // 15% de descuento
            break;
        case 'C':
            alert(monto*0.8) // 20% de descuento
            break;
        default:
            alert("No cuenta con membresia el monto a pagar es "+monto);
            break;
    }
}

//8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
function ejercicio8(){
    //nota para aprobar es ser mayor o igual a 10
    let n1 = parseInt(prompt("Ingrese un numero"));
    let n2 = parseInt(prompt("Ingrese un numero"));
    let n3 = parseInt(prompt("Ingrese un numero"));
    let promedio=(n1+n2+n3)/3
    if (promedio>=10) {
        alert("Promedio es = "+promedio+" APROBADO")
    }else{
        alert("Promedio es = "+promedio+" DESAPROBADO")
    }
}

/*9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
se debe tomar en cuenta 
que si ganaba más de $2000 tendrá un aumento del 5%, 
si generaba menos de $2000 su aumento será de un 10%.*/
function ejercicio9(){
    let monto = parseInt(prompt("Ingrese el monto del trabajor"));
    if (monto>=2000) {
        aumento=monto*1.05
    }else{
        aumento=monto*1.10;
    }
    alert("El nuevo monto a pagar al trabajor es "+aumento.toFixed(2))
}

//10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio10(){
     let n1 = parseInt(prompt("Ingrese un numero"))
     if (n1%2==0) {
        alert("Numero es PAR")
     }else{
        alert("Numero es IMPAR")
     } 
}

//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio11(){
    let n1 = parseInt(prompt("Ingrese un numero"));
    let n2 = parseInt(prompt("Ingrese un numero"));
    let n3 = parseInt(prompt("Ingrese un numero"));
    if (n1 >= n2 && n1 >= n3) {
        alert("El mayor numero es "+n1)
    } else if (n2 >= n1 && n2 >= n3) {
        alert("El mayor numero es "+n2)
    } else {
        alert("El mayor numero es "+n3)
    }
}

//12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio12(){
    let n1 = parseInt(prompt("Ingrese un numero"));
    let n2 = parseInt(prompt("Ingrese un numero"));
    if (n1 >= n2 ) {
        alert("El mayor numero es "+n1)
    } else {
        alert("El mayor numero es "+n2)
    }
}

//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio13(){
    let letra  = prompt("Ingrese una letra");
    letra = letra.toUpperCase()
    if (letra==="A"||letra==="E"||letra==="I"||letra==="O"||letra==="U") {
        alert("La letra es una VOCAL")
    } else {
        alert("La letra NO es una VOCAL")
    }
}
//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y 
//determine si es un número primo.
function ejercicio14(){
    let n1 = parseInt(prompt("Ingrese un numero"));

    if (esPrimo(n1)) {
        alert("El numero "+n1+" es PRIMO")
    } else {
        alert("El numero "+n1+" NO PRIMO")
    }
    //Crear funcion
    function esPrimo(numero) {
        if (numero <= 1) {
            return false
        }
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false
            }
        }
        return true
    }
}
//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio15(){
    let cen = parseFloat(prompt("Ingrese un valor centrimetro"));
    let lib = parseFloat(prompt("Ingrese un valor libras"));
    alert(`${cen} centrimetros en pulgadas equivale a ${cen*0.393701} y ${lib} libras en pulgadas equivale a ${lib*0.453592}`)

}
//16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
function ejercicio16(){
    let n1 = parseInt(prompt("Ingrese un numero"));
    switch (n1) {
        case 1:
            alert("LUNES")
            break;
        case 2:
            alert("MARTES")
            break;
        case 3:
            alert("MIERCOLES")
            break;
        case 4:
            alert("JUEVES")
            break;
        case 5:
            alert("VIERNES")
            break;
        case 6:
            alert("SABADO")
            break;
        case 7:
            alert("DOMINGO")
            break;                        
        default:
            alert("Numero incorecto")
            break;
    }
}

//17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio17(){
    let hora = parseInt(prompt("Ingrese la hora"));
    let minutos = parseInt(prompt("Ingrese los minutos"));
    let segundos = parseInt(prompt("Ingrese los segundos"));
    function formatoDosDigitos(num) {
        return num.toString().padStart(2, '0');
    }
    if (hora <0 || hora >23 || minutos<0 || minutos>59 || segundos<0 || segundos>59) {
        alert("Valores no validos")
    }else{
        segundos++
        if (segundos===60) {
            segundos=0
            minutos++
        } if (minutos===60) {
            minutos=0
            hora++
        } if (hora===24){
            hora=0
        }
        alert("La hora dentro de un segundo es "+formatoDosDigitos(hora)+":"+formatoDosDigitos(minutos)+":"+formatoDosDigitos(segundos))     
    }
    

}
function ejercicio18(){
    
}
function ejercicio19(){
    
}
function ejercicio20(){
    
}
function ejercicio21(){
    
}
function ejercicio22(){
    
}
function ejercicio23(){
    
}
function ejercicio24(){
    
}
function ejercicio25(){
    
}
function ejercicio26(){
    
}
function ejercicio27(){
    
}
function ejercicio28(){
    
}
function ejercicio29(){
    
}
function ejercicio30(){
    
}

function ejercicio31(){
    
}
function ejercicio32(){
    
}
function ejercicio33(){
    
}
function ejercicio34(){
    
}
function ejercicio35(){
    
}
function ejercicio36(){
    
}
function ejercicio37(){
    
}
function ejercicio38(){
    
}
function ejercicio39(){
    
}
function ejercicio40(){
    
}