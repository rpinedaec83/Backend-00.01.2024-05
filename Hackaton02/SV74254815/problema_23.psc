Proceso problema_23
	Escribir "SUMA DE LOS VALORES IMPARES DE N"
	continuar = Verdadero
	Mientras  continuar = Verdadero Hacer
		Escribir "Ingrese el valor de n"
		Leer n
		suma = 0
		para i = 1 Hasta n Con Paso  2 Hacer
			suma = suma + i
		FinPara
		Escribir "La suma de los valores impares o menores a ", n " es: ", suma
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea ingresar otro valor para n? 1 para SI, 2 para NO"
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
