function tablaDeMultiplicar() {
    for (let i = 1; i <= 9; i++) {
        console.log(`Tabla de multiplicar del ${i}:`);
        for (let j = 1; j <= 10; j++) {
            let resultado = i * j;
            console.log(`${i} x ${j} = ${resultado}`);
        }
        console.log("");
    }
}

tablaDeMultiplicar();
