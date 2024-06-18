Proceso Preg_32
	
	Definir provincia, ciudades, poblacion, mayorpoblacion Como Real
	
	provincia = 3
	
	ciudades = 11 
	
	mayorpoblacion = 0
	
	Para i = 1 Hasta ciudades Con Paso 1
        Escribir "Ingrese el nombre de la ciudad ", i, ":"
        Leer nombre_ciudad
        Escribir "Ingrese la población de ", nombre_ciudad, ":"
        Leer poblacion
		
        Si poblacion > mayor_poblacion Entonces
            mayor_poblacion = poblacion
            ciudad_mayor_poblacion = nombre_ciudad
        FinSi
    FinPara
	
	
    Escribir "La ciudad con la mayor población es: ", ciudad_mayor_poblacion, " con una población de ", mayor_poblacion
	
FinProceso