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
     let numero=prompt("ingrese Numero");
     let longitud=numero.length;
     let cad=numero.substring(longitud-1,longitud)
     if (cad==4){
        alert("El Numero Termina en 4")
    } else{
        alert("El Numero  no Termina en 4")
        } 
    }
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
function ejercicio5(){
let nZapatos=parseInt(prompt("Escriba la Cantidad de Zapatos"))
let descuento=0,total_pagar=0,total=0;
if (nZapatos>30){
    descuento=(nZapatos*80)*0.4
}else if(nZapatos>20){
        descuento=(nZapatos*80)*0.2
}else if (nZapatos>10){
        descuento=(nZapatos*80)*0.1
}
total=nZapatos*80
total_pagar=total-descuento
alert("El total sin descuento es: "+total+" Descuento : "+descuento+" Total a Pagar: "+total_pagar)
}

 function ejercicio6(){
    let cHoras=parseInt(prompt("Ingrese Cantidad de Horas Trabajadas:"))
    let hExtras=0,total=0;
    if (cHoras>40){
        hExtras=cHoras-40;
    } else{
        hExtras=0;
    }
    total=((cHoras-hExtras)*20)+(hExtras*25)
    alert("Sueldo a Recibir :"+total)
 }

 function ejercicio7(){
    let tMembresia=prompt("Ingrese Tipo de Membresia A,B o C")
    let cHelados=parseInt(prompt("Ingrese Cantidad de Helados a Comprar Precio S/. 5 c/u:"))
    let descuento=0,Total=0,total_pagar;
    if(tMembresia.toUpperCase()=="A"){
        descuento=(cHelados*5)*0.1;
    }else if(tMembresia.toUpperCase()=="B"){
        descuento=(cHelados*5)*0.2;
    }
    else if(tMembresia.toUpperCase()=="C"){
        descuento=(cHelados*5)*0.3;
    }
    total=cHelados*5;
    total_pagar=total -descuento;
    alert("")
    }
    function ejercicio8() {
        let nota1 = parseInt(prompt("Ingrese Nota 1"))
        let nota2 = parseInt(prompt("Ingrese Nota 2"))
        let nota3 = parseInt(prompt("Ingrese Nota 3"))
        let promedio = (nota1 + nota2 + nota3) / 3;
    
        if (promedio >= 11) {
            alert("Se encuentra Aprobado")
        } else {
            alert("Se encuentra Desaprobado")
        }
    
    }
    function ejercicio9() {
        let sueldo = parseInt(prompt("Ingrese Sueldo"))
        let sueldoNuevo = 0;
        if (sueldo > 2000) {
            sueldoNuevo = (sueldo * 0.05) + sueldo;
        } else {
            sueldoNuevo = (sueldo * 0.1) + sueldo;
        }
        alert("El sueldo Nuevo es :" + sueldoNuevo)
    }
    function ejercicio10() {
        let numero = parseInt(prompt("Ingrese Numero:"))
        if ((numero % 2) === 0) {
            alert("El Numero es Par:")
    
        } else { alert("El Numero es Impar") }
    }
    
    function ejercicio11() {
        let n1 = parseInt(prompt("Ingrese el Primer Numero:"))
        let n2 = parseInt(prompt("Ingrese el Segundo numero:"))
        let n3 = parseInt(prompt("Ingrese el Tercer Numero:"))
        let mayor = 0;
        mayor = n1;
        if (n2 > mayor) {
            mayor = n2;
        } if (n3 > mayor) {
            mayor = n3;
    
        }
        alert("El Numero Mayor es :" + mayor)
    }
    
    function ejercicio12() {
        let n1 = parseInt(prompt("Ingrese el Primer Numero:"))
        let n2 = parseInt(prompt("Ingrese el Segundo numero:"))
        mayor = 0;
        if (n1 > n2) {
            mayor = n1;
        } else { mayor = n2 }
        alert("El Numero Mayor es :" + mayor)
    }
    function ejercicio13() {
        let letra = prompt("Ingrese Letra").toUpperCase()
         
        let tipo;
        switch (letra) {
            case "A":
                tipo = "Es Vocal";
                break;
            case "E":
                tipo = "Es vocal";
                break;
            case "I":
                tipo = "Es vocal";
                break;
            case "O":
                tipo = "Es vocal";
                break;
            case "U":
                tipo = "Es vocal";
                break;
            default:
                tipo = "No es Vocal";
                break;
        }
                
        alert(tipo)
    }
    function ejercicio14(){
        let n1 = parseInt(prompt("Ingrese Numero del 1 al 10:"))
        let tipo;
        if(n1===2||n1===3||n1===5||n1===7){
            tipo="El Numero es Primo";
        }else{tipo="Numero no Primo";}
        alert(tipo)
    }
    function ejercicio16() {
        let n1 = parseInt(prompt("Ingrese Numero"))
         
        let dia;
        switch (n1) {
            case 1:
                dia = "Lunes";
                break;
            case 2:
                dia = "Martes";
                break;
            case 3:
                dia = "Miercoles";
                break;
            case 4:
                dia = "Jueves";
                break;
            case 5:
                dia = "Viernes";
                break;
             case 6:
                dia = "Sabado";
                break;
             case 7:
                dia = "Domingo";
                break;
            default:
                dia = "El Numero Ingresado no Corresponde a un Dia de Semana";
                break;
        }
                
        alert(dia)
    }
     
 function ejercicio15(){
    let centimetros = parseFloat(prompt("Ingrese Longitud en Centimetros:"))
    let libras = parseFloat(prompt("Ingrese Peso en Libras"))
    let pulgadas=centimetros * 0.393701;
    let kilogramos = libras * 0.45359237;
    alert(centimetros+" Centrimetros Es igual a :"+pulgadas+" Pulgadas")
    alert(libras+" Libras Es igual a :"+kilogramos+" Pulgadas")
 }