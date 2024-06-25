Proceso PREGUNTA_18
	
//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	Definir venta Como Real
	escribir "Cuantos cd va comprar.?"
	leer venta
	
	Si venta<=9 Entonces
		precio=venta*10
	SiNo
		si venta>=10 y venta<=99 Entonces
			precio=venta*8
		SiNo
			si venta>=100 y venta<=499 Entonces
				precio=venta*7
			sino
				si 500<=venta Entonces
					precio=venta*6
				FinSi
			FinSi
		FinSi
	FinSi
	
	ganancia<-venta*0.0825
	Escribir precio," ",ganancia
FinProceso
