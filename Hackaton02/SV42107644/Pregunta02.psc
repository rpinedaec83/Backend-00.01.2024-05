//2. Hacer un algoritmo en Pseint que lea un numero entero por el teclado y determinar si es negativo.

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

Proceso Pregunta02
	Escribir "Ingrese un numero"
	Leer valor_ingresado
	Si EsNumero(valor_ingresado) Entonces
		numero_ingresado = ConvertirANumero(valor_ingresado)
		
		Si numero_ingresado >= 0  Entonces
			Escribir "Este numero entero positivo"
		SiNo
			Si numero_ingresado < 0  Entonces
				Escribir "Este numero es negativo"
			SiNo
				Escribir "Este no es un numero entero"
			FinSi
		FinSi
	SiNo
		Escribir "Este no es un numero entero"
	FinSi
FinProceso
