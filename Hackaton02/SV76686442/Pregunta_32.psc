Algoritmo Pregunta_32
    Definir provincia1, provincia2, provincia3 Como Cadena
    Definir ciudad1, ciudad2, ciudad3, ciudad4, ciudad5, ciudad6, ciudad7, ciudad8, ciudad9, ciudad10, ciudad11 Como Cadena
    Definir poblacion1, poblacion2, poblacion3, poblacion4, poblacion5, poblacion6, poblacion7, poblacion8, poblacion9, poblacion10, poblacion11 Como Entero
    Definir ciudadConMayorPob Como Cadena
    Definir mayorPoblacion Como Entero
	
    provincia1 <- "Provincia 1"
    provincia2 <- "Provincia 2"
    provincia3 <- "Provincia 3"
	
    Escribir "Ingrese el nombre de la primera ciudad en ", provincia1, ": "
    Leer ciudad1
    Escribir "Ingrese la población de ", ciudad1, ": "
    Leer poblacion1
	
    Escribir "Ingrese el nombre de la segunda ciudad en ", provincia1, ": "
    Leer ciudad2
    Escribir "Ingrese la población de ", ciudad2, ": "
    Leer poblacion2
	
    Escribir "Ingrese el nombre de la tercera ciudad en ", provincia1, ": "
    Leer ciudad3
    Escribir "Ingrese la población de ", ciudad3, ": "
    Leer poblacion3
	
    Escribir "Ingrese el nombre de la primera ciudad en ", provincia2, ": "
    Leer ciudad4
    Escribir "Ingrese la población de ", ciudad4, ": "
    Leer poblacion4
	
    Escribir "Ingrese el nombre de la segunda ciudad en ", provincia2, ": "
    Leer ciudad5
    Escribir "Ingrese la población de ", ciudad5, ": "
    Leer poblacion5
	
    Escribir "Ingrese el nombre de la tercera ciudad en ", provincia2, ": "
    Leer ciudad6
    Escribir "Ingrese la población de ", ciudad6, ": "
    Leer poblacion6
	
    Escribir "Ingrese el nombre de la primera ciudad en ", provincia3, ": "
    Leer ciudad7
    Escribir "Ingrese la población de ", ciudad7, ": "
    Leer poblacion7
	
    Escribir "Ingrese el nombre de la segunda ciudad en ", provincia3, ": "
    Leer ciudad8
    Escribir "Ingrese la población de ", ciudad8, ": "
    Leer poblacion8
	
    Escribir "Ingrese el nombre de la tercera ciudad en ", provincia3, ": "
    Leer ciudad9
    Escribir "Ingrese la población de ", ciudad9, ": "
    Leer poblacion9
	
    Escribir "Ingrese el nombre de la cuarta ciudad en ", provincia3, ": "
    Leer ciudad10
    Escribir "Ingrese la población de ", ciudad10, ": "
    Leer poblacion10
	
    Escribir "Ingrese el nombre de la quinta ciudad en ", provincia3, ": "
    Leer ciudad11
    Escribir "Ingrese la población de ", ciudad11, ": "
    Leer poblacion11
	
    mayorPoblacion <- poblacion1
    ciudadConMayorPob <- ciudad1
	
    Si poblacion2 > mayorPoblacion Entonces
        mayorPoblacion <- poblacion2
        ciudadConMayorPob <- ciudad2
    FinSi
	
    Si poblacion3 > mayorPoblacion Entonces
        mayorPoblacion <- poblacion3
        ciudadConMayorPob <- ciudad3
    FinSi
	
    Si poblacion4 > mayorPoblacion Entonces
        mayorPoblacion <- poblacion4
        ciudadConMayorPob <- ciudad4
    FinSi
	
    Si poblacion5 > mayorPoblacion Entonces
        mayorPoblacion <- poblacion5
        ciudadConMayorPob <- ciudad5
    FinSi
	
    Si poblacion6 > mayorPoblacion Entonces
        mayorPoblacion <- poblacion6
        ciudadConMayorPob <- ciudad6
    FinSi
	
    Si poblacion7 > mayorPoblacion Entonces
        mayorPoblacion <- poblacion7
        ciudadConMayorPob <- ciudad7
    FinSi
	
    Si poblacion8 > mayorPoblacion Entonces
        mayorPoblacion <- poblacion8
        ciudadConMayorPob <- ciudad8
    FinSi
	
    Si poblacion9 > mayorPoblacion Entonces
        mayorPoblacion <- poblacion9
        ciudadConMayorPob <- ciudad9
    FinSi
	
    Si poblacion10 > mayorPoblacion Entonces
        mayorPoblacion <- poblacion10
        ciudadConMayorPob <- ciudad10
    FinSi
	
    Si poblacion11 > mayorPoblacion Entonces
        mayorPoblacion <- poblacion11
        ciudadConMayorPob <- ciudad11
    FinSi
	
    Escribir "La ciudad con la mayor población es ", ciudadConMayorPob, " con una población de ", mayorPoblacion
FinAlgoritmo

