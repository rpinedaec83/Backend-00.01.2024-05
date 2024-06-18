Proceso PREGUNTA_06
	sueldo_Hora = 20  
    Sueldo_Horas_Extras = 25  
	
    Escribir "Escriba las horas trabajadas en la semana:"
    Leer horas_trabajadas
	
    Si h_trabajadas <= 40 Entonces
        Sueldo_Semana = horas_trabajadas * sueldo_Hora
    Sino
        horas_Extras = horas_trabajadas - 40
        Sueldo_Semana = 40 * sueldo_Hora + horas_Extras * Sueldo_Horas_Extras
    FinSi
	
    Escribir "El sueldo semanal es:", Sueldo_Semana
FinProceso
