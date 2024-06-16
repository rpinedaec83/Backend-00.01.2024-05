//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. 
//La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Proceso P39
		Definir n, i Como Entero
		Definir pe  Como real
		Definir termino Como Real
		Escribir "Ingrese la cantidad de términos para la aproximación de Pi: "
		Leer n
		pe <- 0
		Para i <- 0 Hasta n - 1 Hacer
			termino <- (4 / (2 * i + 1))
			Si i % 2 = 0 Entonces
				pe <- pe + termino
			Sino
				pe <- pe - termino
			FinSi
		FinPara
		Escribir "La aproximación de Pi con ", n, " términos es: ", pi
FinProceso	
