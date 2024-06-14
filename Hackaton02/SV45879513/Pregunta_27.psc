//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
Proceso P27

    Definir numero Como Entero
    Definir factorial Como Entero
	Definir  contador Como Entero
	
    Escribir "Ingrese un número para calcular su factorial:"
    Leer numero
    
    factorial = 1
    contador = 1
    
    Mientras contador <= numero Hacer
        factorial = factorial * contador
        contador = contador + 1
    FinMientras
    
    Escribir "El factorial de ", numero, " es ", factorial
FinProceso
