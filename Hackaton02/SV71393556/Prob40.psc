Algoritmo Prob40
	//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. 
	//La formula que se debe aplicar es:
	//Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...
	suma=3
	divisor=0;
	n1=2;
	n2=3;
	n3=4;
	a=2
	b=1
	expo=1;
	
	Escribir "El numero PI es:";
	divisor = (n1 * (10^a)) + (n2 * (10^b))+n3;
	suma = suma+(4/divisor)
	
	para i<- 1 Hasta 1000 Hacer
		n1=n1+2
		n2=n2+2
		n3=n3+2
		si (i-3)%5 == 0 y (i-3)%10^expo == 0 Entonces
			a=a+1;
			b=b+1;
			expo=expo+1
		FinSi
		
		si (i-4)%5 == 0 y (i-4)%10^expo == 0 Entonces
			a=a+1;
		FinSi
		divisor = (n1 * (10^a)) + (n2 * (10^b))+n3;
		
		si i%2==0 Entonces
			suma = suma-(4/divisor)
		SiNo
			suma = suma+(4/divisor)
		FinSi
		
	FinPara
	Escribir suma;
	
FinAlgoritmo
