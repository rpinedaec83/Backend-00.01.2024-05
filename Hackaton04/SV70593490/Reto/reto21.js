function findNemo(cadena) {
    const palabras = cadena.split(" ");
    const posicionNemo = palabras.findIndex(palabra => palabra.toLowerCase() === "nemo");
    if (posicionNemo !== -1) {
      return `Encontré a Nemo en ${posicionNemo + 1}!`;
    } else {
      return "Nemo no está en esta cadena.";
    }
  }  