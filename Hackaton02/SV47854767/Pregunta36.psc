//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

Proceso Pregunta36
	
	Definir limite, a, b, c Como Entero
		
	Escribir "Ingrese el límite de la serie Fibonacci:"
	Leer limite
		
	a = 0
	b = 1
		
	Escribir a
	Escribir b
		
	Para i = 3 Hasta limite Hacer
		c = a + b
		Escribir c
		a = b
		b = c
	FinPara


FinProceso
