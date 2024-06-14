Proceso PREGUNTA_6
	Escribir "Ingrese n�mero de horas trabajadas"
	Leer horas_trabajadas
	
	Si horas_trabajadas <= 40 Entonces
		sueldo_semanal = horas_trabajadas * 20
	SiNo
		sueldo_semanal = (40 * 20) + ((horas_trabajadas - 40) * 25)
	FinSi
	
	Escribir "Su sueldo semanal es de $", sueldo_semanal
FinProceso
