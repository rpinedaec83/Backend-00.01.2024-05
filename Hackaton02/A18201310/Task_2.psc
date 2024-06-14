Proceso Task_2
	//Bandera para probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Solicitar un numero al usuario
		Escribir "Ingrese un numero: "
		//Leemos el numero ingresado
		Leer num
		
		//Verificamos si es negativo comparando si es menor a 0
		Si num == 0 Entonces
			Escribir "Ingreso un 0 -_-."
		SiNo
			Si num < 0 Entonces
				Escribir "Ingreso un numero negativo! D:"
			SiNo
				Escribir "Ingreso un numero positivo :D!"
			FinSi
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
