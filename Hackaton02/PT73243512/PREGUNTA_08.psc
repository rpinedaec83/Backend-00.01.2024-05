Proceso PREGUNTA_08
	Escribir "Escriba la primera nota:"
    Leer primera_nota
	
    Escribir "Escriba la segunda nota:"
    Leer segunda_nota
	
    Escribir "Escriba la tercera nota:"
    Leer tercera_nota
	
    promedio = (primera_nota + segunda_nota + tercera_nota) / 3
	
    Escribir "El promedio es:", promedio
	
    Si promedio >= 12 Entonces
        Escribir "El estudiante aprobó con " 
    Sino
        Escribir "El estudiante no aprobó "
    FinSi
FinProceso
