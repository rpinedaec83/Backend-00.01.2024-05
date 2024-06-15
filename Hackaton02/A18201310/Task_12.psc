Proceso Task_12
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
		
		//Leemos los 2 numeros
		Escribir "Ingrese el primer numero: "
		Leer num1
		Escribir "Ingrese el segundo numero: "
		Leer num2
		
		//Evaluamos si el num1 es mayor
		Si num1 >= num2 Entonces
			Escribir "El primer numero es mayor"
		SiNo
			Escribir "El segundo numero es mayor"
		FinSi
		
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
