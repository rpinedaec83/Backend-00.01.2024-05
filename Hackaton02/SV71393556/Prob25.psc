Algoritmo Prob25
	//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	Definir  num,factorial Como Entero
	Escribir "Ingrese el numero";
	leer num;
	factorial=1;
	
	Repetir
		factorial = factorial*num;
		num=num-1;
	Hasta Que num==0;
	
	Escribir factorial;
	
FinAlgoritmo
