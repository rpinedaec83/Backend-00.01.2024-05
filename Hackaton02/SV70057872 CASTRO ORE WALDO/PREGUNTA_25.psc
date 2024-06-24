Proceso PREGUNTA_25
	//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	Escribir "Ingrese un numero entero."
	Leer num
	Definir fact Como Entero
	fact=1
	
	Para i<-0 Hasta num-2 Con Paso paso Hacer
		i=i+1
		fact=i*fact
	Fin Para
	result=num*fact
	Escribir result
FinProceso
