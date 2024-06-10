//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Proceso Pregunta39
	Definir limite Como Entero
	Definir pi_gregory_leibniz Como Real
	limite = 8
	factor = 1
	pi_gregory_leibniz= 0
	Escribir "Esta es la aproximación del número pi con la serie de Gregory-Leibniz "
	Para i<-1 Hasta limite Con Paso 1 Hacer
		pi_gregory_leibniz = pi_gregory_leibniz + factor * 4 / (i*2-1) 
		factor = factor * (-1)
	Fin Para
	
	Escribir "El valor es: ", pi_gregory_leibniz
FinProceso
