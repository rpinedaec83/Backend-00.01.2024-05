function obtenerTipoDeValor(valor) {
    return typeof valor;
  }
  
  // Ejemplos de uso:
  console.log(obtenerTipoDeValor(42)); // "number"
  console.log(obtenerTipoDeValor("Hola")); // "string"
  console.log(obtenerTipoDeValor(true)); // "boolean"
  console.log(obtenerTipoDeValor(null)); // "object"
  console.log(obtenerTipoDeValor(undefined)); // "undefined"
  console.log(obtenerTipoDeValor([1, 2, 3])); // "object"
  console.log(obtenerTipoDeValor({ nombre: "Juan" })); // "object"
  