// function dibujarTabla(filas=1, columnas=1) {

//     for (let index = 0; index < filas; index++) {

//         console.log("fila: "+index)
//         for (let cindex = 0; cindex < columnas; cindex++) {
//             console.log("columnad: "+cindex)

//         }
//     }
//     console.log("dibujarTabla")
// }
// // console.log(filas)
// // dibujarTabla();

// let btnInicio = document.getElementById("btnInicio");
// btnInicio.addEventListener("click",function(){
//     console.log("Inicio del pedido")
//     pedirCafe();

// })

// function pedirCafe(){
//     let nombre = prompt("Dame tu nombre");
//     let tipoCafe = prompt("Escribe el tipo de cafe");
//     let producto = prompt("Escribe el nombre de tu "+tipoCafe);
//     let tamaño = prompt("Escribe el tamaño de tu " + producto);
//     let tipoLeche = prompt("Escribe el tipo de leche de tu "+ producto);
//     let cremaBatida = prompt("Deseas Crema Batida para tu "+producto);
//     let adicional = prompt("Deseas algun adicional para tu "+producto);

//     let objPedido = {
//         nombre,
//         tipoCafe ,
//         producto,
//         tamaño,
//         tipoLeche,
//         cremaBatida,
//         adicional
//     }
//   let estado =  prepararCafe(objPedido);
//   alert(estado)
//     console.log(objPedido)
// }

// function prepararCafe(pedido){
//     if(pedido.tipoCafe=="Frappuccinos"){
//         console.log("Buscar Cafe");
//         console.log("Mezclar los ingredientes");
//         console.log("Agregar la leche "+ pedido.tipoLeche);
//         console.log("Licuando los ingredientes");
//         console.log("Servir en un vaso "+ pedido.tamaño)
//         console.log("Agregando "+ pedido.adicional);
//         console.log("Sirviendo "+ pedido.producto +" para "+pedido.nombre)
//     }
//     else if(pedido.tipoCafe=="Expreso"){
//         console.log("Moler y Dosificar el Cafe para "+ pedido.tipoCafe);
//         console.log("Compactando el café molido");
//         console.log("Extraer el expreso");
//         console.log("Servir en un vaso "+ pedido.tamaño)
//         console.log("Agregando "+ pedido.tipoLeche+ " y " + pedido.adicional);
//         console.log("Sirviendo "+ pedido.producto +" para "+pedido.nombre)
//     }
//     pedirMasAzucar()
//     return "El cafe "+pedido.tipoCafe+ " esta listo"

// }

// let pedirMasAzucar = function(){
//     console.log("Dame mas azucar")
// }

// function multiplcacion(a,b){
//     return a * b
// }
// let multi = function(a,b){
//     return a*b
// }

// let myFunction = (a, b) => a * b;

// const vehiculo = {
//     marca:"BMW",
//     modelo:"M3",
//     color:"Blanco",
//     año: 2023,
//     trasmision : "StepTronic",
//     combustible: "Gasolina",
//     acelerar(){
//         console.log("El vehiculo "+ this.marca + " esta acelerando")
//     },
//     frenar(){
//         console.log("El vehiculo "+ this.marca + " esta frenando")
//     },
//     girar(direccion){
//         console.log("El vehiculo "+ this.marca + " esta girando a la "+direccion)
//     },
//     encender(){
//         console.log("El vehiculo "+ this.marca + " se esta encendiendo")
//     },
//     apagar(){
//         console.log("El vehiculo "+ this.marca + " se esta apagando")
//     }
// }

// vehiculo.encender();
// vehiculo.girar("Derecha")
// vehiculo.frenar();
// vehiculo.apagar()
// //vehiculo = "Soy un string"
// vehiculo.marca = "Mercedes"
// console.log(vehiculo)

/**
 * Vender Helados
 * Comprar Insumos
 * 
 * Clientes
 * -> Comprar Helados
 * Vendedores
 * -> Vendemos Helados
 * -> Compran Insumos
 * Proveedores
 * -> vendemos Insumos
 * Heladero
 * -> Prepara Helados
 * -> Insumos
 * -> Helados
 */
// let arrClientes = [];
// let arrDespachos = [];
// let arrCaja = [];


// let $table = $('#table');
// let $tableDespachos = $('#tableDespachos');
// let $tableCaja = $('#tableCaja');


// const Heladeria = function () //a
// {
//     let Nombre;
//     let Direccion;
//     function configurar() {
//         document.getElementById("nombre").innerText = Nombre;
//         document.getElementById("direccion").innerText = Direccion;
//     }

