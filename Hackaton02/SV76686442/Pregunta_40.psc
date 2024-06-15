Algoritmo Pregunta_40
    Definir terminos, i, signo como Entero
    Definir aprox_pi, denominador como Real
    
    Escribir "Ingrese la cantidad de términos para aproximar Pi:"
    Leer terminos
    
    aprox_pi <- 3.0
    signo <- 1
    denominador <- 2.0
    
    Para i <- 1 Hasta terminos Hacer
        aprox_pi <- aprox_pi + signo * 4 / (denominador * (denominador + 1) * (denominador + 2))
        signo <- signo * (-1)
        denominador <- denominador + 2
    FinPara
    
    Escribir "La aproximación de Pi con ", terminos, " términos es: ", aprox_pi
FinAlgoritmo

