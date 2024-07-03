console.log("Inicio")

let objTelevision = {
    marca: "LG",
    modelo: "Model 01",
    entradas: ["HDMI", "RCA"],
    esSmart: true,
    tamaño: 47,
    toString() {
        return "String"
    }
};

console.log(JSON.stringify(objTelevision));
console.log(objTelevision);

let strDato = `{"marca":"LG","modelo":"Model 01","entradas":["HDMI","RCA"],"esSmart":true,"tamaño":47}`;
let newObj = JSON.parse(strDato);

let strJson = `{"nombre":"Roberto","apellidos":"Pineda","edad":40,"peso":82.55,"estadoCivil":false,"hijos":null,"hobbies":["Aeromodelismo","Gunpla"],"padres":[{"nombre":"Rene","apellido":"Pineda"},{"nombre":"Miriam","apellido":"Lopez"}]}`;
let objDatos = JSON.parse(strJson);


console.log(objDatos)

if (typeof (Storage) !== "undefined") {

    console.log("Si se puede usar el storage web api")

    localStorage.setItem("lastname", "Pineda");
    localStorage.setItem("datos", JSON.stringify(objDatos));
  
} else {
    console.log(" Sorry! No Web Storage support..");
}

let div =  document.getElementById("datos");
let storageDatos = localStorage.getItem("datos")
let objStorageDatos = JSON.parse(storageDatos);

div.innerText =objStorageDatos.nombre;
div.innerText =objStorageDatos.apellidos;

objStorageDatos.peso = 78.50

console.log(objStorageDatos);
localStorage.setItem("datos", JSON.stringify(objStorageDatos));

document.getElementById("passwd").innerText = sessionStorage.getItem("password")

document.getElementById("generarPass").addEventListener("click", function(){
    let password = Math.random();
    console.log(password)
    sessionStorage.setItem("password", password)
    document.getElementById("passwd").innerText = sessionStorage.getItem("password")
})


let x = document.getElementsByTagName("p");

console.log(x);
x[0].style.fontFamily = "Arial"
x[1].innerText = "Este es mi parrafo 2 desde js"

for (let index = 0; index < x.length; index++) {
    const element = x[index];
    element.style.color = "#00000"+index;
    
}

let cls = document.getElementsByClassName("lista");
console.log(cls)

for (let index = 0; index < cls.length; index++) {
    const element = cls[index];
    element.style.listStyleType = "upper-roman";
    
}

let li = document.querySelectorAll("li.lista1")
console.log(li)
li[0].style.listStyleType = "hebrew"

let btn = document.getElementById("boton");
btn.accessKey = "r";
btn.addEventListener("click", function(){
    console.log("Hizo click")
})

let carros = [
    {
        marca: "BMW",
        combustible: "gasolina"
    },
    {
        marca: "Mercedes",
        combustible: "gasolina"
    },
    {
        marca: "Audi",
        combustible: "electrico"
    }
]
let divCarros = document.getElementById("autos");
let ul = document.createElement("ul");
for (let index = 0; index < carros.length; index++) {
    const element = carros[index];
    let li = document.createElement("li");
    li.innerText = element.marca
    ul.appendChild(li);
}
divCarros.appendChild(ul)

document.getElementById("htmlEjemplo").innerHTML = "<p><strong>Hola desde js</strong></p>"

let sel = document.createElement("select");
for (let index = 0; index < carros.length; index++) {
    const element = carros[index];
    let option = document.createElement("option");
    option.value = element.combustible
    option.text = element.marca
    sel.appendChild(option);
}
document.getElementById("selector").appendChild(sel)