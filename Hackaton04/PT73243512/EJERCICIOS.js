function ejercicio1(){
    let numero1 = prompt("Ingrese el Primer Numero");
    let numero2 = prompt("Ingrese el Segundo Numero");
    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    let resultado = numero1 + numero2;
    
    alert("La suma de: " + numero1 + " + " + numero2 + " = " + resultado);
}

function ejercicio2(){

    let numero1 = prompt("Ingrese el numero base");
    let numero2 = prompt("Ingrese el numero exponente");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    function potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    
    let resultado = potencia(numero1, numero2);
    
    alert("La potencia de " + numero1 + " elevado a " + numero2 + " es: " + resultado);
}

function ejercicio3(){
    let numero1 = prompt("Ingrese el primer Numero");
    let numero2 = prompt("Ingrese el segundo Numero");
    let numero3 = prompt("Ingrese el tercer Numero");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    numero3 = parseInt(numero3);

    function sumOfCubes(...numeros) {
        let sumaCubos = 0;
        for (let i = 0; i < numeros.length; i++) {
            sumaCubos += Math.pow(numeros[i], 3);
        }
        return sumaCubos;
    }
    
    let resultado = sumOfCubes(numero1, numero2, numero3);

    alert("La suma de los cubos de los tres números es: " + resultado);

}

function ejercicio4(){
    let numero1 = prompt("Ingrese la base");
    let numero2 = prompt("Ingrese la altura");
    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    function triArea(base, altura) {
        let area = (1/2) * base * altura;
        return area;
    }

    let areaTriangulo = triArea(numero1, numero2);
 
    alert("El área del triángulo es: " + areaTriangulo);
}

function ejercicio5(){

    let numero1 = prompt("Ingrese el primer número");
    let numero2 = prompt("Ingrese el segundo número");
    let operador = prompt("Ingrese el símbolo de la operación (+, -, /, x, %)");
    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    function calculador(num1, operador, num2) {
        let resultado;
    
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '/':
                resultado = num1 / num2;
                break;
            case 'x':
                resultado = num1 * num2;
                break;
            case '%':
                resultado = num1 % num2;
                break;
            default:
                return "El parámetro no es reconocido";
        }
    
        return resultado;
    }
    
    let resultadoOperacion = calculador(numero1, operador, numero2);

    alert("El resultado de la operación " + numero1 + " " + operador + " " + numero2 + " es: " + resultadoOperacion);
    
}