// 23.Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Algoritmo pregunta22

    Definir numero, suma Como Entero;
    
    Escribir "Ingrese un numero para calcular la suma de los numeros impares menores o iguales a n:"
    Leer numero;

    suma <- 0;
    Para i <- numero Hasta 1 Con Paso -1 Hacer
         Si i mod 2 <> 0 Entonces
            suma <- suma + i;
        FinSi
    FinPara

    Escribir "La suma de los numeros impares menores o iguales a ", numero, " es: ", suma;

FinAlgoritmo
