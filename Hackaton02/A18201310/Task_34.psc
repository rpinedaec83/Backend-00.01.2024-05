Proceso Task_34
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve
		
		Para i <- 1 Hasta 9 Hacer
			Escribir i, " x 9: ", i*9
		FinPara
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
