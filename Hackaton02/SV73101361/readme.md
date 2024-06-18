# Pruebas Automáticas para Archivos PSeInt

Este proyecto contiene un script de Python que ejecuta pruebas automáticas para archivos de PSeInt. El script verifica los resultados de los programas de PSeInt basándose en casos de prueba definidos y compara la salida obtenida con la esperada.

## Requisitos

- Python 3.11
- PSeInt instalado y accesible desde la línea de comandos

## Estructura del Proyecto

- `preguntas_test.py`: El script de Python que realiza las pruebas.
- `pregunta1.psc` a `pregunta40.psc`: Archivos PSeInt que serán probados.

## Uso

1. Clona este repositorio o descarga los archivos en tu máquina local.
2. Asegúrate de que PSeInt esté instalado y que se pueda ejecutar desde la línea de comandos.
3. Navega al directorio del proyecto en tu terminal.
4. Ejecuta el script de pruebas:

```sh
python preguntas_test.py
```

Durante la ejecución de las pruebas, puedes usar *Control + C* o las flechas del teclado *(↑)* o *(↓)* para avanzar de un test a otro.

## Descripción del Script
El script test_pseint.py hace lo siguiente:

1. Define el directorio donde se encuentran los archivos PSeInt.
2. Lista los archivos PSeInt a probar.
3. Define los casos de prueba para cada archivo.
4. Ejecuta cada archivo PSeInt con las entradas de prueba.
5. Compara la salida obtenida con la salida esperada y muestra los resultados.

## Ejemplo de Salida
El script imprimirá mensajes indicando si cada prueba pasó o falló, por ejemplo:

```sh
Prueba para pregunta1.psc con entrada (5, 3): PASADA
Prueba para pregunta2.psc con entrada (3, 4): FALLIDA
Salida obtenida: ...
Salida esperada: ...
```