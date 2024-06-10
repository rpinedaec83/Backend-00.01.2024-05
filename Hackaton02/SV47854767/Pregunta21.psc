//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Proceso Pregunta21
	Definir num, i, factorial Como Entero
	
    Escribir "Ingrese un numero para calcular su factorial:"
    Leer num
	
    Si num < 0 Entonces
        Escribir "Error: No se puede factoriar el numero."
    Sino
        factorial = 1
        
        Para i = 1 Hasta num Hacer
            factorial = factorial * i
        FinPara
		
        Escribir "El factorial de ", num, " es: ", factorial
    FinSi
	
FinProceso
