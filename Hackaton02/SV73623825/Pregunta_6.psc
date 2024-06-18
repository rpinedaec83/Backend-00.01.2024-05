//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál 
//será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le 
//pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
Proceso Pregunta_6
	Definir horaTrabajo como entero
	Escribir "Ingreso las horas de trabajo"
	Leer horaTrabajo
	Si horaTrabajo>=40 Entonces
		Escribir "Sueldo semanal = ", 40*20+25*(horaTrabajo-40)
	SiNo
		Escribir "Sueldo semanal = ", horaTrabajo*20
	Fin Si
	
FinProceso
