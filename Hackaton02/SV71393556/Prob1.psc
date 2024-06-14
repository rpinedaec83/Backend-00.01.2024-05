
// HACKATON2
Algoritmo Prob1
	// Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
	definir num Como Entero;
	Escribir  "Ingrese un número entero:";
	leer num;
	si num/100 >=1 y num/1000 <1 Entonces
		Escribir  "El numero: ", num, " tiene tres dígitos"
	SiNo
		Escribir  "El numero: ", num, " tiene no tres dígitos"
	FinSi
	
FinAlgoritmo
