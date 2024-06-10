//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Proceso Pregunta11
	
	Escribir "Ingrese el primer numero";
	Leer num1;
	
	Escribir  "Ingrese el segundo numero";
	Leer  num2;
	 
	Escribir  "Ingrese el tercer numero";
	Leer num3;
	
	Si num1 == num2 y num2 == num3 Entonces
		Escribir  "Los 3 numeros son iguales"
	SiNo
		Si num1 > num2 y num1 > num3 Entonces
			Escribir  "El numero mayor es el ", num1
		SiNo
			Si num2 > num1 y num2 > num3 Entonces
				Escribir "El numero mayor es el ", num2
			SiNo
				Escribir  "El numero mayor es el ", num3
			FinSi
		FinSi
	FinSi

FinProceso
