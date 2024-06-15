//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso Pregunta_38
	Definir num, sumaDiv Como Entero
    Escribir "Ingrese un número "
    Leer num
    sumaDiv<-0
    Para i<-1 Hasta (num / 2) Hacer
        Si num%i=0 Entonces
            sumaDiv <- sumaDiv + i
        FinSi
    FinPara
    Si sumaDiv = num Entonces
        Escribir "El número ", num, " es perfecto."
    Sino
        Escribir "El número ", num, " no es perfecto."
    FinSi
FinProceso
