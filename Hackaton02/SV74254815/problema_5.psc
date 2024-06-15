Proceso problema_5
	Escribir "PROMOCIÓN DE DESCUENTOS"
	Escribir "Descuentos disponibles:"
	Escribir "Mas de 30 zapatos: 40% de descuento"
	Escribir "Mas de 20 zapatos: 20% de descuento"
	Escribir "Mas de 10 zapatos: 10% de descuento"
	continuar = Verdadero
	
	
	Mientras continuar = Verdadero Hacer
		Escribir "Cuantos zapatos desea comprar"
		leer numzapatos
		precioT = numzapatos * 80
		si numzapatos > 30 Entonces
			descuento = precioT * 0.4
			precioT = precioT - descuento 
			Escribir "Se aplicó un descuento del 40%"
			Escribir "El precio total a pagar con el descuento aplicado es de:"
			Escribir "$", precioT
		SiNo
			si numzapatos > 20 Entonces
				descuento = precioT * 0.2
				precioT = precioT - descuento 
				Escribir "Se aplicó un descuento del 20%"
				Escribir "El precio total a pagar con el descuento aplicado es de:"
				Escribir "$", precioT
			SiNo
				si  numzapatos > 10 Entonces
					descuento = precioT * 0.1
					precioT = precioT - descuento 
					Escribir "Se aplicó un descuento del 10%"
					Escribir "El precio total a pagar con el descuento aplicado es de:"
					Escribir "$", precioT
				SiNo
					descuento = 0
					precioT = precioT - descuento 
					Escribir "No se aplico ningún descuento"
					Escribir "El precio total es de:"
					Escribir "$", precioT
				FinSi
			FinSi
		FinSi
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea realizar otra compra? 1 para SI, 2 para NO"
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
