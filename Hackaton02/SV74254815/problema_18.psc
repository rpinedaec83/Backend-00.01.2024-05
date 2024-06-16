Proceso problema_18
	Escribir "VENTA Y DISTRIBUCIÓN DE CD"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Repetir
			Escribir "Ingrese la cantidad de CD que se compraran"
			leer numCD
		Hasta Que numCD > 0
		
		
		precio = 0
		si numCD > 500 Entonces
			precio = 6
		SiNo
			si numCD >= 100 y numCD <= 499 Entonces
				precio = 7
			SiNo
				si numCD >= 10 y numCD <= 99 Entonces
					precio = 8
				SiNo
					precio = 10
				FinSi
			FinSi
		FinSi
		precio_total = numCD * precio
		ganVen = precio_total * 0.0825
		Escribir "El precio total de la venta es de: $", precio_total
		Escribir "La ganancia para el vendedor es de : $", ganVen
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea ingresar otra venta? 1 para SI, 2 para NO"
			Leer respuesta
			si respuesta == 1 Entonces
				continuar = Verdadero
				continuar2 = Falso
			SiNo
				si respuesta == 2 Entonces
					continuar = Falso
					continuar2 = Falso
				SiNo
					Escribir "Opción erronea, intentelo de nuevo"
				FinSi
			FinSi
		FinMientras
	FinMientras
	
FinProceso
