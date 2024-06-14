//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

Proceso Pregunta17
	Definir hh, mm, ss Como Entero
	
	bandera = Verdadero
	Escribir "Ingresaremos hh:mm:ss para calcular la hora ingresada mas un segundo"
	Mientras bandera Hacer
		valida = Falso
		Mientras NO valida Hacer
			Escribir "Ingresa hh (0 a 23)"
			Leer hh
			Si hh >= 0 y hh <= 23 Entonces
				valida = Verdadero
			SiNo
				Escribir "Ingrese una opcion valida"
			FinSi
		FinMientras
		
		valida = Falso
		Mientras NO valida Hacer
			Escribir "Ingresa mm (0 a 59)"
			Leer mm
			Si mm >= 0 y mm <= 59 Entonces
				valida = Verdadero
			SiNo
				Escribir "Ingrese una opcion valida"
			FinSi
		FinMientras
		
		valida = Falso
		Mientras NO valida Hacer
			Escribir "Ingresa ss (0 a 59)"
			Leer ss
			Si ss >= 0 y ss <= 59 Entonces
				valida = Verdadero
			SiNo
				Escribir "Ingrese una opcion valida"
			FinSi
		FinMientras
		Escribir "Ingresa ss (0 a 59)"

		ss = ss + 1;
		si (ss = 60) Entonces
			ss = 0;
			mm = mm + 1;
			si (mm = 60) Entonces
				mm = 0;
				hh = hh + 1;
				si (hh = 24)Entonces
					hh = 0;
				FinSi
			FinSi
		FinSi
		
		Escribir "La hora ingresada mas un segundo es: ", hh, " : ", mm, " : ", ss
		
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
