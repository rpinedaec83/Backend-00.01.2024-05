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
    constructor(marca, modelo, voltaje, precio, vendido = false) {
        this.marca = marca;
        this.modelo = modelo;
        this.voltaje = voltaje;
        this.precio = precio;
        this.vendido = vendido;
    }
    prender() {
        console.log(`El Electrodomestico ${this.marca} - ${this.modelo} se esta encendiendo`)
    }
    apagar() {
        console.log(`El Electrodomestico ${this.marca} - ${this.modelo} se esta apagando`)
    }
    vender(cliente) {
        if (!this.vendido) {
            console.log(`Se esta vendiendo a ${cliente} la tv ${this.marca} en S/. ${this.precio}`);
            this.vendido = true;
        }else{
            console.log(`La tv ${this.marca} ya esta vendida`)
        }
    }
}


class Television extends LineaMarron {
    constructor(marca, modelo, voltaje, precio, tipoPantalla, resolucion, tamanoPantalla,
        audio, entradas, conectividad, so, vendido) {
        super(marca, modelo, voltaje, precio, vendido)
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
    cambiarCanal(canal) {
        console.log(this.entradas)
        const index = this.entradas.indexOf("Antena");
        if (index > -1) {
            console.log("Cambiando el canal a " + canal)
        } else {
            console.log("No se puede cambiar el canal")
        }
    }
    verStreaming(proveedor) {
        const index = this.conectividad.indexOf("WIFI") || this.conectividad.indexOf("RED");
        if (index > -1) {
            console.log(`Viendo ${proveedor} en la pantalla ${this.tipoPantalla} en resolucion ${this.resolucion}`)
        } else {
            console.log("No esta conectado al internet")
        }
    }
}

class EquipoMusica extends LineaMarron {
    constructor(marca, modelo, voltaje, precio, rms, entradas, conectividad) {
        super(marca, modelo, voltaje, precio);
        this.rms = rms;
        this.entradas = entradas;
        this.conectividad = conectividad;
    }
}

// let objTv = new Television("LG", "TFR123", "Led", "4K", "47''", "Dobly Atmos", ["HDMI-1", "HDMI-2", "HDMI-3", "Antena", "Cable", "AV"], ["WIFI", "RED", "BT"], 220, "WEBos", 900);
let objTv = new Television("LG", "TGTG", 220, 900, "Led", "4K", "47''", "Dobly Atmos", ["HDMI-1", "HDMI-2", "HDMI-3", "Antena", "Cable", "AV"], ["WIFI", "RED", "BT"], "WEBos")
console.log(objTv.marca)
console.log(objTv.precio)
console.log(objTv)

objTv.prender()
objTv.apagar()
objTv.cambiarCanal(4)

let objTv2 = new Television("SONY", "Tdsd", 220, 900, "Led", "4K", "47''", "Dobly Atmos", ["HDMI-1", "HDMI-2", "HDMI-3", "Cable", "AV"], ["BT"], "WEBos")

console.log(objTv2.marca)
console.log(objTv2.precio)
console.log(objTv2)

objTv2.prender()
objTv2.apagar()
objTv2.cambiarCanal(4)
objTv2.verStreaming("Netflix")
console.log(objTv2.vendido)
objTv2.vender("Roberto")
objTv2.vender("David")
let objEquipo1 = new EquipoMusica("Sony", "MHC-V43D", 220, 1299, 3500, ["HDMI", "AM-FM"], ["BT", "Linea IN"])

console.log(objEquipo1.marca)
objEquipo1.prender()
objEquipo1.apagar()

let objEquipo2 = new EquipoMusica(23, true, 220, 1299, 3500, ["HDMI", "AM-FM"], ["BT", "Linea IN"])
console.log(objEquipo2.marca)
objEquipo2.prender()
objEquipo2.apagar()
