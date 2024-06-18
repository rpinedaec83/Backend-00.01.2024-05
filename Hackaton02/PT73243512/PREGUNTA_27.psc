Proceso PREGUNTA_27
	suma = 0
    contador = 0
	
    Escribir "Escriba una lista de numeros positivos. Ingrese un numero negativo para terminar."
	
    Repetir
        Escribir "Ingrese un n�mero:"
        Leer N1
		
        Si N1< 0 Entonces
            Si contador = 0 Entonces
                Escribir "No se ingresaron nuros positivos."
            Sino
                Escribir "La media de los nueros ingresados es: ", suma / contador
            FinSi
        Sino
            suma = suma + N1
            contador = contador + 1
        FinSi
    Hasta Que N1< 0
FinProceso