//     function eventos() {
//         $table.bootstrapTable({ data: arrClientes })
//         $tableDespachos.bootstrapTable({ data: arrDespachos })
//         $tableCaja.bootstrapTable({ data: arrCaja })

//         document.getElementById("crearCliente").addEventListener("click", (e) => {
//             e.preventDefault();
//             let nombre = prompt("Escribe tu Nombre");
//             let documento = prompt("Escribe tu documento");
//             let telefono = prompt("Escribe tu telefono");

//             let objCliente = {
//                 nombre,
//                 documento,
//                 telefono,
//                 helado: {},
//                 estado: true,
//                 precio: 0,
//                 cobrado: false,
//                 comprarHelado() {
//                     let sabor = prompt("Escoje tu sabor")
//                     let tamano = prompt("Escoje tu tamaño")
//                     let toppis = prompt("Escoje tus toppins")
//                     this.helado.sabor = sabor;
//                     this.helado.tamano = tamano;
//                     this.helado.toppis = toppis;

//                 }
//             };

//             objCliente.comprarHelado();
//             console.log(objCliente)
//             cargarInfoCliente(objCliente)
//             document.getElementById("infoCliente").style.display = "block";
//             arrClientes.push(objCliente);

//             console.log(arrClientes)
//         });
//         document.getElementById("cerrarVentana").addEventListener("click", (e) => {
//             e.preventDefault();
//             document.getElementById("infoCliente").style.display = "none";
//         })
//         document.getElementById("verOrdenes").addEventListener("click", (e) => {
//             e.preventDefault();
//             $table.bootstrapTable('load', arrClientes)
//             $tableDespachos.bootstrapTable('load', arrDespachos)
//             //$table.bootstrapTable({data: arrClientes})
//             document.getElementById("tblOrdenes").style.display = "block";
//         })
//         document.getElementById("verDespachos").addEventListener("click", (e) => {
//             e.preventDefault();
//             $tableDespachos.bootstrapTable('load', arrDespachos)
//             $table.bootstrapTable('load', arrClientes)
//             //$table.bootstrapTable({data: arrClientes})
//             document.getElementById("tblDespachos").style.display = "block";
//         })
//         document.getElementById("verCaja").addEventListener("click", (e) => {
//             e.preventDefault();
//             $tableCaja.bootstrapTable('load', arrCaja)
//             document.getElementById("tblCaja").style.display = "block";
//         })
//     }




//     let cargarInfoCliente = (obj) => {
//         document.getElementById("nombreCliente").value = obj.nombre;
//         document.getElementById("telefonoCliente").value = obj.telefono;
//         document.getElementById("saborHelado").value = obj.helado.sabor;
//         document.getElementById("tamanoHelado").value = obj.helado.tamano;
//         document.getElementById("toppisHelado").value = obj.helado.toppis;

//     }

//     return {
//         init: function (parametros) {
//             console.log(parametros)
//             Nombre = parametros.nombre;
//             Direccion = parametros.direccion;
//             configurar();
//             eventos();
//         },
//     };
// }()


// function ordenesFormatter(value, row, index) {
//     if (row.estado) {
//         return [
//             '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
//             '<i class="fa fa-heart">Despachar</i>',
//             '</a>  '
//         ].join('')
//     }
// }

// window.ordenesEvents = {
//     'click .like': function (e, value, row, index) {
//         despacharHelado(row)
//         //alert('You click like action, row: ' + JSON.stringify(row))
//     },
//     'click .remove': function (e, value, row, index) {
//         $table.bootstrapTable('remove', {
//             field: 'id',
//             values: [row.id]
//         })
//     }
// }


// let despacharHelado = (obj) => {
//     console.log(arrClientes);
//     arrDespachos.push(obj);
//     const index = arrClientes.indexOf(obj);
//     console.log(index);
//     if (index > -1) { // only splice array when item is found
//         arrClientes.splice(index, 1); // 2nd parameter means remove one item only
//     }
//     console.log(arrClientes);
//     $table.bootstrapTable('load', arrClientes);
//     console.log(obj);
// }


// function despachoFormatter(value, row, index) {
//     if (row.estado) {
//         return [
//             '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
//             '<i class="fa fa-heart">Entregar</i>',
//             '</a>  '
//         ].join('')
//     }
// }

