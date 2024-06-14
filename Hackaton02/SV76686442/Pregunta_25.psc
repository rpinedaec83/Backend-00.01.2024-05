Algoritmo Pregunta_25
    Definir n, i, factorial Como Entero
    Escribir "Ingrese un número entero positivo para calcular su factorial:"
    Leer n
    factorial <- 1
    Si n < 0 Entonces
        Escribir "El número debe ser un entero positivo."
    Sino
        Si n = 0 Entonces
            Escribir "El factorial de ", n, " es: ", factorial
        Sino
            i <- 1
            Mientras i <= n Hacer
                factorial <- factorial * i
                i <- i + 1
            Fin Mientras
            Escribir "El factorial de ", n, " es: ", factorial
        Fin Si
    Fin Si
FinAlgoritmo

