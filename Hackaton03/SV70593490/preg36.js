function fibonacciIterativo(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n + 1);
}

// Ejemplo de uso:
let numeroTerminos = 10;
let serieFibonacci = fibonacciIterativo(numeroTerminos);
console.log(`Serie de Fibonacci para los primeros ${numeroTerminos} términos:`, serieFibonacci.join(', '));
