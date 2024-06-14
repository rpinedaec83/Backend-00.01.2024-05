//16. Hacer un algoritmo en Pseint que lea un numero y segun ese numero, indique el dia que corresponde.

Proceso Pregunta16
	Definir numero_ingresado, dia, mes, anio, dia_semana Como Entero
    Definir nombre_dia Como Cadena
	meses =12
	anio = 2024
	Dimension dias_mes[meses],nombre_mes[meses]
	dias_mes[1] = 31
	dias_mes[2] = 29
	dias_mes[3] = 31
	dias_mes[4] = 30
	dias_mes[5] = 31
	dias_mes[6] = 30
	dias_mes[7] = 31
	dias_mes[8] = 31
	dias_mes[9] = 30
	dias_mes[10] = 31
	dias_mes[11] = 30
	dias_mes[12] = 31
	
	nombre_mes[1] = "enero"
	nombre_mes[2] = "febrero"
	nombre_mes[3] = "marzo"
	nombre_mes[4] = "abril"
	nombre_mes[5] = "mayo"
	nombre_mes[6] = "junio"
	nombre_mes[7] = "julio"
	nombre_mes[8] = "agosto"
	nombre_mes[9] = "septiembre"
	nombre_mes[10] = "octubre"
	nombre_mes[11] = "noviembre"
	nombre_mes[12] = "diciembre"
	
	bandera = Verdadero
	Mientras bandera Hacer
		Escribir "Ingrese un numero entre el 1 y 366 para calcular el dia:"
		Leer numero_ingresado
		
		Si numero_ingresado>= 1 y numero_ingresado <= 366 Entonces
			mes = 1
			Mientras numero_ingresado > dias_mes[mes] Hacer
				numero_ingresado = numero_ingresado - dias_mes[mes]
				mes = mes + 1
			FinMientras
			
			dia = numero_ingresado
			dia_semana = 0 

			Para i = 1 Hasta mes-1 Con Paso 1 Hacer
				dia_semana = dia_semana + dias_mes[i]
			FinPara
			dia_semana = dia_semana + dia - 1
			dia_semana = dia_semana % 7
			
			Segun dia_semana Hacer
				0:
					nombre_dia = "lunes"
				1:
					nombre_dia = "martes"
				2:
					nombre_dia = "miercoles"
				3:
					nombre_dia = "jueves"
				4:
					nombre_dia = "viernes"
				5:
					nombre_dia = "sabado"
				6:
					nombre_dia = "domingo"
			FinSegun
		
			Escribir "Es ", nombre_dia, " ", dia, " de ", nombre_mes[mes]
		SiNo
			Escribir "Ingreso un valor invalido"
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
