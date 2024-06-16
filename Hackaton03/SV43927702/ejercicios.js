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
 
 function ejercicio17(){
    let hora=0, minutos=0 ,segundos=0;
    hora=parseInt(prompt("Ingrese la hora (0-23): "));
    minutos=parseInt(prompt("Ingrese los minutos (0-59): "));
    segundos=parseInt(prompt("Ingrese los segundos (0-59): "));
    segundos = segundos + 1
    if (segundos>=60){
        segundos=0;
        minutos=minutos+1;
    } if(minutos>=60){
        minutos = 0;
        hora = hora + 1;
    } if(hora>=24){
        hora = 0
    }
    alert("La hora dentro de un segundo es: "+ hora+ ":"+ minutos+ ":"+ segundos)
 }

function ejercicio18(){
    let PRECIO_UNIDAD_2=0;
    let PRECIO_UNIDAD_3=0;
    let PRECIO_UNIDAD_4=0;
    let GANANCIA_VENDEDOR=0;
    PRECIO_UNIDAD_1 = 10;
    PRECIO_UNIDAD_2 = 8;
    PRECIO_UNIDAD_3 = 7;
    PRECIO_UNIDAD_4 = 6;
    GANANCIA_VENDEDOR = 0.0825;
    let cantidadCDs=parseInt(prompt("Ingrese la Cantidad de CDS :"))
    let precioTotal=0;
    let gananciaVendedor=0;
   if (cantidadCDs <= 9){
        precioTotal = cantidadCDs * PRECIO_UNIDAD_1
   }else if (cantidadCDs >= 10 && cantidadCDs <= 99){
        precioTotal = cantidadCDs * PRECIO_UNIDAD_2
   }if (cantidadCDs >= 100 && cantidadCDs <= 499){
         precioTotal = cantidadCDs * PRECIO_UNIDAD_3
   }else{precioTotal = cantidadCDs * PRECIO_UNIDAD_4}
   gananciaVendedor = precioTotal * GANANCIA_VENDEDOR
		alert("El precio total para el cliente es: $"+ precioTotal+"La ganancia para el vendedor es: $ "+gananciaVendedor)
}
function ejercicio20(){
    let num1, num2, num3, num4;
    let pares;
    let mayor;
    let media;
    let suma;
    num1=parseInt(prompt("Ingrese el primer numero:"))
    num2=parseInt(prompt("Ingrese el Segundo numero:"))
    num3=parseInt(prompt("Ingrese el Tercer numero:"))
    num4=parseInt(prompt("Ingrese el Cuarto numero:"))
    pares = 0;
    mayor = num1;
    media = 0;
    suma = 0;
    if(num1 % 2 == 0) {pares = pares + 1;}
    if(num2 % 2 == 0){pares = pares + 1;} 
    if(num3 % 2 == 0){ pares =pares + 1;}
    if(num4 % 2 == 0){ pares =pares + 1;}
    if(num2 > mayor){mayor = num2;}
    if(num3 > mayor){mayor = num3;}
    if(num4 > mayor){mayor = num4;}
    if(num3 % 2 == 0) {num2 = num2 * num2;}
    if(num1 < num4){ media = (num1 + num2 + num3 + num4) / 4;}
    if(num2 > num3 && num3 >= 50 && num3 <= 700) {suma = num1 + num2 + num3 + num4;}
    alert("Cantidad de nueros pares: "+ pares) 
    alert("El mayor de todos es: "+ mayor) 
    alert("El cuadrado del segundo si el tercero es par: "+ num2) 
    alert("La media de los 4 numeros si el primero es menor que el cuarto: "+ media) 
    alert( "La suma de los 4 numeros si el segundo es mayor que el tercero y el tercero esta entre 50 y 700: "+ suma)
}
function ejercicio21(){
    let numero,factorial,i;
    numero=parseInt(prompt("Ingrese un numero entero positivo:"))
  
    if(numero < 0) {
        alert("El factorial no esta definido para numeros negativos.")
    }else{
        factorial = 1;
        for ( i = 1; i <= numero; i++) {
            factorial=(factorial*i);
            
        }
    }
    alert("El factorial de "+numero+"es: "+factorial)
}
function ejercicio22(){
    let suma=0,i=0;
    let n=parseInt(prompt("Ingrese el valor de n:"))
    for ( i = 1; i<= n; i++) {
        suma=suma+i;
        
    }
}
    function ejercicio22(){
    let suma=0,i=0;
    let n=parseInt(prompt("Ingrese el valor de n:"))
    for ( i = 1; i<= n; i++) {
        suma=suma+i;
        
    }
    alert(suma)
    }
    function ejercicio23(){
        let suma=0,i=0;
        let n=parseInt(prompt("Ingrese el valor de n:"))
        for ( i = 1; i<= n; i++) {
            if(i % 2==0){}
            else{suma=suma+i;}
            
            
        }
        alert(suma)
        }
        function ejercicio24(){
            let suma=0,i=0;
            let n=1000;
            for ( i = 1; i<= n; i++) {
                if(i % 2==0){suma=suma+i;}   
            }
            alert("La suma de Todos Los Pares es : "+suma)
            }
