/**
TV
Marca: LG
Modelo: XXX3
TipoPantalla: LED
Resolucion: 4K
TamanoPantalla: 47''
Audio:  Dolby
Entradas: [hdmi x 3, AV, Cable, Antena ]
Conectividad: [wifi, red, bluethooth]
Voltaje: 220V
SO: webos
Precio: 900

verStreaming()
navegarInternet()
reproducirAudio()
verFotos()

prender()
apagar()
cambiarOrigen()
ajustarVolumen()
 */

class LineaMarron {
    constructor(marca, modelo, voltaje, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.voltaje = voltaje;
        this.precio = precio;
    }
    prender() {
        console.log(`El Electrodomestico ${this.marca} - ${this.modelo} se esta encendiendo`)
    }
    apagar() {
        console.log(`El Electrodomestico ${this.marca} - ${this.modelo} se esta apagando`)
    }
}


class Television extends LineaMarron {
    constructor(marca, modelo, voltaje, precio, tipoPantalla, resolucion, tamanoPantalla,
        audio, entradas, conectividad, so) {
        super(marca, modelo, voltaje, precio)
        this.tipoPantalla = tipoPantalla;
        this.resolucion = resolucion;
        this.tamanoPantalla = tamanoPantalla;
        this.audio = audio;
        this.entradas = entradas;
        this.conectividad = conectividad;
        this.so = so;
    }
    prender() {
        console.log(`La TV ${this.marca} - ${this.modelo} se esta encendiendo`)
    }
    apagar() {
        console.log(`La TV ${this.marca} - ${this.modelo} se esta apagando`)
    }
}

class EquipoMusica extends LineaMarron{
    constructor(marca, modelo, voltaje, precio, rms, entradas, conectividad){
        super(marca, modelo, voltaje, precio);
        this.rms = rms;
        this.entradas = entradas;
        this.conectividad = conectividad;
    }
}

let objTv = new Television("LG", "TFR123", "Led", "4K", "47''", "Dobly Atmos", ["HDMI-1", "HDMI-2", "HDMI-3", "Antena", "Cable", "AV"], ["WIFI", "RED", "BT"], 220, "WEBos", 900);

console.log(objTv.marca)
console.log(objTv.precio)
console.log(objTv)

objTv.prender()
objTv.apagar()

let objTv2 = new Television("SONY", "BG123", "Led", "8K", "70''", "Dobly Atmos", ["HDMI-1", "HDMI-2", "HDMI-3", "Antena", "Cable", "AV"], ["WIFI", "RED", "BT"], 220, "AndroidTV", 3000);

console.log(objTv2.marca)
console.log(objTv2.precio)
console.log(objTv2)

objTv2.prender()
objTv2.apagar()

let objEquipo1 = new EquipoMusica("Sony", "MHC-V43D", 220, 1299, 3500, ["HDMI", "AM-FM"],["BT", "Linea IN"])

console.log(objEquipo1.marca)
objEquipo1.prender()
objEquipo1.apagar()