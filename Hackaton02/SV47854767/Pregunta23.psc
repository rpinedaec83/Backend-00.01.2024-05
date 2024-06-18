//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Proceso Pregunta23
	Definir n, suma, i Como Entero
	
    Escribir "Ingrese el valor de n para calcular la suma de los números impares menores o iguales a n:"
    Leer n
	
    suma = 0
	
    Para i = 1 Hasta n Hacer
        Si i % 2 <> 0 Entonces
            suma = suma + i
        FinSi
    FinPara
	
    Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
	
FinProceso
