Proceso PREGUNTA_15
	Escribir "Digita 1 para CONVERTIR CENTIMETROS A PULGADAS y 2 para CONVERTIR LIBRAS A KILOGRAMOS"
	Leer tipo_conversion

	Segun tipo_conversion Hacer
		1:
			Escribir "Ingresa los centimetros a convertir"
			Leer cm
			pulg = cm / 2.54
			Escribir "Pulgadas = ", pulg
		2:
			Escribir "Ingresa las libras a convertir"
			Leer lb
			kg = lb * 0.453592
			Escribir "Kilogramos = ", kg
	FinSegun
FinProceso
