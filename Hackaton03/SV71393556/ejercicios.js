function ejercicio1(){
    let numero = parseInt(prompt("Escribe un numero"));
    if(numero>99 && numero<1000){
        alert("tiene 3 digitos")
    }else{
        alert("no tiene 3 digitos")
    }

}

function ejercicio2(){
    let numero = parseInt(prompt("Escribe un numero"));
    if(numero<0){
        alert("es negativo")
    }else{
        alert("es positivo")
    }

}

function ejercicio3(){
    let numero = parseInt(prompt("Escribe un numero"));
    if(Math.abs(numero)%10 == 4){
         alert("el numero termina en 4")
    }else{
        alert("el numero no termina en 4")
    }
    
}

function ejercicio4(){
    let numero1 = parseInt(prompt("Escribe un primer numero"));
    let numero2 = parseInt(prompt("Escribe un segundo numero"));
    let numero3 = parseInt(prompt("Escribe un tercer numero"));
    if(numero1==numero2 && numero2 == numero3){
         alert("Los 3 numeros son iguales: "+numero1+" "+numero2+" "+numero3)
    }else if(numero1 >numero2 && numero1>numero3 && numero2>numero3){
        alert(numero3+" "+numero2+" "+ numero1)
    }else if(numero2>numero1 && numero2>numero3 && numero1>numero3){
        alert(numero3+" "+numero1+" "+ numero2)
    }else if(numero3>numero1 && numero3>numero2 && numero1>numero2){
        alert(numero2+" "+numero1+" "+ numero3)
    }else if(numero3>numero1 && numero3>numero2 && numero2>numero1){
        alert(numero1+" "+numero2+" "+ numero3)
    }else if(numero2>numero1 && numero2>numero3 && numero3>numero1){
        alert(numero1+" "+numero3+" "+numero2)
    }else if(numero1 >numero2 && numero1>numero3 && numero3>numero2){
        alert(numero2+" "+numero3+" "+ numero1)
    }
}

function ejercicio5(){
    let numeroZapatos = parseInt(prompt("Ingrese el numero de zapatos comprados: "));
    let precioUnitario = 80;
    let totalCompra;
    let descuento;
    totalCompra= numeroZapatos * precioUnitario;
    if(numeroZapatos>30){
        descuento = 0.40;
   }else if(numeroZapatos >20){
        descuento = 0.20;
   }else if(numeroZapatos >10){
        descuento = 0.10;
   }else {
        descuento = 0.0;
   }
   totalConDescuento = totalCompra -(totalCompra* descuento);
   alert("total de la compra sin descuento: $"+totalCompra);
   alert("descuento aplicado:"+descuento *100+"%");
   alert("Total a pagar con descuento:$ "+ totalConDescuento);

}

function ejercicio6(){
    let horas = parseInt(prompt("Ingrese el numero de horas trabajadas: "));
    let sueldo;
    if(horas<41){
        sueldo = horas*20;
    }else{
        sueldo = (horas-40)*25;
		sueldo = sueldo + (40*20);
    }
    alert("El sueldo es $: "+sueldo);
}

function ejercicio7(){
    let nroHelados = parseInt(prompt("Ingrese el numero de los Helados comprados: "));
    let precioUnitario = parseInt(prompt("Ingrese el precio de los Helados comprados: "));
    let totalCompra;
    let totalConDescuento;
    totalCompra = nroHelados * precioUnitario;
    let membresia = prompt("Ingrese su tipo de membresía: ");
    switch (membresia) {
        case "A":
            descuento = 0.10;
            break;
        case "B":
            descuento = 0.15;
            break;
        case "C":
            descuento = 0.20;
            break;
    
        default:
            alert("No es una membresía "+membresia);
            descuento = 0;
            break;
    }
    totalConDescuento = totalCompra -(totalCompra* descuento);
    alert("total de la compra sin descuento: $"+totalCompra);
    alert("descuento aplicado:"+descuento *100+"%");
    alert("Total a pagar con descuento:$ "+ totalConDescuento);
}

