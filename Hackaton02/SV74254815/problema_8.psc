Proceso problema_8
	Escribir "CALCúLAR EL PROMEDIO DE TRES NOTAS"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Ingrese la tres notas"
		Leer nota1, nota2, nota3
		prom = (nota1 + nota2 + nota3)/3
		Escribir "El promedio de las tres notas es:", prom
		si prom >= 12 Entonces
			Escribir "El estudiante aprobó"
		SiNo
			Escribir "El estudiante desaprobó"
		FinSi
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea calular el promedio de nuevo? 1 para SI, 2 para NO"
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
