// 38.Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

Algoritmo pregunta38

    Definir numero, sumaDivisores, i Como Entero

    Escribir "Ingrese un numero para verificar si es perfecto:"
    Leer numero

    sumaDivisores <- 0

    // Encontrar y sumar los divisores propios del número
    Para i <- 1 Hasta numero - 1 Hacer
        Si numero mod i = 0 Entonces
            sumaDivisores <- sumaDivisores + i
        FinSi
    FinPara

    // Verificar si la suma de los divisores es igual al número
    Si sumaDivisores = numero Entonces
        Escribir "El numero ", numero, " es un numero perfecto."
    SiNo
        Escribir "El numero ", numero, " no es un numero perfecto."
    FinSi

FinAlgoritmo
