Proceso Preg_21
    Definir factorial, numero Como Entero
    
    Escribir "Ingrese un número:"
    Leer numero
    
    Si numero >= 0 Entonces
        factorial = 1
        

        Repetir
            factorial = factorial * numero
            numero = numero - 1
        Hasta Que numero <= 1
        
        Escribir "El factorial es:", factorial;
    SiNo
        Escribir "El número debe ser positivo para calcular su factorial."
    FinSi
FinProceso
