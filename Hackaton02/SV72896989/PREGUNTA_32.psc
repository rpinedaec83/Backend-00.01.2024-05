//Para este ejercicio, asumí que cada ciudad tenía 3 provincias
Proceso PREGUNTA_32
    ciudad_mas_poblada = ""
    poblacion_maxima = 0
    
    // Bucle para recorrer las 11 ciudades
    Para i = 1 Hasta 11 Hacer
        poblacion_ciudad = 0
        
        // Bucle para recorrer las 3 provincias de cada ciudad
        Para j = 1 Hasta 3 Hacer
            Escribir "Ingrese la poblacion de la provincia ", j, " de la ciudad ", i, ":"
            Leer poblacion_provincia
            poblacion_ciudad = poblacion_ciudad + poblacion_provincia
        FinPara
        
        // Verificar si la población de la ciudad actual es mayor que la población máxima
        Si poblacion_ciudad > poblacion_maxima Entonces
            ciudad_mas_poblada = "ciudad " + ConvertirATexto(i)
            poblacion_maxima = poblacion_ciudad
        FinSi
    FinPara
    
    Escribir "La ciudad con la poblacion mas alta es ", ciudad_mas_poblada, " con una poblacion de ", poblacion_maxima
FinProceso
