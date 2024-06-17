//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
Proceso Pregunta_25
	Definir num,factotial Como Entero
	Escribir "Ingrese un numero"
	Leer num
	factorial<-1
	Escribir "El factorial de ", num , " es"
	Mientras num-1>0 Hacer
		factorial<-factorial*(num)
		num<-num-1
	Fin Mientras
	Escribir factorial
FinProceso
