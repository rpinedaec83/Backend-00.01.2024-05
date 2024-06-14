//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci

Proceso Pregunta36
	Definir a, b, fibonacci Como Entero
	Escribir "Ingrese un numero para calcular la serie Fibonacci"
	Leer valor_ingresado
	Si EsNumero(valor_ingresado) Entonces
		numero_ingresado = ConvertirANumero(valor_ingresado)
		a = 0
		b = 1
		Escribir "Serie de Fibonacci: "
		Escribir a
		Escribir b
		Para i <- 3 Hasta numero_ingresado Con Paso 1 Hacer
			fibonacci = a + b
			Escribir fibonacci
			a = b
			b = fibonacci
		Fin Para
	SiNo
		Escribir "Este no es un numero"
	FinSi
FinProceso


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