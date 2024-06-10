Proceso Task_9
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador,
		//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%
		//si generaba menos de $2000 su aumento será de un 10%.
		
		//Ingresar cuanto gana el trabajador
		Escribir "Ingrese cuanto gana: "
		Leer sueldo
		
		//Si el sueldo es menor a 2000, aumento del 10%
		Si sueldo < 2000 Entonces
			Escribir "Ya que su sueldo supera los 2000, tiene un aumento de: 10% - $", sueldo * 0.10
		//Si el sueldo es mayor a 2000, aumento del 5%
		SiNo
			Escribir "Ya que su sueldo no supera los 2000, tiene un aumento de: 5% - $", sueldo * 0.05
		FinSi
		
		
		
		
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