function ejercicio25(){
    let factorial,contador;
    let numero=parseInt(prompt("Ingrese un numero entero positivo: "))
    if(numero < 0){alert("El factorial no esta definido para numeros negativos.")}
   else{
        factorial = 1;
        contador =1;
        while (contador<=numero) {
            factorial = factorial * contador;
            contador = contador + 1;
        }
   }
        
        alert("El factorial de "+ numero+ " es: "+ factorial) 
   
}
function ejercicio26(){
    let divisor,cociente,resto;
    dividendo=parseInt(prompt("Ingrese el dividendo:"))
    divisor=parseInt(prompt("Ingrese el divisor: "))

    if(divisor==0){alert("La division por cero no Esta definida.")}  
    else{
    cociente = 0;
    resto = dividendo;
    while (resto >= divisor) {
        resto = resto - divisor;
        cociente = cociente + 1;
    }
    }
    alert("El cociente es : "+cociente+" El resto es: "+resto)
}
function ejercicio27(){
    let numero,suma,contador,media;
    suma = 0;
    contador =0;
    numero=parseInt(prompt("Ingrese un numero positivo o un numero negativo para terminar"))
    while (numero >= 0 ) {
        suma = suma + numero;
        contador = contador + 1;
        numero=parseInt(prompt("Ingrese un numero positivo o un numero negativo para terminar"))
    }
    if(contador > 0){
        media = suma / contador;
        alert("La media de los numeros positivos ingresados es: "+ media)
        
    }else{alert("No se ingresaron numeros positivos.") }
}
function ejercicio28(){
    let suma,contador;
    suma = 0;
    contador =1;
    do {
        suma = suma + contador;
        contador = contador + 1; 
    } while (contador <=100);
    alert("La suma de los primeros 100 numeros es: "+ suma) 
}
function ejercicio29(){
    let suma,contador;
    suma = 0;
    contador = 1;
    while (contador <= 100 ) {
        suma = suma + contador;
        contador = contador + 1;
    } 
    alert("La suma de los primeros 100 numeros es: "+ suma)
}
function ejercicio30(){
   let suma,i;
    suma = 0;
    for (i = 1; i <= 100; i++) {
        suma = suma + i;
    }
       
    alert("La suma de los primeros 100 numeros es: "+ suma) 
}
function ejercicio31(){
    let numero,sumaPares,sumaImpares,contadorPares,contadorImpares,mediaPares,mediaImpares; 
    
    sumaPares = 0;
    sumaImpares = 0;
    contadorPares = 0;
    contadorImpares = 0;
   
    for(let i = 1 ;i<= 10; i++) {
        numero =parseInt(prompt("Ingrese el numero "+ i+ ": "))
    
        
        if(numero % 2 == 0) {
            sumaPares = sumaPares + numero;
            contadorPares = contadorPares + 1;
        }else{
            sumaImpares = sumaImpares + numero;
            contadorImpares = contadorImpares + 1;
        }
    }    
    
    if(contadorPares > 0 ){
        mediaPares =sumaPares / contadorPares;
    }else{mediaPares = 0;} 
    if(contadorImpares > 0){mediaImpares = sumaImpares / contadorImpares;}
    else{mediaImpares = 0;}
	
    alert("La media de los numeros pares es: "+ mediaPares) 
    alert("La media de los numeros impares es: "+ mediaImpares)
	
}
function ejercicio32(){
    let nombreCiudad,poblacion,maxPoblacion,ciudadMaxPoblacion;
    maxPoblacion = 0
    ciudadMaxPoblacion ="";
    for(let i = 1 ;i<= 11; i++) {
        nombreCiudad=prompt("Ingrese el nombre de la ciudad "+ i+ ": ") 
        poblacion=parseInt(prompt("Ingrese la poblacion de la ciudad; "+nombreCiudad) )
        
        if(poblacion > maxPoblacion){
            maxPoblacion = poblacion;
            ciudadMaxPoblacion = nombreCiudad;
        }  
    }
        
   
    alert("La ciudad con la mayor poblacion es: "+ ciudadMaxPoblacion+ " con una poblacion de "+ maxPoblacion+ " personas.") 

}
function ejercicio33(){
    let continuar,numero,suma,cantidadNumeros,contador;
    do {
        suma = 0
        contador = 1
        cantidadNumeros=parseInt(prompt("¿Cuantos numeros desea ingresar? ")) 
        while (contador <= cantidadNumeros) {
            numero= parseInt(prompt("Ingrese el numero "+ contador+ ": "))
           
            suma = suma + numero;
            contador = contador + 1;
        }
        alert("La suma total de los numeros ingresados es: "+ suma) 
        continuar=prompt("Desea continuar? (S/N): ").toString ;
       
    } while (continuar === 'N' || continuar === 'n');
}
function ejercicio34(){
    let i, j;
    for (i=1 ;i<=9 ;i++){
        console.log("Tabla de multiplicar del "+ i) ;
        for(j = 1 ;j<= 12;j++ ) {
            console.log(+ i+ " x "+ j+ " = "+(i * j) );
        }
   
    }
}
function ejercicio35(){
    let numero;
    let maximo;
    let minimo;
    numero=parseInt(prompt( "Ingrese el numero 1: "))
    maximo = numero;
    minimo = numero;
    for(let i = 2 ;i<= 20 ;i++) {
        numero =parseInt(prompt("Ingrese el numero "+ i+ ": "))
        
        if(numero > maximo) { maximo = numero;}
        if(numero < minimo ) { minimo = numero;}
    }
    
    alert("El numero mayor es: "+ maximo)
    alert("El numero menor es: "+ minimo)
}
function ejercicio37(){
    let a, b,resto;
    a=parseInt(prompt("Ingrese el primer numero entero: "))
    b=parseInt(prompt("Ingrese el primer numero entero: "))

    while(b !== 0) {
        resto = a % b;
        a = b;
        b = resto;
    }
    alert("El maximo comun divisor (MCD) de los numeros "+ a+ " y "+ b+ " es: "+ a)
}
function ejercicio36(){
    let n, i,termino_actual, termino_anterior, termino_anterior_anterior;
   
    n=parseInt(prompt("Ingrese el numero de terminos de la serie de Fibonacci a generar: "))
   
    termino_anterior_anterior = 0;
    termino_anterior = 1;
    console.log("Los primeros dos terminos de la serie de Fibonacci son: ")
    console.log(termino_anterior_anterior)
    console.log(termino_anterior)
    for(i = 3 ; i<=n ;i++) {
        termino_actual = termino_anterior + termino_anterior_anterior;
        console.log( termino_actual)
        termino_anterior_anterior = termino_anterior
        termino_anterior = termino_actual
    }
        
    
}
function ejercicio38(){
    let numero, sumaDivisores,divisor;
    numero=parseInt(prompt("Ingrese un n�mero entero positivo: "))
    sumaDivisores = 0;
    for(divisor =1; divisor <=(numero/2); divisor++) {
        if(numero % divisor == 0){sumaDivisores = sumaDivisores + divisor;}
    }
    if(sumaDivisores = numero){ alert("El numero ", numero, " es un numero perfecto.")} 
       
    else{alert("El numero "+ numero+ " no es un numero perfecto.")}
        
   
	
}
function ejercicio39(){
    let n,termino,pi;
  
    n=parseInt(prompt("Ingrese el numero de terminos para la aproximacion de Pi: "))
    pi =0.0;

     for(let i = 0 ;i<= n-1 ;i++){
        termino = 4.0 / (2 * i + 1);
        if(i % 2 == 0){
            pi = pi + termino;
        }
        else{
            pi = pi - termino;
        }
     }
    alert("La aproximacion de Pi con "+ n+ " terminos de la serie de Gregory-Leibniz es: "+ pi)
}
function ejercicio40(){
    let n,termino,pi;
  
    n=parseInt(prompt("Ingrese el numero de terminos para la aproximacion de Pi: "))
    pi =0.0;

     for(let i = 0 ;i<= n-1 ;i++){
        termino = 4.0 / (2 * i + 1);
        if(i % 2 == 0){
            pi = pi + termino;
        }
        else{
            pi = pi - termino;
        }
     }
    alert("La aproximacion de Pi con "+ n+ " terminos de la serie de Gregory-Leibniz es: "+ pi)
}