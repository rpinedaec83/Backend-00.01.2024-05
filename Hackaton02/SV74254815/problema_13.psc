Proceso problema_13
	Escribir "IDENTIFICANDO SI ES UNA VOCAL"
	Definir letra Como Caracter
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Ingrese la letra a identificar"
		Leer letra
		letra = Mayusculas(letra)
		si letra = "A" O letra = "E" O letra = "I" O letra = "O" O letra = "U" Entonces
			Escribir "La letra ingresada es una vocal"
		SiNo
			Escribir "La letra ingresada no es una vocal"
		FinSi
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea ingresar otra letra? 1 para SI, 2 para NO"
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
