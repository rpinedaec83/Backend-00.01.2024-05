Proceso PREGUNTA_35
    mayor = 0
    menor = 0
    
    Para i = 1 Hasta 20 Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numero
        
        Si i = 1 Entonces
            mayor = numero
            menor = numero
        Sino
            Si numero > mayor Entonces
                mayor = numero
            FinSi
            Si numero < menor Entonces
                menor = numero
            FinSi
        FinSi
    FinPara
    
    Escribir "El numero mayor es ", mayor
    Escribir "El numero menor es ", menor
FinProceso
