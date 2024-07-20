function sumar(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  }