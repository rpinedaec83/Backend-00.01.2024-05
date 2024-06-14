Proceso PREGUNTA_31
    suma_pares = 0
    contador_pares = 0
    suma_impares = 0
    contador_impares = 0
    
    Para i = 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese un numero:"
        Leer numero
        
        Si numero % 2 = 0 Entonces
            suma_pares = suma_pares + numero
            contador_pares = contador_pares + 1
        SiNo
            suma_impares = suma_impares + numero
            contador_impares = contador_impares + 1
        FinSi
    FinPara
    
    Si contador_pares > 0 Entonces
        media_pares = suma_pares / contador_pares
        Escribir "La media de los numeros pares es ", media_pares
    SiNo
        Escribir "No se ingresaron numeros pares."
    FinSi
    
    Si contador_impares > 0 Entonces
        media_impares = suma_impares / contador_impares
        Escribir "La media de los numeros impares es ", media_impares
    SiNo
        Escribir "No se ingresaron numeros impares"
    FinSi
FinProceso
