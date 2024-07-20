//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

function ejercicio1(){

    let numero  = parseInt(prompt("Escribe un numero"));
    if(numero>99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero tiene NO tiene 3 digitos")
    }
}

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

function ejercicio2(){

    let numero  = (prompt("Escribe un numero"));
    if(numero>0){
        alert("Este numero es positivo.")
    }else{
        alert("Este numero es negativo.")
    }
}

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

function ejercicio3(){

    let numero  = (prompt("Escribe un numero"));
    if(numero%20==4){
        alert("Este numero es termina en 4.")
    }else{
        alert("Este numero no termina en 4.")
    }
}

//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

function ejercicio4(){

    let num1 = parseInt(prompt("Enter the first number:"));
    let num2 = parseInt(prompt("Enter the second number:"));
    let num3 = parseInt(prompt("Enter the third number:"));

    // Almacenar los números en un array
    let numbers = [num1, num2, num3];

    // Ordenar el array de menor a mayor
    numbers.sort(function(a, b) {
        return a - b;
    });

    // Mostrar los números ordenados
    alert("The numbers in ascending order are: " + numbers.join(", "));

}

//5. Hacer un algoritmo en JavaScript para una tienda de zapatos que 
//tiene una promoción de descuento para vender al mayor,
// esta dependerá del número de zapatos que se compren.
 // Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
 //si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
//y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.


function ejercicio5(){
    const  precio_u=80;
    let nume_zapatos=parseInt(prompt("Ingrese el numero de zapatos que va comprar"));
    let total= parseInt(precio_u*nume_zapatos);
    let descuento;

    if (nume_zapatos>10 && nume_zapatos<20) {
        descuento=total-total*0.1
        alert("Corresponde aplicar 10% de descuento.")
        alert("el total a pagar será :" + descuento)
    }
    else
        if (nume_zapatos>20 && nume_zapatos<30) {
            descuento=total-total*0.2
            alert("Corresponde aplicar 20% de descuento.")
            alert("el total a pagar será :" + descuento)
        }
        else
            if (nume_zapatos>30) {
                descuento=total-total*0.4
                alert("Corresponde aplicar 40% de descuento.")
                alert("el total a pagar será :" + descuento)
            }
            else{
                alert("No corresponde ningun descuento")
                alert("el total a pagar será :" + total)
            }
   
}
    
/*6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a
 saber cuál será su sueldo semanal, se sabe que si trabaja 40 
 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 
 horas entonces las horas extras se le pagarán a $25 por hora
*/

function ejercicio6() {
    
    let totalhoras=parseInt(prompt("Ingrese el numero de horas que UD. trabajó : "));
    
    let total;
    let horasextra;
    horasextra=Number(horasextra);

    if (totalhoras<40) {
      
        total=20*totalhoras
        alert("Su pago semanal por "+ totalhoras +" horas trabajadas será de : " + total )
    } else if (totalhoras>40) {
        horasextra=totalhoras-40
        total=20*40+horasextra*25
        alert("trabajó  "+ totalhoras+", horas extra : " + horasextra + ", su pago es " + total )
    }
}

/*7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento
 por compra a sus clientes con membresía dependiendo de su tipo, 
 sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
 Los descuentos son los siguientes:

Tipo A 10% de descuento
Tipo B 15% de descuento
Tipo C 20% de descuento*/

function ejercicio7(){
    let membresía=prompt("Ingrese el tipo de membresia A, B, C.");
    
    if (membresía=="A" || membresía=="a") {
        alert("Membresia tipo A 10% de descuento.")
    } else if(membresía=="B" || membresía=="b"){
        alert("Tipo B 15% de descuento")
    } else if (membresía=="C" || membresía=="c"){
        alert("Tipo C 20% de descuento")
    } else {
        alert("No valido.")
    }

}

/*8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y 
determinar si el estudiante aprobó o no.*/

function ejercicio8() {
    let nota_1=parseFloat(prompt("Ingrese primera nota : "));
    let nota_2=parseFloat(prompt("Ingrese segunda nota : "));
    let nota_3=parseFloat(prompt("Ingrese tercera nota : "));
    let promedio;
    promedio=parseFloat((nota_1+nota_2+nota_3)/3);

    if (promedio<10.5) {
        alert("El promedio es: "+promedio + " DESAPROBÓ")
    } else {
        alert("El promedio es: "+promedio + " APROBÓ")
    }
}