function ejercicio8(){
    let nota1 = parseInt(prompt("Ingrese la primera nota: "));
    let nota2 = parseInt(prompt("Ingrese la segunda nota: "));
    let nota3 = parseInt(prompt("Ingrese la tercera nota: "));
    let promedio;
    promedio = (nota1+nota2 + nota3)/3;
    if(promedio> 13.5){
        alert("El estudiante aprobó con un promedio de: "+promedio);
    }else{
        alert("El estudiante no aprobó su promedio es de:"+promedio);
    }

}

function ejercicio9(){
    let sueldo = parseInt(prompt("Ingrese el sueldo: "));
    if(sueldo>2000){
        aumento = 0.05;
    }else{
        aumento = 0.10;
    }
    sueldo = sueldo+(sueldo*aumento)
    alert("El sueldo es $: "+sueldo);
}

function ejercicio10(){
    let num = parseInt(prompt("Ingrese un número entero:"));
    if(num % 2==0 ){
        alert("El numero: "+num+" es par");
    }else{
        alert("El numero: "+num+" es impar");
    }
    
}

function ejercicio11(){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let num3 = parseInt(prompt("Ingrese el tercer numero"));
    if(num1==num2 && num2 == num3){
        alert("Los 3 numeros son iguales");
    }else if(num1 >num2 && num1>num3){
        alert("El mayor es el numero 1");
    }else if(num2>num1 && num2>num3){
        alert("El mayor es el numero 2");
    }else{
        alert("El mayor es el numero 3");
    }
    
}

function ejercicio12(){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    if(num1==num2){
        alert("Los 2 numeros son iguales");
    }else if(num1 >num2){
        alert("El mayor es el numero 1");
    }else{
        alert("El mayor es el numero 2");
    }
    
}

function ejercicio13(){
    let letra = prompt("Ingrese una letra");
    switch (letra) {
        case "a":
            alert("Ingresaste la vocal a");
            break;
        case "e":
            alert("Ingresaste la vocal e");
            break;
        case "i":
            alert("Ingresaste la vocal i");
            break;
        case "o":
            alert("Ingresaste la vocal o");
            break;
        case "u":
            alert("Ingresaste la vocal u");
            break;    
        default:
            alert("No es una vocal");
            break;
    }
    
}

function ejercicio14(){
    let num = parseInt(prompt("Ingrese un numero del 1 al 10"));
    switch (num) {
        case 2:
            alert("es primo");
            break;
        case 3:
            alert("es primo");
            break;
        case 5:
            alert("es primo");
            break;
        case 7:
            alert("es primo");
            break;    
        default:
            alert("No es primo");
            break;
    }
    
}

function ejercicio15(){
    let centimetros = parseInt(prompt("Ingrese los centimetros:"));
    let libras = parseInt(prompt("Ingrese los libras:"));
    let pulgadas;
    let kilogramos;
    pulgadas = centimetros*0.39;
	kilogramos = libras*0.45;
    alert("pulgadas: "+pulgadas);
    alert("kilogramos: "+kilogramos);
}

function ejercicio16(){
    let num = parseInt(prompt("Ingrese un numero"));
    switch (num) {
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miercoles");
            break;
        case 4:
            alert("Jueves");
            break; 
        case 5:
            alert("Viernes");
            break;
        case 6:
            alert("Sabado");
            break;
        case 7:
            alert("Domingo");    
        default:
            alert("no es un dia");
            break;
    }
}

