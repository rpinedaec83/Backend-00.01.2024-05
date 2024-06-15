Proceso Pregunta21
	Definir numero Como Entero
    Definir factorial Como Entero
    Escribir "Ingrese un número entero positivo: "
    Leer numero
    Si numero < 0 Entonces
        Escribir "El factorial no está definido para números negativos."
    Sino
        factorial = 1
        Para i desde 1 hasta numero Hacer
            factorial = factorial * i
        FinPara

        Escribir "El factorial de ", numero, " es: ", factorial
    FinSi
	
FinProceso
