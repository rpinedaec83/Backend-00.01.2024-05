Proceso PREGUNTA_31
	sumaPares = 0
    sumaImpares = 0
    cantidadPares = 0
    cantidadImpares = 0
	
    Para contador = 1 Hasta 10 Hacer
        Escribir "Escriba el numero ", contador, ":"
        Leer numero
		
        Si numero % 2 = 0 Entonces
            sumaPares = sumaPares + numero
            cantidadPares = cantidadPares + 1
        Sino
            sumaImpares = sumaImpares + numero
            cantidadImpares = cantidadImpares + 1
        FinSi
    FinPara
	
    Si cantidadPares > 0 Entonces
        mediaPares = sumaPares / cantidadPares
        Escribir "La media de los numeros pares es: ", mediaPares
    Sino
        Escribir "No se ingresaron numeros pares."
    FinSi
	
    Si cantidadImpares > 0 Entonces
        mediaImpares = sumaImpares / cantidadImpares
        Escribir "La media de los números impares es: " mediaImpares
    Sino
        Escribir "No se ingresaron números impares."
    FinSi
FinProceso
