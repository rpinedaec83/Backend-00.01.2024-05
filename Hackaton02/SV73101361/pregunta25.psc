// 25.Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Algoritmo calcularFactorialConMientras

    Definir numero, factorial, i Como Entero
    
    Escribir "Ingrese un numero para calcular su factorial:"
    Leer numero
    factorial <- 1
    i <- numero

    Mientras i > 1 Hacer
        factorial <- factorial * i
        i <- i - 1
    FinMientras

    Escribir "El factorial de ", numero, " es: ", factorial

FinAlgoritmo
