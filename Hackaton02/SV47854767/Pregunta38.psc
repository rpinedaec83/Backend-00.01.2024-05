//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

Proceso Pregunta38
	
	Definir numero, sumaDivisores Como Entero
	Definir divisor Como Real
		
	Escribir "Ingrese un numero:"
	Leer numero
		
	sumaDivisores = 0
		
	Para divisor = 1 Hasta numero / 2 Hacer
		Si numero % divisor = 0 Entonces
			sumaDivisores = sumaDivisores + divisor
		FinSi
	FinPara
		
	Si sumaDivisores = numero Entonces
		Escribir "El numero ", numero, " es un numero perfecto."
	Sino
		Escribir "El numero ", numero, " no es un numero perfecto."
	FinSi

FinProceso
