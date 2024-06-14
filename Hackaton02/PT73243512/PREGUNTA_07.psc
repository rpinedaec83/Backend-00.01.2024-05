Proceso PREGUNTA_07
	Escribir "Escriba la membresía de cliente (A - B - C): "
    Leer Membresia
	
    Escribir "Escriba el precio del helado: "
    Leer Helado
	
	Si Menbresia = A Entonces
		descuento = Helado * 0.10
		Si Menbresia = B Entonces
			descuneto = Helado * 0.15
			Si Menbresia = C Entonces
				descuento = Helado * 0.20
			FinSi
		FinSi
	FinSi
	precio = Helado - descuento
	Escribir "El precio final con descuento es: ", precio
    
FinProceso
