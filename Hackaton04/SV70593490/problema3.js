// Definición de la función sumOfCubes
function sumOfCubes(...numbers) {
    return numbers.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}