/*9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%,
 si generaba menos de $2000 su aumento será de un 10%.*/

 function ejercicio9() {
    let sueldo=parseInt(prompt("Ingrese sueldo : "));
    let pago;

    if (sueldo>2000) {
        pago=parseFloat(sueldo+sueldo*0.05)

        alert("tendras un aumento del 5% "+ pago)
    }else{
        pago=parseFloat(sueldo+sueldo*0.1)
        alert("tendra un aumento del 10% "+ pago)
    }
 }

 //10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.

 function ejercicio10() {
    let num1=parseInt(prompt("Ingrese el numero :"))
    
    if (num1%2==0 ) {
        alert("Es un numero par.")
    } else {
        alert("Es un numero impar.")
    }
}

//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

function ejercicio11(){

    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let num3 = parseFloat(prompt("Enter the third number:"));
    let mayor=0
    // Almacenar los números en un array
    if (num1>mayor) {
        mayor=num1
    }
        if(num2>mayor){
            mayor=num2
        } 
            if(num3>mayor){
                mayor=num3
            }

    // Mostrar los números ordenados
    alert("El numero mayor es : "+mayor );

}

//12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

function ejercicio12(){

    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let mayor=0
  
    // Almacenar los números en un array
    if (num1>mayor) {
        mayor=num1
    }
        if(num2>mayor){
            mayor=num2
        } 
            
    // Mostrar los números ordenados
    alert("El numero mayor es : "+mayor );

}

//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

function ejercicio13() {
    let vocal=String(prompt("Ingrese una letra"))

    if (vocal=="a" || vocal=="e" || vocal=="i"||vocal=="o"||vocal=="u") {
        alert(vocal+" es una vocal")
    } else {
        alert("Es una consonante.")
    }
}

//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y 
//determine si es un número primo.

function ejercicio14() {
    let num1=parseInt(prompt("Ingrese un numero : "));
    if(num1>0 && num1<10){ 
        if (num1==2 || num1==3 ||num1==5||num1==7 ) {
            alert("Es numero primo.")
        } else{
            alert("No es primo.")
        }
    }else{
        alert("Ingrese un numero menor a 10.")
    }
    
}

//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

function ejercicio15(){
    let centimetros=parseFloat(prompt("Ingrese centimetros : "));
    let libras=parseFloat(prompt("Ingrese libras : "));
    

    let pulgadas=centimetros*0.393701;
    let kilogramos=libras*0.453592;

    alert("Centimetros = "+pulgadas+" ; "+"Libras = "+kilogramos)

}

//16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el
// día que corresponde.

function ejercicio16(){
    let num1=parseInt(prompt("Ingrese el numero : "));

    let dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

    
    alert(dias[num1]);
        
}

//17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la 
//hora dentro de un segundo.

function ejercicio17(){
    function agregarUnSegundo(hora) {
        // Dividir la hora en sus componentes (horas, minutos, segundos)
        const partes = hora.split(':');
        let horas = parseInt(partes[0], 10);
        let minutos = parseInt(partes[1], 10);
        let segundos = parseInt(partes[2], 10);
    
        // Crear un objeto Date con la hora actual
        let fecha = new Date();
        fecha.setHours(horas);
        fecha.setMinutes(minutos);
        fecha.setSeconds(segundos);
    
        // Sumar un segundo
        fecha.setSeconds(fecha.getSeconds() + 1);
    
        // Obtener la nueva hora
        horas = fecha.getHours().toString().padStart(2, '0');
        minutos = fecha.getMinutes().toString().padStart(2, '0');
        segundos = fecha.getSeconds().toString().padStart(2, '0');
    
        // Retornar la nueva hora en formato HH:MM:SS
        return `${horas}:${minutos}:${segundos}`;
    }
    
    // Solicitar la hora al usuario
    const horaInicial = prompt('Ingresa la hora en formato HH:MM:SS:');
    const nuevaHora = agregarUnSegundo(horaInicial);
    
    // Mostrar la nueva hora al usuario
    alert(`La nueva hora es: ${nuevaHora}`);
       
    
}

