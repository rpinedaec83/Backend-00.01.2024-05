//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba mas de $2000 tendra un aumento del 5%, 
//si generaba menos de $2000 su aumento sera de un 10%.

Proceso Pregunta09
	Definir sueldo Como Real
	Escribir  "Ingrese su sueldo: "
	Leer sueldo
	sueldo_limite = 2000
	aumento = 0
	Si sueldo > sueldo_limite Entonces
		aumento = 0.05
	SiNo
		aumento = 0.1
	FinSi
	
	nuevo_sueldo = sueldo + sueldo * aumento
	Escribir "Ud aplica para un aumento de ", aumento * 100, "%"
	Escribir "Su nuevo sueldo es: ", nuevo_sueldo
FinProceso
