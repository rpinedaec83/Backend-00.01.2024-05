Proceso PREGUNTA_40
    // Estoy utilizando un valor fijo para el n�mero de t�rminos en la aproximaci�n
    limite = 1000
    aproximacion_pi = 3
    denominador = 2
    signo = 1
    
    Para i = 1 Hasta limite Hacer
        termino = 4 / (denominador * (denominador + 1) * (denominador + 2)) * signo
        aproximacion_pi = aproximacion_pi + termino
        denominador = denominador + 2
        signo = signo * (-1)
    FinPara
    
    Escribir "Aproximacion de pi con la serie de Nilakantha:", aproximacion_pi
FinProceso
