//Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso Pregunta_37
	Definir numMayor,numMenor,resto Como Entero
	Escribir "Ingrese numero mayor"
	Leer numMayor
	Escribir "Ingrese numero menor"
	Leer numMenor
	Si numMayor>=numMenor Entonces
		Mientras numMenor<>0 Hacer
			resto=numMayor%numMenor;
			numMayor=numMenor;
			numMenor=resto;
		FinMientras
		Escribir "Resultado Final: " numMayor; 
	SiNo
		Escribir "Error no ingreso los datos correctamente"
	Fin Si
	
FinProceso
