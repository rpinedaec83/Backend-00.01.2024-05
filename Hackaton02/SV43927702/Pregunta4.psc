Proceso Pregunta4
	Definir N1, N2, N3, TEMP Como Entero
    Escribir "Ingrese el primer número entero:"
    Leer N1
    Escribir "Ingrese el segundo número entero:"
    Leer N2
    Escribir "Ingrese el tercer número entero:"
    Leer N3
    Si N1 > N2 Entonces
        TEMP = N1
        N1 = N2
        N2 = TEMP
    FinSi
    Si N1 > N3 Entonces
        TEMP = N1
        N1 = N3
        N3 = TEMP
    FinSi
    Si N2 > N3 Entonces
        TEMP = N2
        N2 = N3
        N3 = TEMP
    FinSi
    Escribir "Los números ordenados de menor a mayor son:", N1,"-", N2,"-", N3
FinProceso
