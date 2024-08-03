const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = process.env.MongoURI;
const client = new MongoClient(uri);

async function crud(base, coleccion, accion) {
    try {
        await client.connect();
        const db = client.db(base);
        const collection = db.collection(coleccion);
        switch (accion) {
            case 'leerUno':
                const first = await collection.findOne();
                return first;
                break;
        
            default:
                break;
        }


    } catch (error) {
        
    }
}

crud('sample_mflix','movies','leerUno').then((res) => {
    console.log(res)
});