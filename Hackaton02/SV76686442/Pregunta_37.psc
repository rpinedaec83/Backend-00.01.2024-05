Algoritmo Pregunta_37
    Definir a, b, residuo, numero1, numero2 Como Entero
	
    Escribir "Ingrese el primer número: "
    Leer numero1
    Escribir "Ingrese el segundo número: "
    Leer numero2
    
    a <- numero1
    b <- numero2
	
    Mientras b <> 0 Hacer
        residuo <- a % b
        a <- b
        b <- residuo
    FinMientras
	
    Escribir "El máximo común divisor (MCD) de ", numero1, " y ", numero2, " es: ", a
FinAlgoritmo


