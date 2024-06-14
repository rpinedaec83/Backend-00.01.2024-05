Proceso PREGUNTA_38
    Escribir "Ingrese un numero"
    Leer numero
    
    suma_divisores = 0
    
    Para divisor = 1 Hasta numero / 2 Hacer
        Si numero Mod divisor = 0 Entonces
            suma_divisores = suma_divisores + divisor
        FinSi
    FinPara
    
    Si suma_divisores = numero Entonces
        Escribir "El numero es perfecto"
    Sino
        Escribir "El numero no es perfecto"
    FinSi
FinProceso
