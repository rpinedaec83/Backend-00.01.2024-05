Proceso Pregunta25

    Definir numero Como Entero
    Definir factorial Como Entero
    Definir contador Como Entero
    Escribir "Ingrese un número entero positivo: "
    Leer numero
    Si numero < 0 Entonces
        Escribir "El factorial no está definido para números negativos."
    Sino
        factorial = 1
        contador =1
        Mientras contador <= numero Hacer
            factorial = factorial * contador
            contador = contador + 1
        FinMientras
        Escribir "El factorial de ", numero, " es: ", factorial
    FinSi
FinProceso
