Proceso PREGUNTA_06
	//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cu�l ser� su sueldo semanal, 
	//se sabe que si trabaja 40 horas o menos, se le pagar� $20 por hora, pero si trabaja m�s de 40 horas 
	//entonces las horas extras se le pagar�n a $25 por hora.
	Definir horasdetrabajo,horasextras Como Entero
	Definir pago , pagoextra Como Real
	
	Escribir "Ingrese la cantidad de horas"
	Leer horasdetrabajo
	
	Si horasdetrabajo<40 o horasdetrabajo=40 Entonces
		pago<- horasdetrabajo*20
		escribir pago
	SiNo
		horasextras=horasdetrabajo-40
		pagoextra<- horasextras*25
		pagonormal<- 40*20
		pagototal<- pagonormal+pagoextra
		Escribir pagototal  
	Fin Si
	
	
	
	
FinProceso

