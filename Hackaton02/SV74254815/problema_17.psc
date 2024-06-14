Proceso problema_17
	Escribir "LA HORA"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Ingrese la hora actual (en formato 24h):"
		Leer hora
		Escribir "Ingrese los minutos actuales:"
		Leer minutos
		Escribir "Ingrese los segundos actuales:"
		Leer seg
		seg = seg + 1
		Si seg = 60 Entonces
			seg = 0
			minutos = minutos + 1
			Si minutos = 60 Entonces
				minutos = 0
				hora = hora + 1
				Si hora = 24 Entonces
					hora = 0
				FinSi
			FinSi
		FinSi
		Escribir "La hora dentro de un segundo es: ", hora, ":", minutos, ":", seg
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea ingresar otra hora? 1 para SI, 2 para NO"
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
