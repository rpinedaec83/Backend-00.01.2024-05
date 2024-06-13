let arrHobbies = ["Aeromodelismo","Gunpla","Musica"];
let arrNotas = [18,20,16,20];

console.log(arrHobbies[1]);

let arrDatos = ["Notas", 22, 16.5, -11, true, false];

let arrDatosArray = ["notas", arrNotas,arrHobbies ];

console.log(arrDatosArray);
console.log(arrDatosArray[2][2]);

let objDatosPersonalesRP = {
    nombre:"Roberto",
    apellido:"Pineda",
    edad : 40,
    sexo : false,
    hobbies: ["Aeromodelismo","Gunpla","Musica"]
};
let objDatosPersonalesDL = {
    nombre:"David",
    apellido:"Lopez",
    edad : 30,
    sexo : false,
    hobbies: ["Futbol","Motos","Pintura"]
};

let arrDatosPersonales = [objDatosPersonalesDL,objDatosPersonalesRP]
console.log(arrDatosPersonales);

if (objDatosPersonalesDL.edad == 40) {
    console.log("Su edad es 40")
}
else{
    console.log("No tiene 40 años")
}

let numero1  = 50;
let numero2 = "50";

if(numero1 == numero2){
    console.log("Son iguales")
}
else{
    console.log("No son iguales")
}

if(numero1 === numero2){
    console.log("Son iguales")
}
else{
    console.log("No son iguales")
}