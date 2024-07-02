//Registro de numeros de serie e IMEIs bloqueados
const numerosReportados = Object.freeze({
    numerosDeSerie: {
        111111111: true,
        222222222: true,
        333333333: true,
        444444444: true,
        555555555: true,
    },
    imeis: {
        111111111: true,
        222222222: true,
        333333333: true,
        444444444: true,
        555555555: true,
    }
});

//ARRAY DE CLIENTES
let clientes = [];


//MODELO DEL CLIENTE
class Cliente{
    constructor(dueno, modeloDeTelefono, numeroDeSerie, imei, bateria, pantalla, camara, botones){
        this.dueno = dueno;
        this.modeloDeTelefono = modeloDeTelefono;
        this.numeroDeSerie = numeroDeSerie;
        this.imei = imei;
        this.bateria = bateria;
        this.pantalla = pantalla;
        this.camara = camara;
        this.botones = botones;
    }
}



// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById('dueno').value = '';
    document.getElementById('modeloDeTelefono').value = '';
    document.getElementById('numeroDeSerie').value = '';
    document.getElementById('imei').value = '';
    document.getElementById('bateria').value = '';
    document.getElementById('pantalla').value = '';
    document.getElementById('camara').value = '';
    document.getElementById('botones').value = '';
}

// Funcion para guardar los datos del formulario
function guardarDatos(){
    
}