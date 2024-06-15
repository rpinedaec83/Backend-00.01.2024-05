Proceso PREGUNTA_4
	definir num1 como Entero
	Escribir  "Ingrese un numero 1"
	Leer num1
	
	definir  num2 como Entero
	Escribir  "Ingrese un numero 2"
	Leer  num2
	
	definir  num3 como Entero
	Escribir  "Ingrese un numero 3"
	Leer  num3
	
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
	
FinProceso
