
//Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.


//Algoritmo determinaNegativo
	
//	definir num Como Entero;
	
//	Escribir "Ingrese un numero entero: ";
//	leer num;
	
//	si num < 0 Entonces
//		Escribir  "el numero es negativo"
//	sino
//		Escribir  "el numero es positivo"
//	FinSi
	

//	Escribir "programa ejecutado correctamente"

	
//FinAlgoritmo


//Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
// Abs(numero) %10=4





//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una 
//promoción de descuento para vender al mayor, esta dependerá del número de 
//zapatos que se compren. Si son más de diez, se les dará un 10% de descuento 
//sobre el total de la compra; si el número de zapatos es mayor de veinte pero 
//menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos 
//se otorgará un 40% de descuento. El precio de cada zapato es de $80.






//Algoritmo tiendaZapatos
//	
//	
//	//declaracion de variables
//	Definir  numeroZapatos Como Entero;
//	
//	Definir  precioUnitario, totalCompra, descuento, totalConDescuento Como Real;
//	
//	precioUnitario <- 80;
//	
//	Escribir "Ingrese el numero de zapatos comprados: "
//	leer numeroZapatos;
//	
//	totalCompra <- numeroZapatos * precioUnitario;
//	
//	// logica de negocio
//	
//	si numeroZapatos > 30 entonces
//		descuento <- 0.40;
//	SiNo
//		si numeroZapatos >20  Entonces
//			
//			descuento <- 0.20
//		SiNo
//			si numeroZapatos >10 Entonces
//				descuento <-0.10
//			SiNo
//				descuento<-0.0
//				 
//			FinSi
//			
//		FinSi
//		
//	FinSi
//	
//	totalConDescuento <- totalCompra -(totalCompra* descuento);
//	
//	Escribir  "total de la compra sin descuento: $",totalCompra;
//	Escribir "descuento aplicado:",descuento *100,"%";
//	Escribir  "Total a pagar con descuento:$ ", totalConDescuento
//	
//	
//FinAlgoritmo
//
//



// Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.



// Algoritmo  notas
// Definir  nota1,nota2,nota3 Como Real;
// Definir promedio Como Real;
// 
// Escribir  "Ingrese la primera nota: "
// leer nota1;
// 
// Escribir  "Ingrese la segunda nota";
// leer nota2;
// 
// Escribir  "Ingrese la tercera nota";
// leer nota3;
// 
// promedio <- (nota1+nota2 + nota3)/3;
// 
// si promedio> 13.5 Entonces
// 
// Escribir "El estudiante aprobó con un promedio de:",promedio;
// 
// SiNo
// Escribir  "El estudiante no aprobó. su promedio es de:",promedio;
// FinSi
// 
// 
// 
// 
// 
// FinAlgoritmo
// 
// 




//Hacer un algoritmo en Pseint que diga si un número es par o impar.

// 
// Algoritmo parOImpar
// Definir  num Como Entero;
// 
// Escribir  "Ingrese un número entero:"
// leer num;
// 
// si num % 2=0 Entonces
// 
// Escribir  "El numero: ", num, " es par"
// SiNo
// Escribir  "El numero: ", num, " es impar"
// FinSi
// FinAlgoritmo
// 



//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
// 
// 
// Algoritmo calcularMayorDe3
// 
// Escribir "Ingrese el primer numero";
// leer num1;
// 
// Escribir  "Ingrese el segundo numero";
// Leer  num2;
// 
// Escribir  "Ingrese el tercer numero";
// leer num3;
// 
// 
// si num1==num2 y num2 == num3 Entonces
// Escribir  "Los 3 numeros son iguales"		
// SiNo
// 
// si num1 >num2 y num1>num3 Entonces
// Escribir  "El mayor es el numero 1"
// SiNo
// si num2>num1 y num2>num3 Entonces
// Escribir "El mayor es el numero 2"
// SiNo
// Escribir  "El mayor es el numero 3"
// FinSi
// FinSi
// FinSi
// 
// FinAlgoritmo
// 


//Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.



// Algoritmo vocal

// 	Escribir  "Ingrese una letra"
// 	leer letra;

// 	Segun letra Hacer
// 		"a":
// 			Escribir "Ingresaste la vocal A"
// 		"e":
// 			Escribir "Ingresaste la vocal E"
// 		"i":
// 			Escribir "Ingresaste la vocal I"
// 		"o":
// 			Escribir "Ingresaste la vocal O"
// 		"u":
// 			Escribir "Ingresaste la vocal u"
// 		De Otro Modo:
// 			Escribir "No es una vocal"
// 	Fin Segun
// FinAlgoritmo


//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.


