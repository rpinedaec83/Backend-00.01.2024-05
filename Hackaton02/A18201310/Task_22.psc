Proceso Task_22
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
		
		//Leemos el numero "n"
		Escribir "Ingrese un numero: "
		leer n
		//Guardamos la suma total
		suma = 0
		
		//Iteramos hasta llegar al "n" 
		Para i <- 1 Hasta n Hacer
			suma <- suma + i
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
