function fetchData(callback) {
    // Simulación de una solicitud AJAX 
    setTimeout(function () {
        const data = { message: "¡Hola, mundo!" };
        callback(data);
    }, 5000);
}

console.log("Inicio CallBack")
fetchData(function (data) {
    console.log("LLego data del callback")
    console.log(data.message);
});
console.log("Fin Callback")

async function fetchData2() {
    return new Promise(function (resolve, reject) {
        // Simulación de una solicitud AJAX 
        setTimeout(function () {
            const data = { message: "¡Hola, mundo!" };
            resolve(data);
            // Resolución exitosa // Si hubiera un error, se usaría reject(error) 
        }, 10000);
    });
}

console.log("Inicio Promesa")
fetchData2()
    .then(function (data) {
        console.log("LLego data de la promesa")
        console.log(data.message);
    })
    .catch(function (error) {
        console.error("Error:", error);
    });
console.log("Fin Promesa")
