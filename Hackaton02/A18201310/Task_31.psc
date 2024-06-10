Proceso Task_31
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
		//1.sumar los numeros pares y dividirlos con su cantidad
		//2.sumar los numeros impares y dividirlos con su cantidad
		
		//creamos los datos de la suma de los pares e impares
		sumaPares = 0
		sumaImpares = 0
		
		//Iteramos del 1 al 10 segun el problema, evaluamos cuando tengamos un numero par e impar 
		Para i <- 1 Hasta 10 Hacer
			Si i % 2 = 0 Entonces
				sumaPares <- sumaPares + i
			SiNo
				sumaImpares <- sumaImpares + i
			FinSi
		FinPara
		
		//mostramos resultados
		Escribir "Suma de los pares: ", sumaPares
		Escribir "Suma de los impares: ", sumaImpares
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
