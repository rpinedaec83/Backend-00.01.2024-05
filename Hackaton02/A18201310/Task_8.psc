Proceso Task_8
	//Bandera para iterar y probar el programa
	bandera = Verdadero
	
	
	Mientras bandera Hacer
		//Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
		
		//Ingresar nota
		Escribir "Pimera nota: "
		Leer nota_1
		Escribir "Segunda nota: "
		Leer nota_2
		Escribir "Tercer nota: "
		Leer nota_3
		
		//Sacamos el promedio de las notas
		promedio = (nota_1 + nota_2 + nota_3) / 3
		
		Escribir "Nota mayor a 12, aprobado; Nota menor a 12, desaprobado"
		
		//Evaluamos si el estudiante APROBO o DESAPROBO
		Si promedio > 12 Entonces
			Escribir "Promedio: ",promedio, ", Aprobo!"
		SiNo
			Escribir "Promedio: ", promedio, ", Desaprobo! Nos vemos en vacaciones >:D"
		FinSi
		
		//Preguntamos si deseamos seguir ejecutando el programa
		Escribir "Desea continuar: S para continuar, N para salir"
		Leer respuesta
		Si respuesta == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
