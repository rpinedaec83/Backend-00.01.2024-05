Proceso PREGUNTA_11
	
	Escribir "Escribe el primer numero:"
	Leer primer_numero
	Escribir "Escribe el segundo numero:"
	Leer segundo_numero
	Escribir "Escribie el tercer numero:"
	Leer tercer_numero
	Si primer_numero >= segundo_numero y primer_numero >= tercer_numero Entonces
        n1 = primer_numero
    Sino
        Si segundo_numero >= primer_numero y segundo_numero >= tercer_numero Entonces
            n1 = segundo_numero
        Sino
            n1 = tercer_numero
        FinSi
    FinSi
    Escribir "El mayor numero es:", n1
	FinProceso
