Proceso Pregunta_18
	Definir numCds Como Entero
	Escribir "Ingrese el número de CDs: "
	leer numCds
	
	Si numCds>=500 Entonces
		PrecioTC=6*numCds		
	SiNo
		Si numCds>=100 y numCds<=499 Entonces
			PrecioTC=7*numCds
		SiNo
			Si numCds>=10 y numCds<=99 Entonces
				PrecioTC=8*numCds
			SiNo
				Si numCds<=9 Entonces
					PrecioTC=10*numCds
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	ganancia<-0.0825*PrecioTC
	Escribir "El precio Total para el cliente es: $",PrecioTC," y la ganancia del vendedor es : $",ganancia
	
FinProceso
