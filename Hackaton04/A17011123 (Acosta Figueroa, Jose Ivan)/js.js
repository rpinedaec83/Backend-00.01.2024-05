// Funciones definidas usando la sintaxis de función clásica

function sumar(a, b) {
    return a + b;
}

function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

function sumaDeCubos() {
    var numeros = Array.from(arguments);
    return numeros.reduce(function(suma, num) {
        return suma + Math.pow(num, 3);
    }, 0);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calculator(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'No se puede dividir por cero';
        case '%':
            return num2 !== 0 ? num1 % num2 : 'No se puede dividir por cero';
        default:
            return 'El parámetro no es reconocido';
    }
}

// Funciones auxiliares para manejo de inputs y errores

function getInputs() {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var input3 = document.getElementById('input3').value;
    return [input1, input2, input3];
}

function clearInputs() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
}

function showError(message) {
    document.getElementById('result').innerHTML = `<span class="text-danger">${message}</span>`;
}

function showResult(result) {
    document.getElementById('result').innerHTML = result;
}

// Funciones de demostración para los botones

function sumarDemo() {
    var [num1, num2] = getInputs().map(parseFloat);
    if (isNaN(num1) || isNaN(num2)) {
        showError('Por favor, ingrese ambos números para sumar.');
        return;
    }
    var resultado = sumar(num1, num2);
    showResult(`La suma de ${num1} y ${num2} es: ${resultado}`);
    clearInputs();
}

function potenciaDemo() {
    var [base, exponente] = getInputs().map(parseFloat);
    if (isNaN(base) || isNaN(exponente)) {
        showError('Por favor, ingrese la base y el exponente.');
        return;
    }
    var resultado = potencia(base, exponente);
    showResult(`El resultado de ${base} elevado a ${exponente} es: ${resultado}`);
    clearInputs();
}

function sumaDeCubosDemo() {
    var input = document.getElementById('input1').value;
    if (input.trim() === '') {
        showError('Por favor, ingrese los números separados por comas.');
        return;
    }
    var numeros = input.split(',').map(function(num) {
        return parseFloat(num.trim());
    });
    if (numeros.some(isNaN)) {
        showError('Por favor, asegúrese de que todos los valores sean números.');
        return;
    }
    var resultado = sumaDeCubos.apply(null, numeros);
    showResult(`La suma de los cubos de ${numeros.join(', ')} es: ${resultado}`);
    clearInputs();
}

function areaTrianguloDemo() {
    var [base, altura] = getInputs().map(parseFloat);
    if (isNaN(base) || isNaN(altura)) {
        showError('Por favor, ingrese la base y la altura del triángulo.');
        return;
    }
    var resultado = areaTriangulo(base, altura);
    showResult(`El área de un triángulo con base ${base} y altura ${altura} es: ${resultado}`);
    clearInputs();
}

