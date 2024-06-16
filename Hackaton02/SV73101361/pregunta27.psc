// 27.Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

Algoritmo mediaDeNumerosPositivos
    Definir numero, suma, contador Como Real
    suma <- 0
    contador <- 0

    Repetir
        Escribir "Ingrese un numero positivo (Si desea terminar, ingrese un numero negativo):"
        Leer numero

        Si numero >= 0 Entonces
            suma <- suma + numero
            contador <- contador + 1
        FinSi
    Hasta Que numero < 0

    Si contador > 0 Entonces
        Escribir "La media de los numeros ingresados es: ", suma / contador
    SiNo
        Escribir "Error: No se ingresaron números positivos."
    FinSi

FinAlgoritmo
