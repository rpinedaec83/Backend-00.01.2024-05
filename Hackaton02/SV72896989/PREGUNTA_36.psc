Proceso PREGUNTA_36
    Escribir "Ingrese el numero de terminos de la serie de Fibonacci que desea calcular:"
    Leer limite
    
    termino_anterior = 0
    termino_actual = 1
    
    Escribir "Serie de Fibonacci hasta el termino ", limite, ":"
    Escribir termino_anterior
    
    Si limite > 1 Entonces
        Escribir termino_actual
        
        Para i = 3 Hasta limite Hacer
            siguiente_termino = termino_anterior + termino_actual
            Escribir siguiente_termino
            termino_anterior = termino_actual
            termino_actual = siguiente_termino
        FinPara
    FinSi
FinProceso
