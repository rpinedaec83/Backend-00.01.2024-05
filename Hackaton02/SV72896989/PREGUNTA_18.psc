Proceso PREGUNTA_18
	Escribir "Ingrese la cantidad de CDs a vender"
	Leer cantidad
	
	Si cantidad >= 500 Entonces
		precio_unitario = 6
	SiNo
		Si cantidad >= 100 Y cantidad <= 499 Entonces
			precio_unitario = 7
		SiNo
			Si cantidad >= 10 Y cantidad <= 99 Entonces
				precio_unitario = 8
			Sino
				precio_unitario = 10
			FinSi
		FinSi
	FinSi	
	
	precio_total_cliente = cantidad * precio_unitario
	ganancia_vendedor = precio_total_cliente * 0.0825
	
	Escribir "El precio total para el cliente es $", precio_total_cliente
	Escribir "La ganancia para el vendedor es $", ganancia_vendedor
	
FinProceso
