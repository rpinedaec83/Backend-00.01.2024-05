Proceso Pregunta7
    Definir tipoMembresia Como Caracter
    Definir totalCompra Como Real
    Definir descuento Como Real
    Definir totalPagar Como Real
    Escribir "Ingrese el tipo de membresía (A, B, C): "
    Leer tipoMembresia

    Escribir "Ingrese el total de la compra: "
    Leer totalCompra

    Si tipoMembresia = "A" Entonces
        descuento = 0.10
    Sino 
		Si tipoMembresia = "B" Entonces
			descuento = 0.15
		Sino
			Si tipoMembresia = "C" Entonces
				descuento = 0.20
			Sino
				descuento = 0
				Escribir "Tipo de membresía no válida. No se aplicará descuento."
			FinSi
			finsi
			FinSi
			
			// Calcular el total a pagar después del descuento
			totalPagar <- totalCompra - (totalCompra * descuento)
			
			// Mostrar el descuento aplicado y el total a pagar
			Escribir "Descuento aplicado: $", totalCompra * descuento
			Escribir "Total a pagar: $", totalPagar
	
FinProceso
