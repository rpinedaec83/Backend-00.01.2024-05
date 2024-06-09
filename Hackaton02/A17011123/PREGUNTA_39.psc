Proceso PREGUNTA_39
	Definir pi_computado Como Real
    Definir iteraciones, i Como Entero
    Definir term, signo Como Real
	
    Escribir "Ingrese el número de iteraciones para aproximar Pi: "
    Leer iteraciones
	
    pi_computado = 0
    signo = 1.0   
	
    Para i = 0 Hasta iteraciones - 1 Hacer
        term = 4 / (2 * i + 1)
        pi_computado = pi_computado + (signo * term)
        signo = -signo   
    Fin Para
	
    Escribir "Aproximación de Pi usando la serie de Gregory-Leibniz: ", pi_computado

FinProceso
