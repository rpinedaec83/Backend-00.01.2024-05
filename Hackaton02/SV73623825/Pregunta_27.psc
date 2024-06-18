//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
Proceso Pregunta_27
	Definir num,suma Como Real
	Definir cont Como Entero
	Repetir
		
		suma<-suma+num
		cont<-cont+1
		Escribir "Ingrese un numero"
		Leer num
	Hasta Que num<0
	Escribir "La cantidad de numeros ingresados es ",cont-1
	Escribir "El promedio es ",suma/(cont-1)
FinProceso
