Proceso PREGUNTA_22
	Escribir "Escribir el valor de n:"
    Leer n
	
    Si n <= 0 Entonces
        Escribir "El valor de n debe ser mayor que cero."
    Sino
        suma = (n * (n + 1)) / 2
        Escribir "La suma de los primeros ", n, " numeros es: ", suma
    FinSi
FinProceso
