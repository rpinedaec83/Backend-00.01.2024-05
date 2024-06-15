//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
//esto dependerá del número de zapatos que se comprenda. Si son más de diez, 
//se les dará un 10% de descuento sobre el total de la compra; 
//si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
//y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Proceso P5
	Definir valor1 Como Entero
	Definir valor2 Como Entero
	Definir valor3 Como Entero
	Definir valorR1 Como Entero
	Definir valorR2 Como Entero
	Definir valorR3 Como Entero	
	

	Escribir "Ingresar un numero"
	Leer valor1
	Leer valor2
	Leer valor3
	
	Si valor1>valor2 Entonces
		Si valor1>valor3 Entonces
			Si valor2>valor3 Entonces
				valorR1 = valor1
				valorR2 = valor2
				valorR3 = valor3
			SiNo
				valorR1 = valor1
				valorR2 = valor3
				valorR3 = valor2
			Fin Si
		SiNo
			valorR1 = valor3
			valorR2 = valor1
			valorR3 = valor2
		Fin Si
	SiNo
		Si valor2>valor3 Entonces
			Si valor1>valor3 Entonces
				valorR1 = valor2
				valorR2 = valor1
				valorR3 = valor3
			SiNo
				valorR1 = valor2
				valorR2 = valor3
				valorR3 = valor1
			Fin Si
		SiNo
			valorR1 = valor3
			valorR2 = valor2
			valorR3 = valor1
		Fin Si
	Fin Si
	
	escribir "1er" i valorR1
	escribir "2do" i valorR2
	escribir "3ero" i valorR3
FinProceso
