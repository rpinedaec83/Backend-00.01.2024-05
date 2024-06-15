//Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso P37
		Definir a, b, temp Como Entero
		Escribir "Ingrese el primer número:"
		Leer a
		Escribir "Ingrese el segundo número:"
		Leer b
		a = Abs(a)
		b = Abs(b)
		Mientras b <> 0 Hacer
			temp = b
			b = a % b
			a = temp
		Fin Mientras
		Escribir "El M.C.D. es: ", a
FinProceso	