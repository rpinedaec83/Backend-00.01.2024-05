Proceso problema_15
	Definir cm, pulgadas, libras, kg Como Real
	Escribir "CENTÍMETROS A PULGADAS Y LIBRAS A KILOGRAMOS"
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Seleccione una opción:"
		Escribir " 1 para convertir centímetros a pulgadas"
		Escribir " 2 para convertir libras a kilogramos"
		Leer opc
		Segun opc Hacer
			1:
				Escribir "Ingrese la cantidad de centímetros: "
				Leer cm
				pulgadas <- cm / 2.54
				Escribir cm, " centímetros equivalen a ", pulgadas, " pulgadas."
			2:
				Escribir "Ingrese la cantidad de libras: "
				Leer libras
				kg <- libras * 0.453592
				Escribir libras, " libras equivalen a ", kg, " kilogramos."
		FinSegun
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea convertir otra cantidad? 1 para SI, 2 para NO"
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
