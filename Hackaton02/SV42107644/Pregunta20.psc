//20. Hacer un algoritmo en Pseint que que lea 4 numeros enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuantos numeros son Pares?
//¿Cual es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 numeros.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
//Si cumple se cumple la segunda condicion, calcular la suma de los 4 numeros.

Proceso Pregunta20

	cantidad = 4
	Dimension numeros_ingresados[cantidad]
	Escribir "Se debe ingresar ", cantidad," numeros positivos para calcular: "
	Escribir "- Cantidad de numeros pares"
	Escribir "- El mayor de todos los numeros"
	Escribir "- Si el tercero es par, calcular el cuadrado del segundo"
	Escribir "- Si el primero es menor que el cuarto, calcular la media de los 4 numeros"
	Escribir "- Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700, calcular sumatoria"

	bandera = Verdadero
	Mientras bandera Hacer
		Escribir  "Ingrese ", cantidad," numeros positivos"
		Para i<-1 Hasta cantidad Con Paso 1 Hacer
			valida = Falso
			Mientras NO valida Hacer
				Leer numero_ingresado
				Si numero_ingresado >= 0 Entonces
					valida = Verdadero
					numeros_ingresados[i]=numero_ingresado
				SiNo
					Escribir "Ingrese un valor valido"
				FinSi
			FinMientras
		Fin Para
		
		pares = 0
		Para i<-1 Hasta cantidad Con Paso 1 Hacer
			Si numeros_ingresados[i] % 2 = 0 Entonces
				pares = pares + 1
			FinSi
		Fin Para
		Escribir  "Cantidad de numeros pares: ", pares;
		
		
		numero_mayor = 0
		Para i<-1 Hasta cantidad Con Paso 1 Hacer
			Si numeros_ingresados[i] > numero_mayor Entonces
				numero_mayor = numeros_ingresados[i]
			FinSi
		Fin Para
		Escribir "El numero mayor es: ", numero_mayor
		
		Si numeros_ingresados[3] % 2 = 0 Entonces
			Escribir "El cuadrado del segundo es ",  numeros_ingresados[2] ^ 2
		FinSi
		
		sumatoria = 0
		Para i<-1 Hasta cantidad Con Paso 1 Hacer
			sumatoria = sumatoria + numeros_ingresados[i]
		Fin Para
		
		Si numeros_ingresados[1] < numeros_ingresados[4] Entonces
			media = sumatoria / cantidad
			Escribir  "La media es: ", media
		FinSi
		
		Si numeros_ingresados[2] > numeros_ingresados[3]  Entonces
			Si  numeros_ingresados[3] >= 50 Y numeros_ingresados[3] <= 700 Entonces
				Escribir "La suma de los 4 numeros es:", sumatoria
			FinSi
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
