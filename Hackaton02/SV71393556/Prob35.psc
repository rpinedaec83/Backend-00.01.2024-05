Algoritmo Prob35
	//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
	
	Escribir "Ingrese un numero:";
	Leer num;
	numMayor=num;
	numMenor=num;
	para i<- 1 Hasta 19 Hacer
		Escribir "Ingrese un numero:";
		Leer num;
		
		si numMayor < num Entonces
			numMayor = num;
		FinSi
		
		si numMenor > num Entonces
			numMenor = num;
		FinSi
	FinPara
	
	Escribir "El numero mayor es: ", numMayor;
	Escribir "El numero menor es: ", numMenor;
	
FinAlgoritmo
