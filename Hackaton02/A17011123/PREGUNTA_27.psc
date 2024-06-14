Proceso PREGUNTA_27
    suma = 0
    contador = 0
    Escribir "Ingrese números positivos. Ingrese un número negativo para terminar."
    Leer numero
    Mientras numero >= 0 Hacer
        suma = suma + numero
        contador = contador + 1
        Escribir "Ingrese otro número positivo o un número negativo para terminar:"
        Leer numero
    FinMientras
    Si contador > 0 Entonces
        Escribir "La media de los números ingresados es: ", suma / contador
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
FinProceso
