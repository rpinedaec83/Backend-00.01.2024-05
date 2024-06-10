//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cual sera su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagara $20 por hora, 
//pero si trabaja mas de 40 horas entonces las horas extras se le pagaran a $25 por hora.

Proceso Pregunta06
	Definir cantidad_horas Como Entero
	Escribir "Ingrese la cantidad de horas trabajadas: "
	Leer cantidad_horas
	salario_hora = 20
	salario_hora_extra = 25
	limite_horas = 40
	horas_extras = 0
	Si cantidad_horas <= limite_horas Entonces
		salario_total= cantidad_horas * salario_hora
	SiNo
		salario_total= limite_horas * salario_hora
		horas_extras = cantidad_horas - limite_horas
		salario_total = salario_total + horas_extras * salario_hora_extra
	FinSi
	Escribir "Ud trabaj� ", horas_extras, " horas extras"
	Escribir "El salario que le corresponde es: "  salario_total
FinProceso
