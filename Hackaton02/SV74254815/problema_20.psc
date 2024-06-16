Proceso problema_20
	continuar = Verdadero
	Mientras continuar = Verdadero Hacer
		Escribir "Ingrese 4 números"
		Leer num1, num2, num3, num4
		//NÚMEROS PARES
		si num1 % 2 = 0 Entonces
			numpares = numpares + 1
		FinSi
		si num2 % 2 = 0 Entonces
			numpares = numpares + 1
		FinSi
		si num3 % 2 = 0 Entonces
			numpares = numpares + 1
		FinSi
		si num4 % 2 = 0 Entonces
			numpares = numpares + 1
		FinSi
		Escribir "La cantidad de números pares es de: ", numpares
		//NÚMERO MAYOR
		nummayor = num1
		si num2 > nummayor Entonces
			nummayor = num2
		FinSi
		si num3 > nummayor Entonces
			nummayor = num3
		FinSi
		si num4 > nummayor Entonces
			nummayor = num4
		FinSi
		Escribir "El número mayor es: ", nummayor
		
		//calcular el cuadrado del segundo
		si  num3 % 2 = 0 Entonces 
			potencia = num2 ^ 2
			Escribir "El cuadrado del número ",num2 " es ", potencia
		SiNo
			Escribir "El número ", num3 " no es pa" 
		FinSi
		
		//calcular la media de los 4 números
		si num1 < num4 Entonces
			promedio = (num1 + num2 + num3 + num4)/4
			Escribir "El promedio de los 4 números es: ", promedio
		SiNo
			Escribir "El número ", num1 " es menor que el número ", num4 
		FinSi
		//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
		//Si cumple se cumple la segunda condición, calcular la suma de los 4 números
		si num2 > num3  Entonces
			si num3 >= 50 y num3 <= 700 Entonces
				suma = num1 + num2 + num3 + num4
				Escribir "La suma de los 4 números es: ", suma
			FinSi
		FinSi
		continuar2 = Verdadero
		Mientras continuar2 = Verdadero Hacer
			Escribir "¿Desea ingresar otros 4 números? 1 para SI, 2 para NO"
			Leer respuesta
			si respuesta == 1 Entonces
				continuar = Verdadero
				continuar2 = Falso
			SiNo
				si respuesta == 2 Entonces
					continuar = Falso
					continuar2 = Falso
				SiNo
					Escribir "Opción erronea, intentelo de nuevo"
				FinSi
			FinSi
		FinMientras
	FinMientras
	
	
	
	
FinProceso
