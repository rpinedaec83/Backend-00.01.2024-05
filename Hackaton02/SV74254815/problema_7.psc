Proceso problema_7
	
	Escribir "DESCUENTO POR TIPO DE MEMBRESÍA"
	
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Ingrese el total de la compra"
		Leer compra
		Escribir "¿El cliente tiene membresía? 1 para SI, 2 para NO"
		Leer membresia
		Segun membresia Hacer
			1:
				Escribir "Ingrese el tipo de membresía: A, B, C"
				Leer tipo
				Segun tipo Hacer
					"A":
						descuento = compra * 0.1
					"B":
						descuento = compra * 0.15
					"C":
						descuento = compra * 0.2
					De Otro Modo:
						descuento = 0
				Fin Segun
				precio_total = compra - descuento
				Escribir "El monto total a pagar es de:"
				Escribir "$", precio_total
			2:
				descuento = 0
				precio_total = compra - descuento
				Escribir "El monto total a pagar es de:"
				Escribir "$", precio_total
		Fin Segun
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea ingresar otra compra? 1 para SI, 2 para NO"
			Leer respuesta
			si respuesta == 1 Entonces
				continuar = Verdadero
				continuar2 = Falso
			SiNo
				si respuesta == 2 Entonces
					continuar = Falso
					continuar2 = Falso
				SiNo
					Escribir "Opción erronea, intentelo de nuevo"
				FinSi
			FinSi
		FinMientras
	FinMientras
	
	
FinProceso
