Proceso problema_22
	Escribir "SUMA DE LOS N PRIMEROS NÚMEROS"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Ingrese el valor de n"
		leer n
		suma = 0
		para i = 1 Hasta n Con Paso 1 Hacer
			suma = suma + i
		FinPara
		Escribir "La suma de los ", n " primeros números es: ", suma
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea escribir otro valor para n? 1 para SI, 2 para NO"
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
