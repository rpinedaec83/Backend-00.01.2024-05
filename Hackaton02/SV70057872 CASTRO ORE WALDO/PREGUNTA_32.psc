Proceso PREGUNTA_32
	//Se quiere saber cu�l es la ciudad con la poblaci�n de m�s personas,
	//son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita 
	//saber eso. (NO HAY DATOS SUFICIENTES)
	Escribir "Ingrese las ciudades y el numero de habitantes."
	
	may<-0
	Definir ciudad Como Entero
	Mientras  cont<11 Hacer
		cont=cont+1
		Escribir "Ciudad N�: ", cont
		leer ciudad
		
		Si ciudad>may Entonces
			may=ciudad
		
		Fin Si
	fin mientras
	
	Escribir "La ciudad con mayor numero de habitantes es: ",may
FinProceso
