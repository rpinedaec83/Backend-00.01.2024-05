// 21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Algoritmo pregunta21

    Definir numero, factorial Como Entero
    
    Escribir "Ingrese un nUmero para calcular su factorial:"
    Leer numero

    factorial <- 1
    Para i <- numero Hasta 1 Con Paso -1 Hacer
        factorial <- factorial * i
    FinPara

    Escribir "El factorial de ", numero, " es: ", factorial

FinAlgoritmo
