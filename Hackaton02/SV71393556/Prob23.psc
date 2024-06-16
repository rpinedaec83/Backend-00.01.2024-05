Algoritmo Prob23
	//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n
	Definir  num,suma Como Entero
	Escribir "Ingrese cuantos numeros quiere sumar";
	leer num;
	suma=0;
	auxiliar=1;
	
	Mientras auxiliar<=num Hacer
		suma = suma+auxiliar
		auxiliar=auxiliar+2
	Fin Mientras
	Escribir suma;
	
FinAlgoritmo
