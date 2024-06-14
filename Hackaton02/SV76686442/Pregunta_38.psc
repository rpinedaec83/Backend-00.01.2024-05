Algoritmo Pregunta_38
	Definir num, sumaDivisores, divisor Como Entero
	Escribir "Ingrese un número para verificar si es un número perfecto: "
    Leer num
	sumaDivisores<-0
	Para divisor<-1 Hasta (num/2) Hacer
		Si num % divisor = 0 Entonces
			sumaDivisores <- sumaDivisores + divisor
		Fin Si
	Fin Para
	Si sumaDivisores = num Entonces
        Escribir "El número ", num, " es un número perfecto."
    Sino
        Escribir "El número ", num, " no es un número perfecto."
    FinSi
FinAlgoritmo

