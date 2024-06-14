//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de numeros positivos, se debe acabar el programa al ingresar un numero negativo.

Proceso Pregunta27
	Definir valor_ingresado, tamanyo, sumatoria Como Entero
	tamanyo = 0
	sumatoria = 0
	Dimension lista[1]

	Escribir "Ingrese numeros positivos para determinar la media de la lista de valores positivos ingresados, para terminar ingrese un valor negativo"
		
	Repetir
		Leer valor_ingresado
		Si valor_ingresado >= 0 Entonces
			tamanyo = tamanyo +1
			Redimension lista[tamanyo]
			lista[tamanyo] = valor_ingresado
		FinSi
	Hasta que valor_ingresado < 0
	
	Para i<-1 Hasta tamanyo Con Paso 1 Hacer
		sumatoria = sumatoria + lista[i]
	Fin Para
	
	Escribir "La media de los numeros positivos es: ", sumatoria / tamanyo

FinProceso
