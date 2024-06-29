Proceso PREGUNTA_31
	//Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares,
	//sólo se ingresará diez números.
	Escribir "Ingrese 10 numero esnteros."
	
	cont=1
	
	contpares<-0
	contimpares<-0
	Mientras  cont<11 Hacer
		
		leer num
		cont=cont+1
	
		
		Si num%2=0 Entonces
			sumapares=sumapares+num
			contpares=contpares+1
		SiNo
			sumaimpares=sumaimpares+num
			contimpares=contimpares+1
		Fin Si
	
	Fin Mientras
	
	promediopares=sumapares/contpares
	promedioimpares=sumaimpares/contimpares
	
	Escribir "El promedio de numeros impares es: " promedioimpares," y el promedio de numeros pares es: ", promediopares


	
FinProceso
