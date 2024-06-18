Algoritmo Pregunta_39
    Definir n, i Como Entero
    Definir resultado, termino Como Real
    Definir signo Como Entero
    resultado <- 0
    signo <- 1
    Escribir "Ingrese la cantidad de términos para aproximar Pi:"
    Leer n
    Para i <- 0 Hasta n-1 Hacer
        termino <- 4 / (2 * i + 1)
        resultado <- resultado + signo * termino
        signo <- signo * (-1)
    Fin Para
    Escribir "La aproximación de Pi con ", n, " términos es: ", resultado
FinAlgoritmo


