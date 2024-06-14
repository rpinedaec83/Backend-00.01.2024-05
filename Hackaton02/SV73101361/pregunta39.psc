// 39.Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Algoritmo pregunta39
	
    Definir num, i Como Entero
    Definir num_pi Como Real
	
    Escribir "Ingrese el numero de terminos para la aproximacion:"
    Leer num

    num_pi <- 0
	
    Para i <- 0 Hasta num - 1 Hacer
        Si i mod 2 = 0 Entonces
            num_pi <- num_pi + 4 / (2 * i + 1)
        SiNo
            num_pi <- num_pi - 4 / (2 * i + 1)
        FinSi
    FinPara
	
    Escribir "La aproximacion de pi con ", num, " terminos es: ", num_pi
	
FinAlgoritmo
