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

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString())
console.log(fruits.join(" * "))
console.log(fruits.join("|"))

let strDatos = "Banana|Orange|Apple|Mango|Kiwi"
let fruits2 = strDatos.split('|');
console.log(fruits2)

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits)

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits)


fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits)


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

fruits = ["Banana", "Orange", "Apple", "Mango"];

;
console.log(fruits.includes("Mango"))

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)

let i =0;
while (i < 10) {
    console.log( "The number is " + i);
    i++;
  }