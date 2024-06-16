// 11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Algoritmo pregunta11

	Dimensionar numeros[3];
    Definir i Como Entero;

    Para i <- 1 Hasta 3 Con Paso 1 Hacer
        Escribir "Ingrese el numero ", i, ":";
        Leer numeros[i];
    FinPara

    Si numeros[1] = numeros[2] y numeros[2] = numeros[3] Entonces
        Escribir "Los 3 numeros son iguales";
    SiNo
        Definir mayor Como Entero;
        mayor <- numeros[1];
        
        Para i <- 2 Hasta 3 Con Paso 1 Hacer
            Si numeros[i] > mayor Entonces
                mayor <- numeros[i];
            FinSi
        FinPara
        
        Escribir "El mayor numero es: ", mayor;
    FinSi

FinAlgoritmo
