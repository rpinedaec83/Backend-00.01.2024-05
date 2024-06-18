//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

Proceso Pregunta17
	
	Escribir  "Ingrese la hora (formato 24 horas)"
	Leer hora
	Escribir  "Ingrese los minutos"
	Leer minutos
	Escribir "Ingrese los segundos"
	Leer segundo
	
	Si hora <0 o hora >23 o minutos<0 o minutos>59 o segundo<0 o segundo>59 Entonces
		Escribir "Valores no válidos"
	SiNo
		segundo <- segundo +1;
		Si segundo  ==60 Entonces
			segundo <- 0
			minutos <- minutos +1;
			Si minutos ==60 Entonces
				minutos <-0
				hora<-hora+1
				Si hora ==24 Entonces
					hora<-0
				FinSi
			FinSi
		FinSi
	FinSi
	
	Escribir  "La hora dentro de un segundo es: ",hora,":",minutos,":",segundo

FinProceso
