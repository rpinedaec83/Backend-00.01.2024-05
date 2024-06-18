Proceso Task_21
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
		
		//Si queremos obtener el factorial de 3, tenemos que multiplicar 1,2,....3
		Escribir "Ingrese un numero: "
		leer num
		
		//Numero para aumentar e iterar hasta el numero "num"
		i = 1
		//Resultado
		total = 1
		Mientras i <= num Hacer
			total <- total * i
			i <- i + 1
		FinMientras
		
		//Mostramos el factorial del numero
		Escribir total

		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
