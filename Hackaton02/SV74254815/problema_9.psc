Proceso problema_9
	Escribir "DETERMINAR EL AUMENTO DE UN TRABAJADOR"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Ingrese el sueldo actual del trabajador"
		Leer sueldo_actual
		si sueldo_actual > 2000 Entonces
			aumento = sueldo_actual * 0.05
			sueldo_nuevo = sueldo_actual + aumento
			Escribir "El nuevo sueldo del trabajado será:"
			Escribir "$", sueldo_nuevo
		SiNo
			aumento = sueldo_actual * 0.1
			sueldo_nuevo = sueldo_actual + aumento
			Escribir "El nuevo sueldo del trabajado será:"
			Escribir "$", sueldo_nuevo
		FinSi
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea determinar otro aumento? 1 para SI, 2 para NO"
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
