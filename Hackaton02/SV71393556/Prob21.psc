Algoritmo Prob21
	//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	Definir  num,factorial Como Entero
	Escribir "Ingrese el numero";
	leer num;
	factorial=1

	Mientras num>0 Hacer
		factorial = factorial*num
		num=num-1
	Fin Mientras
	Escribir factorial
	
FinAlgoritmo
