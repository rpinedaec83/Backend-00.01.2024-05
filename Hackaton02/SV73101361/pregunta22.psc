// 22.Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

Algoritmo pregunta22

    Definir numero, suma Como Entero;
    
    Escribir "Ingrese un numero para calcular la suma de los n primeros numeros"
    Leer numero;

    suma <- 0;
    Para i <- numero Hasta 1 Con Paso -1 Hacer
        suma <- suma + i;
    FinPara

    Escribir "La suma de los ", numero, " primeros numeros es: ", suma;

FinAlgoritmo
