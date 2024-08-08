// MongoURI="mongodb://localhost:27017/"

const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = process.env.MongoURI;
const client = new MongoClient(uri);

async function crud(base, coleccion, accion, filtro = null, data = null) {
    try {
        await client.connect();
        const db = client.db(base);
        const collection = db.collection(coleccion);
        let respuesta = null;
        switch (accion) {
            case 'leerUno':
                if (filtro !== null) {
                    respuesta = await collection.findOne(filtro);
                } else {
                    respuesta = await collection.findOne();
                }
                break;
            case 'leerTodos':
                if (filtro !== null) {
                    respuesta = await collection.find(filtro).toArray();
                } else {
                    respuesta = await collection.find().toArray();
                }
                break;
            case 'agregarUno':
                if (data !== null) {
                    respuesta = await collection.insertOne(data);
                }else{
                    respuesta= "No se puede agregar";
                }
                break;
            case 'agregarVarios':
                if(data!==null){
                    respuesta= await collection.insertMany(data);
                }else{
                    respuesta= "No se puede agregar";
                }
                break;
            case 'actualizarUno':
                if(filtro!==null){
                    respuesta= await collection.updateOne(filtro,data);
                }else{
                    respuesta="No se puede actualizar";
                }
                break;
            case 'actualizarVarios':
                if(filtro!==null){
                    respuesta= await collection.updateMany(filtro,data);
                }else{
                    respuesta="No se puede actualizar";
                }
                break;
            case 'borrarUno':
                if (filtro !== null) {
                    respuesta = await collection.deleteOne(filtro);
                } else {
                    respuesta = "no se puede borrar"
                }
                break;
            case 'borrarVarios':
                if (filtro !== null) {
                    respuesta = await collection.deleteMany(filtro);
                } else {
                    respuesta = "no se puede borrar"
                }
                break;
        default:
            break;
        }
        return respuesta;
    } catch (error) {
    }
}

// let filtro={puesto:"Carpintero"};
//Leyendo la collecion personal donde el puesto es Carpintero
// crud('sv76686442','personal','leerUno', filtro).then((res)=>{
//     console.log(res);
// });

//Leyendo todos los registros de personal
// crud('sv76686442','personal','leerTodos').then((res)=>{
//     console.log(res);
// });


//Agregando data a materiaPrima
// let data={
//     "fecha": new Date("2024-08-03"),
//     "proovedor": "Proovedor E",
//     "material": "Pegamento",
//     "cantidad": 100,
//     "costo": 20
// }
// crud('sv76686442','materiaPrima','agregarUno',filtro,data).then((res)=>{
//     console.log(res);
// });

//Agregando 2 registros a materiaPrima
// let data2= [
// {
//     "fecha": new Date("2024-08-03"),
//     "proovedor": "Proovedor E",
//     "material": "Tornillo",
//     "cantidad": 1000,
//     "costo": 20
// },

// {
// "fecha": new Date("2024-08-03"),
//     "proovedor": "Proovedor E",
//     "material": "Vidrio",
//     "cantidad": 50,
//     "costo": 1000
// }
// ]

// crud('sv76686442','insumos','agregarVarios',filtro,data2).then((res)=>{
//     console.log(res);
// });


//Actualizando la cantidad del material madera a 200

// let filtro2={material: "Madera"};
// let dataActualizar={$set: {cantidad:200}}
// crud('sv76686442','materiaPrima','actualizarUno',filtro2,dataActualizar).then((res)=>{
//     console.log(res);
// });

//Actualizando que todos los proovedores de la collecion insumos para que su proovedor sea Proveedor H

// let filtro3={proovedor: "Proovedor E"};
// let dataActualizar3={$set: {proovedor:"Proovedor H"}}
// crud('sv76686442','insumos','actualizarVarios',filtro3,dataActualizar3).then((res)=>{
//     console.log(res);
// });

//Borrando un registro en la coleccion produccion cuando el producto es Armario de 4 puertas
// let filtro4={ producto: "Armario de 4 puertas"};

// crud('sv76686442', "produccion", "borrarUno", filtro4, dataActualizar4).then((res) => {
//     console.log(res)
// });

// Borrar los registros donde Haya un proovedor H
let filtro5={ proovedor: "Proovedor H"};
crud('sv76686442', "insumos", "borrarVarios", filtro5).then((res) => {
    console.log(res)
});