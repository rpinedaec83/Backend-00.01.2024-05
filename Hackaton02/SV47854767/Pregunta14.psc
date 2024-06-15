//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 y al 10 y determine si es un número primo.

Proceso Pregunta14
	
		Definir num, divisor Como Entero
		Definir esPrimo Como Logico
		
	
		Escribir "Ingrese un número entero positivo del 1 al 10:"
		Leer num
		
		esPrimo = Verdadero
				
		Si num <= 1 o num > 10 Entonces
			esPrimo = Falso
					
		Sino
			Para divisor = 2 Hasta num / 2
				Si num % divisor = 0 Entonces
					esPrimo = Falso
				FinSi
			FinPara
		FinSi
		
		Si esPrimo Entonces
			Escribir "El numero ", num, " es primo."
		Sino
			Escribir "El numero ", num, " NO es primo."
		FinSi
		
	FinProceso
