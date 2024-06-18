//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

Algoritmo ciudadConMayorPoblacion

    Dimensionar provincias[3, 11]
    Dimensionar nombreProvincias[3]
    Dimensionar nombreCiudades[3, 11]
    Definir mayorPoblacion, ciudadMayor, provinciaMayor, i, j Como Entero

    nombreProvincias[1] <- "Provincia 1"
    nombreProvincias[2] <- "Provincia 2"
    nombreProvincias[3] <- "Provincia 3"

    nombreCiudades[1, 1] <- "Ciudad 1.1"
    nombreCiudades[1, 2] <- "Ciudad 1.2"
    nombreCiudades[1, 3] <- "Ciudad 1.3"
    nombreCiudades[1, 4] <- "Ciudad 1.4"
    nombreCiudades[1, 5] <- "Ciudad 1.5"
    nombreCiudades[1, 6] <- "Ciudad 1.6"
    nombreCiudades[1, 7] <- "Ciudad 1.7"
    nombreCiudades[1, 8] <- "Ciudad 1.8"
    nombreCiudades[1, 9] <- "Ciudad 1.9"
    nombreCiudades[1, 10] <- "Ciudad 1.10"
    nombreCiudades[1, 11] <- "Ciudad 1.11"
    
    nombreCiudades[2, 1] <- "Ciudad 2.1"
    nombreCiudades[2, 2] <- "Ciudad 2.2"
    nombreCiudades[2, 3] <- "Ciudad 2.3"
    nombreCiudades[2, 4] <- "Ciudad 2.4"
    nombreCiudades[2, 5] <- "Ciudad 2.5"
    nombreCiudades[2, 6] <- "Ciudad 2.6"
    nombreCiudades[2, 7] <- "Ciudad 2.7"
    nombreCiudades[2, 8] <- "Ciudad 2.8"
    nombreCiudades[2, 9] <- "Ciudad 2.9"
    nombreCiudades[2, 10] <- "Ciudad 2.10"
    nombreCiudades[2, 11] <- "Ciudad 2.11"
    
    nombreCiudades[3, 1] <- "Ciudad 3.1"
    nombreCiudades[3, 2] <- "Ciudad 3.2"
    nombreCiudades[3, 3] <- "Ciudad 3.3"
    nombreCiudades[3, 4] <- "Ciudad 3.4"
    nombreCiudades[3, 5] <- "Ciudad 3.5"
    nombreCiudades[3, 6] <- "Ciudad 3.6"
    nombreCiudades[3, 7] <- "Ciudad 3.7"
    nombreCiudades[3, 8] <- "Ciudad 3.8"
    nombreCiudades[3, 9] <- "Ciudad 3.9"
    nombreCiudades[3, 10] <- "Ciudad 3.10"
    nombreCiudades[3, 11] <- "Ciudad 3.11"

    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 11 Hacer
            provincias[i, j] <- AZAR(1000000) // Generar un número aleatorio entre 0 y 999999
            Escribir "Poblacion de ", nombreCiudades[i, j], " en ", nombreProvincias[i], ": ", provincias[i, j]
        FinPara
    FinPara

    mayorPoblacion <- provincias[1, 1]
    ciudadMayor <- 1
    provinciaMayor <- 1

    // Determinar la ciudad con la mayor población
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 11 Hacer
            Si provincias[i, j] > mayorPoblacion Entonces
                mayorPoblacion <- provincias[i, j]
                ciudadMayor <- j
                provinciaMayor <- i
            FinSi
        FinPara
    FinPara

    Escribir "La ciudad con la mayor poblacion es: ", nombreCiudades[provinciaMayor, ciudadMayor], " en ", nombreProvincias[provinciaMayor], " con una población de ", mayorPoblacion, " personas."

FinAlgoritmo
