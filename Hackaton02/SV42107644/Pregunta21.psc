//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un numero

Proceso Pregunta21
	bandera = Verdadero
	Mientras bandera Hacer
		Escribir "Ingrese un numero para calcular su factorial"
		Leer valor_ingresado
		Si EsNumero(valor_ingresado) Entonces
			numero_ingresado = ConvertirANumero(valor_ingresado)
			Escribir "El factorial es: ", Factorial(numero_ingresado)
		SiNo
			Escribir "Este no es un numero"
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

SubProceso num_factorial <- Factorial ( numero_ingresado )
    num_factorial = 1
    Para i = 1 Hasta numero_ingresado Hacer
        num_factorial = num_factorial * i
    FinPara
Fin SubProceso


SubProceso validacion <- EsNumero ( valor_ingresado )
	numero_texto = "" + valor_ingresado
	validacion = Verdadero
	contador = 1
	digito = SubCadena(numero_texto, contador, contador)
	Si digito ="-" o digito = "+" Entonces
		numero_texto = SubCadena(numero_texto, contador +1 , Longitud(numero_texto))
	FinSi
	Mientras validacion Y contador <= Longitud(numero_texto) Hacer
		digito = SubCadena(numero_texto, contador, contador)
		Segun digito Hacer
			"0","1","2","3","4","5","6","7","8","9": validacion = Verdadero
			De Otro Modo:
				validacion = Falso
		Fin Segun
		contador = contador + 1
	Fin Mientras
	
Fin SubProceso