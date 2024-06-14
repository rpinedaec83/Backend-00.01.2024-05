Proceso PREGUNTA_7
	Escribir  "Ingrese tipo cliente"
	Leer cliente
	
	Segun Mayusculas(cliente) Hacer
		"A":
			Escribir "Tipo A 10% de descuento"
		"B":
			Escribir "Tipo B 15% de descuento"
		"C":
			Escribir "Tipo C 20% de descuento"
		De Otro Modo:
			Escribir "No existe"
	Fin Segun
FinProceso
 
 