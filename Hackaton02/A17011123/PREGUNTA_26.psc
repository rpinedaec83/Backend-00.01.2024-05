Proceso PREGUNTA_26
    Escribir "Dividendo:"
    Leer dividendo
    Escribir "Divisor:"
    Leer divisor
	
    cociente =0
    resto = dividendo
	
    Mientras resto >= divisor Hacer
        resto = resto - divisor
        cociente = cociente + 1
    FinMientras
	
    Escribir "El cociente es: ", cociente, " y el resto es: ", resto
FinProceso
