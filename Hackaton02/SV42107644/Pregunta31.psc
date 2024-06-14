//31. Hacer un algoritmo en Pseint parar calcular la media de los numeros pares e impares, solo se ingresara diez numeros.

Proceso Pregunta31
	Definir valor_ingresado, sumatoria, contador, limite Como Entero
	limite = 10
	contador = 1
	sumatoria = 0
	
	Escribir "Ingrese 10 numeros para calcular su media: "
	
	Repetir
		Leer valor_ingresado
		sumatoria = sumatoria + valor_ingresado
		contador = contador + 1
	Hasta que contador > limite
	
	Escribir "La media de los numeros es: ", sumatoria / limite
FinProceso
