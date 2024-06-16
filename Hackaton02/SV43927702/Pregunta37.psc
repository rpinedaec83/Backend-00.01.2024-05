Proceso Pregunta37
	Definir a, b, resto Como Entero
    Escribir "Ingrese el primer número entero: "
    Leer a
    Escribir "Ingrese el segundo número entero: "
    Leer b
    Mientras b <> 0 Hacer
        resto = a MOD b
        a = b
        b = resto
    FinMientras
    Escribir "El máximo común divisor (MCD) de los números ", a, " y ", b, " es: ", a
	
FinProceso
