Proceso PREGUNTA_21
	//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	Escribir "Ingrese un numero entero."
	Leer num
	Definir fact Como Entero
	fact=1
	
	Para i<-0 Hasta num-1 Con Paso paso Hacer
		i=i+1
		fact=i*fact
	Fin Para
	
	Escribir fact
FinProceso
