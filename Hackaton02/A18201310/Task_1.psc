Proceso Task_1
	//Bandera para tener un bucle y realizar las pruebas
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Solicitar un numero
		Escribir "Ingrese un número: "
		
		//Leemos el número
		Leer num
		
		//Verificamos si tiene 3 digitos, osea si es menor a -99 o mayor a 99
		Si num > 99 O num < -99 Entonces
			Escribir "El número ingresado tiene 3 digitos o más."
			//Si no es así tiene 2 digitos
		Sino
			Escribir "El número ingresado no tiene 3 digitos."
		FinSi
		
		//Solicitamos al usuario si deseamos seguir ejecutando el programa
		Escribir "¿Desea continuar?: S para continuar, N para salir"
		Leer continuar
		Si continuar == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	Escribir "Gracias por su visita!"
	
	
FinProceso
