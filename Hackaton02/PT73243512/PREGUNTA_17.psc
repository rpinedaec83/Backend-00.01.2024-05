Proceso PREGUNTA_17
	Escribir "Escriba la hora:"
    Leer hora
	
    Escribir "Escriba los minutos:"
    Leer minutos
	
    Escribir "Escriba los segundos:"
    Leer segundos
	
    segundos = segundos + 1
	
    Si segundos >= 60 Entonces
        segundos = 0
        minutos = minutos + 1
        Si minutos >= 60 Entonces
            minutos = 0
            hora = hora + 1
            Si hora >= 24 Entonces
                hora = 0
            FinSi
        FinSi
    FinSi
	
    Escribir "La hora un segundo después es:", hora, ":", minutos, ":", segundos
FinProceso
