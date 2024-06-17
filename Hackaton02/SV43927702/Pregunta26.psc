Proceso Pregunta26
    Definir dividendo Como Entero
    Definir divisor Como Entero
    Definir cociente Como Entero
    Definir resto Como Entero
    Escribir "Ingrese el dividendo: "
    Leer dividendo
    Escribir "Ingrese el divisor: "
    Leer divisor
    Si divisor = 0 Entonces
        Escribir "La división por cero no está definida."
    Sino
        cociente = 0
        resto = dividendo
        Mientras resto >= divisor Hacer
            resto = resto - divisor
            cociente = cociente + 1
        FinMientras
        Escribir "El cociente es: ", cociente
        Escribir "El resto es: ", resto
    FinSi
	
FinProceso
