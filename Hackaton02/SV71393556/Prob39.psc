Algoritmo Prob39
	//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. 
	//La formula que se debe aplicar es:
	//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	suma=0;
	divisor=1;
	Escribir "El numero PI es:";
	
	para i<- 1 Hasta 30 Hacer
		si i%2 == 0 Entonces
			suma = suma - (4/divisor);
		SiNo
			suma = suma + (4/divisor);
		FinSi
		
		divisor = divisor + 2;
	FinPara
	Escribir suma;

FinAlgoritmo
