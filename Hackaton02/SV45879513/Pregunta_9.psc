//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.
			Proceso P9
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
