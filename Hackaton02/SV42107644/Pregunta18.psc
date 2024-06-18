//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribucion de CD virgenes. 
//Los clientes pueden adquirir los articulos (supongamos un unico producto de una unica marca) por cantidad. Los precios son:
//	$10. Si se compran unidades separadas hasta 9.
//	$8. Si se compran entre 10 unidades hasta 99.
//	$7. Entre 100 y 499 unidades.
//	$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. 
//Realizar un algoritmo en Pseint que dado un numero de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso Pregunta18
	Definir cantidad Como Entero
	Definir precio_unitario, precio_total, comision, comision_vendedor Como Real
	comision = 0.0825
	
	bandera = Verdadero
	Mientras bandera Hacer
		Escribir "Ingrese la cantidad de productos"
		Leer cantidad
		
		Si cantidad >=0 Entonces
			Si cantidad <= 9 Entonces
				precio_unitario = 10
			Sino
				Si cantidad <= 99 Entonces
					precio_unitario = 8
				Sino
					Si cantidad <= 499 Entonces
						precio_unitario = 7
					Sino
						precio_unitario = 6
					FinSi
				FinSi
			FinSi
			
			precio_total = cantidad * precio_unitario
			comision_vendedor = precio_total * comision
			
			Escribir "El precio total es: $", precio_total
			Escribir "La ganancia del vendedor es: $", comision_vendedor
		SiNo
			Escribir "Ingrese una cantidad valida"
		FinSi
		
		valida = Falso
		Mientras NO valida Hacer
			Escribir "Desea realizar otra operacion: Presione S para si o N para no"
			Leer continuar
			Segun continuar Hacer
				"S","N":
					valida = Verdadero
				De Otro Modo:
					Escribir "Ingrese una opcion valida"
			Fin Segun
		FinMientras
		Si continuar == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
