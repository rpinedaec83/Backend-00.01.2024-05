Proceso Task_6
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	
	//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
	//1.se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
	//2,.pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
	Mientras bandera Hacer
		//Ingresamos las horas trabajadas
		Escribir "Ingrese cuantas horas trabajo: "
		Leer horas          			//20 * horas(X), 1hora = 20
		horasRegulares = horas
		horasExtras = horasRegulares - 40
		pagoRegular = 0
		pagoExtra = 0

		
		
		//Entramos si no tenemos horas extras
		//Entramos aqui si tenemos mas de 40 horas regulares, obtenemos el monto de las horas regulares
		Si horasRegulares > 40 Entonces
			Para contador <- 1 Hasta 40 Hacer
				pagoRegular <- pagoRegular + 20
			FinPara
		SiNo
			//Si tenemos menos de 40 horas, las contaremos hasta el limite menor de las 40 horas
			Mientras horasRegulares > 0 Hacer
				pagoRegular <- pagoRegular + 20
				horasRegulares <- horasRegulares - 1
			FinMientras
		FinSi
		//Entramos si tenemos horas extras
		Mientras horasExtras > 0 Hacer
			pagoExtra <- pagoExtra + 25
			horasExtras <- horasExtras - 1
		FinMientras
		
		Escribir "Tu pago extra es: ", pagoExtra
		Escribir "Tu pago regular es: ", pagoRegular
		
		
		
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
