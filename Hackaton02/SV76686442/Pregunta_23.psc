Algoritmo Pregunta_23
	Definir n,i,suma Como Entero
	Escribir "Ingrese un número entero positivo para calcular la suma de los números impares menores o iguales a n:"
	Leer n
	suma<-0
	Si n<=0 Entonces
		Escribir "El numero ingresado debe ser mayor de 0"
	SiNo
		Para i<-1 Hasta n Con Paso 1 Hacer
			Si i % 2 == 1 Entonces
				suma <- suma + i
			FinSi
		Fin Para
		Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
	Fin Si

FinAlgoritmo

