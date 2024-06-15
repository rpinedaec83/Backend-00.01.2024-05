Proceso PREGUNTA_2
	Escribir "Ingrese un n�mero entero"
	Leer numero_ingresado
	
	Si numero_ingresado < 0 Entonces
			Escribir "El n�mero ingresado es negativo"
	SiNo
		Si numero_ingresado = 0 Entonces
			Escribir "El n�mero ingresado es 0, por lo que no es negativo ni positivo."
		SiNo
			Si numero_ingresado > 0 Entonces
				Escribir "El n�mero ingresado no es negativo."
			FinSi
		FinSi
		
	FinSi
FinProceso
