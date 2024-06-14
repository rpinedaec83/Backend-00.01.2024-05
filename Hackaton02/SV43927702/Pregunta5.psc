Proceso Pregunta5
	Definir cantidad_zapatos Como Entero
    Definir precio_zapato, total_compra, descuento, total_a_pagar Como Real
	
    // Inicialización de variables
    precio_zapato = 80
	
    // Solicitar al usuario que ingrese la cantidad de zapatos comprados
    Escribir "Ingrese la cantidad de zapatos comprados:"
    Leer cantidad_zapatos
	
    // Calcular el total de la compra sin descuento
    total_compra = cantidad_zapatos * precio_zapato
	
    // Determinar el descuento basado en la cantidad de zapatos comprados
    Si cantidad_zapatos > 30 Entonces
        descuento = 0.40
	Sino 
		si cantidad_zapatos > 20 Entonces
        descuento = 0.20
		Sino 
			si cantidad_zapatos > 10 Entonces
               descuento = 0.10
            Sino
				descuento = 0
			finsi
		finsi
    FinSi
	
    // Calcular el total a pagar aplicando el descuento
    total_a_pagar = total_compra * (1 - descuento)
	
    // Mostrar el total de la compra y el total a pagar con descuento
    Escribir "El total de la compra sin descuento es: $", total_compra
    Escribir "El total a pagar con descuento es: $", total_a_pagar
FinProceso