/*18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y 
distribución de CD vírgenes. Los clientes pueden adquirir los artículos
 (supongamos un único producto de una única marca) por cantidad. Los precios son:

    $10. Si se compran unidades separadas hasta 9.

    $8. Si se compran entre 10 unidades hasta 99.

    $7. Entre 100 y 499 unidades.

    $6. Para mas de 500 unidades.

    La ganancia para el vendedor es de 8,25 % de la venta.
     Realizar un algoritmo en JavaScript que dado un número de CDs a vender 
     calcule el precio total para el cliente y la ganancia para el vendedor.*/

function ejercicio18(){
    const ganancia=0.0825;
    let cantidad_cds=parseInt(prompt("Cantidad de cd's : "));
    let precio_u;
    let precio_total;
    let ganancia_t;

    switch (true) {
        case (cantidad_cds<=9):
            precio_u=10;
            precio_total=precio_u*cantidad_cds;
            ganancia_t=ganancia*precio_total;
            alert("la venta será de : "+precio_total+" ; la ganacia será de : "+ganancia_t)
            break;
        
        case (cantidad_cds>=10 && cantidad_cds<=99):
            precio_u=8;
            precio_total=precio_u*cantidad_cds;
            ganancia_t=ganancia*precio_total;
            alert("la venta será de : "+precio_total+" ; la ganacia será de : "+ganancia_t)
            break;
    
        case (cantidad_cds>=100 && cantidad_cds<=499):
            precio_u=7;
            precio_total=precio_u*cantidad_cds;
            ganancia_t=ganancia*precio_total;
            alert("la venta será de : "+precio_total+" ; la ganacia será de : "+ganancia_t)
            break;

        case (cantidad_cds>=500):
            precio_u=6;
            precio_total=precio_u*cantidad_cds;
            ganancia_t=ganancia*precio_total;
            alert("la venta será de : "+precio_total+" ; la ganacia será de : "+ganancia_t)
            break;
    
        default:
            break;
    }
}

/*19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de 
empleados ordenados de la siguiente forma con su número identificador y 
salario diario correspondiente:

    Cajero (56$/día).

    Servidor (64$/día).

    Preparador de mezclas (80$/día).

    Mantenimiento (48$/día).

    El dueño de la tienda desea tener un programa donde sólo ingrese dos 
    números enteros que representen al número identificador del empleado y 
    la cantidad de días que trabajó en la semana (6 días máximos). Y el programa 
    le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al 
    empleado que ingresó.*/

    function ejercicio19(){
        
        let codigo=parseInt(prompt("Ingrese el numero Id "));
        let dias=parseInt(prompt("Ingrese el numero de dias "));
        let pago_u;
        let pago_total;
            
        switch (true) {
            case (codigo=="01"):
                pago_u=56;
                pago_total=dias*pago_u;
                
                alert("El pago del Cajero por : "+dias+" dias trabajados sera de : "+pago_total)
                break;
            
            case (codigo=="02"):
                pago_u=64;
                pago_total=dias*pago_u;
                
                alert("El pago del Servidor por : "+dias+" dias trabajados sera de : "+pago_total)
                break;
        
            case (codigo=="03"):
                pago_u=80;
                pago_total=dias*pago_u;
                
                alert("El pago del Servidor por : "+dias+" dias trabajados sera de : "+pago_total)
                break;
    
            case (codigo=="04"):
                ppago_u=48;
                pago_total=dias*pago_u;
                
                alert("El pago del Servidor por : "+dias+" dias trabajados sera de : "+pago_total)
                break;
        
            default:
                alert("Ingrese un Id valido.")
                break;
        }
    }

    /*20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y
     verifique y realice las siguientes operaciones:

    ¿Cuántos números son Pares?

    ¿Cuál es el mayor de todos?

    Si el tercero es par, calcular el cuadrado del segundo.

    Si el primero es menor que el cuarto, calcular la media de los 4 números.

    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre 
    los valores 50 y 700.
     Si cumple se cumple la segunda condición, calcular la suma de los 4 números.*/

     function ejercicio20(){

        let numeros = [];
        let pares=[];
        let continuar = 0;

        while (continuar<4) {
            continuar=continuar+1
            let numero = parseFloat(prompt("Ingresa un número:"));
            numeros.push(numero)
        }

        //¿Cuántos números son Pares?
        for (let i of numeros) {
            if (i%2==0) {
                pares.push(i)
                
            }
       }
       alert("Los numeros pares son : "+pares);
       
       //Si el tercero es par, calcular el cuadrado del segundo.
       if (numeros[2]%2==0) {
            let cuadrado;
            cuadrado=numeros[1]**2;
            alert("El cuadrado del segundo es : "+cuadrado)
       } else{
        alert("El tercero no es par.")
       }

       //Si el primero es menor que el cuarto, calcular la media de los 4 números.
       
       if (numeros[0]<numeros[3]) {
        let media;
        media=(numeros[0]+numeros[1]+numeros[2]+numeros[3])/4;
        alert("La media de los cuatro numeros es: "+ media)
       }

       /*Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre 
       los valores 50 y 700.*/

       if (numeros[1]>numeros[2]) {
        if (numeros[2]>50 && numeros[2]<700) {
            alert("El tercer numero " + numeros[2]+" esta entre los valores de 50 y 700.");
            let suma;
            suma=(numeros[0]+numeros[1]+numeros[2]+numeros[3]);
            alert("Por lo tanto la suma de los cuatro numeros es : "+suma)
        }
       }
       
       //¿Cuál es el mayor de todos?
       numeros.sort((a, b) => a - b);
       alert("El mayor numero es : "+numeros[3]);
       
       alert("Los números ingresados son: "+ numeros);
        
   
    }

    //21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

