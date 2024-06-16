Proceso Task_7
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, 
		//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:	
		//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
		
		//Pedimos al cliente que nos brinde el tipo de membresia que tiene
		Escribir "Ingrese su tipo de membresia: A, B, C"
		Leer membresia
		
		Si membresia == "A" Entonces
			Escribir "Su tipo de membresia tiene un descuento del 10%"
		SiNo
			Si membresia == "B" Entonces
				Escribir "Su tipo de membresia tiene un descuento del 15%"
			SiNo
				Si membresia == "C" Entonces
					Escribir "Su tipo de membresia tiene un descuento del 20%"
				SiNo
					Escribir "Tipo de membresia incorrecta"
				FinSi
			FinSi
		FinSi
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
