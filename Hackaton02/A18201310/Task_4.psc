Proceso Task_4
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Solicitamos los 3 numeros enteros y los leemos
		Escribir "Ingrese el primer numero: "
		Leer num_1
		Escribir "Ingrese el segundo numero: "
		Leer num_2
		Escribir "Ingrese el tercer numero: "
		Leer num_3
		
		//Creamos los valores minimo, medio y maximo
		min = 0
		mid = 0
		max = 0
		
		//Evaluamos los numeros de mayor a menor
		Si num_1 <= num_2 y num_1 <= num_3 Entonces
			min = num_1
			Si num_2 <= num_3 Entonces
				mid = num_2
				max = num_3
			SiNo
				mid = num_3
				max = num_2
			FinSi
		SiNo
			Si num_2 <= num_1 y num_2 <= num_3 Entonces
				min = num_2
				Si num_1 <= num_3 Entonces
					mid = num_1
					max = num_3
				SiNo
					mid = num_3
					max = num_1
				FinSi
			SiNo
				min = num_3
				Si num_1 <= num_2 Entonces
					mid = num_1
					max = num_2
				SiNo
					mid = num_2
					max = num_1
				FinSi
			FinSi
		FinSi
		
		Escribir "Numeros de menor a mayor: ", min, ", ", mid, ", ", max
		
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	
FinProceso
