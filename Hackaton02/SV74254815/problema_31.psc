Proceso problema_31
	Escribir "MEDIA DE NÚMEROS PARES E IMPARES"
    Definir mediaPares, mediaImpares Como Real
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		sumaPares = 0
		sumaImpares = 0
		numPares = 0
		numImpares = 0
		Para i = 1 Hasta 10 Con Paso 1 Hacer
			Escribir "Ingrese el número ", i, ":"
			Leer num
			Si num % 2 = 0 Entonces
				sumaPares = sumaPares + num
				numPares = numPares + 1
			Sino
				sumaImpares = sumaImpares + num
				numImpares = numImpares + 1
			FinSi
		FinPara
		Si numPares > 0 Entonces
			mediaPares = sumaPares / numPares
			Escribir "La media de los números pares es: ", mediaPares
		Sino
			Escribir "No se ingresaron números pares."
		FinSi
		
		Si numImpares > 0 Entonces
			mediaImpares = sumaImpares / numImpares
			Escribir "La media de los números impares es: ", mediaImpares
		Sino
			Escribir "No se ingresaron números impares."
		FinSi
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea ingresar otros 10 números? 1 para SI, 2 para NO"
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
