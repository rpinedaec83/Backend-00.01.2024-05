Proceso PREGUNTA_36
	anterior=0
	previo=1
	
	contador=0
	suma=0

	Repetir
		contador=contador+1
		previo=anterior
		anterior=suma
		
		suma=anterior+previo
		Escribir "numero",suma,"- contador ",contador,"- previo",previo
	Hasta Que contador=10
	
FinProceso
