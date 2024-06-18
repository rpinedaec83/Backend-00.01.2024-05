Proceso Task_11
	//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Leemos los 3 numeros para evaluar
		Escribir "Ingrese el primero numero: "
		Leer num1
		Escribir "Ingrese el segundo numero: "
		Leer num2
		Escribir "Ingrese el tercer numero: "
		Leer num3
		
		//Si el num1 es mayor de todos
		Si num1 >= num2 y num1 >= num3 Entonces
			Escribir "El numero mayor es : ", num1
		SiNo
			//Si el num2 es mayor de todos
			Si num2 >= num1 y num2 >= num3 Entonces
				Escribir "El numero mayor es : ", num2
				//Si el num3 es mayor de todos
			SiNo
				Escribir "El numero mayor es : ", num3
			FinSi
		FinSi
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras

FinProceso
