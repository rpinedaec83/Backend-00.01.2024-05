Proceso PREGUNTA_35
	contador=0
	mayor=0
	Mientras contador<=2 Hacer
		Escribir "Ingresar Numero: "
		Leer numero
 
		Si numero>mayor Entonces
			mayor=numero
		Fin Si
		contador=contador+1
	Fin Mientras
	
	Escribir "El numero mayor es: ",mayor
FinProceso
