function Ejercicio1(){
    function suma(a, b) {
        return a + b;
    }
    let num1 = parseInt(prompt("Ingrese un número"));
    let num2 = parseInt(prompt("Ingrese otro número"));
    let resultado = suma(num1,num2);
    alert(`Lasuma de los números ${num1}, ${num2} es ${resultado}.`);

}

function Ejercicio2(){
    function potencia (base,exponente){
        return Math.pow(base,exponente)
    }
    let num1 = parseInt(prompt("Ingrese un número para la base"));
    let num2 = parseInt(prompt("Ingrese un número para el exponento"));
    let resultado = potencia(num1, num2)
    alert(`El número ${num1} elevado a la potencia ${num2} es ${resultado}.`);

}

function Ejercicio3(){
    function sumaCubos(...numeros) {
        return numeros.reduce((suma, num) => suma + Math.pow(num, 3), 0);
    }
    function obtenerNumeros() {
        let numeros = [];
        while (true) {
            let input = prompt("Ingresa un número (o presiona Cancelar para terminar):");
            if (input === null) break;
            let numero = parseFloat(input);
            if (!isNaN(numero)) {
                numeros.push(numero);
            } else {
                alert("Por favor, ingresa un número válido.");
            }
        }
        return numeros;
    }
    function calcularSumaCubos() {
        let numerosIngresados = obtenerNumeros();
        if (numerosIngresados.length === 0) {
            alert("No se ingresaron números.");
        } else {
            let resultado = sumaCubos(...numerosIngresados);
            alert(`La suma de los cubos de ${numerosIngresados.join(', ')} es: ${resultado}`);
        }
    }
    calcularSumaCubos();
}

function Ejercicio4(){
    function AreaTri(base,altura){
        return (base * altura)/ 2;
    }
    let num1 = parseFloat(prompt("Ingrese la base del triángulo"))
    let num2 = parseFloat(prompt("Ingrese la altura del triángulo"))
    resultado = AreaTri(num1,num2)
    alert(`El área del triángulo con base ${num1} y altura ${num2} es ${resultado}.`);
}

function Ejercicio5(){
    function calculator(num1, num2, operation) {
        switch (operation) {
          case '+':
            return num1 + num2;
          case '-':
            return num1 - num2;
          case '/':
            if (num2 === 0) {
              return "Error: División por cero";
            }
            return num1 / num2;
          case 'x':
            return num1 * num2;
          case '%':
            if (num2 === 0) {
              return "Error: División por cero";
            }
            return num1 % num2;
          default:
            return "El parámetro no es reconocido";
        }
    }
    let num1 = parseFloat(prompt("Ingrese el primer número"))
    let operacion = prompt("Ingrese una operación: +, -, *, / ")
    let num2 = parseFloat(prompt("Ingrese el segundo número"))
    let resultado = calculator(num1,num2,operacion)
    if (resultado === "El parámetro no es reconocido"){
        alert("El parámetro no es reconocido")
    }else{
        alert(`La operación ${num1}${operacion}${num2} es igual a ${resultado}.`);
    }
}



