// 36.Hacer un algoritmo en Pseint para calcular la serie de Fibonacc.

Algoritmo pregunta36

    Definir n, i Como Entero
    Definir a, b, c Como Entero

    Escribir "Ingrese el numero de terminos de la serie de Fibonacci:"
    Leer n

    // Los dos primeros términos de la serie
    a <- 0
    b <- 1

    Escribir "Serie de Fibonacci:"
    Escribir a
    Si n > 1 Entonces
        Escribir b
    FinSi

    // Calcular y mostrar la serie de Fibonacci si numero > 2
    Para i <- 3 Hasta n Hacer
        c <- a + b
        Escribir c
        a <- b
        b <- c
    FinPara

FinAlgoritmo
