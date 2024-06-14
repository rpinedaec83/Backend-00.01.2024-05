//4. Hacer un algoritmo en Pseint que lea tres numeros enteros y los muestre de menor a mayor.

SubProceso validacion <- EsNumero ( valor_ingresado )
	numero_texto = "" + valor_ingresado
	validacion = Verdadero
	contador = 1
	digito = SubCadena(numero_texto, contador, contador)
	Si digito ="-" o digito = "+" Entonces
		numero_texto = SubCadena(numero_texto, contador +1 , Longitud(numero_texto))
	FinSi
	Mientras validacion Y contador <= Longitud(numero_texto) Hacer
		digito = SubCadena(numero_texto, contador, contador)
		Segun digito Hacer
			"0","1","2","3","4","5","6","7","8","9": validacion = Verdadero
			De Otro Modo:
				validacion = Falso
		Fin Segun
		contador = contador + 1
	Fin Mientras
	
Fin SubProceso

Proceso Pregunta04
	cantidad=3
	
	Dimension lista_ingresada[cantidad];
	
	Escribir "Ingresaremos ",cantidad, " numeros"
	
	Para i<-1 Hasta cantidad Hacer
		no_es_numero=Verdadero
		Mientras no_es_numero Hacer
			Escribir "Ingrese numero ", i, " :"
			Leer valor_ingresado
			Si EsNumero(valor_ingresado) Entonces
				no_es_numero = Falso
				lista_ingresada[i] = ConvertirANumero(valor_ingresado)
			SiNo
				Escribir "Ingreso un valor inv�lido"
			FinSi
		Fin Mientras
	FinPara 
	
	Para i<-1 Hasta cantidad-1 Hacer
        numero_menor=i
        Para j<-i+1 Hasta cantidad Hacer
            Si lista_ingresada[j]<lista_ingresada[numero_menor] Entonces
                numero_menor=j
            FinSi
        FinPara
	
        auxiliar =lista_ingresada[i]
        lista_ingresada[i]=lista_ingresada[numero_menor]
        lista_ingresada[numero_menor]=auxiliar
    FinPara  

    Escribir "Los numeros ordenados ascendentemente son: "
    Para i<-1 Hasta cantidad Hacer
        Escribir lista_ingresada[i]
    FinPara
FinProceso
