function dibujarTabla(filas=1, columnas=1) {

    for (let index = 0; index < filas; index++) {
        
        console.log("fila: "+index)
        for (let cindex = 0; cindex < columnas; cindex++) {
            console.log("columnad: "+cindex)
            
        }
    }
    console.log("dibujarTabla")
}
// console.log(filas)
// dibujarTabla();

let btnInicio = document.getElementById("btnInicio");
btnInicio.addEventListener("click",function(){
    console.log("Inicio del pedido")
    pedirCafe();

})

function pedirCafe(){
    let nombre = prompt("Dame tu nombre");
    let tipoCafe = prompt("Escribe el tipo de cafe");
    let producto = prompt("Escribe el nombre de tu "+tipoCafe);
    let tamaño = prompt("Escribe el tamaño de tu " + producto);
    let tipoLeche = prompt("Escribe el tipo de leche de tu "+ producto);
    let cremaBatida = prompt("Deseas Crema Batida para tu "+producto);
    let adicional = prompt("Deseas algun adicional para tu "+producto);

    let objPedido = {
        nombre,
        tipoCafe ,
        producto,
        tamaño,
        tipoLeche,
        cremaBatida,
        adicional
    }
    prepararCafe(objPedido);
    console.log(objPedido)
}

function prepararCafe(pedido){
    if(pedido.tipoCafe=="Frappuccinos"){
        /**
         * Preparar el café: Haz una taza de café fuerte y déjalo enfriar. Puedes usar café instantáneo o preparado en cafetera.

Mezclar los ingredientes: En una licuadora, añade el café enfriado, la leche, el azúcar, el hielo y el sirope de chocolate o caramelo si estás usando.

Licuar: Mezcla todo a alta velocidad hasta que el hielo esté completamente triturado y la mezcla tenga una consistencia suave.

Servir: Vierte la mezcla en un vaso grande.

Agregar crema batida: Si deseas, añade crema batida en la parte superior y rocía un poco más de sirope de chocolate o caramelo.


         */
        console.log("Buscar Cafe");
        console.log("Mezclar los ingredientes");
        console.log("Agregar la leche "+ pedido.tipoLeche);
        console.log("Licuando los ingredientes");
        console.log("Servir en un vaso "+ pedido.tamaño)
        console.log("Agregando "+ pedido.adicional);
        console.log("Sirviendo "+ pedido.producto +" para "+pedido.nombre)
    }
    else if(pedido.tipoCafe=="Expreso"){
        console.log("Buscar Cafe");
        console.log("Mezclar los ingredientes");
        console.log(`Agregar la leche ${pedido.tipoLeche}`);
        console.log(`Licuando los ingredientes`);
        console.log(`Servir en un vaso ${pedido.tamaño}`);
        console.log(`Agregando ${pedido.adicional}`);
        console.log(`Sirviendo ${pedido.producto} para ${pedido.nombre}`);
        console.log("Expreso")
    }
}