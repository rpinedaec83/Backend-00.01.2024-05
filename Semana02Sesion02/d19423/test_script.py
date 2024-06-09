import subprocess

def run_test(ejercicio, entradas, salidas_esperadas):
    process = subprocess.Popen(
        ['pseint', '-x', ejercicio],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )
    stdout, stderr = process.communicate(input=entradas)
    
    # Imprimir la salida y el error del proceso
    print("Salida del proceso:")
    print(stdout)
    print("Error del proceso:")
    print(stderr)
    
    # Validar solo las líneas específicas
    lines = stdout.strip().split('\n')
    for expected_line in salidas_esperadas:
        if expected_line not in lines:
            print(f"Fallo al encontrar la línea esperada: {expected_line}")
            return False
    
    return True

def main():
    # Asumimos que el archivo .psc está en el mismo directorio que este script
    ejercicio = 'Calculadora_digito_DNI.psc'
    # Entradas para el proceso, incluyendo el número de DNI y la respuesta a la pregunta
    entradas = '73101361\nN\n'
    salidas_esperadas = [
        "El digito verificador numerico es: 1",
        "El digito verificador alfabetico es: F"
    ]

    if run_test(ejercicio, entradas, salidas_esperadas):
        print("El test paso exitosamente.")
    else:
        print("El test fallo.")

if __name__ == '__main__':
    main()
