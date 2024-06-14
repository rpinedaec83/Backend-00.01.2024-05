Algoritmo Prob4
	//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor
	Escribir "Ingrese el primer numero";
	leer num1;
	Escribir  "Ingrese el segundo numero";
	Leer  num2;
	Escribir  "Ingrese el tercer numero";
	leer num3;
	
	si num1==num2 y num2 == num3 Entonces
		Escribir  "Los 3 numeros son iguales: ", num1," ", num2," ", num3;  		
	SiNo
		si num1 >num2 y num1>num3 y num2>num3 Entonces
			Escribir  num3," ", num2," ", num1;
		SiNo
			si num2>num1 y num2>num3 y num1>num3 Entonces
				Escribir num3," ", num1," ", num2;
			SiNo
				si num3>num1 y num3>num2 y num1>num2 Entonces
					Escribir num2," ", num1," ", num3;
				SiNo
					si num3>num1 y num3>num2 y num1>num2 Entonces
						Escribir num1," ", num2," ", num3;
					SiNo
						si num2>num1 y num2>num3 y num3>num1 Entonces
							Escribir num1," ", num3," ", num2;
						SiNo
							si num1 >num2 y num1>num3 y num3>num2 Entonces
								Escribir num2," ", num3," ", num1;
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
