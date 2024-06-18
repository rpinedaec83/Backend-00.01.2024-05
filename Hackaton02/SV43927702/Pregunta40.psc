Proceso Pregunta40
	Definir n Como Entero
    Definir termino Como Real
    Definir pi Como Real
    Escribir "Ingrese el número de términos para la aproximación de Pi: "
    Leer n
    pi = 3.0
    Definir denominador Como Real
    denominador = 2.0
    Para i = 1 Hasta n Con Paso 1 Hacer
        termino = 4.0 / (denominador * (denominador + 1) * (denominador + 2))
        Si i MOD 2 = 0 Entonces
            pi = pi - termino
        Sino
            pi = pi + termino
        FinSi
        denominador = denominador + 2
    FinPara

    Escribir "La aproximación de Pi con ", n, " términos de la serie de Nilakantha es: ", pi
	
	
FinProceso