function EjerDoc1(){
    const pedirDatos = () => {
        const nombre = prompt("Ingresa tu nombre:");
        const apellido = prompt("Ingresa tu apellido:");
        const edad = prompt("Ingresa tu edad:");
      
        return { nombre, apellido, edad };
      };
      
      const presentacion = ({ nombre, apellido, edad }) => `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
      
      const main = () => {
        const datos = pedirDatos();
        const mensaje = presentacion(datos);
        alert(mensaje);
      };
      
      main();
    
}

function EjerDoc2(){
    function sumaCubos(...numeros) {
        return numeros.reduce((suma, num) => suma + Math.pow(num, 3), 0);
    }
    function obtenerNumeros() {
        let numeros = [];
        while (true) {
            let input = prompt("Ingresa un número (o presiona Cancelar para terminar):");
            if (input === null) break;
            let numero = parseFloat(input);
            if (!isNaN(numero)) {
                numeros.push(numero);
            } else {
                alert("Por favor, ingresa un número válido.");
            }
        }
        return numeros;
    }
    function calcularSumaCubos() {
        let numerosIngresados = obtenerNumeros();
        if (numerosIngresados.length === 0) {
            alert("No se ingresaron números.");
        } else {
            let resultado = sumaCubos(...numerosIngresados);
            alert(`La suma de los cubos de ${numerosIngresados.join(', ')} es: ${resultado}`);
        }
    }
    calcularSumaCubos();
    
}

function EjerDoc3(){
    function TipoValor(value) {
        if (value === null) return 'null';
        if (Array.isArray(value)) return 'array';
        return typeof value;
    }
    function IngreseValor() {
        let input = prompt("Ingresa un valor:");
        if (input === "null") {
            parsedInput = null;
        } else if (input === "true" || input === "false") {
            parsedInput = (input === "true");
        } else if (!isNaN(Number(input))) {
            parsedInput = Number(input);
        } else {
            try {
                parsedInput = JSON.parse(input);
            } catch (e) {
                parsedInput = input;
            }
        }
        alert("El tipo de valor ingresado es: " + TipoValor(parsedInput));
    }
    IngreseValor();
}

function EjerDoc4(){
    function suma(...numeros) {
        return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    }
    function CantidadNum() {
        let numEntrada = parseInt(prompt("¿Cuántos números deseas sumar?"));
        if (isNaN(numEntrada) || numEntrada <= 0) {
            alert("Por favor, ingresa un número válido de entradas.");
            return;
        }
        let numeros = [];
        for (let i = 0; i < numEntrada; i++) {
            let input = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
            if (isNaN(input)) {
                alert("Por favor, ingresa un número válido.");
                return;
            }
            numeros.push(input);
        }
        let result = suma(...numeros);
        alert(`La suma de los números ingresados es: ${result}`);
    }
    CantidadNum();
}

function EjerDoc5(){
    function filtrarCadenas(valores) {
        return valores.filter(valor => typeof valor === 'string');
    }
    function solicitarCadenas() {
        let cantidadEntradas = parseInt(prompt("¿Cuántos valores deseas ingresar?"));
        if (isNaN(cantidadEntradas) || cantidadEntradas <= 0) {
            alert("Por favor, ingresa un número válido de entradas.");
            return;
        }
        let valores = [];
        for (let i = 0; i < cantidadEntradas; i++) {
            let entrada = prompt(`Ingresa el valor ${i + 1}:`);
            let valorParseado = isNaN(entrada) ? entrada : (entrada.trim() === '' ? entrada : JSON.parse(entrada));
            valores.push(valorParseado);
        }
        let cadenasFiltradas = filtrarCadenas(valores);
        alert(`Los valores que son cadenas de texto son: ${cadenasFiltradas.join(', ')}`);
    }
    solicitarCadenas();
}

function EjerDoc6(){
    function encontrarMinMax(numeros) {
        let min = Math.min(...numeros);
        let max = Math.max(...numeros);
        return [min, max];
    }
    function EncontrarMinyMax() {
        let cantidadNumeros = parseInt(prompt("¿Cuántos números deseas ingresar?"));
        if (isNaN(cantidadNumeros) || cantidadNumeros <= 0) {
            alert("Por favor, ingresa un número válido de entradas.");
            return;
        }
        let numeros = [];
        for (let i = 0; i < cantidadNumeros; i++) {
            let entrada = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
            if (isNaN(entrada)) {
                alert("Por favor, ingresa un número válido.");
                return;
            }
            numeros.push(entrada);
        }
        let [min, max] = encontrarMinMax(numeros);
        alert(`El número mínimo es: ${min}\nEl número máximo es: ${max}`);
    }
    EncontrarMinyMax();
}

function EjerDoc7(){
    function NumeroTelefono(numeros) {
        if (numeros.length !== 10 || !numeros.every(num => num >= 0 && num <= 9)) {
            return "Entrada inválida. Deben ser 10 números enteros entre 0 y 9.";
        }
        let numeroDeTelefono = `(${numeros[0]}${numeros[1]}${numeros[2]}) ${numeros[3]}${numeros[4]}${numeros[5]}-${numeros[6]}${numeros[7]}${numeros[8]}${numeros[9]}`;
        return numeroDeTelefono;
    }
    function solicitarNumeros() {
        let numeros = [];
        for (let i = 0; i < 10; i++) {
            let entrada = parseInt(prompt(`Ingresa el número ${i + 1} (entre 0 y 9):`));
            if (isNaN(entrada) || entrada < 0 || entrada > 9) {
                alert("Por favor, ingresa un número válido entre 0 y 9.");
                return;
            }
            numeros.push(entrada);
        }
        let numeroFormateado = NumeroTelefono(numeros);
        alert(`El número de teléfono es: ${numeroFormateado}`);
    }
    solicitarNumeros();
}

function EjerDoc8(){
    function mayorSubmatriz(matrices) {
        return matrices.map(submatriz => Math.max(...submatriz));
    }
    function encontrarMatrizMayor() {
        let cantidadMatrices = parseInt(prompt("¿Cuántas matrices deseas ingresar?"));
        if (isNaN(cantidadMatrices) || cantidadMatrices <= 0) {
            alert("Por favor, ingresa un número válido de matrices.");
            return;
        }
        let matrices = [];
        for (let i = 0; i < cantidadMatrices; i++) {
            let cantidadNumeros = parseInt(prompt(`¿Cuántos números tendrá la matriz ${i + 1}?`));
            if (isNaN(cantidadNumeros) || cantidadNumeros <= 0) {
                alert("Por favor, ingresa un número válido de números para la matriz.");
                return;
            }
            let submatriz = [];
            for (let j = 0; j < cantidadNumeros; j++) {
                let entrada = parseFloat(prompt(`Ingresa el número ${j + 1} de la matriz ${i + 1}:`));
                if (isNaN(entrada)) {
                    alert("Por favor, ingresa un número válido.");
                    return;
                }
                submatriz.push(entrada);
            }
            matrices.push(submatriz);
        }
        let mayores = mayorSubmatriz(matrices);
        alert(`Los mayores números de cada submatriz son: ${mayores.join(', ')}`);
    }
    encontrarMatrizMayor();
}

function EjerDoc9(){
    function encontrarIndices(palabra, caracter) {
        let primerIndice = palabra.indexOf(caracter);
        let ultimoIndice = palabra.lastIndexOf(caracter);
        if (primerIndice === -1) {
            return `El carácter '${caracter}' no se encuentra en la palabra '${palabra}'.`;
        }
        return `El primer índice de '${caracter}' es: ${primerIndice}\nEl último índice de '${caracter}' es: ${ultimoIndice}`;
    }
    function valoresIndices() {
        let palabra = prompt("Ingresa una palabra:");
        if (!palabra) {
            alert("Por favor, ingresa una palabra válida.");
            return;
        }
        let caracter = prompt("Ingresa un carácter para buscar en la palabra:");
        if (!caracter || caracter.length !== 1) {
            alert("Por favor, ingresa un solo carácter válido.");
            return;
        }
        let resultado = encontrarIndices(palabra, caracter);
        alert(resultado);
    }
    valoresIndices();
    
}

function EjerDoc10(){
    function convertirObjeto(objeto) {
        return Object.entries(objeto);
    }
    function solicitarObjeto() {
        let objetoString = prompt("Ingresa un objeto en formato JSON (ejemplo: {\"nombre\":\"Juan\",\"edad\":30}):");
        let objeto;
        try {
            objeto = JSON.parse(objetoString);
        } catch (error) {
            alert("Formato de objeto inválido. Por favor, ingresa un objeto en formato JSON válido.");
            return;
        }
        let matriz = convertirObjeto(objeto);
        alert(`La matriz de pares clave-valor es: ${JSON.stringify(matriz)}`);
        alert(matriz);
    }
    solicitarObjeto();
}

function EjerDoc11(){
    function presupuestos(personas) {
        return personas.reduce((suma, persona) => suma + persona.presupuesto, 0);
    }
    function solicitarDatos() {
        let cantidadPersonas = parseInt(prompt("¿Cuántas personas deseas ingresar?"));
        if (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
            alert("Por favor, ingresa un número válido de personas.");
            return;
        }
        let personas = []; 
        for (let i = 0; i < cantidadPersonas; i++) {
            let nombre = prompt(`Ingresa el nombre de la persona ${i + 1}:`);
            let edad = parseInt(prompt(`Ingresa la edad de ${nombre}:`));
            let presupuesto = parseFloat(prompt(`Ingresa el presupuesto de ${nombre}:`));

            if (!nombre || isNaN(edad) || isNaN(presupuesto)) {
                alert("Por favor, ingresa datos válidos para nombre, edad y presupuesto.");
                return;
            }
            personas.push({ nombre: nombre, edad: edad, presupuesto: presupuesto });
        }
        let presupuestoTotal = presupuestos(personas);
        alert(`La suma de los presupuestos es: ${presupuestoTotal}`);
        alert(personas);
    }
    solicitarDatos();

}

function EjerDoc12(){
    function NombresEstudiantes(estudiantes) {
        return estudiantes.map(estudiante => estudiante.nombre);
    }
    function DatosyNombres() {
        let cantidadEstudiantes = parseInt(prompt("¿Cuántos estudiantes deseas ingresar?"));
        if (isNaN(cantidadEstudiantes) || cantidadEstudiantes <= 0) {
            alert("Por favor, ingresa un número válido de estudiantes.");
            return;
        }
        let estudiantes = [];
        for (let i = 0; i < cantidadEstudiantes; i++) {
            let nombre = prompt(`Ingresa el nombre del estudiante ${i + 1}:`);

            if (!nombre) {
                alert("Por favor, ingresa un nombre válido para el estudiante.");
                return;
            }
            estudiantes.push({ nombre: nombre });
        }
        let nombresEstudiantes = NombresEstudiantes(estudiantes);
        alert(`Los nombres de los estudiantes son: ${nombresEstudiantes.join(', ')}`);
        alert(estudiantes); 
    }
    DatosyNombres();
}

function EjerDoc13(){
    function objetoAMatriz(objeto) {
        return Object.entries(objeto);
    }
    function solicitarDatos() {
        let entradaObjeto = prompt("Ingresa un objeto en formato JSON (ejemplo: {\"gustos\": 2, \"disgustos\": 3, \"seguidores\": 10}):");
        let objeto;
        try {
            objeto = JSON.parse(entradaObjeto);
        } catch (error) {
            alert("Formato de objeto inválido. Por favor, ingresa un objeto en formato JSON válido.");
            return;
        }
        let matriz = objetoAMatriz(objeto);
        alert(`La matriz de claves y valores es: ${JSON.stringify(matriz)}`);
        alert(matriz); 
    }
    solicitarDatos();
}

function EjerDoc14(){
    function sumaCuadrados(n) {
        let suma = 0;
        for (let i = 1; i <= n; i++) {
            suma += i * i;
        }
        return suma;
    }
    function CalcularSumaCuadrados() {
        let numero = parseInt(prompt("Ingresa un número:"));

        if (isNaN(numero) || numero <= 0) {
            alert("Por favor, ingresa un número válido mayor que 0.");
            return;
        }
        let resultado = sumaCuadrados(numero);
        alert(`La suma de los cuadrados de los números hasta ${numero} es: ${resultado}`);
        alert(`Suma de cuadrados hasta ${numero}: ${resultado}`); 
    }
    CalcularSumaCuadrados();

}

function EjerDoc15(){
    function multiplicarLongitud(matriz) {
        let longitud = matriz.length;
        return matriz.map(valor => valor * longitud);
    }
    function solicitarDatos() {
        let entrada = prompt("Ingresa una lista de números separados por comas (ejemplo: 2, 3, 1, 0):");
        let matriz = entrada.split(',').map(Number);
        if (matriz.some(isNaN)) {
            alert("Por favor, ingresa una lista válida de números.");
            return;
        }
        let resultado = multiplicarLongitud(matriz);
        alert(`La matriz resultante es: [${resultado.join(', ')}]`);
        alert(`Matriz original: [${matriz.join(', ')}]`);
        alert(`Matriz resultante: [${resultado.join(', ')}]`);
    }
    solicitarDatos();
}

function EjerDoc16(){
    function cuentaRegresiva(numero) {
        let matriz = [];
        for (let i = numero; i >= 0; i--) {
            matriz.push(i);
        }
        return matriz;
    }

    function MostrarResultado() {
        let numero = parseInt(prompt("Ingrese un número:"));
        if (isNaN(numero) || numero < 0) {
            alert("Por favor, ingrese un número válido mayor o igual a 0.");
            return;
        }
        let resultado = cuentaRegresiva(numero);
        alert("Cuenta regresiva: " + resultado.join(", "));
    }
    MostrarResultado();
}

function EjerDoc17(){
    function diferenciaMaxMin(matriz) {
        let maximo = Math.max(...matriz);
        let minimo = Math.min(...matriz);
        return maximo - minimo;
    }

    function MostrarResultado() {
        let entrada = prompt("Ingrese una lista de números separados por comas:");
        if (entrada === null) {
            alert("Operación cancelada.");
            return;
        }

        let matriz = entrada.split(',').map(Number);

        if (matriz.some(isNaN)) {
            alert("Por favor, ingrese una lista válida de números.");
            return;
        }

        let diferencia = diferenciaMaxMin(matriz);
        alert("La diferencia entre el número más grande y el más pequeño es: " + diferencia);
    }
    MostrarResultado();
}

function EjerDoc18(){
    function filtrarEnteros(matriz) {
        return matriz.filter(elemento => Number.isInteger(elemento));
    }
    function MostrarResultado() {
        let entrada = prompt("Ingrese una lista de elementos separados por comas (puede incluir números y cadenas):");
        if (entrada === null) {
            alert("Operación cancelada.");
            return;
        }
        let matriz = entrada.split(',').map(elemento => {
            let numero = Number(elemento.trim());
            return isNaN(numero) ? elemento.trim() : numero;
        });
        let matrizFiltrada = filtrarEnteros(matriz);
        alert("La nueva matriz que solo contiene enteros es: [" + matrizFiltrada.join(", ") + "]");
    }
    MostrarResultado();

}

function EjerDoc19(){
    function repetirElemento(elemento, veces) {
        let matriz = [];
        for (let i = 0; i < veces; i++) {
            matriz.push(elemento);
        }
        return matriz;
    }
    function mostrarResultado() {
        let elemento = prompt("Ingrese el elemento que desea repetir:");
        if (elemento === null) {
            alert("Operación cancelada.");
            return;
        }
        let veces = parseInt(prompt("Ingrese la cantidad de veces que desea repetir el elemento:"));
        if (isNaN(veces) || veces < 0) {
            alert("Por favor, ingrese un número válido mayor o igual a 0.");
            return;
        }
        let resultado = repetirElemento(elemento, veces);
        alert("El resultado es: [" + resultado.join(", ") + "]");
    }
    mostrarResultado();
}

function EjerDoc20(){
    function vreplace(cadena, vocal) {
        return cadena.replace(/[aeiouAEIOU]/g, vocal);
    }

    function mostrarResultado() {
        let cadena = prompt("Ingrese una cadena de texto:");
        if (cadena === null) {
            alert("Operación cancelada.");
            return;
        }

        let vocal = prompt("Ingrese una vocal para reemplazar las vocales en la cadena:");
        if (vocal === null) {
            alert("Operación cancelada.");
            return;
        }

        if (!/^[aeiouAEIOU]$/.test(vocal)) {
            alert("Por favor, ingrese una vocal válida.");
            return;
        }

        let resultado = vreplace(cadena, vocal);
        alert("La cadena resultante es: " + resultado);
    }
    mostrarResultado();
}

function EjerDoc21(){
    function findNemo(cadena) {
        let palabras = cadena.split(' ');
        let posicion = palabras.indexOf('Nemo');
        
        if (posicion !== -1) {
            return `¡Encontré a Nemo en ${posicion + 1}!`;
        } else {
            return "No se encontró a Nemo :(";
        }
    }
    function mostrarResultado() {
        let cadena = prompt("Ingrese una cadena de palabras que tenga la palabra (Nemo):");
        if (cadena === null || cadena.trim() === "") {
            alert("No se ingresó ninguna cadena. Inténtalo de nuevo.");
            return;
        }
        let resultado = findNemo(cadena);
        alert(resultado);
    }
    mostrarResultado();

}

function EjerDoc22(){
    function capitalizarUltimaLetra(cadena) {
        let palabras = cadena.split(' ');
        for (let i = 0; i < palabras.length; i++) {
            let palabra = palabras[i];
            if (palabra.length > 0) {
                let ultimaLetra = palabra.charAt(palabra.length - 1).toUpperCase();
                palabras[i] = palabra.slice(0, -1) + ultimaLetra;
            }
        }
        return palabras.join(' ');
    }
    function mostrarResultado() {
        let cadena = prompt("Ingrese una cadena de palabras:");
        if (cadena === null || cadena.trim() === "") {
            alert("No se ingresó ninguna cadena. Inténtalo de nuevo.");
            return;
        }
        let resultado = capitalizarUltimaLetra(cadena);
        alert("Resultado: " + resultado);
    }
    mostrarResultado();
}



