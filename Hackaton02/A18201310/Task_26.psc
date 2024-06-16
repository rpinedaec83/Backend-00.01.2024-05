Proceso Task_26
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
		
		//Leemos el diviendo y divisor
		Escribir "Ingrese el dividendo: "
		Leer dividendo
		Escribir "Ingrese el divisor: "
		Leer divisor
		
		//creamos el cociente y el rest
		cociente = 0
		resto = dividendo
		
		//Validamos que el divisor no sea 0, ya que no lo podriamos dividir
		si divisor = 0 Entonces
			Escribir "Nose puede dividir entre 0."
		//Iteramos hasta que el diviendo sea menor que el divisor
		SiNo
			//realizamos la resta sucesiva
			Mientras resto >= divisor Hacer
				resto <- resto - divisor 
				//cada vez que realizamos una resta, el cociente aumentara para tener el resultado de este
				cociente <- cociente + 1
			FinMientras
		FinSi
		
		Escribir "Resto: ", resto
		Escribir "Cociente: ", cociente
		
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	
FinProceso
