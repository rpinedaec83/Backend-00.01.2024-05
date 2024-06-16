//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros numeros.

Proceso Pregunta22
	Definir limite, sumatoria Como Entero
	bandera = Verdadero
	
	Mientras bandera Hacer
		Escribir "Ingrese un numero para calcular la suma de los n primeros numeros"
		Leer limite
		Si limite >= 0 Entonces
			sumatoria = 0
			Para i<-0 Hasta limite Con Paso 1 Hacer
				sumatoria = sumatoria + i
			Fin Para
			Escribir "La sumatoria es: ", sumatoria
		SiNo
			Escribir "Ingrese un valor valido"
		FinSi
		
		valida = Falso
		Mientras NO valida Hacer
			Escribir "Desea realizar otra operacion: Presione S para si o N para no"
			Leer continuar
			Segun continuar Hacer
				"S","N":
					valida = Verdadero
				De Otro Modo:
					Escribir "Ingrese una opcion valida"
			Fin Segun
		FinMientras
		Si continuar == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso

