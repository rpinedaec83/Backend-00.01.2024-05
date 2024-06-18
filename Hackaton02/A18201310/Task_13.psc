Proceso Task_13
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
		Escribir "Ingrese una vocal: "
		Leer dato
		
		//Evaluamos si es una vocal o no
		Segun dato Hacer
			"a":
				Escribir "Ingreso la vocal: a"
			"e":
				Escribir "Ingreso la vocal: e"
			"i":
				Escribir "Ingreso la vocal: i"
			"o":
				Escribir "Ingreso la vocal: o"
			"u":
				Escribir "Ingreso la vocal: u"
			De Otro Modo:
				Escribir "No ingreso una vocal"
		FinSegun
		
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	
FinProceso
