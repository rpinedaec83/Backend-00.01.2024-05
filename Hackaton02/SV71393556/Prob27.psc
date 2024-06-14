Algoritmo Prob27
	//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar 
	//el programa al ingresar un número negativo.
	Definir  num,suma,contador Como Entero
	suma=0;
	num=0;
	contador = 0;
	
	Mientras num>=0 Hacer
		suma = suma+num;
		Escribir "El numero es: ";
		leer num;
		contador = contador+1;
		si num<0 Entonces
			contador = contador-1;
		FinSi
	Fin Mientras
	
	si contador == 0 Entonces
		media = 0;
	SiNo
		media = suma/contador;
	FinSi

	Escribir "La media es: ", media;
	
FinAlgoritmo
