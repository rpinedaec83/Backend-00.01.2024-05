Algoritmo Prob11
	//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	Escribir "Ingrese el primer numero";
	leer num1;
	
	Escribir  "Ingrese el segundo numero";
	Leer  num2;
	
	Escribir  "Ingrese el tercer numero";
	leer num3;
	
	si num1==num2 y num2 == num3 Entonces
	 Escribir  "Los 3 numeros son iguales"		
	SiNo
		si num1 >num2 y num1>num3 Entonces
			Escribir  "El mayor es el numero 1"
		SiNo
			si num2>num1 y num2>num3 Entonces
				Escribir "El mayor es el numero 2"
			SiNo
				Escribir  "El mayor es el numero 3"
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
