let bandera = true;
let respuesta = 0;
let operador = "";
let num = 0;
let firstEntry = true; // Variable para verificar si es la primera entrada de número

while (bandera) {
    let valor = prompt("Ingrese los datos; si desea el resultado presione =");
    
    if (valor === "=") {
        bandera = false;
    } else {
        if (!isNaN(parseFloat(valor))) {
            num = parseFloat(valor);
            
            if (firstEntry) {
                respuesta = num;
                firstEntry = false;
            } else {
                switch (operador) {
                    case "+":
                        respuesta += num;
                        break;
                    case "-":
                        respuesta -= num;
                        break;
                    case "*":
                        respuesta *= num;
                        break;
                    case "/":
                        respuesta /= num;
                        break;
                }
            }
        } else {
            switch (valor) {
                case "+":
                case "-":
                case "*":
                case "/":
                    operador = valor;
                    break;
            }
        }
    }

    console.log(respuesta);
}

alert(respuesta);