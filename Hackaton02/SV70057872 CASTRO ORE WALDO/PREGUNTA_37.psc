Proceso PREGUNTA_37
	//Hacer un algoritmo en Pseint para conseguir el M.C.D de un 
	//número por medio del algoritmo de Euclides.
	Definir num1, num2 Como Entero
	
	Escribir "Escriba el primer numero."
	leer num1
	
	Escribir "Escriba el segundo numero."
	leer num2
	
	Mientras num1<>0 y num2<>0 Hacer
		c=trunc(num1/num2)//c=135/75=1--c=75/60=1---c=60/15=4
		r=num1%num2//r=135%75=60--r=75%60=15---r=60%15=0
		num1=num2//num1=75--num1=60---num1=15
		num2=r//num2=60---num2=15----num2=0
		
		
		
	Fin Mientras
	
	Escribir "El mcd de estos dos numeros: ", num1
	
	
FinProceso
