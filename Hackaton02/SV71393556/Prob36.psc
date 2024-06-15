Algoritmo Prob36
	//Hacer un algoritmo en Pseint para calcular la serie de Fibonacc.
	Escribir "Ingrese la cantidad de numeros de la serie de Fibonacc:";
	Leer num;
	
	Fibonacc=0;
	Segun num Hacer
		1:
			Escribir Fibonacc;
		2:
			Escribir Fibonacc;
			Fibonacc=Fibonacc+1;
			Escribir Fibonacc;
			
		De Otro Modo:
			Escribir Fibonacc;
			Fibonacc=Fibonacc+1;
			Escribir Fibonacc;
			n1=0;
			n2=1;
			para i<- 3 Hasta num Hacer
				Fibonacc=n1+n2;
				Escribir Fibonacc;
				n1=n2;
				n2=Fibonacc;
			FinPara
	Fin Segun
	
FinAlgoritmo