function ejercicio21(){
    let numer=parseInt(prompt("Ingrese un numer entero positivo : "))
    
    let i=numer;
    while (i>1) {
        i-=1;
        numer=numer*i;
        
    }
    alert("El factorial es: "+ numer)
}

//22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function ejercicio22(){
    let numer=parseInt(prompt("Ingrese un numer entero positivo : "))
    let suma=0;
    for (let index = 1; index < numer+1; index++) {
        
        suma=suma+index;
    }
    alert("La suma de los primeros "+ numer+" numeros es = "+suma)
}

//23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function ejercicio23(){
    let n=parseInt(prompt("Ingrese un numer entero positivo : "))
    let suma_impar=0;
    for (let index = 1; index < n+1; index++) {
        if (index%2!=0) {
            suma_impar=suma_impar+index;
        }
        
    }
    alert("La suma de los numeros impares menores a "+n+" es igual a "+suma_impar)
}
//24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
function ejercicio24(){
  
    let suma=0;
    for (let index = 1; index < 1000+1; index++) {
        if (index%2==0) {
            suma=suma+index;
        }
        
    }
    alert("La suma de los numeros pares hasta el 1000 es  "+suma)
}
//25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function ejercicio25(){
    
    let numer=parseInt(prompt("Ingrese un numer entero positivo : "))
    
    let fact=1;
    let result;
    for (let index = 1; index < numer; index++) {
        fact=fact*index;
        
    }
    result=fact*numer;
    alert("El factorial es: "+ result)
        
}
//26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function ejercicio26(){
    
    let dividendo=parseInt(prompt("Ingrese el dividendo :  "))
    let divisor=parseInt(prompt("Ingrese el divisor : "))
    
    let cociente=0;
    let resto=dividendo ;
    while (resto>=divisor) {
        resto=resto-divisor;
        cociente=cociente+1
    }
    
    alert("El cociente es : "+cociente);
    alert("El resto es : "+resto);
}
//27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de 
//números positivos, se debe acabar el programa al ingresar un número negativo.
function ejercicio27(){
    
    let num1=1;
    let i=0;
    let suma=0 ;
    let promedio;
    let numeros=[];
    while (num1>0) {
        num1=parseInt(prompt("Ingrese numeros positivos :"));
        numeros.push(num1);
        if (num1<0) {
            break;
        }
        i+=1;
        suma=num1+suma;
        
    }
    promedio=suma/i;
    alert("El promedio de : "+numeros+" es "+promedio)
}
//28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

function ejercicio28(){
    
    let i=0;
    let suma=0;
    do {
        i+=1;
        suma=suma+i
        
    } while (i<100);
    alert(suma);
}

//29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
function ejercicio29(){
    
    let i=0;
    let suma=0;
    while (i<100) {
        i+=1
        suma=suma+i
        
    }
    alert(suma)
}

