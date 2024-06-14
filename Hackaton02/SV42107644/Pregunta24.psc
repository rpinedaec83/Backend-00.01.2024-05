//24. Hacer un algoritmo en Pseint para realizar la suma de todos los numeros pares hasta el 1000.

Proceso Pregunta24
	Definir sumatoria, limite Como Entero
	limite = 1000
	Para i<- 1 Hasta limite Con Paso 1 Hacer
		Si i % 2 = 0 Entonces
			sumatoria = sumatoria + i
		FinSi
	Fin Para
	
	Escribir  "La suma de los ", limite, " primeros numeros pares es: ", sumatoria
FinProceso
