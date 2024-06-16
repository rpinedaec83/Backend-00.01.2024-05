Proceso Obtener_Digito_DNI
    bandera <- Verdadero
    Dimensionar Digitos[8]
    Dimensionar SerieNumerica[11]
    Dimensionar SerieAlfabetica[11]
    Dimensionar Cadena_DNI[8]

    // Inicializar los arreglos
    Digitos[1] <- 3
    Digitos[2] <- 2
    Digitos[3] <- 7
    Digitos[4] <- 6
    Digitos[5] <- 5
    Digitos[6] <- 4
    Digitos[7] <- 3
    Digitos[8] <- 2

    SerieNumerica[1] <- 6
    SerieNumerica[2] <- 7
    SerieNumerica[3] <- 8
    SerieNumerica[4] <- 9
    SerieNumerica[5] <- 0
    SerieNumerica[6] <- 1
    SerieNumerica[7] <- 1
    SerieNumerica[8] <- 2
    SerieNumerica[9] <- 3
    SerieNumerica[10] <- 4
    SerieNumerica[11] <- 4

    SerieAlfabetica[1] <- "K"
    SerieAlfabetica[2] <- "A"
    SerieAlfabetica[3] <- "B"
    SerieAlfabetica[4] <- "C"
    SerieAlfabetica[5] <- "D"
    SerieAlfabetica[6] <- "E"
    SerieAlfabetica[7] <- "F"
    SerieAlfabetica[8] <- "G"
    SerieAlfabetica[9] <- "H"
    SerieAlfabetica[10] <- "I"
    SerieAlfabetica[11] <- "J"

    Mientras bandera Hacer
        Escribir "Por favor ingrese su numero de DNI (8 digitos)"
        Leer DNI

        Si Longitud(DNI) = 8 Entonces
            Para i <- 1 Hasta 8 Con Paso 1 Hacer
                Cadena_DNI[i] <- SubCadena(DNI, i, i)
            Fin Para
            Escribir "Los valores de cadena son", Cadena_DNI[1] , "el segundo es", Cadena_DNI[2], "el tercero es", Cadena_DNI[3],"y del ultimo es", Cadena_DNI[8]
            // Calcular la suma con los pesos correspondientes
            suma <- 0
            Para i <- 1 Hasta 8 Con Paso 1 Hacer
                suma <- suma + (ConvertirANumero(Cadena_DNI[i]) * Digitos[i])
                Escribir "La suma potencial es:", suma
            Fin Para

            Escribir "La suma es:", suma
            residuo <- suma % 11
            DigitoVerificador <- 11 - residuo
            Si DigitoVerificador = 11 Entonces
                DigitoVerificador <- 0
            Fin Si

            Escribir "El residuo es:", residuo
            Escribir "El digito verificador calculado es:", DigitoVerificador

            // Validar el digito verificador
            Escribir "El digito verificador numerico es: ", SerieNumerica[DigitoVerificador + 1]
            Escribir "El digito verificador alfabetico es: ", SerieAlfabetica[DigitoVerificador + 1]

            bandera <- Falso
        SiNo
            Escribir "El numero de DNI debe tener 8 digitos."
        Fin Si

        Escribir "Desea realizar otra operacion: Presione S para si o N para no"
        Leer continuar
        Si continuar <> "S" Entonces
            bandera <- Falso
        Fin Si

    Fin Mientras
Fin Proceso
