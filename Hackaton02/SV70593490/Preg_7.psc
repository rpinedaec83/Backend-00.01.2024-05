Proceso Preg_7
	
	Definir TipoMembresia Como caracter
	
	Definir Compra, Descuento Como Real
	
	
	Escribir "Ingresa el tipo de membresía (A, B, C)"
	leer TipoMembresia
	
	Escribir "Ingresa el tipo de monto"
	leer Compra
	
	Descuento=0
	
	Si TipoMembresia = "A" Entonces
		Descuento = 0.10
	SiNo
		Si TipoMembresia = "B" Entonces
			Descuento = 0.15
		SiNo
			Si TipoMembresia = "C" Entonces
				Descuento = 0.20
			FinSi
		FinSi
	FinSi
	
	calcular = Compra - (Compra * Descuento)
	
	Escribir "Su descuento seria de: ",calcular;
	
FinProceso
