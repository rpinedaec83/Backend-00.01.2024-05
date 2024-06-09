Algoritmo Pregunta_17
	Escribir  "ingrese la hora (formato 24 horas)"
	leer hora
	Escribir  "ingrese los minutos"
	leer minutos
	Escribir "ingrese los segundos"
	leer segundo
	
	si hora <0 o hora >23 o minutos<0 o minutos>59 o segundo<0 o segundo>59 Entonces
		Escribir "Valores no válidos"
	SiNo
		segundo <- segundo +1;
		si segundo  ==60 Entonces
			segundo <- 0
			minutos <- minutos +1;
			si minutos ==60 Entonces
				minutos <-0
				hora<-hora+1
				si hora ==24 Entonces
					hora<-0
				FinSi
			FinSi
		FinSi
		Escribir  "La hora dentro de un segundo es: ",hora,":",minutos,":",segundo
	FinSi
	
	
FinAlgoritmo

