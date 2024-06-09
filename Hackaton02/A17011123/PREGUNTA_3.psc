Proceso PREGUNTA_3
	Escribir  "Ingrese un numero"
	Leer el_numero
	
	Definir ultimo Como Caracter
	ultimo=   SubCadena(el_numero,Longitud(el_numero),Longitud(el_numero))
	Si ultimo="4" Entonces
		Escribir " Si es cuatro :) "
	SiNo
		Escribir " No es cuatro :(  es "+ultimo
	Fin Si
	Escribir ultimo
FinProceso
