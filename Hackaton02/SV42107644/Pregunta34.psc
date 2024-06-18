//34. Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los numeros del uno nueve.

Proceso Pregunta34
	Definir limite, maximo Como Entero
	limite = 9
	maximo = 12
	Escribir "Esta es la tabla de multiplicar de los numeros del 1 al ", limite
	
	Para i<-1 Hasta limite Con Paso 1 Hacer
		Escribir "Esta es la tabla del ", i
		Para j<-1 Hasta maximo Con Paso 1 Hacer
			Escribir i," x ", j , " = ", i * j
		Fin Para
	Fin Para
FinProceso
