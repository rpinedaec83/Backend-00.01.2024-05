Proceso Pregunta38
	Definir numero, sumaDivisores Como Entero
    Definir divisor Como Real
    Escribir "Ingrese un número entero positivo: "
    Leer numero
    sumaDivisores = 0
    Para divisor =1 Hasta numero/2 Con Paso 1 Hacer
        Si numero MOD divisor = 0 Entonces
            sumaDivisores <- sumaDivisores + divisor
        FinSi
    FinPara
    Si sumaDivisores = numero Entonces
        Escribir "El número ", numero, " es un número perfecto."
    Sino
        Escribir "El número ", numero, " no es un número perfecto."
    FinSi
	
FinProceso
