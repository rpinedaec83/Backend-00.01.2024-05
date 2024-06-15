Proceso PREGUNTA_6
	definir horas como Entero
	Escribir  "Ingrese horas"
	Leer horas
	
	pago_horas=0
	Si horas<=40 Entonces
		pago_horas=20
	SiNo
		pago_horas=25
	Fin Si
	
	total=horas*pago_horas
	Escribir "Pago semanal ",total
FinProceso
