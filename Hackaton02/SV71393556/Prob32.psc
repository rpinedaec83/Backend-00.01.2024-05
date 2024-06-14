Algoritmo Prob32
	//Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, 
	//hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
	definir variables, mayorPoblacion, poblacionCiudad Como Real
	mayorPoblacion=0; 
	para i<- 0 Hasta 10 Hacer
		Escribir "Ingrese el nombre de la ciudad:";
		Leer nombreCiudad;
		Escribir "Ingrese la poblacion de la ciudad:";
		Leer poblacionCiudad;
		
		si mayorPoblacion < poblacionCiudad Entonces
			mayorPoblacion = poblacionCiudad;
			ciudadMayorPoblacion = nombreCiudad;
		FinSi
		
	FinPara
	Escribir  "El nombre de la ciudad: ",ciudadMayorPoblacion;
	Escribir  "	La poblacion  de la ciudad ",ciudadMayorPoblacion,": ",mayorPoblacion;

FinAlgoritmo