function calculatorDemo() {
    var [num1, operador, num2] = getInputs();
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    operador = operador.trim();
    if (isNaN(num1) || isNaN(num2) || operador === '') {
        showError('Por favor, ingrese dos números y un operador válido.');
        return;
    }
    var resultado = calculator(num1, operador, num2);
    showResult(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
    clearInputs();
}

//Seccion 2

// Función: Concatenar Nombre
const concatenarNombre = () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const resultado = `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
    document.getElementById('resultado1').innerText = resultado;
  };
  
  // Función: Suma de Cubos
  const sumaDeCubos2 = () => {
    const input = document.getElementById('cubosInput').value.split(',').map(Number);
    const suma = input.reduce((acum, num) => acum + Math.pow(num, 3), 0);
    document.getElementById('resultado2').innerText = suma;
  };
  
  // Función: Verificar Tipo
  const verificarTipo = () => {
    const input = document.getElementById('tipoInput').value;
    let valor;
    try {
      valor = JSON.parse(input);
    } catch {
      valor = input;
    }
    const tipo = typeof valor;
    document.getElementById('resultado3').innerText = tipo;
  };
  
  // Función: Sumar Todos los Argumentos
  const sumarTodosLosArgumentos = () => {
    const input = document.getElementById('sumarArgumentosInput').value.split(',').map(Number);
    const sumar = (...args) => args.reduce((acum, num) => acum + num, 0);
    document.getElementById('resultado4').innerText = sumar(...input);
  };
  
  // Función: Filtrar Cadenas
  const filtrarCadenas = () => {
    const input = document.getElementById('filtrarCadenasInput').value.split(',');
    const filtrado = input.filter(item => isNaN(item));
    document.getElementById('resultado5').innerText = filtrado;
  };
  
  // Función: Mínimo y Máximo
  const minMax = () => {
    const input = document.getElementById('minMaxInput').value.split(',').map(Number);
    const minimo = Math.min(...input);
    const maximo = Math.max(...input);
    document.getElementById('resultado6').innerText = `[${minimo}, ${maximo}]`;
  };
  
  // Función: Formatear Número de Teléfono
  const formatearNumeroTelefono = () => {
    const input = document.getElementById('numeroTelefonoInput').value.split(',').map(Number);
    if (input.length !== 10) {
      document.getElementById('resultado7').innerText = 'Debes ingresar exactamente 10 dígitos.';
      return;
    }
    const formato = `(${input.slice(0, 3).join('')}) ${input.slice(3, 6).join('')}-${input.slice(6).join('')}`;
    document.getElementById('resultado7').innerText = formato;
  };
  
  // Función: Encontrar los Números más Grandes
  const encontrarNumerosMasGrandes = () => {
    const input = document.getElementById('encontrarNumerosGrandesInput').value.split(';').map(str => str.slice(1, -1).split(',').map(Number));
    const mayores = input.map(arr => Math.max(...arr));
    document.getElementById('resultado8').innerText = mayores;
  };
  
  // Función: Índice de Carácter
  const indiceCaracter = () => {
    const cadena = document.getElementById('indiceCaracterCadena').value;
    const caracter = document.getElementById('indiceCaracter').value;
    const primero = cadena.indexOf(caracter);
    const ultimo = cadena.lastIndexOf(caracter);
    document.getElementById('resultado9').innerText = `[${primero}, ${ultimo}]`;
  };
  
  // Función: Convertir Objeto a Matriz
  const convertirObjetoAMatriz = () => {
    const input = document.getElementById('objetoAMatrizInput').value;
    const objeto = JSON.parse(input);
    const matriz = Object.entries(objeto);
    document.getElementById('resultado10').innerText = JSON.stringify(matriz);
  };
  
  // Función: Obtener Presupuestos
  const obtenerPresupuestos = () => {
    const input = document.getElementById('obtenerPresupuestosInput').value;
    const personas = JSON.parse(input);
    const totalPresupuestos = personas.reduce((acum, persona) => acum + persona.presupuesto, 0);
    document.getElementById('resultado11').innerText = totalPresupuestos;
  };
  
  // Función: Obtener Nombres de Estudiantes
  const obtenerNombresEstudiantes = () => {
    const input = document.getElementById('obtenerNombresEstudiantesInput').value;
    const estudiantes = JSON.parse(input);
    const nombres = estudiantes.map(estudiante => estudiante.nombre);
    document.getElementById('resultado12').innerText = nombres;
  };
  
  // Función: Convertir Objeto a Matriz de Claves y Valores
  const convertirObjetoAMatrizClavesValores = () => {
    const input = document.getElementById('objetoAMatrizClavesValoresInput').value;
    const objeto = JSON.parse(input);
    const matriz = Object.entries(objeto);
    document.getElementById('resultado13').innerText = JSON.stringify(matriz);
  };
  
  // Función: Suma de Cuadrados
  const sumaDeCuadrados = () => {
    const n = Number(document.getElementById('sumaCuadradosInput').value);
    const suma = Array.from({ length: n }, (_, i) => Math.pow(i + 1, 2)).reduce((acum, num) => acum + num, 0);
    document.getElementById('resultado14').innerText = suma;
  };
  
  // Función: Multiplicar por Longitud
  const multiplicarPorLongitud = () => {
    const input = document.getElementById('multiplicarPorLongitudInput').value.split(',').map(Number);
    const longitud = input.length;
    const resultado = input.map(num => num * longitud);
    document.getElementById('resultado15').innerText = resultado;
  };
  
  // Función: Cuenta Regresiva
  const cuentaRegresiva = () => {
    const n = Number(document.getElementById('cuentaRegresivaInput').value);
    const resultado = Array.from({ length: n + 1 }, (_, i) => n - i);
    document.getElementById('resultado16').innerText = resultado;
  };
  
  // Función: Diferencia Máximo y Mínimo
  const diferenciaMaxMin = () => {
    const input = document.getElementById('diferenciaMaxMinInput').value.split(',').map(Number);
    const min = Math.min(...input);
    const max = Math.max(...input);
    const diferencia = max - min;
    document.getElementById('resultado17').innerText = diferencia;
  };
  
  // Función: Filtrar Lista
  const filtrarLista = () => {
    const input = document.getElementById('filtrarListaInput').value.split(',');
    const filtrado = input.filter(item => !isNaN(item)).map(Number);
    document.getElementById('resultado18').innerText = filtrado;
  };
  
  // Función: Repetir Elemento
  const repetirElemento = () => {
    const elemento = document.getElementById('repetirElemento').value;
    const veces = Number(document.getElementById('repetirVeces').value);
    const resultado = Array(veces).fill(elemento);
    document.getElementById('resultado19').innerText = resultado;
  };
  
  // Función: Reemplazar Vocales
  String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/gi, vocal);
  };
  const reemplazarVocales = () => {
    const cadena = document.getElementById('reemplazarVocalesInput').value;
    const vocal = document.getElementById('vocalReemplazo').value;
    const resultado = cadena.vreplace(vocal);
    document.getElementById('resultado20').innerText = resultado;
  };
  
  // Función: Encontrar a Nemo
  const encontrarNemo = () => {
    const cadena = document.getElementById('encontrarNemoInput').value;
    const palabras = cadena.split(' ');
    const posicion = palabras.indexOf('Nemo') + 1;
    const resultado = `¡Encontré a Nemo en ${posicion}!`;
    document.getElementById('resultado21').innerText = resultado;
  };
  
  // Función: Capitalizar Última Letra
  const capitalizarUltimaLetra = () => {
    const cadena = document.getElementById('capitalizarUltimaLetraInput').value;
    const resultado = cadena.split(' ').map(palabra => palabra.slice(0, -1) + palabra.slice(-1).toUpperCase()).join(' ');
    document.getElementById('resultado22').innerText = resultado;
  };
  