function ejercicio17(){
    let hora = parseInt(prompt("ingrese la hora (formato 24 horas)"));
    let minutos = parseInt(prompt("ingrese los minutos"));
    let segundo = parseInt(prompt("ingrese los segundos"));
    if(hora <0 || hora >23 || minutos<0 || minutos>59 || segundo<0 || segundo>59){
        alert("no es un dia");
    }else {
        segundo = segundo +1;
        if(segundo  == 60){
            segundo = 0
			minutos = minutos +1;
            if(minutos  == 60){
                minutos = 0
			    hora = hora +1;
                if(hora  == 24){
                    hora = 0;
                }
            }
        }
    }
    alert("La hora dentro de un segundo es: "+hora+":"+minutos+":"+segundo);
}

function ejercicio18(){
    let nroCDs= parseInt(prompt("Ingrese la cantidad de CDs: "));
    let precioUnitario;
    let totalVenta;
    let ganancia;
    if(nroCDs<10){
        precioUnitario = 10;
    }else if(nroCDs<100){
        precioUnitario = 8;
    }else if(nroCDs<500){
        precioUnitario = 7;
    }else{
        precioUnitario = 6;
    }
    totalVenta = nroCDs*precioUnitario;
	ganancia = totalVenta*0.0825;
    alert("La venta es: $"+totalVenta);
    alert("La ganancia es: $"+ganancia);
}

function ejercicio19(){
    let identificador = parseInt(prompt("Ingrese el numero identificador: "));
    let nroDias = parseInt(prompt("Ingrese la cantidad de dias trabajados: "));
    let salario;
    let puesto;
    let salarioTotal;
    switch (identificador) {
        case 1:
            puesto = "Cajero";
			salario = 56;
            break;
        case 2:
            puesto = "Servidor";
			salario = 64;
            break;
        case 3:
            puesto = "Preparador de mezclas";
			salario = 80;
            break;
        case 4:
            puesto = "Mantenimiento";
			salario = 48;
            break;    
        default:
            alert("No es un identificador");
            break;
    }
    salarioTotal = salario*nroDias;
    alert("al empleado "+puesto+"  con una paga de: $"+salarioTotal);
}

function ejercicio20(){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let num3 = parseInt(prompt("Ingrese el tercer numero"));
    let num4 = parseInt(prompt("Ingrese el cuarto numero"));
    let par1, par2, par3, par4, esPar;

    par1 = num1%2;
	par2 = num2%2;
	par3 = num3%2;
	par4 = num4%2;
    alert("¿Cuántos números son Pares?");
	esPar = 4-(par1+par2+par3+par4);
    alert("son "+esPar+ " primo");

    alert("¿Cuál es el mayor de todos?");
    if(num1==num2 && num2 == num3 && num3 == num4){
        alert("Los 4 numeros son iguales");
    }else if(num1 >num2 && num1>num3 && num1>num4){
        alert("El mayor es el numero 1");
    }else if(num2>num1 && num2>num3 && num2>num4){
        alert("El mayor es el numero 2");
    }else if(num2>num1 && num2>num3 && num3>num4){
        alert("El mayor es el numero 3");
    }else{
        alert("El mayor es el numero 4");
    }

    alert("Si el tercero es par, calcular el cuadrado del segundo");
    if(par3 == 0){
        cuadradoSegundo = num2*num2;
        alert("El cuadrado del segundo es: "+ cuadradoSegundo);
    }else {
        alert("El tercero es impar");
    }

    alert("Si el primero es menor que el cuarto, calcular la media de los 4 números.");
    if(num1 < num4){
        media = (num1+num2+num3+num4)/4;
        alert("la media de los 4 números: "+media);
    }
    alert("verificar si el tercero esta comprendido entre los valores 50 y 700");
    if(num3 < num2){
        cuadradoSegundo = num2*num2;
        if(num3< 700 && num3> 50){
            suma = num1+num2+num3+num4;
            alert("la suma de los 4 numeros es: "+ suma);
        }
    }
}

function ejercicio21(){
    let num= parseInt(prompt("Ingrese el numero"));
    let factorial = 1;
    while (num>0) {
        factorial = factorial*num;
        num=num-1;
      }
    alert(factorial);
}

