//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresia dependiendo de su tipo, 
//solo existen tres tipos de membresia, tipo A, tipo B y tipo C. 
//Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

Proceso Pregunta07
	descuento = 0
	Escribir "Ingrese su tipo de membresia"
	Leer membresia
	
	Segun membresia Hacer
		"a", "A":
			descuento = 0.1
		"b", "B":
			descuento = 0.15
		"c", "C":
			descuento = 0.2
		De Otro Modo:
			Escribir "La membresia ingresada no es valida"
	Fin Segun
	
	Si descuento > 0 entonces
		Escribir "Le corresponde un descuento de ", descuento * 100, "%"
	Sino
		Escribir "Ud no cuenta con descuento"
	FinSi
	
FinProceso
