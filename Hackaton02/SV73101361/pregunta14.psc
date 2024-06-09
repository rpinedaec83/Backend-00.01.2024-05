//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.


Algoritmo pregunta14

    Definir numero Como Entero;
    Definir esPrimo Como Logico;
    
    Escribir "Ingrese un numero entero positivo del 1 al 10:";
    Leer numero;
    
    Si numero < 1 o numero > 1000 Entonces
        Escribir "Numero fuera del rango permitido.";
    SiNo
        esPrimo <- Verdadero;
        Si numero = 1 Entonces
            esPrimo <- Falso;
        FinSi

        Si numero = 2 Entonces
            esPrimo <- Verdadero;
        SiNo
            Para i <- 2 Hasta numero-1 Con Paso 1 Hacer
                Si numero % i = 0 Entonces
                    esPrimo <- Falso;
                FinSi
            FinPara
        FinSi
        
        Si esPrimo Entonces
            Escribir "El numero ", numero, " es primo.";
        SiNo
            Escribir "El numero ", numero, " no es primo.";
        FinSi
    FinSi

FinAlgoritmo
