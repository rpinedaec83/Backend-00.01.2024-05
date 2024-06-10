//33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.

Proceso Pregunta33
	bandera = Verdadero
	Mientras bandera Hacer
		Escribir "Hola!" 
			
		valida = Falso
		Mientras NO valida Hacer
			Escribir "Desea continuar?. Presione S para si o N para no"
			Leer continuar
			Segun continuar Hacer
				"S","N":
					valida = Verdadero
				De Otro Modo:
					Escribir "Ingrese una opcion valida"
			Fin Segun
		FinMientras
		Si continuar == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
