//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

Proceso Pregunta38
	Escribir "Ingrese un numero para determinar si es un numero perfecto"
	Leer valor_ingresado
	Si EsNumero(valor_ingresado) Entonces
		numero_ingresado = ConvertirANumero(valor_ingresado)
		Si EsPerfecto(numero_ingresado) Entonces
			Escribir "Este numero es perfecto"
		Sino
			Escribir "Este numero no es perfecto"
		FinSi	
	SiNo
		Escribir "Este no es un numero"
	FinSi
FinProceso


SubProceso validacion <- EsPerfecto ( numero_ingresado )
	Definir i, sumatoria Como Entero
	validacion = Falso
	sumatoria = 0
	Para i <- 1 Hasta numero_ingresado - 1  Con Paso 1 Hacer
        Si numero_ingresado % i = 0 Entonces
            sumatoria = sumatoria + i
        FinSi
	Fin Para
	
    Si sumatoria = numero_ingresado Entonces
        validacion = Verdadero
	FinSi
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