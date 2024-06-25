Proceso PREGUNTA_16
	
	Definir numero Como Entero
	// Leer el número que indica el día de la semana
	Escribir "Ingrese un número del 1 al 7:"
	Leer numero
	
	// Utilizar una estructura de control Segun para determinar el día correspondiente
	Segun numero Hacer
		1:
			Escribir "Lunes"
		2:
			Escribir "Martes"
		3:
			Escribir "Miércoles"
		4:
			Escribir "Jueves"
		5:
			Escribir "Viernes"
		6:
			Escribir "Sábado"
		7:
			Escribir "Domingo"
		De Otro Modo:
			Escribir "Número inválido. Ingrese un número del 1 al 7."
	FinSegun


FinProceso
