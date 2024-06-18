//11. Hacer un algoritmo en Pseint que lea tres numeros y diga cual es el mayor.

Proceso Pregunta11
	Definir valor_ingresado como Entero
	cantidad=3
	
	Dimension lista_ingresada[cantidad];
	
	Escribir "Ingrese ",cantidad, " numeros enteros"
	
	Para i<-1 Hasta cantidad Hacer
		Escribir "Ingrese numero ", i, " :"
		Leer valor_ingresado
		lista_ingresada[i] = valor_ingresado
	FinPara 
	
	i=1
	numero_mayor=lista_ingresada[i]
	Para i<-1 Hasta cantidad-1 Hacer
        Si numero_mayor < lista_ingresada[i+1] Entonces
			numero_mayor = lista_ingresada[i+1] 
		FinSi
    FinPara  
FinProceso
