//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

Proceso Pregunta31
	Definir numero, sumaPares, sumaImpares, contadorPares, contadorImpares Como Real
		
	sumaPares = 0
	sumaImpares = 0
	contadorPares = 0
	contadorImpares = 0
	contador = 1
		
	Mientras contador <= 10 Hacer
		Escribir "Ingrese el número ", contador, ":"
		Leer numero
			
		Si numero % 2 = 0 Entonces
			sumaPares = sumaPares + numero
			contadorPares = contadorPares + 1
		Sino
			sumaImpares = sumaImpares + numero
			contadorImpares = contadorImpares + 1
		FinSi
			
		contador = contador + 1
	FinMientras
		
	mediaPares = sumaPares / contadorPares
	mediaImpares = sumaImpares / contadorImpares
		
	Escribir "La media de los números pares es:", mediaPares
	Escribir "La media de los números impares es:", mediaImpares

FinProceso
