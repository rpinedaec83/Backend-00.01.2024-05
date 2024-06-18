Proceso PREGUNTA_35
	mayor = -9999999
    menor = 9999999   
	Para i = 1 Hasta 20 Hacer
        Escribir "Escriba el numero ", i, ":"
        Leer numero
		
        Si numero > mayor Entonces
            mayor = numero
        FinSi
		
        Si numero < menor Entonces
            menor = numero
        FinSi
    FinPara
	
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinProceso
