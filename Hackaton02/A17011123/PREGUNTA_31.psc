Proceso PREGUNTA_31
	 
    sumaPares = 0
    sumaImpares = 0
    contadorPares = 0
    contadorImpares = 0
    
    Para i = 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numero
        Si numero % 2 = 0 Entonces
            sumaPares = sumaPares + numero
            contadorPares = contadorPares + 1
        Sino
            sumaImpares = sumaImpares + numero
            contadorImpares = contadorImpares + 1
        FinSi
    FinPara
    
    Si contadorPares > 0 Entonces
        Escribir "La media de los números pares es: ", sumaPares / contadorPares
    Sino
        Escribir "No se ingresaron números pares."
    FinSi
    
    Si contadorImpares > 0 Entonces
        Escribir "La media de los números impares es: ", sumaImpares / contadorImpares
    Sino
        Escribir "No se ingresaron números impares."
    FinSi
FinProceso
