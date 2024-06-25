Proceso PREGUNTA_23
	//Hacer un algoritmo en Pseint para calcular la suma de los números impares 
	//menores o iguales a n.
	Escribir "Ingrese un numero entero."
	leer n
	
	Definir sum Como Entero
	sum=0
	
	Para i<-0 Hasta n-1 Con Paso paso Hacer
		i=i+1
		Si i%2<>0 Entonces
			sum=sum+i
			Escribir i
		finSi
	
	
	Fin Para
	
	Escribir "La suma de estos numeros impares es: ",sum
	
FinProceso
