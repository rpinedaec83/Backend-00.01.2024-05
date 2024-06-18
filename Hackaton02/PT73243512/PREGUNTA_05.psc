Proceso PREGUNTA_05
	
	Zapato = 80
	
    Escribir "Escriba la cantidad de zapatos: "
    Leer cantidad
	
    precio = cantidad * Zapato
	
    Si cantidad > 30 Entonces
        descuento = precio * 0.40
    Sino
        Si cantidad > 20 Entonces
            descuento = precio * 0.20
        Sino
            Si cantidad > 10 Entonces
                descuento = precio * 0.10
            Sino
                descuento = 0
            FinSi
        FinSi
    FinSi
	
    Escribir "Cantidad de zapatos: ", cantidad
    Escribir "Total sin descuento: ", precio
    Escribir "Total con descuento : ", descuento
	
FinAlgoritmo
