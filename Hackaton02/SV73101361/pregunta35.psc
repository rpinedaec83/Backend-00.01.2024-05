// 35.Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números. 

Algoritmo pregunta35
    Dimensionar numeros[20]
    Definir i, mayor, menor Como Entero

    Para i <- 1 Hasta 20 Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numeros[i]
    FinPara

    mayor <- numeros[1]
    menor <- numeros[1]

    // Determinar el número mayor y el número menor
    Para i <- 2 Hasta 20 Hacer
        Si numeros[i] > mayor Entonces
            mayor <- numeros[i]
        FinSi
        Si numeros[i] < menor Entonces
            menor <- numeros[i]
        FinSi
    FinPara

    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinAlgoritmo
