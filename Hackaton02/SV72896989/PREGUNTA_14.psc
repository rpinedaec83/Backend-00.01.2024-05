Proceso PREGUNTA_14
	
	Escribir "Ingrese un numero entre 1 y 10"
    Leer numero
	contador = 0
        
    Si numero < 1 O numero > 10 Entonces
        Escribir "El numero ingresado no esta en el rango permitido"
    Sino
        Para divisor <- 1 Hasta 10 Hacer
			Si numero % divisor = 0 Entonces
                contador = contador + 1
            FinSi
        FinPara
        
        Si contador = 2 Entonces
            Escribir "El numero ingresado es primo"
        Sino
            Escribir "El numero ingresado no es primo"
        FinSi
    FinSi
FinProceso



