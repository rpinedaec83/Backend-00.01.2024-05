Proceso Task_30
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo para.
		
		//dato para guardar la suma
		suma = 0
		
		//Usuamos el "para" para obtener la suma
		Para i <- 1 Hasta 100 Hacer
			suma <- suma + i
		FinPara
		
		//mostramos el resultado
		Escribir suma
		
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	
FinProceso
