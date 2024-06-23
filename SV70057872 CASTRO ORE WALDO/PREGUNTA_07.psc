Proceso PREGUNTA_07
	//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía 
	//dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
	Definir cliente Como Caracter
	
	Escribir "Ingrese el tipo de membresia: A, B, C"
	Leer cliente
	
	Si cliente="A" o cliente="a"  Entonces
		Escribir "10 % de descuento a su compra"
	SiNo
		Si cliente="B" o cliente="b"  Entonces
			Escribir "15 % de descuento a su compra"
		SiNo
			Si cliente="C" o cliente="c" Entonces
				Escribir "20 % de descuento a su compra"
			
			Fin Si
		Fin Si
	Fin Si
FinProceso
