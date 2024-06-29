Proceso PREGUNTA_40
//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
			//Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...
	
	Definir pii, termino Como Real
	Definir i, n Como Entero
	Definir signo Como Entero
	// Inicializar pi con el valor inicial de la serie
	pii <- 3
	// Número de términos de la serie que queremos calcular
	n <- 10000  // Puedes ajustar este valor según la precisión deseada
	// Inicializar el primer denominador
	i <- 2
	// Inicializar el signo
	signo <- 1
	
	Para j <- 1 Hasta n Hacer
		// Calcular el término actual de la serie
		termino <- 4 / (i * (i+1) * (i+2))
		// Sumar o restar el término a pi según corresponda
		pii <- pii + signo * termino
		// Cambiar el signo para el próximo término
		signo <- signo * (- 1)
		// Incrementar i en 2 para los próximos términos de la serie
		i <- i + 2
	FinPara
	
	// Mostrar el valor aproximado de pi
	Escribir "Aproximación de pi después de ", n, " términos es: ", pi


	
FinProceso
