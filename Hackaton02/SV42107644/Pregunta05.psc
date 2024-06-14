//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promocion de descuento para vender al mayor, 
//esta dependera del numero de zapatos que se compren. Si son mas de diez, se les dara un 10% de descuento sobre el total de la compra; 
//si el numero de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
//y si son mas de treinta zapatos se otorgara un 40% de descuento. El precio de cada zapato es de $80.

Proceso Pregunta05
	Definir cantidad_zapatos Como Entero
	precio_zapato = 80
	descuento = 0
	Escribir "Ingrese la cantidad de zapatos: "
	Leer cantidad_zapatos
	
	precio_sin_descuento = cantidad_zapatos * precio_zapato
	
	Si cantidad_zapatos > 10 Entonces
		Si cantidad_zapatos<=20 Entonces
			Escribir "Ud cuenta con descuento de 10%"
			descuento= 0.1
		SiNo
			Si cantidad_zapatos<=30 Entonces
				Escribir "Ud cuenta con descuento de 20%"
				descuento= 0.2
			SiNo
				Escribir "Ud cuenta con descuento de 40%"
				descuento= 0.4
			FinSi
		FinSi
		Escribir "Total sin descuento: ", precio_sin_descuento
		Escribir "Descuento: ", precio_sin_descuento * descuento
	SiNo
		Escribir "Ud no cuenta con descuento"
	FinSi
	
	total_venta = precio_sin_descuento - precio_sin_descuento*descuento
	Escribir "Total Venta: ",total_venta
FinProceso
