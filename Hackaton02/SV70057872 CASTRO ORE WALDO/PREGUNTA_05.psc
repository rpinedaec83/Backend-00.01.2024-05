Proceso PREGUNTA_05
	//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoci�n de descuento para vender al mayor, 
	//esta depender� del n�mero de zapatos que se compren. Si son m�s de diez, se les dar� un 10% de descuento sobre el 
	//total de la compra; si el n�mero de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
	//y si son m�s treinta zapatos se otorgar� un 40% de descuento. El precio de cada zapato es de $80.
	Definir ventapormayor  Como Entero
	Definir precioUnitario, totalCompra, descuento, totalConDescuento Como Real
	
	precioUnitario<-80
	Escribir "Ingrese la cantidad de zapatos"
	Leer ventapormayor
	
	Si ventapormayor>10 Entonces
		totalCompra<-ventapormayor*precioUnitario
		totalConDescuento<-totalCompra-totalCompra*0.10
		Escribir totalCompra, " ",totalConDescuento
	SiNo
		Escribir totalCompra
	Fin Si
	
	Si ventapormayor>20 y ventapormayor<30 Entonces
		totalCompra<-ventapormayor*precioUnitario
		totalConDescuento<-totalCompra-totalCompra*0.20
		Escribir totalCompra, " ",totalConDescuento
	SiNo
		Escribir totalCompra
	Fin Si
	
	Si ventapormayor>30  Entonces
		totalCompra<-ventapormayor*precioUnitario
		totalConDescuento<-totalCompra-totalCompra*0.40
		Escribir totalCompra, " ",totalConDescuento
	SiNo
		Escribir totalCompra
	Fin Si
FinProceso
