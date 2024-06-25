function esVocal(letra) {
    letra = letra.toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        return true;
    } else {
        return false;
    }
}

let letra = prompt("Ingrese una letra:");

if (letra.length === 1 && /^[a-zA-Z]$/.test(letra)) {
    if (esVocal(letra)) {
        console.log(`La letra "${letra}" es una vocal.`);
    } else {
        console.log(`La letra "${letra}" no es una vocal.`);
    }
} else {
    console.log("Por favor, ingrese una sola letra válida.");
}
