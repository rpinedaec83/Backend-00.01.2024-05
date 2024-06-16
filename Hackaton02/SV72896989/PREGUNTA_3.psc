Proceso PREGUNTA_3
	Escribir "Ingrese un número"
	Leer numero_ingresado
	
	ultima_cifra = Abs(numero_ingresado) % 10
	
	Si ultima_cifra = 4 Entonces
		Escribir  "El número ingresado termina en 4."
	SiNo 
		Escribir "El número ingresado no termina en 4."
	FinSi
	
FinProceso