function ejercicio22(){
    let num= parseInt(prompt("Ingrese cuantos numeros quiere sumar"));
    let suma = 0;
    while (num>0) {
        suma = suma+num;
		num=num-1;
      }
    alert(suma);
}

function ejercicio23(){
    let num= parseInt(prompt("Ingrese cuantos numeros quiere sumar"));
    let suma = 0;
    let auxiliar = 1;
    while (auxiliar<=num) {
        suma = suma+auxiliar;
		auxiliar=auxiliar+2;
      }
    alert(suma);
}

function ejercicio24(){
    let num=0;
    let suma = 0;
    while (num<=1000) {
        suma = suma+num;
		num=num+2;
      }
    alert("La suma es: "+suma);
}

function ejercicio25(){
    let num= parseInt(prompt("Ingrese el numero"));
    let factorial=1;
    do {
        factorial = factorial*num;
		num=num-1;
    } while (num>0);   
    alert(factorial);
}

function ejercicio26(){
    let dividendo= parseInt(prompt("Ingrese el dividendo"));
    let divisor= parseInt(prompt("Ingrese el divisor"));
    let contador=0;
    do {
        dividendo = dividendo-divisor;
		contador = contador +1;
    } while (dividendo >= divisor);   
    alert("el resto es: "+dividendo);
    alert("el cociente es: "+contador);
}

function ejercicio27(){
    let num=0;
    let suma = 0;
    let contador = 0;
    while (num>=0) {
        suma = suma+num;
        num = parseInt(prompt("El numero es: "));
		contador = contador+1;
        if (num<0) {
            contador = contador-1;
        }
    }
    if (contador == 0) {
        media = 0;
    } else {
        media = suma/contador;
    }

    alert("La media es: "+ media);
}

function ejercicio28(){
    let suma= 0;
    let contador=0;
    do {
        suma = suma+contador;
		contador = contador +1;
    } while (contador<=100);   
    alert("la suma de los primeros cien números es: "+suma);
}

function ejercicio29(){
    let suma= 0;
    let contador=0;
    while (contador<=100){
        suma = suma+contador;
		contador = contador +1;
    } 
    alert("la suma de los primeros cien números es: "+suma);
}

function ejercicio30(){
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
    suma = suma + i;
    }
    alert("la suma de los primeros cien números es: "+suma);
}

function ejercicio31(){
    let contador = 0;
    let contadorPar = 0;
    let contadorImpar = 0;
    let sumaPar=0;
    let sumaImpar=0;
    let num;
    while (contador<10){
        alert("Ingrese el numero: ");
        num = parseInt(prompt("El numero es: "));
        if (num%2 == 0) {
            sumaPar = sumaPar+num;
			contadorPar = contadorPar +1;
        } else {
            sumaImpar = sumaImpar+num;
			contadorImpar = contadorImpar+1;
        }
		contador = contador +1;
    }
    let mediaPar;
    mediaPar = sumaPar/contadorPar;
    let mediaImpar;
	mediaImpar = sumaImpar/contadorImpar;
    alert("la media de los pares es: "+mediaPar);
    alert("la media de los impares es: "+mediaImpar);
}

function ejercicio32(){
    let mayorPoblacion=0;
    let nombreCiudad;
    let poblacionCiudad;
    let ciudadMayorPoblacion;
    for (let i = 1; i <= 2; i++) {
        nombreCiudad = prompt("Ingrese el nombre de la ciudad:");
        poblacionCiudad = parseInt(prompt("Ingrese la poblacion de la ciudad:"));
        if (mayorPoblacion < poblacionCiudad) {
            mayorPoblacion = poblacionCiudad;
			ciudadMayorPoblacion = nombreCiudad;
        }
    }
    alert("El nombre de la ciudad: "+ciudadMayorPoblacion);
    alert("La poblacion  de la ciudad "+ciudadMayorPoblacion+": "+mayorPoblacion);
}

