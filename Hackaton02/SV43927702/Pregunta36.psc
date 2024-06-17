Proceso Pregunta36
    Definir n, i Como Entero
    Definir termino_actual, termino_anterior, termino_anterior_anterior Como Entero
    Escribir "Ingrese el número de términos de la serie de Fibonacci a generar: "
    Leer n
    termino_anterior_anterior = 0
    termino_anterior = 1
    Escribir "Los primeros dos términos de la serie de Fibonacci son: "
    Escribir termino_anterior_anterior
    Escribir termino_anterior
    Para i = 3 Hasta n Con Paso 1 Hacer
        termino_actual = termino_anterior + termino_anterior_anterior
        Escribir termino_actual
        termino_anterior_anterior = termino_anterior
        termino_anterior = termino_actual
    FinPara
	
FinProceso
