// let nombre: string = "Roberto";
// let apellido = "Pineda";
// let edad: number;

// edad= 41;
// let arrDatos: string[] = [];
// arrDatos.push(nombre);
// arrDatos.push(apellido);
// //arrDatos.push(edad);

// const names2: readonly string[] = ["Dylan"];
// names2.push("Juan")

// let ourTuple: [number, boolean, string];
// ourTuple = [22,true, "Hola"];

// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// // throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

let strDNI: any = "73623825";
let strNumeroVeriricador: any = "5"

try {
    ///Ejecutamos el codigo
    /*
    42262648<2
    donde 42262648 es el DNI y 2 es el dígito de control
    Para validar si es DNI valido se multiplica por el juego 7,3,1 y luego se suma todo, es decir:
    4   2   2   6   2   6   4   8
    7   3   1   7   3   1   7   3
    28+6+2+42+6+6+28+24=142
    El dígito de control el el último dígito de la suma, es decir 2
    */

    let suma = 0;
    let arrSerie: readonly number[] = [3, 2, 7, 6, 5, 4, 3, 2];
    const numberKeys: readonly number[] = [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5];
    let arrDNI = strDNI.split('');
    console.log(arrDNI);
    for (let index = 0; index < arrSerie.length; index++) {
        suma += arrDNI[index] * arrSerie[index];


    }
    console.log(suma)
    let residuo = suma % 11;
    let resultado = 11 - residuo;

    if (resultado == 11) {
        resultado = 0;
    }

    let intVerificador = numberKeys[resultado];

    if (intVerificador == strNumeroVeriricador) {
        console.log("Tu DNI es Valido")
    } else {
        console.log("DNI No Valido")
    }
} catch (error) {
    //capturamos el error
}





