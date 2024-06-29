Proceso PREGUNTA_40
//Hacer un algoritmo en Pseint que cumpla con la aproximaci�n del n�mero pi con la serie de Nilakantha. La formula que se debe aplicar es:
			//Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...
	
	Definir pii, termino Como Real
	Definir i, n Como Entero
	Definir signo Como Entero
	// Inicializar pi con el valor inicial de la serie
	pii <- 3
	// N�mero de t�rminos de la serie que queremos calcular
	n <- 10000  // Puedes ajustar este valor seg�n la precisi�n deseada
	// Inicializar el primer denominador
	i <- 2
	// Inicializar el signo
	signo <- 1
	
	Para j <- 1 Hasta n Hacer
		// Calcular el t�rmino actual de la serie
		termino <- 4 / (i * (i+1) * (i+2))
		// Sumar o restar el t�rmino a pi seg�n corresponda
		pii <- pii + signo * termino
		// Cambiar el signo para el pr�ximo t�rmino
		signo <- signo * (- 1)
		// Incrementar i en 2 para los pr�ximos t�rminos de la serie
		i <- i + 2
	FinPara
	
	// Mostrar el valor aproximado de pi
	Escribir "Aproximaci�n de pi despu�s de ", n, " t�rminos es: ", pi


	
FinProceso
