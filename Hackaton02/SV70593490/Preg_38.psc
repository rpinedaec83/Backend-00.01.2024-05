Proceso Preg_38
    
    Definir num, sumaDivisores Como Entero
    
    Escribir "Ingrese un número:"
    Leer num
    
    sumaDivisores <- 0
    
    Para divisor = 1 Hasta num - 1 Con Paso 1 Hacer
		
        Si num % divisor = 0 Entonces
            sumaDivisores <- sumaDivisores + divisor
        FinSi
    FinPara
    
    Si sumaDivisores = num Entonces
        Escribir "El número ", num, " es un número perfecto."
    Sino
        Escribir "El número ", num, " no es un número perfecto."
    FinSi
    
FinProceso
