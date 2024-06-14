Proceso TasK_19
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
		//1.Cajero (56$/día).
		//2.Servidor (64$/día).
		//3.Preparador de mezclas (80$/día).
		//4.Mantenimiento (48$/día).
		//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos).
		//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
		
		
		//Numero del empleado
		Escribir "Ingrese el numero del empleado: "
		leer numEmpleado
		//Cantidad de dias que trabajo, si es mayor que 6 detener el programa
		Escribir "Ingrese la cantidad de dias que trabajo: "
		leer dias
		//Pago del empleado, segun 
		pagoTotal = 0
		
		
		//Evaluamos si la cantidad de dias excede el limtie
		Si dias > 6 Entonces
			Escribir "Ingreso un numero mayor a 6, el limite dias trabajados es 6."
		//Evaluamos cada ID del empleado
		SiNo
			sueldo = 0
			Segun numEmpleado Hacer
				1:
					sueldo = 56
				2:
					sueldo = 64
				3:
					sueldo = 80
				4:
					sueldo = 48
				De Otro Modo:
					Escribir "ID de empleado incorrecto."
			FinSegun
			i = 1
			Mientras i <= dias Hacer
				pagoTotal <- pagoTotal + sueldo
				i <- i + 1
			FinMientras
			Escribir "Sueldo pagado: ", pagoTotal
		FinSi
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	
FinProceso
