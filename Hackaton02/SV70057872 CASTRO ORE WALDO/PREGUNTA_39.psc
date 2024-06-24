Proceso PREGUNTA_39
//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
	//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	Escribir "Escriba el numero de iteraciones para aproximar pi. "
	
	Definir iteraciones,pii,j,i,suma Como real
	
	leer iteraciones
	
	pii<-4/1
	i<-0
	j<--1
	suma<-0
	
	
	Mientras i<>iteraciones Hacer
		i=i+1
		j=j+2
		pii=4/j
		Si i%2=0 Entonces
			suma=suma-pii
		SiNo
			suma=suma+pii
		Fin Si
		
		Escribir suma
	Fin Mientras
FinProceso
