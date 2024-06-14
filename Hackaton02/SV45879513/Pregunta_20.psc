//Hacer un algoritmo en Pseint que lea 4 números enteros positivos y verifique y 
//realice las siguientes operaciones:
//¿Cuántos números son pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcule el cuadrado del segundo.
//	Si el primero es menor que el cuarto, calcule la media de los 4 números.
//		Si el segundo es mayor que el tercero, verifique si el tercero está comprendido entre los valores 
//50 y 700. Si cumple se cumple la segunda condición, calcule la suma de los 4 números.

Proceso  P20
    Definir valor1 Como Entero
	Definir valor2 Como Entero
	Definir valor3 Como Entero
	Definir valor4 Como Entero
	definir par1 como entero
	definir par2 como entero
	definir par3 como entero
	definir par4 como entero
	definir codigotexto como cadena
	definir codigo Como Entero
	definir estado como cadena
	Definir mayor Como Entero
	Definir cua Como Entero
	Definir promedio Como numero
	Definir  suma Como Entero

	Escribir "Ingrear 1er numero"
	leer valor1
	Escribir "Ingrear 2do numero"
	leer valor2
	Escribir "Ingrear 3er numero"
	leer valor3
	Escribir "Ingrear 4to numero"
	leer valor4
	Si valor1>0 y valor2>0 y valor3>0 y valor4>0 Entonces
		//Valores Pares
		Si valor1 MOD 2 = 0 Entonces
			par1 = 1
		SiNo
			par1 = 0
		Fin Si
		Si valor2 MOD 2 = 0 Entonces
			par2 = 1
		SiNo
			par2 = 0
		Fin Si
		Si valor3 MOD 2 = 0 Entonces
			par3 = 1
		SiNo
			par3 = 0
		Fin Si
		Si valor4 MOD 2 = 0 Entonces
			par4 = 1
		SiNo
			par4 = 0
		Fin Si
		
		codigotexto = Concatenar(ConvertirATexto(par1),ConvertirATexto(par2))
		codigotexto = Concatenar(codigotexto,ConvertirATexto(par3))
		codigotexto = Concatenar(codigotexto,ConvertirATexto(par4))
		codigo =ConvertirANumero(codigotexto)
		Segun codigo Hacer
			0:
				estado = "Ninguno"
				Escribir "Valor Par " i estado
			1:
				estado = "4to"
				Escribir "Valor Par " i estado
			10:
				estado = "3ero"
				Escribir "Valor Par " i estado
			11:
				estado = "3ero y 4to"
				Escribir "Valores Pares " i estado
			100:
				estado = "2do"
				Escribir "Valor Par " i estado
			101:
				estado = "2do y 4to"
				Escribir "Valores Pares " i estado
			110:
				estado = "2do y 3ero"
				Escribir "Valores Pares " i estado
			111:
				estado = "2do, 3ero y 4to"
				Escribir "Valores Pares " i estado
			1000:
				estado = "1ero"
				Escribir "Valor Par " i estado
			1001:
				estado = "1ero y 4to"
				Escribir "Valores Pares " i estado
			1010:
				estado = "1ero y 3ero"
				Escribir "Valores Pares " i estado
			1011:
				estado = "1ero, 3ero y 4to"
				Escribir "Valores Pares " i estado
			1100:
				estado = "1ero, 2do"
				Escribir "Valores Pares " i estado
			1101:
				estado = "1ero, 2do y 4to"
				Escribir "Valores Pares " i estado
			1110:
				estado = "1ero, 2do y 3ero"
				Escribir "Valores Pares " i estado
			1111:
				estado = "1ero, 2do, 3ero y 4to"
				Escribir "Valores Pares " i estado
			De Otro Modo:
				Escribir "Codigo incorrecto"
		Fin Segun
		//mayor
		mayor = valor1
		Si mayor < valor2 Entonces
			mayor = valor2
		Fin Si
		Si mayor < valor3 Entonces
			mayor = valor3
		Fin Si
		Si mayor < valor4 Entonces
			mayor = valor4
		Fin Si
		Escribir "Mayor Valor " i mayor
		
		Si par3 = 1 Entonces
			cua = valor2 * valor2
			Escribir "Cuadrado del 2do " i cua
		Fin Si
		
		Si valor1 < valor4 Entonces
			promedio = valor1 +valor2 + valor3 + valor4
			promedio = promedio/4
			Escribir "Promedio " i promedio
		Fin Si
		
		Si valor2 > valor3 y valor3>50 y valor3<700 Entonces
			suma = valor1 +valor2 + valor3 + valor4
			Escribir "Total suma " i suma
		Fin Si
		
	SiNo
		Escribir "Valores no positivos"
	Fin Si
	
FinProceso