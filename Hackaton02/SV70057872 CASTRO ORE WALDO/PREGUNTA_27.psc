Proceso PREGUNTA_27
	
	Escribir "Ingrese una lista de numero positivos y calculara el promedio de estas:"
	
	Definir num, prom , i , sum Como real
	num<-1
	i<-0
	sum<-0
	Mientras num>0 Hacer
		
		Leer num
		i=i+1
		sum=sum+num
		prom=sum/i
		Escribir "El promedio de estos numeros es: ", prom
	Fin Mientras
	
FinProceso
