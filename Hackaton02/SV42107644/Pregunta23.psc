//23. Hacer un algoritmo en Pseint para calcular la suma de los numeros impares menores o iguales a n.

Proceso Pregunta23
	Definir limite, sumatoria Como Entero
	bandera = Verdadero
	
	Mientras bandera Hacer
		Escribir "Ingrese un numero para calcular la suma de los numeros impares menores o iguales a n"
		Leer limite
		Si limite >= 0 Entonces
			sumatoria = 0
			Para i<-1 Hasta limite Con Paso 1 Hacer
				Si i % 2 <> 0 Entonces
					sumatoria = sumatoria + i
				Fin Si
			Fin Para
			Escribir "La sumatoria de los impares es: ", sumatoria
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
