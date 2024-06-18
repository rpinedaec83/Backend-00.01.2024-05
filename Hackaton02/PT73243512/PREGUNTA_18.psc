Proceso PREGUNTA_18
	Escribir "Escriba la cantidad de CDs:"
    Leer cantidad
	
    Si cantidad <= 9 Entonces
        precio_u = 10
    Sino
        Si cantidad >= 10 y cantidad <= 99 Entonces
            precio_u = 8
        Sino
            Si cantidad >= 100 y cantidad <= 499 Entonces
                precio_u = 7
            Sino
                precio_u = 6
            FinSi
        FinSi
    FinSi
	
    total = cantidad * precio_u
    ganancia = total * 0.0825 
	
    Escribir "El precio total para el cliente es: " total
    Escribir "La ganancia para el vendedor es: " ganancia
FinProceso
