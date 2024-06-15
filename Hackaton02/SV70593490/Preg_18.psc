Proceso Pres_18
	
	Definir Precio, ganancia Como Real
	Definir CD Como Entero
	
	
	Definir Precio1, Precio2, Precio3 Como Real
	
	Precio1=10
	Precio2=8
	Precio3=7
	
	Escribir "Ingrese el numero de CD que quiere vender";
	leer CD 
	
	Si CD <= 9 Entonces
		
		Precio=Precio1*CD
		
	SiNo
		Si CD <= 99 Entonces
			
			Precio=Precio2*CD
			
		SiNo
			Si CD <= 499 Entonces
				
				Precio=Precio3*CD
				
			SiNo
				
				Precio=6*CD
				
			FinSi
			
		FinSi
		
	FinSi
	
	ganancia = Precio * 0.0825
	
	Escribir "Ganancias para el vendedor: ",ganancia;
	
	Escribir "Precio total para el cliente: ",Precio;
	
	
	
FinProceso
