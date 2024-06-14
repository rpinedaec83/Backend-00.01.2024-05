Algoritmo Prob20
	//Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
	//¿Cuántos números son Pares?
	//¿Cuál es el mayor de todos?
	//Si el tercero es par, calcular el cuadrado del segundo.
	//Si el primero es menor que el cuarto, calcular la media de los 4 números.
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
	//Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	Escribir "Ingrese el primer numero";
	leer num1;
	
	Escribir  "Ingrese el segundo numero";
	Leer  num2;
	
	Escribir  "Ingrese el tercer numero";
	leer num3;
	
	Escribir  "Ingrese el cuarto numero";
	leer num4;
	
	par1 = num1%2
	par2 = num2%2
	par3 = num3%2
	par4 = num4%2
	Escribir "¿Cuántos números son Pares?";
	esPar = 4-(par1+par2+par3+par4)
	Escribir "son ",esPar, " primo";
	
	Escribir "¿Cuál es el mayor de todos?";
	si num1==num2 y num2 == num3 y num3 == num4 Entonces
		Escribir  "Los 4 numeros son iguales"		
	SiNo
		si num1 >num2 y num1>num3 y num1>num4 Entonces
			Escribir  "El mayor es el numero 1"
		SiNo
			si num2>num1 y num2>num3 y num2>num4 Entonces
				Escribir "El mayor es el numero 2"
			SiNo
				si num2>num1 y num2>num3 y num3>num4 Entonces
					Escribir "El mayor es el numero 3"
				SiNo
					Escribir  "El mayor es el numero 4"
				FinSi
			FinSi
		FinSi
	FinSi
	
	Escribir "Si el tercero es par, calcular el cuadrado del segundo";
	si par3 == 0 Entonces
		cuadradoSegundo = num2*num2
		Escribir "El cuadrado del segundo es: ", cuadradoSegundo;
	SiNo
		Escribir  "El tercero es impar"
	FinSi
	
	Escribir "Si el primero es menor que el cuarto, calcular la media de los 4 números.";
	si num1 < num4 Entonces
		media = (num1+num2+num3+num4)/4
		Escribir "la media de los 4 números: ", media;
	FinSi
	
	Escribir "verificar si el tercero esta comprendido entre los valores 50 y 700";
	si num3 < num2 Entonces
		si num3< 700 y num3> 50 Entonces
			suma = num1+num2+num3+num4
			Escribir "El el cuadrado del segundo es: ", cuadradoSegundo;
		FinSi
	FinSi
	
FinAlgoritmo
