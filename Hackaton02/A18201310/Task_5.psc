Proceso Task_5
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	
	Mientras bandera Hacer
		//Ingresamos la cantidad de zapatos que queremos
		Escribir "Ingrese la cantidad de zapatos que desea comprar: "
		Leer cantidadZapato
		//Calculamos el precio total de los zapatos, cada zapato esta 80
		precioTotal = cantidadZapato * 80
		descuento = 0
		
		//Evaluamos los casos
		Si cantidadZapato > 30 Entonces
			descuento = precioTotal * 0.40
		SiNo
			Si	cantidadZapato >= 20 Entonces
				descuento = precioTotal * 0.20
			SiNo
				Si	cantidadZapato > 10 Entonces
					descuento = precioTotal * 0.10
				FinSi
			FinSi
		FinSi
		
		//Mostramos por pantalla el descuento, precio total y precio con descuento
		Escribir "La cantidad: ", cantidadZapato, " ,tiene un precio de: ", precioTotal
		Escribir "El descuento de dicha cantidad es: ", descuento
		Escribir "El precio con descuento es: ", precioTotal - descuento
		
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
