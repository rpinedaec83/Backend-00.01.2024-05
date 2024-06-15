Proceso problema_26
	Escribir "RESTO Y COCIENTE"
	continuar = Verdadero
	Mientras continuar= Verdadero Hacer
		Escribir "Ingrese el dividendo:"
		Leer dividendo
		Escribir "Ingrese el divisor:"
		Leer divisor
		cociente = 0
		Mientras dividendo >= divisor Hacer
			dividendo = dividendo - divisor
			cociente = cociente + 1
			resto = dividendo
		FinMientras
		Escribir "El cociente es: ", cociente
		Escribir "El resto es: ", resto
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea ingresar otros número? 1 para SI, 2 para NO"
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
