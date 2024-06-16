//15. Hacer un algoritmo en Pseint que convierta centimetros a pulgadas y libras a kilogramos.

Proceso Pregunta15
	Definir valor_ingresado Como Real
	factor_pulgadas = 0.393701
	factor_kilogramos = 0.453592
	
	bandera = Verdadero
	Mientras bandera Hacer
		valida = Falso
		Mientras NO valida Hacer
			Escribir "Ingrese una opci�n"
			Escribir " 1. Convertir cent�metros a pulgadas"
			Escribir " 2. Convertir libras a kilogramos"
			Leer opcion_ingresada
			Segun opcion_ingresada Hacer
				"1","2":	
					valida = Verdadero
				De Otro Modo:
					Escribir "Ingrese una opcion valida"
			Fin Segun
		FinMientras
	
		Escribir "Ingrese valor a covertir"
		Leer valor_ingresado
	
		Segun opcion_ingresada Hacer
			"1":	Escribir valor_ingresado, " centimetros, equivale a ", valor_ingresado * factor_pulgadas, " pulgadas"
			"2":	Escribir valor_ingresado, " libras, equivale a ", valor_ingresado * factor_kilogramos, " kilogramos"
		FinSegun
		
		valida = Falso
		Mientras NO valida Hacer
			Escribir "Desea realizar otra operacion: Presione S para si o N para no"
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
