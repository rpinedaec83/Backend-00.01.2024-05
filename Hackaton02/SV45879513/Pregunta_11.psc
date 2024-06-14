//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
			Proceso P11
				Definir monto Como Entero
				Definir aumento Como numero
				Definir totalapagar Como Entero
				
				Escribir "Ingresar Sueldo"
				Leer monto
				
				Si monto > 2000 Entonces
					aumento = monto*0.05
				SiNo
					aumento = monto*0.1
				Fin Si
	
				
				totalapagar = monto + aumento
				escribir "Total" i monto
				escribir "Descuento" i aumento
				escribir "Total a Pagar" i totalapagar
FinProceso
