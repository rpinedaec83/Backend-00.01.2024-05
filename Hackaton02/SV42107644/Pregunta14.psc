//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un numero primo.

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

Proceso Pregunta14
	limite = 10
	Escribir "Ingrese un numero del 1 al ", limite
	Leer valor_ingresado
	

	Si EsNumero(valor_ingresado) Entonces
		numero_ingresado = ConvertirANumero(valor_ingresado)
		
		Si numero_ingresado >= 0 Entonces
			Si numero_ingresado <= limite Entonces
				Si numero_ingresado < 2
					Escribir "Este numero no es primo"
				SiNo
					Si numero_ingresado = 2 Entonces
						Escribir "Este numero es primo"
					SiNo
						i=2
						es_primo = Verdadero
						Mientras i <= numero_ingresado-1 y es_primo Hacer
							Si(numero_ingresado % i == 0) Entonces
								es_primo = Falso;
							FinSi
							i = i + 1;
						FinMientras
						Si es_primo Entonces
							Escribir "Este numero es primo"
						SiNo
							Escribir "Este numero no es primo"
						FinSi   
					FinSi 
				FinSi
			SiNo
				Escribir "Este numero es mayor que ", limite
			FinSi
		SiNo
			Escribir "Este es un numero negativo"
		FinSi
	SiNo
		Escribir "Este no es un numero"
	FinSi
FinProceso
