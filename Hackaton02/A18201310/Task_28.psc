Proceso Task_27
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.
		
		//creamos el iterador
		i = 0
		//creamos el dato para guardar la suma
		suma = 0
		
		Repetir
			i <- i + 1
			suma <- suma + i
		Hasta Que i >= 100
		
		//escribimos el resultado
		Escribir suma
		
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	
FinProceso
