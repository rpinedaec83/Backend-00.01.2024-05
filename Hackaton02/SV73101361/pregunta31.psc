// 31.Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

Algoritmo pregunta31

    Dimensionar numeros[10];
    Definir sumaPares, sumaImpares, contadorPares, contadorImpares, i Como Entero;
    Definir mediaPares, mediaImpares Como Real;

    sumaPares <- 0
    sumaImpares <- 0
    contadorPares <- 0
    contadorImpares <- 0

    Para i <- 1 Hasta 10 Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numeros[i]
    FinPara

    // Calcular la suma y el contador de números pares e impares
    Para i <- 1 Hasta 10 Hacer
        Si numeros[i] mod 2 = 0 Entonces
            sumaPares <- sumaPares + numeros[i]
            contadorPares <- contadorPares + 1
        SiNo
            sumaImpares <- sumaImpares + numeros[i]
            contadorImpares <- contadorImpares + 1
        FinSi
    FinPara

    Si contadorPares > 0 Entonces
        mediaPares <- sumaPares / contadorPares
    SiNo
        mediaPares <- 0
    FinSi

    Si contadorImpares > 0 Entonces
        mediaImpares <- sumaImpares / contadorImpares
    SiNo
        mediaImpares <- 0
    FinSi

    Escribir "La media de los numeros pares es: ", mediaPares
    Escribir "La media de los numeros impares es: ", mediaImpares

FinAlgoritmo
