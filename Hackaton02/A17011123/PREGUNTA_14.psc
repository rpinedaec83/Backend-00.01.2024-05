Proceso PREGUNTA_14
	Definir numero Como Entero
    Escribir "Ingrese un número entero del 1 al 10: "
    Leer numero
    
    // Verificar si el número está en el rango permitido
    Si numero < 1 O numero > 10 Entonces
        Escribir "Número fuera de rango. Por favor, ingrese un número del 1 al 10."
    Sino
        // Verificar si el número es primo
        Si numero = 2 O numero = 3 O numero = 5 O numero = 7 Entonces
            Escribir "El número ", numero, " es primo."
        Sino
            Escribir "El número ", numero, " no es primo."
        FinSi
    FinSi
FinProceso