function ejercicio33(){
    let continuar;
    do {
        continuar = prompt("Desea continuar con el programa?(S/N)");
    } while (continuar!="N");   
}

function ejercicio34(){
    let tabla = parseInt(prompt("Ingrese la Tabla:"));
    let num;
    alert("Tabla "+tabla+":");
    for (let i = 1; i <= 9; i++) {
        num = i*tabla;
        alert(num);
    }
}

function ejercicio35(){
    let num = parseInt(prompt("Ingrese un numero:"));
    let numMayor;
    let numMenor;
    numMayor=num;
	numMenor=num;
    for (let i = 1; i <= 19; i++) {
        num = parseInt(prompt("Ingrese un numero:"));
        if (numMayor < num) {
            numMayor = num;
        }
        if (numMenor > num) {
            numMenor = num;
        }
    }
    alert("El numero mayor es: "+ numMayor);
    alert("El numero menor es: "+ numMenor);
}

function ejercicio36(){
    let num = parseInt(prompt("Ingrese la cantidad de numeros de la serie de Fibonacc:"));
    let Fibonacc=0;
    let n1;
    let n2;
    switch (num) {
        case 1:
            alert(Fibonacc);
            break;
        case 2:
            alert(Fibonacc);
            Fibonacc=Fibonacc+1;
			alert(Fibonacc);
            break;   
        default:
            alert(Fibonacc);
            Fibonacc=Fibonacc+1;
			alert(Fibonacc);
            n1=0;
			n2=1;
            for (let i = 3; i <= num; i++) {
                Fibonacc=n1+n2;
                alert(Fibonacc);
				n1=n2;
				n2=Fibonacc;
            }
            break;
    }
}

function ejercicio37(){
    let num1 = parseInt(prompt("Ingrese un numero:"));
    let num2 = parseInt(prompt("Ingrese un numero:"));
    let mayorNum;
    let menorNum;
    if (num1>num2) {
        mayorNum = num1;
		menorNum = num2;
    } else {
        mayorNum = num2;
		menorNum = num1;
    }
    do {
        residuo = mayorNum % menorNum;
		mayorNum = menorNum;
		menorNum = residuo;
    } while (residuo!=0);  
    alert("MCD:"+mayorNum);
}

function ejercicio38(){
    let num = parseInt(prompt("Ingrese un numero:"));
    let suma=0;
    for (let i = 1; i <= num; i++) {
        if (num%i == 0 && i<num) {
            suma = suma+i;
        }
    }

    if (suma == num) {
        alert("el numero "+num+" es perfecto");
    } else {
        alert("el numero "+num+" no es perfecto");
    } 
}

function ejercicio39(){
    let divisor=1;
    let suma=0;
    for (let i = 1; i <= 30; i++) {
        if (i%2 == 0) {
            suma = suma - (4/divisor);
        }else {
            suma = suma + (4/divisor);
        }

        divisor = divisor + 2;
    }
    alert("El numero PI es: "+suma);
}

function ejercicio40(){
    let suma=3;
	let divisor=0;
	let n1=2;
	let n2=3;
	let n3=4;
	let a=2
	let b=1
	let expo=1;
    divisor = (n1 * (10^a)) + (n2 * (10^b))+n3;
	suma = suma+(4/divisor);
    for (let i = 1; i <= 1000; i++) {
        n1=n1+2;
		n2=n2+2;
		n3=n3+2;
        if ((i-3)%5 == 0 && (i-3)%10^expo == 0) {
            a=a+1;
			b=b+1;
			expo=expo+1;
        }
        if ((i-4)%5 == 0 && (i-4)%10^expo == 0) {
            a=a+1;
        }
        divisor = (n1 * (10^a)) + (n2 * (10^b))+n3;

        if (i%2==0) {
            suma = suma-(4/divisor);
        } else {
            suma = suma+(4/divisor);
        } 
    }
    alert("El numero PI es: "+suma);
}