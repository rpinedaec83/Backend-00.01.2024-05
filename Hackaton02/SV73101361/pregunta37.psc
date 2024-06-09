// 37.Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Algoritmo pregunta37

    Definir temp, num1, num2 Como Entero

    Escribir "Ingrese el primer numero:"
    Leer num1
    Escribir "Ingrese el segundo numero:"
    Leer num2

    a <- num1
    b <- num2

    Mientras b <> 0 Hacer
        temp <- b
        b <- a mod b
        a <- temp
    FinMientras

    Escribir "El MCD de ", num1, " y ", num2, " es: ", a
FinAlgoritmo
