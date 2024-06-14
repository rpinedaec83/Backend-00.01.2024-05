//Hacer un algoritmo en Pseint para una tienda de helado que da un 
//descuento por compra a sus clientes con membresía dependiendo de su tipo, 
//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
			Proceso P7
				Definir monto Como Entero
				Definir tipo Como caracter
				Definir Pago Como Entero
				Definir total Como Entero
				Definir descuento Como Entero
				Definir totalapagar Como Entero
				
				
				
				Escribir "Ingresar un Tipo de cliente A, B, C"
				Leer tipo
				
				Escribir "Ingresar Monto"
				Leer monto

				
				Si tipo = "A" Entonces
					descuento = monto*0.1
				SiNo
					Si tipo = "B" Entonces
						descuento = monto*0.15
					SiNo
						descuento = monto*0.2
					Fin Si
				Fin Si
	
				
				totalapagar = monto - descuento
				escribir "Total" i monto
				escribir "Descuento" i descuento
				escribir "Total a Pagar" i totalapagar
FinProceso