// window.despachoEvents = {
//     'click .like': function (e, value, row, index) {
//         entregarHelado(row)
//         //alert('You click like action, row: ' + JSON.stringify(row))
//     },
//     'click .remove': function (e, value, row, index) {
//         $table.bootstrapTable('remove', {
//             field: 'id',
//             values: [row.id]
//         })
//     }
// }

// function entregarHelado(obj) {
//     console.log(arrCaja);
//     arrCaja.push(obj);
//     const index = arrDespachos.indexOf(obj);
//     console.log(index);
//     if (index > -1) { // only splice array when item is found
//         arrDespachos.splice(index, 1); // 2nd parameter means remove one item only
//     }
//     console.log(arrDespachos);
//     $tableDespachos.bootstrapTable('load', arrDespachos);
//     console.log(obj);
// }

// function cajaFormatter(value, row, index) {
//     if (row.estado) {
//         return [
//             '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
//             '<i class="fa fa-heart">Cobrar</i>',
//             '</a>  '
//         ].join('')
//     }
// }

// function cobradoFormatter(value, row, index) {
//     if (row.cobrado) {
//         return [
//             '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
//             '<i class="fa-regular fa-sack-dollar">Cobrado</i>',
//             '</a>  '
//         ].join('')
//     } else {
//         return [
//             '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
//             '<i class="fa-solid fa-circle-dollar-to-slot">Por Cobrar</i>',
//             '</a>  '
//         ].join('')
//     }
// }

// window.cajaEvents = {
//     'click .like': function (e, value, row, index) {
//         cobrarHelado(row)
//         //alert('You click like action, row: ' + JSON.stringify(row))
//     },
//     'click .remove': function (e, value, row, index) {
//         $table.bootstrapTable('remove', {
//             field: 'id',
//             values: [row.id]
//         })
//     }
// }

// function cobrarHelado(obj) {
//     console.log(arrCaja);
//     const index = arrCaja.indexOf(obj);
//     let precio = prompt("Pon el precio cobrado")
//     console.log(index);
//     if (index > -1) { // only splice array when item is found
//         arrCaja[index].cobrado = true;
//         arrCaja[index].precio = precio;
//     }
//     console.log(arrCaja);
//     $tableCaja.bootstrapTable('load', arrCaja);
//     console.log(obj);
// }

// function idFormatter() {
//     return 'Total'
// }

// function nameFormatter(data) {
//     return data.length
// }

// function priceFormatter(data) {
//     var field = this.field
//     return '$' + data.map(function (row) {
//         return +row[field]
//     }).reduce(function (sum, i) {
//         return sum + i
//     }, 0)
// }

