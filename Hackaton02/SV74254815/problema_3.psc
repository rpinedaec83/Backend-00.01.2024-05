Proceso problema_3
	Escribir "DETERMINANDO SI UN NUMERO TERMINA EN 4"
	continuar = Verdadero
	Mientras continuar = verdadero Hacer
		Escribir "Escribir el número a determinar"
		Leer num1
		si num1 mod 10 ==4 Entonces
			Escribir "el número ", num1 " si termina en 4"
		SiNo
			Escribir "el número ", num1 " no termina en 4"
		FinSi
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea escribir otro número? 1 para SI, 2 para NO"
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