//Algoritmo  calcularHoraSiguiente
	
	// 	Escribir  "ingrese la hora (formato 24 horas)"
	// 	leer hora
	// 	Escribir  "ingrese los minutos"
	// 	leer minutos
	// 	Escribir "ingrese los segundos"
	// 	leer segundo
	
	
	// 	si hora <0 o hora >23 o minutos<0 o minutos>59 o segundo<0 o segundo>59 Entonces
	// 		Escribir "Valores no válidos"
	// 	SiNo
	// 		segundo <- segundo +1;
	// 		si segundo  ==60 Entonces
	// 			segundo <- 0
	// 			minutos <- minutos +1;
	// 			si minutos ==60 Entonces
	// 				minutos <-0
	// 				hora<-hora+1
	// 				si hora ==24 Entonces
	// 					hora<-0
	// 				FinSi
	// 			FinSi
	// 		FinSi
	// 	FinSi
	
	// 	Escribir  "La hora dentro de un segundo es: ",hora,":",minutos,":",segundo
	
	
	// FinAlgoritmo



//Algoritmo sumaNPrimerosNumeros
	
//	
//	Definir  num Como Entero
//	num<-0;
//	
//	Mientras num<10 Hacer
		//Escribir "Hola"
		//num<-num+1
	//Fin Mientras
//FinAlgoritmo

//Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.





// Algoritmo sumaNPrimerosNumeros

// 	Definir  n, contador Como Entero
// 	Definir  suma como real

// 	Escribir  "Ingrese el valor n: "
// 	leer n;
// 	suma <-0;
// 	contador <-1;

// 	Mientras contador<=n Hacer

// 		//si es impar entonces sumar 
// 		suma <-suma+contador;

// 		contador<-contador +1;
// 	Fin Mientras

// 	Escribir  "La suma de los primeros ",n," numeros es:",suma

// FinAlgoritmo


//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.


// Algoritmo  sumarPrimerosCienNumeros

// 	definir suma, contador como entero
// 	suma<-0;
// 	contador <-1;


// 	Repetir
// 		suma <-suma +contador
// 		contador <-contador+1
// 	Hasta Que contador>100


// 	Escribir "la suma de los 100 primeros numeros es:",suma

// FinAlgoritmo


//Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.


// Algoritmo programaConOpcionContinuar

// 	Definir  opcion Como Caracter

// 	Repetir
// 		Escribir  "Desea continuar con el programa?(S/N)"
// 		Leer opcion
// 	Hasta Que opcion="N"
// FinAlgoritmo



//Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
//Si cumple se cumple la segunda condición, calcular la suma de los 4 números.



// Algoritmo  OperacionConNumeros

// 	Definir  num1,num2,num3,num4,pares,mayor,media,suma Como Entero

// 	Escribir  "Ingrese los numeros";
// 	leer num1
// 	leer num2
// 	leer num3
// 	leer num4

// 	//verificar numeros pares
// 	pares <-0;
// 	si num1 mod 2 =0 Entonces
// 		pares <-pares +1
// 	FinSi
// 	si num2 mod 2 =0 Entonces
// 		pares <-pares +1
// 	FinSi
// 	si num3 mod 2 =0 Entonces
// 		pares <-pares +1
// 	FinSi
// 	si num4 mod 2 =0 Entonces
// 		pares <-pares +1
// 	FinSi

// 	Escribir  "Cantidad de numeros pares: ",pares;

// 	///calcular el mayor
// 	mayor<-num1;
// 	si num2 >mayor Entonces
// 		mayor <-num2
// 	FinSi
// 	si num3 > mayor Entonces
// 		mayor <- num3;
// 	FinSi
// 	si num4 > mayor Entonces
// 		mayor <- num4
// 	FinSi

// 	Escribir "El numero mayor es: ",mayor

// 	////Si el tercero es par, calcular el cuadrado del segundo.

// 	si num3 mod 2=0 Entonces
// 		escribir "El cuadrado del segundo es ", num2*num2
// 	FinSi

// 	///Si el primero es menor que el cuarto, calcular la media de los 4 números.


// 	si num1<num4 Entonces
// 		media<- (num1 +num2+num3+num4)/4
// 		Escribir  "La media es: ",media
// 	FinSi

// 	///Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
// 	///Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

// 	si num2 >num3 Entonces
// 		si  num3 >=50 y num3<=700 Entonces
// 			suma <- (num1 +num2+num3+num4)
// 			Escribir "La suma de los 4 numeros es:", suma
// 		FinSi
// 	FinSi

// FinAlgoritmo









// Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo para.




Algoritmo SumaPrimerosCienNumeros
	
	definir suma Como Entero
	
	para i<- 1 Hasta 100 Hacer
		suma <-suma+i
	
	FinPara
	Escribir  "La Suma de los 100 numeros es: ",suma
FinAlgoritmo






















