Proceso PREGUNTA_17
	
		// Declarar variables para horas, minutos y segundos
	Definir horas, minutos, segundos Como Entero
	
	// Leer la hora ingresada por el usuario
	Escribir "Ingrese la hora (0-23):"
	Leer horas
	Escribir "Ingrese los minutos (0-59):"
	Leer minutos
	Escribir "Ingrese los segundos (0-59):"
	Leer segundos
	
	// Incrementar un segundo
	segundos <- segundos + 1
	
	// Verificar si los segundos se desbordan
	Si segundos = 60 Entonces
		segundos <- 0
		minutos <- minutos + 1
		// Verificar si los minutos se desbordan
		Si minutos = 60 Entonces
			minutos <- 0
			horas <- horas + 1
			// Verificar si las horas se desbordan
			Si horas = 24 Entonces
				horas <- 0
			FinSi
		FinSi
	FinSi
	
	// Mostrar la nueva hora
	Escribir "La hora dentro de un segundo será: ", horas, ":", minutos, ":", segundos


FinProceso
