Proceso PREGUNTA_7
	Escribir "Ingrese el tipo de membres�a (A, B o C)"
	Leer membresia
	
	Escribir "Ingrese el monto en d�lares a pagar"
	Leer monto
	
	Si membresia = "A" O membresia = "a" Entonces
		descuento = 0.1
	SiNo
		Si membresia = "B" O membresia = "b" Entonces
			descuento = 0.15
		SiNo
			Si membresia = "C" O membresia = "c" Entonces
				descuento = 0.2
			FinSi
		FinSi
	FinSi
	
	total_a_pagar = monto * (1 - descuento)
	Escribir "Tienes un descuento de ", descuento * 100,"% Solo tendr�s que pagar $", total_a_pagar
FinProceso
