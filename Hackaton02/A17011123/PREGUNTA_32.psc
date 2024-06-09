Proceso PREGUNTA_32

    Definir maxPoblacion Como Entero
    Definir ciudadMaxPoblacion Como Cadena

    maxPoblacion = -1
    
    Para i = 1 Hasta 5 Con Paso 1 Hacer
        Escribir "Ingrese el nombre de la ciudad ", i, ": "
        Leer nombreCiudad
        
        Escribir "Ingrese la población de ", nombreCiudad, ": "
        Leer poblacionCiudad
		
        Si poblacionCiudad > maxPoblacion Entonces
            maxPoblacion = poblacionCiudad
            ciudadMaxPoblacion = nombreCiudad
        FinSi
    FinPara

    Escribir "La ciudad con mayor población es: ", ciudadMaxPoblacion, " con ", maxPoblacion, " habitantes."

FinProceso
