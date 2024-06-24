Proceso PREGUNTA_04
	//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Definir num1, num2, num3 Como Entero
	Escribir "Ingrese primer numero "
	leer num1
	Escribir "Ingrese segundo numero "
	leer num2
	Escribir "Ingrese tercer numero "
	leer num3
	Si num1<num2 y num1<num3 y num2<num3 Entonces
		Escribir num1," ",num2," ",num3
	FinSi
	Si num1<num2 y num1<num3 y num3<num2 Entonces
		Escribir num1," ",num3," ",num2
	FinSi
	Si num2<num1 y num2<num3 y num1<num3 Entonces
		Escribir num2," ",num1," ",num3
	FinSi
	Si num2<num1 y num2<num3 y num3<num1 Entonces
		Escribir num2," ",num3," ",num1
	FinSi
	si num3<num1 y num3<num2 y num2<num3 Entonces
		Escribir num3," ",num2," ",num3
	FinSi
	si num3<num1 y num3<num2 y num3<num2 Entonces
		Escribir num3," ",num3," ",num2
	
	Fin Si
FinProceso
