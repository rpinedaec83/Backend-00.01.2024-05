Proceso Pregunta31
	Definir numero Como Entero
    Definir sumaPares Como Entero
    Definir sumaImpares Como Entero
    Definir contadorPares Como Entero
    Definir contadorImpares Como Entero
    Definir mediaPares Como Real
    Definir mediaImpares Como Real
    sumaPares = 0
    sumaImpares = 0
    contadorPares = 0
    contadorImpares = 0
    Para i = 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ": "
        Leer numero
        
        Si numero MOD 2 = 0 Entonces
            sumaPares = sumaPares + numero
            contadorPares = contadorPares + 1
        Sino
            sumaImpares = sumaImpares + numero
            contadorImpares = contadorImpares + 1
        FinSi
    FinPara
    
    Si contadorPares > 0 Entonces
        mediaPares =sumaPares / contadorPares
    Sino
        mediaPares = 0
    FinSi
    
    Si contadorImpares > 0 Entonces
        mediaImpares = sumaImpares / contadorImpares
    Sino
        mediaImpares = 0
    FinSi
	
    Escribir "La media de los números pares es: ", mediaPares
    Escribir "La media de los números impares es: ", mediaImpares
	
FinProceso
