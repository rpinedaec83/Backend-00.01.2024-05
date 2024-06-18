//32. Se quiere saber cual es la ciudad con la poblacion de mas personas, 
//son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

Proceso Pregunta32
	Definir cantidad_provincias, cantidad_ciudades, i, j Como Entero
	Definir nombre_provincia, nombre_ciudad Como Texto
	cantidad_provincias = 3
	cantidad_ciudades = 11
	Dimension provincias[cantidad_provincias]
	Dimension ciudades[cantidad_ciudades,3]
	i = 1
	Escribir "Ingrese las ", cantidad_provincias, " provincias"
	Repetir
		Leer nombre_provincia
		provincias[i] = nombre_provincia
		i = i + 1
	Hasta que i > cantidad_provincias
	
	i = 1
	Escribir "Ingrese las ", cantidad_ciudades , " ciudades"
	Repetir
		Escribir "Ingrese las ciudad #", i
		Leer nombre_ciudad
		ciudades[i,1] = nombre_ciudad
		
		Escribir "Ingrese el numero de la provincia a la que pertenece"
		Para j <-1 Hasta cantidad_provincias Con Paso 1 Hacer
			Escribir  j," - ", provincias[j]
		Fin Para
		Escribir j ," - No pertenece a ninguna provincia"
		
		valida = Falso
		Mientras NO valida Hacer
			Leer provincia_elegida
			Si provincia_elegida > 0 Y provincia_elegida <= cantidad_provincias + 1 Entonces
				Si provincia_elegida <= cantidad_provincias Entonces
					ciudades[i,2] = provincias[provincia_elegida]
				SiNo
					ciudades[i,2] = "sin provincia"
				FinSi
				valida = Verdadero
			SiNo
				Escribir "Ingrese un valor valido"
			FinSi
		FinMientras
		
		Escribir "Ingrese la poblacion de la ciudad"
		valida = Falso
		Mientras NO valida Hacer
			Leer poblacion
			Si EsNumero(poblacion) Entonces
				Si ConvertirANumero(poblacion) > 0 Entonces
					ciudades[i,3] = poblacion
					valida = Verdadero
				SiNo
					Escribir "Ingrese un valor valido"
				FinSi
			SiNo
				Escribir "Ingrese un valor valido"
			FinSi
		FinMientras		
		i = i + 1
	Hasta que i > cantidad_ciudades
	
	mayor_poblacion = 1
	Escribir "Ud ingreso: "
	Para i<-1 Hasta cantidad_ciudades Con Paso 1 Hacer
		Escribir "Ciudad: ", ciudades[i,1], ", Provincia: ", ciudades[i,2], ", Poblacion: ", ciudades[i,3]
		Si ConvertirANumero(ciudades[mayor_poblacion,3]) < ConvertirANumero(ciudades[i,3]) Entonces
			mayor_poblacion = i
		FinSi
	Fin Para
	Escribir "La ciudad con mayor poblacion es: "
	Escribir "Ciudad: ", ciudades[mayor_poblacion,1], ", Provincia: ", ciudades[mayor_poblacion,2], ", Poblacion: ", ciudades[mayor_poblacion,3]
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
