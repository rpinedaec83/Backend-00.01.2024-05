Proceso PREGUNTA_4
	Escribir "Ingrese el primer n�mero"
	Leer primer_numero
	
	Escribir "Ingrese el segundo n�mero"
	Leer segundo_numero
	
	Escribir "Ingrese el tercer n�mero"
	Leer tercer_numero
	
	Si tercer_numero > segundo_numero y segundo_numero > primer_numero Entonces
		Escribir "N�meros de menor a mayor:", primer_numero,",", segundo_numero,",", tercer_numero
	SiNo
		Si segundo_numero > tercer_numero y tercer_numero > primer_numero Entonces
			Escribir "N�meros de menor a mayor:", primer_numero,",", tercer_numero,",", segundo_numero
		SiNo
			Si tercer_numero > primer_numero y primer_numero > segundo_numero Entonces
				Escribir "N�meros de menor a mayor:", segundo_numero,",", primer_numero,",", tercer_numero
			SiNo
				Si primer_numero > tercer_numero y tercer_numero > segundo_numero Entonces
					Escribir "N�meros de menor a mayor:", segundo_numero,",", tercer_numero,",", primer_numero
				SiNo
					Si primer_numero > segundo_numero y segundo_numero > tercer_numero Entonces
						Escribir "N�meros de menor a mayor:", tercer_numero,",", segundo_numero,",", primer_numero
					SiNo
						Si segundo_numero > primer_numero y primer_numero > tercer_numero Entonces
							Escribir "N�meros de menor a mayor:", tercer_numero,",", primer_numero,",", segundo_numero
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinProceso
