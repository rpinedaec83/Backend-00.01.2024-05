Proceso problema_16
	Escribir "DÍA DE LA SEMANA"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Repetir 
			Escribir "Ingrese un número del 1 al 7: "
			Leer num
		Hasta Que num >= 1 y num <= 7
		
		Segun num Hacer
			Caso 1:
				Escribir "El número 1 corresponde al día Lunes."
			Caso 2:
				Escribir "El número 2 corresponde al día Martes."
			Caso 3:
				Escribir "El número 3 corresponde al día Miércoles."
			Caso 4:
				Escribir "El número 4 corresponde al día Jueves."
			Caso 5:
				Escribir "El número 5 corresponde al día Viernes."
			Caso 6:
				Escribir "El número 6 corresponde al día Sábado."
			Caso 7:
				Escribir "El número 7 corresponde al día Domingo."
		FinSegun
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea escribir otro número? 1 para SI, 2 para NO"
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
