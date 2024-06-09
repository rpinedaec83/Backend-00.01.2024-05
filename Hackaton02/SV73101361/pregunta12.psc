// 12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.

Algoritmo pregunta12
	Dimensionar numeros[2];
    Definir i Como Entero;
    Definir mayor Como Entero;
    Para i <- 1 Hasta 2 Con Paso 1 Hacer
        Escribir "Ingrese el numero ", i, ":";
        Leer numeros[i];
    FinPara

    Si (numeros[1] < numeros[2]) Entonces
        mayor <- numeros[2]
    SiNo
        Si (numeros[1] > numeros[2]) Entonces
            mayor <- numeros[1]
        SiNo 
            Escribir "Los 2 numeros son iguales"
            mayor <- numeros[1]
        FinSi
    FinSi
        Escribir "El mayor numero es: ", mayor;

FinAlgoritmo
