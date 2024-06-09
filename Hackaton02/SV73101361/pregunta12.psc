// 12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.

Algoritmo pregunta12
    Definir num1, num2 Como Entero;

    Escribir "Ingrese el primer numero";
    Leer num1;
    
    Escribir "Ingrese el segundo numero";
    Leer num2;

    Si num1 > num2 Entonces
        Escribir "El numero ", num1, " es mayor que el numero ", num2;
    SiNo
        Si num2 > num1 Entonces
            Escribir "El numero ", num2, " es mayor que el numero ", num1;
        SiNo
            Escribir "Ambos numeros son iguales";
        FinSi
    FinSi

FinAlgoritmo
