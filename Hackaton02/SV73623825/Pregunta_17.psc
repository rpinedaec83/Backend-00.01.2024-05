//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso Pregunta_17
	Definir hora,min,seg Como Entero
	Escribir "Ingrese la hora"
	Leer hora
	Escribir "Ingrese los minutos"
	Leer minutos
	Escribir "Ingrese los segundos"
	Leer segundo
	
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
	FinSi
	Escribir  "La hora dentro de un segundo es: ",hora,":",minutos,":",segundo

FinProceso
