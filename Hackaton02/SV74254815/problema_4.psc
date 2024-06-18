Proceso problema_4
	Escribir "ORDENANDO TRES NÚMEROS DE MENOR A MAYOR"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Ingrese los tres números"
		Leer a, b, c
		Escribir "El orden de menor a mayor es: "
		si a < b y a < c Entonces
			si b < c Entonces
				Escribir a,"-",b,"-",c
			SiNo
				Escribir a,"-",c,"-",b
			FinSi
		SiNo
			si b < c Entonces
				si a < c Entonces
					Escribir b,"-",a,"-",c
				SiNo
					Escribir b,"-",c,"-",a
				FinSi
			SiNo
				si a < b Entonces
					Escribir c,"-",a,"-",b
				SiNo
					Escribir c,"-",b,"-",a
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
