Proceso Task_3
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Pedir un numero
		Escribir "Ingrese un numero: "
		//Leer el numero
		Leer num
		//Verificamos el ultimo digito del numero leido con "%" o "mod" para obtener el ultimo digito del numero
		total <- num mod 10
		
		Si total == 4 Entonces
			Escribir "El ultimo digito termina en 4."
		SiNo
			Escribir "El ultimo digito no termina en 4."
		FinSi
		
		
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
