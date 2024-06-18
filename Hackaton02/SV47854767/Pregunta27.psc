//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, 
//se debe acabar el programa al ingresar un número negativo.

Proceso Pregunta27

	Definir numero, suma, cantidad Como Real
		
	suma = 0
	cantidad = 0
	
	Escribir "Ingrese una lista de números positivos. Ingrese un número negativo para terminar."
		Repetir
			Escribir "Ingrese un número:"
			Leer numero
			Si numero >= 0 Entonces
				suma = suma + numero
				cantidad = cantidad + 1
			FinSi
		Hasta Que numero < 0
		
		Si cantidad > 0 Entonces
			media = suma / cantidad
			Escribir "La media de los números positivos ingresados es:", media
		Sino
			Escribir "No se ingresaron números positivos."
	FinSi

	
FinProceso
