//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
Proceso Pregunta_26
	Definir dividendo, divisor, cociente, resto como Entero
	Escribir "Ingrese el dividendo:"
    Leer dividendo
    Escribir "Ingrese el divisor:"
    Leer divisor
	
	cociente <- 0
    resto <- dividendo
    Mientras resto >= divisor Hacer
        resto <- resto - divisor
        cociente <- cociente + 1
    FinMientras
	
	Escribir "El cociente de la división es:", cociente
    Escribir "El resto de la división es:", resto
FinProceso
