//12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.

Proceso Pregunta12
	
	Escribir "Ingrese el primer numero";
	Leer num1;
	
	Escribir  "Ingrese el segundo numero";
	Leer  num2;
	
	
	Si num1 == num2 Entonces
		Escribir  "Los 2 numeros son iguales"
	SiNo
		Si num1 > num2 Entonces
			Escribir  "El numero mayor es el ", num1
		SiNo
			Escribir "El numero mayor es el ", num2
		FinSi
	FinSi
FinProceso
