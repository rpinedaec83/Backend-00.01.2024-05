Algoritmo  Pregunta_9
	Escribir "Ingresa el sueldo del trabajador"
	Leer sueldo
	Si sueldo<0 Entonces
		Escribir "El numero ingresado es invalido"
	SiNo
		Si sueldo>2000 Entonces
			aumento=0.05*sueldo
		SiNo
			aumento=0.10*sueldo
		Fin Si
	Fin Si
	Total=sueldo+aumento
	Escribir "El sueldo actual es: $",Total," ya que se tuvo un aumento de $",aumento
FinAlgoritmo

