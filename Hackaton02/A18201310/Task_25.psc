Proceso Task_25
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
		
		//leemos el dato
		Escribir "Ingrese un numero: "
		leer num
		
		//Resultado
		total = 1
		
		Para i <- total Hasta num Hacer
			total <- total * i
		FinPara
		
		Escribir total
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	
FinProceso
