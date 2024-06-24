1. ¿Cómo defines una función en JavaScript?

	En JavaScript, una función es un bloque de código diseñado para realizar una tarea específica, que puede ser reutilizado en diferentes partes de un programa. Se puede definir de varias maneras:

    Función Declarada:

```javascript
function nombreDeLaFuncion(argumento1, argumento2) {
    // Código a ejecutar
}
```
Ejemplo:

```javascript
function saludar(nombre) {
    console.log("Hola, " + nombre);
}
```
Función Expresada (Expresión de Función):
Las funciones pueden ser anónimas y asignadas a variables:

```javascript
const nombreDeLaFuncion = function(argumento1, argumento2) {
    // Código a ejecutar
};
```
Ejemplo:

```javascript
const saludar = function(nombre) {
    console.log("Hola, " + nombre);
};
```
Funciones Flecha (Arrow Functions):
Introducidas en ES6, permiten una sintaxis más corta para funciones anónimas.

```javascript
const nombreDeLaFuncion = (argumento1, argumento2) => {
    // Código a ejecutar
};
```
Ejemplo:

```javascript
const saludar = nombre => console.log("Hola, " + nombre);
```
Funciones Constructores:
Usadas para crear objetos, se definen utilizando el constructor Function:

```javascript
const miFuncion = new Function('a', 'b', 'return a + b');
console.log(miFuncion(2, 3)); // 5
```