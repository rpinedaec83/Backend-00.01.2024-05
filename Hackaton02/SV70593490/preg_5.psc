Algoritmo preg_5

	Definir  numeroZapatos Como Entero;
	Definir  precioUnitario, totalCompra, descuento, totalConDescuento Como Real;
	precioUnitario <- 80;
	Escribir "Ingrese el numero de zapatos comprados: "
	leer numeroZapatos;
	totalCompra <- numeroZapatos * precioUnitario;

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