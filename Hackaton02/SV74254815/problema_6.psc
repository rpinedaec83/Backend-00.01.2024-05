Proceso problema_6
	Escribir "CALCÚLA CUÁNTO SE TE PAGARÁ EN LA SEMANA"
	continuar = Verdadero
	Mientras continuar = verdadero Hacer
		Escribir "Ingrese las horas trabajadas durante la semana"
		Leer numhoras
		sueldo_base = 0
		sueldo_total = 0
		si numhoras <= 40 Entonces
			sueldo_base = numhoras * 40
			sueldo_total = sueldo_base
		SiNo
			sueldo_base = 40 * 20 
			sueldo_extra = (numhoras - 40) * 25
			sueldo_total = sueldo_base + sueldo_extra
		FinSi
		Escribir "Por trabajar ", numhoras " horas se le pagará:"
		Escribir "$", sueldo_total
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea calcular de nuevo? 1 para SI, 2 para NO"
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