//30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
function ejercicio30(){

    let suma=0;
    for (let index = 0; index < 101; index++) {
        suma=suma+index;
        
    }
    alert(suma)
}
//31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
function ejercicio31(){

    let contpares=0;
    let contimpares=0;
    let sumapares=0;
    let sumaimpa=0;
    let prompar=0;
    let prompimp=0;
    let cont=0;
    let numeros=[];
    
    while (cont<10) {
        cont+=1;
        let num1=parseInt(prompt("Ingrese un numero : "));
        numeros.push(num1);
        if (num1%2==0) {
            contpares+=1;
            sumapares=sumapares+num1;
        } else {
            contimpares+=1;
            sumaimpa=sumaimpa+num1;
        }
        prompar=sumapares/contpares;
        prompimp=sumaimpa/contimpares;
    }
    alert("Los numeros son : "+numeros);
    alert("El promedio de los pares es : "+prompar);
    alert(prompimp);
}
//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
function ejercicio32() {
  
    let may=0;
    let cont=0;
    while (cont<11) {
        cont+=1;
        let ciudad=parseInt(prompt("Ciudad Nº"+cont+" :"));
        if (ciudad>may) {
            may=ciudad
        }
    }
    alert("la ciudad con mayor habitantes : "+may)
}
//33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function ejercicio33() {
    
    while (true) {
        let opcio=String(prompt("Desea continuar (S/N) : "));
        if (opcio=="s" ||opcio=="S") {
            continue;
        } else {
            break;
        }
    }
}
//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.

    let i=0;
    let producto;

    while (i<9) {
        i+=1;
        for (let j = 1; j < 10; j++) {
            producto=i*j;
            console.log(i+" x "+j+" = "+producto);
            
        }
    }



//35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

function ejercicio35() {
  
    let may=0;
    let cont=0;
    let men;
    while (cont<20) {
        cont+=1;
        let num1=parseInt(prompt(" Nº"+cont+" :"));
       
        if (num1>may) {
            may=num1
        } else{
            men=num1
        }
        
    }
    alert("El numero mayor es  : "+may)
    alert("El numero menor es  : "+men)
}

//36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacc.

function ejercicio36() {
    
    let serie=[0];
    let cont=0;
    let sumaf=0;
    let anterior=1;
    let iter=parseInt(prompt("Ingrese la cantidad de terminos = "))
    while (cont<iter) {
        cont+=1;
        sumaf=anterior+sumaf;
        anterior=sumaf-anterior
        serie.push(sumaf);
        
    }
   alert(serie)
}

//37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function ejercicio37() {
    let num1=parseInt(prompt("Ingrese el primer numero : "));
    let num2=parseInt(prompt("Ingrese el primer numero : "));
    while (num1!=0 && num2!=0) {
        let c=Math.floor(num1/num2);
        let r=num1%num2;
        num1=num2;
        num2=r;
        
        //if (num1==0) {
          //  result=num1;
        //}
    }
    alert("El M.C.D  es : "+num1)
}

//38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function ejercicio38() {
    let num=parseInt(prompt("Ingrese un numero entero : "));
    let suma=0;
    let r;
    for (let index = 1; index < num; index++) {
        if (num%index==0) {
            suma=suma+index;
        }
        
    }
    alert("El numero "+num+" es perfecto porque la suma de sus divisores es : "+suma )
}
//39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

   // Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
function ejercicio39() {
    let iter=parseInt(prompt("Ingrese cantidad de iteraciones : "));
    let pii=4;
    let j=-1;
    let i=0;
    let suma=0;
    let serie=[4]

    while (i<iter) {
        i+=1;
        j+=2;
        pii=4/j;
        if (i%2==0) {
            suma=suma-pii;
            
        } else {
            suma=suma+pii;
           
        }
        
    }
    alert("El valor aproximado de Pi con "+i+" iteraciones es : "+suma)
}
//40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

    //Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

   
        let iter=7;
        let ii=0;
        let jj=2;       
        let f=5;
        let index;
        let suma=3;
        
        let denomi=[];

        while (ii<iter) {
            ii+=1;//ii=1
            let product=1; 
            for ( index = jj; index < f; index++) {                
                //console.log(index);
                product=index*product;   
                           
            } 
            //console.log("este es = "+product); 
            jj=index-1;
            f=f+2;
            
            let pii=4/product;    
            //console.log(pii)  
            if (ii%2==0) {
                suma=suma-pii;
                
            } else {
                suma=suma+pii;
               
            } 
            console.log("La aproximacion de Pi con "+ii+" iteraciones es :"+suma);
            
            
        }
            
            
                        
        
    