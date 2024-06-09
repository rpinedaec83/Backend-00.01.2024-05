// 5.Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Algoritmo tiendaZapatos

	//declaracion de variables
	Definir  numeroZapatos Como Entero;
	Definir  precioUnitario, totalCompra, descuento, totalConDescuento Como Real;
	precioUnitario <- 80;
	Escribir "Ingrese el numero de zapatos comprados: "
	leer numeroZapatos;
	totalCompra <- numeroZapatos * precioUnitario;
	// logica de negocio
	si numeroZapatos > 30 entonces
		descuento <- 0.40;
	SiNo
		si numeroZapatos >20  Entonces
			descuento <- 0.20
		SiNo
			si numeroZapatos >10 Entonces
				descuento <-0.10
			SiNo
				descuento<-0.0
			FinSi
		FinSi
	FinSi
	totalConDescuento <- totalCompra -(totalCompra* descuento);
	Escribir  "total de la compra sin descuento: $",totalCompra;
	Escribir "descuento aplicado:",descuento *100,"%";
	Escribir  "Total a pagar con descuento:$ ", totalConDescuento

FinAlgoritmo
 