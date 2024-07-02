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


