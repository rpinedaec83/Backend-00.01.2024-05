Proceso Task_24
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
		n = 1000
		//Guardamos la suma total
		suma = 0
		
		//Iteramos hasta llegar al "n" 
		Para i <- 1 Hasta n Hacer
			//evaluamos que sea par para agregarlo a la suma total
			si i % 2 = 0 Entonces
				suma <- suma + i
			FinSi
		FinPara
		
		//Mostramos el resultado
		Escribir "La suma de todos los numeros es: ", suma
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	
FinProceso
