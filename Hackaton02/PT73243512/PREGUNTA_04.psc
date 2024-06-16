Proceso PREGUNTA_04
	Escribir "Escriba el Primer numero:"
	Leer primer_numero
	Escribir "Escriba el Segundo numero:"
	Leer segundo_numero
	Escribir "Escriba el tercer numero:"
	Leer tercer_numero
	
	Si primer_numero <= segundo_numero y primer_numero <= tercer_numero Entonces
		n1 = primer_numero
		Si segundo_numero <= tercer_numero Entonces
            n2 = segundo_numero
            n3 = tercer_numero
        Sino
            n2 = tercer_numero
            n3 = segundo_numero
        FinSi
	FinSi	
    Si  segundo_numero <= primer_numero y  segundo_numero <= tercer_numero Entonces
        n1 = segundo_numero
        Si primer_numero <= tercer_numero Entonces
            n2 = primer_numero
			n3 = tercer_numero
        Sino
            n2 = tercer_numero
            n3 = primer_numero
        FinSi
    FinSi
	Si tercer_numero <= primer_numero y tercer_numero <= segundo_numero Entonces
        n1 = tercer_numero
        Si primer_numero <= segundo_numero Entonces
            n2 = primer_numero
            n3 = segundo_numero
        Sino
            n2 = segundo_numero
            n3 = primer_numero
        FinSi
	
	FinSi
	Escribir "El numero menor es: ", n1, ", el numero que le sigue es: ", n2, " y el numero mayor es:", n3
	
FinProceso