// let arrClientes = [], arrDespachos = [], arrCaja = [], $table = $("#table"), $tableDespachos = $("#tableDespachos"), $tableCaja = $("#tableCaja"); const Heladeria = function () { let e, a, t = e => { document.getElementById("nombreCliente").value = e.nombre, document.getElementById("telefonoCliente").value = e.telefono, document.getElementById("saborHelado").value = e.helado.sabor, document.getElementById("tamanoHelado").value = e.helado.tamano, document.getElementById("toppisHelado").value = e.helado.toppis }; return { init: function (r) { console.log(r), e = r.nombre, a = r.direccion, document.getElementById("nombre").innerText = e, document.getElementById("direccion").innerText = a, $table.bootstrapTable({ data: arrClientes }), $tableDespachos.bootstrapTable({ data: arrDespachos }), $tableCaja.bootstrapTable({ data: arrCaja }), document.getElementById("crearCliente").addEventListener("click", e => { e.preventDefault(); let a = prompt("Escribe tu Nombre"), r = prompt("Escribe tu documento"), l = prompt("Escribe tu telefono"), o = { nombre: a, documento: r, telefono: l, helado: {}, estado: !0, precio: 0, cobrado: !1, comprarHelado() { let e = prompt("Escoje tu sabor"), a = prompt("Escoje tu tama\xf1o"), t = prompt("Escoje tus toppins"); this.helado.sabor = e, this.helado.tamano = a, this.helado.toppis = t } }; o.comprarHelado(), console.log(o), t(o), document.getElementById("infoCliente").style.display = "block", arrClientes.push(o), console.log(arrClientes) }), document.getElementById("cerrarVentana").addEventListener("click", e => { e.preventDefault(), document.getElementById("infoCliente").style.display = "none" }), document.getElementById("verOrdenes").addEventListener("click", e => { e.preventDefault(), $table.bootstrapTable("load", arrClientes), $tableDespachos.bootstrapTable("load", arrDespachos), document.getElementById("tblOrdenes").style.display = "block" }), document.getElementById("verDespachos").addEventListener("click", e => { e.preventDefault(), $tableDespachos.bootstrapTable("load", arrDespachos), $table.bootstrapTable("load", arrClientes), document.getElementById("tblDespachos").style.display = "block" }), document.getElementById("verCaja").addEventListener("click", e => { e.preventDefault(), $tableCaja.bootstrapTable("load", arrCaja), document.getElementById("tblCaja").style.display = "block" }) } } }(); function ordenesFormatter(e, a, t) { if (a.estado) return '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like"><i class="fa fa-heart">Despachar</i></a>  ' } window.ordenesEvents = { "click .like": function (e, a, t, r) { despacharHelado(t) }, "click .remove": function (e, a, t, r) { $table.bootstrapTable("remove", { field: "id", values: [t.id] }) } }; let despacharHelado = e => { console.log(arrClientes), arrDespachos.push(e); let a = arrClientes.indexOf(e); console.log(a), a > -1 && arrClientes.splice(a, 1), console.log(arrClientes), $table.bootstrapTable("load", arrClientes), console.log(e) }; function despachoFormatter(e, a, t) { if (a.estado) return '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like"><i class="fa fa-heart">Entregar</i></a>  ' } function entregarHelado(e) { console.log(arrCaja), arrCaja.push(e); let a = arrDespachos.indexOf(e); console.log(a), a > -1 && arrDespachos.splice(a, 1), console.log(arrDespachos), $tableDespachos.bootstrapTable("load", arrDespachos), console.log(e) } function cajaFormatter(e, a, t) { if (a.estado) return '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like"><i class="fa fa-heart">Cobrar</i></a>  ' } function cobradoFormatter(e, a, t) { return a.cobrado ? '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like"><i class="fa-regular fa-sack-dollar">Cobrado</i></a>  ' : '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like"><i class="fa-solid fa-circle-dollar-to-slot">Por Cobrar</i></a>  ' } function cobrarHelado(e) { console.log(arrCaja); let a = arrCaja.indexOf(e), t = prompt("Pon el precio cobrado"); console.log(a), a > -1 && (arrCaja[a].cobrado = !0, arrCaja[a].precio = t), console.log(arrCaja), $tableCaja.bootstrapTable("load", arrCaja), console.log(e) } function idFormatter() { return "Total" } function nameFormatter(e) { return e.length } function priceFormatter(e) { var a = this.field; return "$" + e.map(function (e) { return +e[a] }).reduce(function (e, a) { return e + a }, 0) } window.despachoEvents = { "click .like": function (e, a, t, r) { entregarHelado(t) }, "click .remove": function (e, a, t, r) { $table.bootstrapTable("remove", { field: "id", values: [t.id] }) } }, window.cajaEvents = { "click .like": function (e, a, t, r) { cobrarHelado(t) }, "click .remove": function (e, a, t, r) { $table.bootstrapTable("remove", { field: "id", values: [t.id] }) } };
let arrClientes = []
  , arrDespachos = []
  , arrCaja = []
  , $table = $("#table")
  , $tableDespachos = $("#tableDespachos")
  , $tableCaja = $("#tableCaja");
