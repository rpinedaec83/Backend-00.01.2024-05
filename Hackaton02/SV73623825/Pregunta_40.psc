//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi 
//con la serie de Nilakantha. La formula que se debe aplicar es:
Proceso Pregunta_40
	Definir num Como Entero
	Definir pi_aprox, denominador Como Real
    pi_aprox <- 3
    denominador <- 2
	Escribir "Ingrese un numero"
    Leer num
    Para n <- 1 Hasta num Hacer
        pi_aprox <- pi_aprox + 4 / (denominador * (denominador + 1) * (denominador + 2))
        denominador <- denominador + 2
        pi_aprox <- pi_aprox - 4 / (denominador * (denominador + 1) * (denominador + 2))
        denominador <- denominador + 2
    FinPara
    
    // Salida del resultado
    Escribir "El valor aproximado de Pi es:", pi_aprox
	
FinProceso
