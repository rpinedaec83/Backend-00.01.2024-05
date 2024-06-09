Algoritmo pregunta14

    Definir numero Como Entero;
    Definir esPrimo Como Logico;
    
    Escribir "Ingrese un número entero positivo del 1 al 10:";
    Leer numero;
    
    Si numero < 1 o numero > 10 Entonces
        Escribir "Número fuera del rango permitido.";
    SiNo
        esPrimo <- Verdadero;
        Si numero = 1 Entonces
            esPrimo <- Falso;
        FinSi

        Si numero = 2 Entonces
            esPrimo <- Verdadero;
        SiNo
            Para i <- 2 Hasta numero - 1 Con Paso 1 Hacer
                Si numero % i = 0 Entonces
                    esPrimo <- Falso;
                    Salir Para;  // Salir del bucle ya que se encontró un divisor
                FinSi
            FinPara
        FinSi
        
        Si esPrimo Entonces
            Escribir "El número ", numero, " es primo.";
        SiNo
            Escribir "El número ", numero, " no es primo.";
        FinSi
    FinSi

FinAlgoritmo
