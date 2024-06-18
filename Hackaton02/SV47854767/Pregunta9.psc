//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

Proceso Pregunta9
	Definir salarioActual, aumento, salarioNuevo Como Real
	
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salarioActual
	
    Si salarioActual > 2000 Entonces
        aumento = salarioActual * 0.05
    Sino
        aumento = salarioActual * 0.10
    FinSi
	
    salarioNuevo = salarioActual + aumento
	
    Escribir "El aumento del salario es: $", aumento
    Escribir "El nuevo salario del trabajador es: $", salarioNuevo
	
FinProceso
