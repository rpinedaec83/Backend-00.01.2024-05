//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi 
//con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
Proceso Pregnta_39
	Definir num Como Entero
	Definir pi_aprox,denominador,signo Como Real
    pi_aprox <- 0
    signo <- 1
    denominador <- 1
	Escribir "Ingrese un numero"
    Leer num
    Para n <- 1 Hasta num Hacer
        pi_aprox <- pi_aprox + (signo / denominador)
        signo <- -signo
        denominador <- denominador + 2
    FinPara
    
    pi_aprox <- 4 * pi_aprox
    
    // Salida del resultado
    Escribir "El valor aproximado de Pi es:", pi_aprox
FinProceso
