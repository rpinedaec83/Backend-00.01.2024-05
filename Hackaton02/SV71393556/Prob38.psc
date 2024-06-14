Algoritmo Prob38
	//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
	Escribir "Ingrese un numero:";
	Leer num;
	suma=0;
	
	para i<- 1 Hasta num Hacer
		si num%i == 0 y i<num Entonces
			suma = suma+i;
		FinSi
	FinPara
	
	si suma == num Entonces
		Escribir "el numero ",num," es perfecto";
	SiNo
		Escribir "el numero ",num," no es perfecto";
	FinSi
	
FinAlgoritmo
