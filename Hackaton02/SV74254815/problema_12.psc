Proceso problema_12
	Escribir "HALLA EL NÚMERO MAYOR"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Ingrese los 2 números"
		Leer a, b
		si a == b Entonces
			Escribir "Los números ", a " y ", b " son iguales"
		SiNo
			si a > b  Entonces
				Escribir "El número mayor es: ", a
			SiNo
				Escribir "El número mayor es: ", b
				
			FinSi
		FinSi
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea ingresar otros números? 1 para SI, 2 para NO"
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
