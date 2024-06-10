// 20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

// ¿Cuántos números son Pares?

// ¿Cuál es el mayor de todos?

// Si el tercero es par, calcular el cuadrado del segundo.

// Si el primero es menor que el cuarto, calcular la media de los 4 números.

// Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.


Algoritmo pregunta20
    Dimensionar numeros[4]
    Definir pares, mayor, suma Como Entero
    Definir media como Real

    Escribir "Ingrese 4 numeros:"
    Para i <- 1 Hasta 4 Hacer
        Leer numeros[i]
    FinPara

    // Verificar números pares
    pares <- 0
    Para i <- 1 Hasta 4 Hacer
        Si numeros[i] mod 2 = 0 Entonces
            pares <- pares + 1
        FinSi
    FinPara
    Escribir "Cantidad de numeros pares: ", pares

    // Calcular el mayor
    mayor <- numeros[1]
    Para i <- 2 Hasta 4 Hacer
        Si numeros[i] > mayor Entonces
            mayor <- numeros[i]
        FinSi
    FinPara
    Escribir "El numero mayor es: ", mayor

    // Si el tercero es par, calcular el cuadrado del segundo
    Si numeros[3] mod 2 = 0 Entonces
        Escribir "El cuadrado del segundo es: ", numeros[2] * numeros[2]
    FinSi

    // Si el primero es menor que el cuarto, calcular la media de los 4 números
    Si numeros[1] < numeros[4] Entonces
        media <- (numeros[1] + numeros[2] + numeros[3] + numeros[4]) / 4
        Escribir "La media es: ", media
    FinSi

    // Si el segundo es mayor que el tercero, verificar si el tercero está comprendido entre 50 y 700
    Si numeros[2] > numeros[3] Entonces
        Si numeros[3] >= 50 y numeros[3] <= 700 Entonces
            suma <- numeros[1] + numeros[2] + numeros[3] + numeros[4]
            Escribir "La suma de los 4 numeros es: ", suma
        FinSi
    FinSi

FinAlgoritmo
