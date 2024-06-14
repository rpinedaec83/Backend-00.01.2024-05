Algoritmo Pregunta_6
	Escribir "Ingrese el numero de horas trabajadas"
	Definir horasT Como Entero
	Leer horasT
	Si horasT<0 Entonces
		Escribir "El numero de horas ingresado es invalido"
		
	SiNo
		Si horasT>40 Entonces
			pago=20*40+25*(horasT-40)
			Escribir "El pago total es: ",pago
		SiNo
			Si horasT<=40 Entonces
				pago=20*horasT
				Escribir "El pago total es: ",pago
			SiNo
			Fin Si
		Fin Si
	Fin Si

FinAlgoritmo

