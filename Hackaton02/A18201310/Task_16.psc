Proceso Task_16
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
		Escribir "Ingrese un numero para determinar el dia: "
		Leer num
		
		//Evaluamos si se encuentra entre el 1 y 7 para verificar a que día corresponde
		Segun num Hacer
			1:
				Escribir "Lunes"
			2:
				Escribir "Martes"
			3:
				Escribir "Miercoles"
			4:
				Escribir "Jueves"
			5:
				Escribir "Viernes"
			6:
				Escribir "Sabado"
			7:
				Escribir "Domingo"
			De Otro Modo:
				Escribir "Numero no valido para un día de la semana"
		FinSegun
		
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	
FinProceso
