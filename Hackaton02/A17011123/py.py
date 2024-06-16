import os

# Obtener el directorio actual
current_directory = os.getcwd()

# Nombre de la carpeta a crear dentro del directorio actual
folder_name = ""

# Crear la ruta completa de la carpeta
folder_path = os.path.join(current_directory, folder_name)

# Crear la carpeta si no existe
os.makedirs(folder_path, exist_ok=True)

# Generar los archivos con el contenido especificado
for i in range(1, 41):
    file_name = f"PREGUNTA_{i}.psc"
    file_path = os.path.join(folder_path, file_name)
    
    # Crear el archivo y escribir el contenido
    with open(file_path, 'w') as file:
        file.write(f"Proceso PREGUNTA_{i}\n\n")
        file.write("FinProceso\n")

print(f"Se han creado {len(os.listdir(folder_path))} archivos en la carpeta '{folder_name}' en el directorio actual.")
