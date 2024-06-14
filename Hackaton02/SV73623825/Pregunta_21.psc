//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso Pregunta_21
	Definir num,factotial Como Entero
	Escribir "Ingrese un numero"
	Leer num
	factorial<-1
	Escribir "El factorial de ", num , " es"
	Si num>0 Entonces
		Repetir
			factorial<-num*factorial
			num<-num-1
		Hasta Que num<1
		Escribir factorial
	SiNo
		Escribir "1"
	Fin Si
	
	
FinProceso
