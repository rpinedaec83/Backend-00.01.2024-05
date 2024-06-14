Algoritmo Preg_22
	
 	Definir  n, contador Como Entero
 	Definir  suma como real
	
 	Escribir  "Ingrese el valor n: "
 	leer n;
 	suma <-0;
 	contador <-1;
	
 	Mientras contador<=n Hacer
		
 		suma <-suma+contador;
		
 		contador<-contador +1;
 	Fin Mientras
	
 	Escribir  "La suma de los primeros ",n," numeros es:",suma
	
FinAlgoritmo
