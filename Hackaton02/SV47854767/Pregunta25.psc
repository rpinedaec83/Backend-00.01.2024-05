//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Proceso Pregunta25
	Definir numero, factorial, i Como Entero
	Escribir "Ingrese un número entero para calcular su factorial:"
    Leer numero
	
    Si numero < 0 Entonces
        Escribir "Error: El número debe ser positivo."
    Sino
 
	factorial = 1
        i = 1
		
        Repetir
            factorial = factorial * i
            i = i + 1
		Hasta Que  (i > numero)
			
		Escribir "El factorial de ", numero, " es: ", factorial
	FinSi
FinProceso
