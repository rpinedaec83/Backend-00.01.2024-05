Algoritmo Pregunta5
	Escribir "Ingrese el numero de zapatos comprados"
	Definir numZ Como Entero
	Leer numZ
	compra=80*numZ
	Si numZ>30 Entonces
		des=0.4*compra
	SiNo
		Si numZ>20 Entonces
			des=0.2*compra
		SiNo
			Si numZ>10 Entonces
				des=0.1*compra
			SiNo
				Escribir "Usted no aplica al descuento al por mayor"
			Fin Si
		Fin Si
	Fin Si
	PagoTotal = compra - des
    Escribir "Su total a pagar es: ", PagoTotal
FinAlgoritmo

