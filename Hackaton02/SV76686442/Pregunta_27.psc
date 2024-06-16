Algoritmo Pregunta_27
	suma<-0
	contador<-0
	Escribir "Ingrese números positivos para calcular la media (ingrese un número negativo para terminar):"
    Repetir
		Leer num
		Si num>=0 Entonces
			suma<-suma+num
			contador<-contador+1
		Fin Si
	Hasta Que num<0
	Si contador>0 Entonces
		media<-suma/contador
		Escribir "La media de los números ingresados es: ", media
	SiNo
		Escribir "No se ingresaron números positivos."
	Fin Si
	
FinAlgoritmo