const Heladeria = function() {
    let e, a, t = e=>{
      //  $("#nombreCliente").value = e.nombre
        document.getElementById("nombreCliente").value = e.nombre,
        document.getElementById("telefonoCliente").value = e.telefono,
        document.getElementById("saborHelado").value = e.helado.sabor,
        document.getElementById("tamanoHelado").value = e.helado.tamano,
        document.getElementById("toppisHelado").value = e.helado.toppis
    }
    ;
    return {
        init: function(r) {
            console.log(r),
            e = r.nombre,
            a = r.direccion,
            document.getElementById("nombre").innerText = e,
            document.getElementById("direccion").innerText = a,
            $table.bootstrapTable({
                data: arrClientes
            }),
            $tableDespachos.bootstrapTable({
                data: arrDespachos
            }),
            $tableCaja.bootstrapTable({
                data: arrCaja
            }),
            document.getElementById("crearCliente").addEventListener("click", e=>{
                e.preventDefault();
                let a = prompt("Escribe tu Nombre")
                  , r = prompt("Escribe tu documento")
                  , l = prompt("Escribe tu telefono")
                  , o = {
                    nombre: a,
                    documento: r,
                    telefono: l,
                    helado: {},
                    estado: !0,
                    precio: 0,
                    cobrado: !1,
                    comprarHelado() {
                        let e = prompt("Escoje tu sabor")
                          , a = prompt("Escoje tu tama\xf1o")
                          , t = prompt("Escoje tus toppins");
                        this.helado.sabor = e,
                        this.helado.tamano = a,
                        this.helado.toppis = t
                    }
                };
                o.comprarHelado(),
                console.log(o),
                t(o),
                document.getElementById("infoCliente").style.display = "block",
                arrClientes.push(o),
                console.log(arrClientes)
            }
            ),
            document.getElementById("cerrarVentana").addEventListener("click", e=>{
                e.preventDefault(),
                document.getElementById("infoCliente").style.display = "none"
            }
            ),
            document.getElementById("verOrdenes").addEventListener("click", e=>{
                e.preventDefault(),
                $table.bootstrapTable("load", arrClientes),
                $tableDespachos.bootstrapTable("load", arrDespachos),
                document.getElementById("tblOrdenes").style.display = "block"
            }
            ),
            document.getElementById("verDespachos").addEventListener("click", e=>{
                e.preventDefault(),
                $tableDespachos.bootstrapTable("load", arrDespachos),
                $table.bootstrapTable("load", arrClientes),
                document.getElementById("tblDespachos").style.display = "block"
            }
            ),
            document.getElementById("verCaja").addEventListener("click", e=>{
                e.preventDefault(),
                $tableCaja.bootstrapTable("load", arrCaja),
                document.getElementById("tblCaja").style.display = "block"
            }
            )
        }
    }
}();
function ordenesFormatter(e, a, t) {
    if (a.estado)
        return '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like"><i class="fa fa-heart">Despachar</i></a>  '
}
window.ordenesEvents = {
    "click .like": function(e, a, t, r) {
        despacharHelado(t)
    },
    "click .remove": function(e, a, t, r) {
        $table.bootstrapTable("remove", {
            field: "id",
            values: [t.id]
        })
    }
};
let despacharHelado = e=>{
    console.log(arrClientes),
    arrDespachos.push(e);
    let a = arrClientes.indexOf(e);
    console.log(a),
    a > -1 && arrClientes.splice(a, 1),
    console.log(arrClientes),
    $table.bootstrapTable("load", arrClientes),
    console.log(e)
}
;
function despachoFormatter(e, a, t) {
    if (a.estado)
        return '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like"><i class="fa fa-heart">Entregar</i></a>  '
}
function entregarHelado(e) {
    console.log(arrCaja),
    arrCaja.push(e);
    let a = arrDespachos.indexOf(e);
    console.log(a),
    a > -1 && arrDespachos.splice(a, 1),
    console.log(arrDespachos),
    $tableDespachos.bootstrapTable("load", arrDespachos),
    console.log(e)
}
function cajaFormatter(e, a, t) {
    if (a.estado)
        return '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like"><i class="fa fa-heart">Cobrar</i></a>  '
}
function cobradoFormatter(e, a, t) {
    return a.cobrado ? '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like"><i class="fa-regular fa-sack-dollar">Cobrado</i></a>  ' : '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like"><i class="fa-solid fa-circle-dollar-to-slot">Por Cobrar</i></a>  '
}
function cobrarHelado(e) {
    console.log(arrCaja);
    let a = arrCaja.indexOf(e)
      , t = prompt("Pon el precio cobrado");
    console.log(a),
    a > -1 && (arrCaja[a].cobrado = !0,
    arrCaja[a].precio = t),
    console.log(arrCaja),
    $tableCaja.bootstrapTable("load", arrCaja),
    console.log(e)
}
function idFormatter() {
    return "Total"
}
function nameFormatter(e) {
    return e.length
}
function priceFormatter(e) {
    var a = this.field;
    return "$" + e.map(function(e) {
        return +e[a]
    }).reduce(function(e, a) {
        return e + a
    }, 0)
}
window.despachoEvents = {
    "click .like": function(e, a, t, r) {
        entregarHelado(t)
    },
    "click .remove": function(e, a, t, r) {
        $table.bootstrapTable("remove", {
            field: "id",
            values: [t.id]
        })
    }
},
window.cajaEvents = {
    "click .like": function(e, a, t, r) {
        cobrarHelado(t)
    },
    "click .remove": function(e, a, t, r) {
        $table.bootstrapTable("remove", {
            field: "id",
            values: [t.id]
        })
    }
};
