//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
//esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
//si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
//y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Proceso Pregunta5
	Definir numZapato Como Entero
	Definir precioUnitario, totalCompra, dcto, totalConDcto Como Real
	
	precioUnitario <- 80
	
	Escribir "Ingrese el numerp de zapatos comprados: "
	Leer numZapato
	
	totalCompra <- numZapato * precioUnitario
	
	Si numZapato > 30 Entonces
		dcto <- 0.40
	SiNo
		Si numZapato > 20 Entonces
			dcto <- 0.20
		SiNo
			Si numZapato > 10 Entonces
				dcto <- 0.10
			SiNo
				dcto <- 0.00
			FinSi
		FinSi
	FinSi
	
	totalConDcto <- totalCompra - (totalCompra*dcto)
	
	Escribir "Total de la compra sin descuento: $", totalCompra;
	Escribir "Descuento aplicado:", dcto*100, "%"
	Escribir "Total a pagar con descuento: $", totalConDcto
		
FinProceso
