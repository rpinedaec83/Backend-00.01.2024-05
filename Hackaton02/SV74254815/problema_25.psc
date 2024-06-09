Funcion  fact  <- factorial ( n )
	Si n = 0 Entonces
		fact = 1
	SiNo
		fact = n * Factorial(n - 1)
	FinSi
FinFuncion

Proceso problema_25
	Escribir "FACTORIAL DE UN NÚMERO"
	continuar = Verdadero
	Mientras  continuar = Verdadero Hacer
		Escribir "Ingrese un  número para calcular su factorial"
		Leer n
		resultado = Factorial(n)
		Escribir "El factorial del número ", n " es: ", resultado
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
