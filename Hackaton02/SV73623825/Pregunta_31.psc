//Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Proceso Pregunta_31
	Definir cont,num,sumpar,sumimpar Como Entero
	cont<-1
	sumpar<-0
	sumimpar<-0
	contpar<-0
	contimpar<-0
	Mientras cont<=10 Hacer
		Escribir "Ingrese un numero"
		Leer num
		cont<-cont+1
		Si num%2==0 Entonces
			sumpar<-sumpar+num
			contpar<-contpar+1
		SiNo
			sumimpar<-sumimpar+num
			contimpar<-contimpar+1
		Fin Si
	Fin Mientras
	Si contpar==0 Entonces
		contpar<-1
	SiNo
		Si contimpar==0 Entonces
			contimpar<-1
		Fin Si
	Fin Si
	Escribir "El promedio de numeros pares es ",sumpar/contpar
	Escribir "El promedio de numeros impares es ",sumimpar/contimpar
FinProceso
