//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Proceso Pregunta37
	
	Definir dividendo, divisor, residuo Como Entero
		
	Escribir "Ingrese el primer numero:"
	Leer dividendo
		
	Escribir "Ingrese el segundo numero:"
	Leer divisor
		
		Mientras divisor <> 0 Hacer
			residuo = dividendo % divisor
			dividendo = divisor
			divisor = residuo
		FinMientras
		
	Escribir "El MCD de los dos numeros es: ", dividendo

FinProceso
