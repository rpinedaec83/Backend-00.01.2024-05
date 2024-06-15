//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso DeterminarSiEsVocal
    Definir letra Como Caracter
    
    // Leer la letra del usuario
    Escribir "Ingrese una letra:"
    Leer letra
    
    // Convertir la letra a minúscula para simplificar la comparación
    letra = Minusc(letra)
    
    // Determinar si la letra es una vocal
    Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
        Escribir "La letra es una vocal."
    Sino
        Escribir "La letra no es una vocal."
    FinSi
FinProceso