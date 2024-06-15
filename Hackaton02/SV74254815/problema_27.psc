Proceso problema_27
    Definir media Como Real
	Escribir "DETERMINADO LA MEDIA DE UNA LISTA DE NÚMEROS POSITIVOS"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Ingrese una lista de números positivos (ingresar un número negativo para finalizar la lista)"
		Leer num
		suma = 0
		contador = 0
		Mientras num >= 0 Hacer
			suma = suma + num
			contador = contador + 1
			Leer num
		FinMientras
		Si contador > 0 Entonces
			media = suma / contador
			Escribir "La media de los números positivos ingresados es: ", media
		Sino
			Escribir "No se ingresaron números positivos."
		FinSi
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea ingresar otra lista? 1 para SI, 2 para NO"
			Leer respuesta
			si respuesta == 1 Entonces
				continuar = Verdadero
				continuar2 = Falso
			SiNo
				si respuesta == 2 Entonces
					continuar = Falso
					continuar2 = Falso
				SiNo
					Escribir "Opción erronea, intentelo de nuevo"
				FinSi
			FinSi
		FinMientras
	FinMientras
FinProceso
