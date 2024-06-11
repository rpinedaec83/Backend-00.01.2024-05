document.getElementById("btn3").addEventListener("click", function(){
    alert("Hola desde el tercer boton")
})

console.log("Hola desde el console log");


var nombre;

nombre = "Roberto";

console.log(nombre);

const PI = 3.14158;

console.log(PI)
//PI = 3.1416;

let apellido = "Pineda";
console.log(apellido)
apellido = "Lopez"

console.log(apellido)

var nombre = 123456;
console.log(nombre);

function saludar(){
    let apellido = "Pineda";
    let nombre = "Roberto";
    console.log("Hola "+ nombre + " "+ apellido);
}

saludar();

let edad = 40;
let direccion = "Lima - Peru";
let sexo = true;
let fechaNacimiento = new Date("1983-08-28 11:00:00");

let estatura = 1.69


let x = 5;
x++;
console.log(x)

let x2 = 100 + (50 * 3);

let x3 = 16 + "Volvo";
console.log(x3)

let telefono = "916730940";
telefono = 916730940;

let strNombre = "Roberto";
let intEdad = 40;
let boolEstadoCivil = true;
let dtFechaNacimiento = new Date("1983-08-28");

let strApellido = "Pineda";
let strDireccion = 'Lima';
let strBiografia = `${strNombre} ${strApellido} nacio el ${dtFechaNacimiento}

actualmente vivo en ${strDireccion}`;
let strBiografia2 = strNombre+" "+ strApellido + " nacioe el "+ dtFechaNacimiento

console.log(strBiografia)

saludar();

function areaEsfera(radio){

    let respuesta = 0;
    respuesta = (4 * Math.PI)* (radio ** 2); 
    console.log(respuesta);
}

areaEsfera(55)
areaEsfera(23)

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part)

let text1 = "Hello World!";
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

let dtFecha = '1983-08-28'
let año = dtFecha.slice(0,4);
let mes = dtFecha.slice(5,7);
let dia = dtFecha.slice(8,10);

console.log(año)
console.log(mes)
console.log(dia)

text1 = "      Hello World!      ";

console.log(text1.trimStart())
console.log(text1.trimEnd())
console.log(text1.trim())

let correo = "rpineda@x-codec.net"
let enmascarar = "da@x-codec.net";
console.log(enmascarar.padStart(20,"*"))

text = "Please visit Microsoft and Microsoft!";
console.log(text.replace("Microsoft", "W3Schools"));
text = "Please visit Microsoft!";
console.log(text.replace(/MICROSOFT/i, "W3Schools"))