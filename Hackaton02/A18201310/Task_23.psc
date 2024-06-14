Proceso Task_23
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
		
		//Leemos el numero "n"
		Escribir "Ingrese un numero: "
		leer n
		//Guardamos la suma total
		suma = 0
		
		//Iteramos hasta llegar al "n" 
		Para i <- 1 Hasta n Hacer
			//evaluamos que sea impar para agregarlo a la suma total
			si i % 2 <> 0 Entonces
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
