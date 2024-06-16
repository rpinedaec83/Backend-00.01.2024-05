Proceso problema_40
	Definir a, term, signo Como Real
    a = 3
    signo = 1
    iteraciones = 1000 
	
    Para i =1 Hasta iteraciones Con Paso 1 Hacer
        n = 2 * i
        term = 4 / (n * (n + 1) * (n + 2))
        a = a + signo * term
        signo <- signo * (-1)
    FinPara
    Escribir "Aproximación de Pi usando la serie de Nilakantha con", iteraciones, "iteraciones es:", a
FinProceso
