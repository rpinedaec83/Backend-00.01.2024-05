Proceso problema_14
	Escribir "DETERMINANDO SI ES UN NÚMERO PRIMO O NO"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Repetir
			Escribir "Ingrese un número entero positivo del 1 al 10"
			Leer num
		Hasta Que num >= 1 Y num <= 10
		
		contador = 0
		
		Para i = 1 Hasta num Hacer
			Si num % i = 0 Entonces
				contador = contador + 1
			FinSi
		FinPara
		
		Si contador = 2 Entonces
			Escribir "El número ", num, " es primo."
		SiNo
			Escribir "El número ", num, " no es primo."
		FinSi
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea ingresar otro número? 1 para SI, 2 para NO"
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
