Algoritmo Pregunta_31
	Definir num,contadorPares,contadorImpares Como Entero
	Definir mediaPares, mediaImpares Como Real
	sumPares<-0	
	sumImpares<-0
	contadorPares<-0
	contadorImpares<-0
	Para i<-1 Hasta 10 Hacer
		Escribir "Ingrese el numero ",i,": "
		Leer num
		Si num MOD 2 =0 Entonces
			sumPares<-sumPares+num			
			contadorPares<-contadorPares+1
		SiNo
			sumImpares<-sumImpares+num
			contadorImpares<-contadorImpares+1
		Fin Si
	Fin Para
	Si contadorPares>0 Entonces
		mediaPares<-sumPares/contadorPares
		Escribir "La media de los n�meros pares es: ", mediaPares
	SiNo
		Escribir "No se ingresaron n�meros pares"
	Fin Si
	Si contadorImpares>0 Entonces
		mediaImpares<-sumImpares/contadorImpares
		Escribir "La media de los números pares es: ", mediaImpares
	SiNo
		Escribir "No se ingresaron n�meros impares"
	Fin Si
FinAlgoritmo

