//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
// Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

Proceso Pregunta40
	
	Definir n Como Entero
	Definir i Como Entero
	Definir piAprox Como Real
	
	Escribir "Ingrese el numero para la aproximación de pi:"
	Leer n
	
	piAprox = 3
	
	Para i = 1 Hasta n Hacer
		piAprox = piAprox + ((-1)^(i + 1)) * (4 / ((2 * i) * (2 * i + 1) * (2 * i + 2)))
    FinPara
		
	Escribir "La aproximación de pi con ", n, " es: ", piAprox 
		
		
FinProceso
