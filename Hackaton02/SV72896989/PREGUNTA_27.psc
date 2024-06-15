Proceso PREGUNTA_27
    suma = 0
    contador = 0
    
    Repetir
        Escribir "Ingrese un numero positivo (o un numero negativo para terminar este programa):"
        Leer numero
        Si numero >= 0 Entonces
            suma = suma + numero
            contador = contador + 1
        FinSi
    Hasta Que numero < 0
    
    Si contador > 0 Entonces
        media = suma / contador
        Escribir "La media de los numeros ingresados es ", media
    SiNo
        Escribir "No se ingreso ningun numero positivo"
    FinSi
FinProceso
