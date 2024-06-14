Proceso PREGUNTA_40
	Escribir "Ingrese el número de términos para la aproximación: "
    Leer n
    piu = 3
    signo = 1
    Para i = 1 Hasta n Con Paso 1 Hacer
        piu = piu + signo * (4 / (2*i * (2*i + 1) * (2*i + 2)))
        Si signo = 1 Entonces
            signo = -1
        Sino
            signo = 1
        FinSi
    Fin Para
    Escribir "La aproximación de PI con ", n, " términos es: ", pi
FinProceso
