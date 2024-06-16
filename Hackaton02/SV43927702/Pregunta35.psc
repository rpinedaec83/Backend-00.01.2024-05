Proceso Pregunta35
    Definir numero Como Entero
    Definir maximo Como Entero
    Definir minimo Como Entero
    Escribir "Ingrese el número 1: "
    Leer numero
    maximo = numero
    minimo = numero
    Para i = 2 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ": "
        Leer numero
        Si numero > maximo Entonces
            maximo = numero
        FinSi
        Si numero < minimo Entonces
            minimo = numero
        FinSi
    FinPara
    Escribir "El número mayor es: ", maximo
    Escribir "El número menor es: ", minimo

	
FinProceso
