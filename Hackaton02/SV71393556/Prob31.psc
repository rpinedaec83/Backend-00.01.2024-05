Algoritmo Prob31
	//Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
	definir contador,sumaPar,sumaImpar Como Entero
	contador = 0;
	contadorPar = 0;
	contadorImpar = 0;
	sumaPar=0;
	sumaImpar=0;
	Mientras contador<10 Hacer
		Escribir "Ingrese el numero: ";
		leer num;
		si num%2 == 0 Entonces
			sumaPar = sumaPar+num;
			contadorPar = contadorPar +1;
		SiNo
			sumaImpar = sumaImpar+num;
			contadorImpar = contadorImpar+1;
		FinSi
		contador = contador+1;
	Fin Mientras
	mediaPar = sumaPar/contadorPar;
	mediaImpar = sumaImpar/contadorImpar;
	Escribir "la media de los pares es: ",mediaPar;	
	Escribir "la media de los impares es: ",mediaImpar;	
	
FinAlgoritmo
