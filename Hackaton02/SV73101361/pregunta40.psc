// 40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

// Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...

Algoritmo pregunta40
	
    Definir num, i Como Entero
    Definir num_pi Como Real
	
    Escribir "Ingrese el numero de terminos para la aproximacion:"
    Leer num

    num_pi <- 3
	
    Para i <- 0 Hasta num-1 Hacer
            num_pi <- num_pi + 4 * ((-1) ^ i )/ ((2 * i + 3) ^ 3 - (2 * i + 3))
    FinPara
	
    Escribir "La aproximacion de pi con ", num, " terminos es: ", num_pi
	
FinAlgoritmo
