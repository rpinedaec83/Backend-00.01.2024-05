Proceso PREGUNTA_20
	Definir  num1,num2,num3,num4,pares,mayor,media,suma Como Entero
	Escribir  "Ingrese los numeros";
	leer num1
	leer num2
	leer num3
	leer num4
	
	pares <-0;
	si num1 mod 2 =0 Entonces
		pares <-pares +1
	FinSi
	si num2 mod 2 =0 Entonces
		pares <-pares +1
	FinSi
	si num3 mod 2 =0 Entonces
		pares <-pares +1
	FinSi
	si num4 mod 2 =0 Entonces
		pares <-pares +1
	FinSi
	Escribir  "Cantidad de numeros pares: ",pares;

	mayor<-num1;
	si num2 >mayor Entonces
		mayor <-num2
	FinSi
	si num3 > mayor Entonces
		mayor <- num3;
	FinSi
	si num4 > mayor Entonces
		mayor <- num4
	FinSi
	Escribir "El numero mayor es: ",mayor
	
	si num3 mod 2=0 Entonces
		escribir "El cuadrado del segundo es ", num2*num2
	FinSi
	
	
	si num1<num4 Entonces
		media<- (num1 +num2+num3+num4)/4
		Escribir  "La media es: ",media
	FinSi
	
	si num2 >num3 Entonces
		si  num3 >=50 y num3<=700 Entonces
			suma <- (num1 +num2+num3+num4)
			Escribir "La suma de los 4 numeros es:", suma
		FinSi
	FinSi
FinProceso