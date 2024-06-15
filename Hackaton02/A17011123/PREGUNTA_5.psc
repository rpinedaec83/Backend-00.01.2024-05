Proceso PREGUNTA_5
	definir cantidad como Entero
	Escribir  "Ingrese cantidad de zapatos"
	Leer cantidad
	
	previo=cantidad*80
	descuento=0
	Si cantidad>=10 y cantidad<20 Entonces
		descuento=previo*0.1
	Fin Si
	Si cantidad>=20 y cantidad<30 Entonces
		descuento=previo*0.2
	Fin Si
	Si cantidad>=30 Entonces
		descuento=previo*0.4
	Fin Si
	
	final=previo-descuento
	
	Escribir final
FinProceso
