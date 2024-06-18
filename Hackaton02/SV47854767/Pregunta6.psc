//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
//entonces las horas extras se le pagarán a $25 por hora.


Proceso Pregunta6
	Definir horasTrabajadas, horasExtras, sueldoSemanal Como entero
    Definir tarifaNormal, tarifaExtra, horasNormales Como entero
	
    tarifaNormal = 20
    tarifaExtra = 25
    horasNormales = 40
	
    Escribir "Ingrese el número de horas trabajadas en la semana:"
    Leer horasTrabajadas
	
    Si horasTrabajadas <= horasNormales Entonces
        sueldoSemanal = horasTrabajadas * tarifaNormal
    Sino
        horasExtras = horasTrabajadas - horasNormales
        sueldoSemanal = (horasNormales * tarifaNormal) + (horasExtras * tarifaExtra)
    FinSi
	
	Escribir "El sueldo semanal es: $", sueldoSemanal
	
FinProceso
