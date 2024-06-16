import subprocess

archivos = [
    "pregunta1.psc", "pregunta2.psc", "pregunta3.psc", "pregunta4.psc",
    "pregunta5.psc", "pregunta6.psc", "pregunta7.psc", "pregunta8.psc",
    "pregunta9.psc", "pregunta10.psc", "pregunta11.psc", "pregunta12.psc",
    "pregunta13.psc", "pregunta14.psc", "pregunta15.psc", "pregunta16.psc",
    "pregunta17.psc", "pregunta18.psc", "pregunta19.psc", "pregunta20.psc",
    "pregunta21.psc", "pregunta22.psc", "pregunta23.psc", "pregunta24.psc",
    "pregunta25.psc", "pregunta26.psc", "pregunta27.psc", "pregunta28.psc",
    "pregunta29.psc", "pregunta30.psc", "pregunta31.psc", "pregunta32.psc",
    "pregunta33.psc", "pregunta34.psc", "pregunta35.psc", "pregunta36.psc",
    "pregunta37.psc", "pregunta38.psc", "pregunta39.psc", "pregunta40.psc"
]

casos_de_prueba = {
    "pregunta1.psc": [(123, "Este numero tiene tres digitos"), (50, "Este numero no tiene tres digitos")],
    "pregunta2.psc": [(-5, "el numero es negativo"), (7, "el numero es positivo")],
    "pregunta3.psc": [(54, "El numero 54 es un numero que termina en 4"), (51, "El numero 51 no es un numero que termina en 4")],
    "pregunta4.psc": [((3, 1, 2), "Los numeros de menor a mayor son: 1, 2, 3"), ((5, 8, 6), "Los numeros de menor a mayor son: 5, 6, 8")],
    "pregunta5.psc": [(5, "Total a pagar con descuento: $400"), (25, "Total a pagar con descuento: $1600"), (35, "Total a pagar con descuento: $1680")],
    "pregunta6.psc": [(40, "El sueldo semanal es: $800"), (45, "El sueldo semanal es: $925")],
    "pregunta7.psc": [(('A', 100), "El monto final a pagar es: $90"), (('B', 100), "El monto final a pagar es: $85"), (('C', 100), "El monto final a pagar es: $80"), (('D', 100), "Tipo de membresia no valida.")],
    "pregunta8.psc": [((15, 14, 13), "El estudiante aprobo con un promedio de: 14"), ((12, 13, 14), "El estudiante no aprobo. Su promedio es de: 13")],
    "pregunta9.psc": [(2500, "El aumento del trabajador ha sido de 0.05% por tanto su sueldo ahora es: 2625"), (1500, "El aumento del trabajador ha sido de 0.1% por tanto su sueldo ahora es: 1650")],
    "pregunta10.psc": [(4, "El numero: 4 es par"), (5, "El numero: 5 es impar")], 
    "pregunta11.psc": [((5, 8, 7), "El mayor numero es: 8"), ((4, 4, 4), "Los 3 numeros son iguales")],
    "pregunta12.psc": [((6, 3), "El mayor numero es: 6"), ((7, 7), "Los 2 numeros son iguales")],
    "pregunta13.psc": [('a', "Ingresaste la vocal A"), ('b', "No es una vocal")],
    "pregunta14.psc": [(7, "El numero 7 es primo."), (9, "El numero 9 no es primo.")],
    "pregunta15.psc": [((1, 100), "100 centimetros son 39.3700787402 pulgadas."), ((2, 150), "150 libras son 68.0388 kilogramos.")],
    "pregunta16.psc": [(3, "Miercoles"), (8, "Numero fuera del rango permitido.")],
    "pregunta17.psc": [((23, 59, 59), "La hora dentro de un segundo es: 0:0:0"), ((12, 30, 45), "La hora dentro de un segundo es: 12:30:46")],
    "pregunta18.psc": [(5, "El precio total para el cliente fue de: $50"), (150, "El precio total para el cliente fue de: $1050")],
    "pregunta19.psc": [(12, "El pago total para el empleado es: 112$"), (23, "El pago total para el empleado es: 192$")],
    "pregunta20.psc": [((2, 3, 4, 5), "Cantidad de numeros pares: 2"), ((1, 7, 5, 2), "El numero mayor es: 7")],
    "pregunta21.psc": [(5, "El factorial de 5 es: 120"), (0, "El factorial de 0 es: 1")],
    "pregunta22.psc": [(10, "La suma de los 10 primeros numeros es: 55"), (5, "La suma de los 5 primeros numeros es: 15")],
    "pregunta23.psc": [(10, "La suma de los numeros impares menores o iguales a 10 es: 25"), (7, "La suma de los numeros impares menores o iguales a 7 es: 16")],
    "pregunta24.psc": [("", "La suma de todos los numeros pares hasta 1000 es: 250500")],
    "pregunta25.psc": [(5, "El factorial de 5 es: 120"), (0, "El factorial de 0 es: 1")],
    "pregunta26.psc": [((20, 3), "El cociente es: 6\nEl resto es: 2"), ((15, 4), "El cociente es: 3\nEl resto es: 3")],
    "pregunta27.psc": [("10\n20\n30\n-1", "La media de los numeros ingresados es: 20"), ("5\n15\n-1", "La media de los numeros ingresados es: 10")],
    "pregunta28.psc": [("", "La suma de los 100 primeros numeros es: 5050")],
    "pregunta29.psc": [("", "La suma de los 100 primeros numeros es: 5050")],
    "pregunta30.psc": [("", "La suma de los 100 primeros numeros es: 5050")],
    "pregunta31.psc": [((2, 4, 6, 8, 10, 1, 3, 5, 7, 9), "La media de los numeros pares es: 6\nLa media de los numeros impares es: 5")],
    "pregunta32.psc": [("", "La ciudad con la mayor poblacion es: ")],
    "pregunta33.psc": [("S\nS\nN", "Programa terminado."), ("s\nn", "Programa terminado.")],
    "pregunta34.psc": [  ("", "Tabla de multiplicar del 1:\n1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10")],
    "pregunta35.psc": [((5, 7, 9, 2, 4, 6, 8, 1, 3, 10, 12, 14, 16, 18, 20, 11, 13, 15, 17, 19), "El numero mayor es: 20\nEl numero menor es: 1")],
    "pregunta36.psc": [(10, "\n0\n1\n1\n2\n3\n5\n8\n13\n21\n34")],
    "pregunta37.psc": [((30, 45), "El MCD de 30 y 45 es: 15")],
    "pregunta38.psc": [(28, "El numero 28 es un numero perfecto."), (12, "El numero 12 no es un numero perfecto.")],
    "pregunta39.psc": [(10, "La aproximacion de pi con 10 terminos es: 3.0418396189")],
    "pregunta40.psc": [(10, "La aproximacion de pi con 10 terminos es: 3.1414067185")]
}
def ejecutar_pseint(archivo, entrada, timeout=30):
    comando = f"pseint {archivo}"
    try:
        resultado = subprocess.run(comando, input=entrada, text=True, capture_output=True, shell=True, timeout=timeout)
        return resultado.stdout
    except subprocess.TimeoutExpired:
        return "Tiempo de ejecución excedido"

def realizar_pruebas():
    exitosas = 0
    fallidas = 0

    for archivo in archivos:
        if archivo in casos_de_prueba:
            for entrada, esperado in casos_de_prueba[archivo]:
                # Convertir la entrada a string adecuada para el input
                if isinstance(entrada, tuple):
                    entrada_str = '\n'.join(map(str, entrada))
                else:
                    entrada_str = str(entrada)
                
                salida = ejecutar_pseint(archivo, entrada_str)
                
                if str(esperado) in salida:
                    print(f"Prueba para {archivo} con entrada {entrada}: PASADA")
                    exitosas += 1
                else:
                    print(f"Prueba para {archivo} con entrada {entrada}: FALLIDA")
                    print(f"Salida obtenida: {salida}")
                    print(f"Salida esperada: {esperado}")
                    fallidas += 1

    print("\nResumen de pruebas:")
    print(f"Pruebas exitosas: {exitosas}")
    print(f"Pruebas fallidas: {fallidas}")

realizar_pruebas()