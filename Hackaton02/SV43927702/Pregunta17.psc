Proceso Pregunta17
    Definir hora, minutos, segundos Como Entero
    Escribir "Ingrese la hora (0-23): "
    Leer hora
    Escribir "Ingrese los minutos (0-59): "
    Leer minutos
    Escribir "Ingrese los segundos (0-59): "
    Leer segundos
    segundos = segundos + 1
   
    Si segundos >= 60 Entonces
        segundos = 0
        minutos = minutos + 1
    FinSi
    Si minutos >= 60 Entonces
        minutos = 0
        hora = hora + 1
    FinSi
    
    Si hora >= 24 Entonces
        hora = 0
    FinSi

    Escribir "La hora dentro de un segundo es: ", hora, ":", minutos, ":", segundos
	
FinProceso
