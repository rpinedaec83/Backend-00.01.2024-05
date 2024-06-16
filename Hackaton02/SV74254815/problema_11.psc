Proceso problema_11
	Escribir "HALLA EL NÚMERO MAYOR"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Ingrese los 3 números"
		Leer a, b, c
		si a > b y a > c Entonces
			Escribir "El mayor de los 3 números es: ", a
		SiNo
			si b > a y b > c Entonces
				Escribir "El mayor de los 3 números es: ", b
			SiNo
				si c > a y c > b Entonces
					Escribir "El mayor de los 3 números es: ", c
				FinSi
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
