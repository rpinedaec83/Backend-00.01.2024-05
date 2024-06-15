Algoritmo Prob37
	//Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
	Escribir "Ingrese un numero:";
	Leer num1;
	
	Escribir "Ingrese un numero:";
	Leer num2;
	
	si num1>num2 Entonces
		mayorNum = num1;
		menorNum = num2;
	SiNo
		mayorNum = num2;
		menorNum = num1;
	FinSi
	
	Repetir
		residuo = mayorNum % menorNum;
		mayorNum = menorNum;
		menorNum = residuo
	Hasta Que residuo==0
	Escribir "MCD:",mayorNum;
	
FinAlgoritmo
