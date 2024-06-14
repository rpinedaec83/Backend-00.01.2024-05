Proceso PREGUNTA_19
	Escribir "Ingrese el número identificador del empleado: "
    Leer idEmpleado
    Escribir "Ingrese días trabajados: "
    Leer diasTrabajados
    
    Segun idEmpleado Hacer
        1: salarioDiario = 56
        2: salarioDiario = 64
        3: salarioDiario = 80
        4: salarioDiario = 48
        De Otro Modo: Escribir "Número de empleado no válido"
    FinSegun
    
    pagoTotal = salarioDiario * diasTrabajados
    
    Escribir "El pago total es: $", pagoTotal
FinProceso
