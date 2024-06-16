//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

Proceso Pregunta40
	Definir limite Como Entero
	Definir pi_nilakantha Como Real
	limite = 7
	factor = 1
	pi_nilakantha= 3
	Escribir "Esta es la aproximación del número pi con la serie de Nilakantha "
	Para i<-2 Hasta limite Con Paso 1 Hacer
		pi_nilakantha = pi_nilakantha + factor * 4 / ((i*2-2) * (i*2-1) * (i * 2))
		factor = factor * (-1)
	Fin Para
	
	Escribir "El valor es: ", pi_nilakantha

FinProceso
