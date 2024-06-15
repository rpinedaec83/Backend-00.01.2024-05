Proceso Task_29
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo mientras.
		
		//dato para iterar
		i = 1
		//dato para guardar la suma
		suma = 0
		
		//iteramos con el "Mientras"
		Mientras i <= 100 Hacer
			suma <- suma + i
			i <- i + 1
		FinMientras
		
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
