// let numero1 = prompt("Escribe el primer numero")
// let numero2 = prompt("Escribe el segundo numero")
// let operacion = prompt("Escribe 1 para sumar, 2 para restar, 3 para multiplicar o 4 para dividir");
// let respuesta = 0
// if(operacion == 1){
//     respuesta = parseInt( numero1)+ parseInt(numero2);
// }else{
//     if(operacion == 2){
//         respuesta = parseInt( numero1)- parseInt(numero2);
//     }
//     else{
//         if(operacion == 3){
//             respuesta = parseInt( numero1)* parseInt(numero2);
//         }
//         else{
//             if(operacion == 4){
//                 respuesta = parseInt( numero1)/ parseInt(numero2);
//             }
//             else{

//             }
//         }
//     }
// }

// switch (operacion) {
//     case "1":
//         respuesta = parseInt(numero1) + parseInt(numero2);
//         break;
//     case "2":
//         respuesta = parseInt(numero1) - parseInt(numero2);
//         break;
//     case "3":
//         respuesta = parseInt(numero1) * parseInt(numero2);
//         break;
//     case "4":
//         respuesta = parseInt(numero1) / parseInt(numero2);
//         break;
//     default:
//         break;
// }


let bandera = true;
let respuesta = 0;
let arrNumeros = [];
while (bandera) {

    let valor = (prompt("Ingrese los datos; si desea el resultado presione ="));
    if (valor === "=") {
        bandera = false
        
    } else {
       
        if (!isNaN(parseFloat(valor))) {
            arrNumeros.push(parseFloat(valor));
        } else {
            switch (valor) {
                case "+":
                     respuesta = arrNumeros.reduce((anterior, actual) => anterior + actual, 0);
                    break;
                case "-":
                    respuesta = arrNumeros.reduce((anterior, actual) => anterior - actual, 0);
                    break;
                case "*":
                    respuesta = arrNumeros.reduce((anterior, actual) => anterior *  actual, 0);
                    break;
                case "+/":
                    respuesta = arrNumeros.reduce((anterior, actual) => anterior / actual, 0);
                    break;
            }
        }
    }

    console.log(arrNumeros)
}
alert(respuesta);

function isNumber(value) {
    return typeof value === 'number';
}

