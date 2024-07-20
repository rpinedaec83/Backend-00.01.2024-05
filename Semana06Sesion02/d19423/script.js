console.log("Inicio de la aplicacion")
class Gundam {
    constructor(nombre, descripcion, imagen, escala, isCustom = false, custom = "") {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.escala = escala;
        this.isCustom = isCustom;
        this.custom = custom;
    }
}

let login;
let objLocalGundams;
let $table = $('#table');
let arrGundams = [];

window.accionEvents = {
    'click .like': function (e, value, row, index) {
        editarItem(row);
    },
    'click .remove': function (e, value, row, index) {
        borrarItem(row);

    }
}

function detailFormatter(index, row) {
    console.log(row)
    var html = []
    $.each(row, function (key, value) {
        switch (key) {
            case "imagen":
                html.push('<img src="img/' + value + '.jpg" alt="" srcset="" width="300px">')

                break;
            case "isCustom":
                if (value) {
                    let arrCustom = row.custom.split(',');
                    console.log(arrCustom);
                    let htmlstr = "<b>MODIFICACIONES:</b><ul>";
                    arrCustom.forEach(element => {
                        htmlstr += "<li>" + element + "</li>"
                    });
                    htmlstr += "</ul>";
                    html.push('<p>' + htmlstr + '</p>')
                }

                break;
            case "custom":
                break;
            default:
                html.push('<p><b>' + key.toUpperCase() + ':</b> ' + value + '</p>')
                break;
        }



    })
    return html.join('')
}
const GundamStore = function () { 
    login = JSON.parse(sessionStorage.getItem("login"));
    if (login == null) {window.location.replace("/Semana06Sesion02/d19423/login.html");
        
        
    }
    objLocalGundams = localStorage.getItem("gundams");
    if (objLocalGundams != null) {
        arrGundams = JSON.parse(objLocalGundams);
    }
    $table.bootstrapTable();
    $table.bootstrapTable('load', arrGundams);
    modificarCSS();
}();

function  modificarCSS(){
    let arrElementos = document.getElementsByClassName("subtitulo");
    console.log(arrElementos)

    for (let index = 0; index < arrElementos.length; index++) {
        const element = arrElementos[index];
        console.log(element)
        element.innerText = "Subtitulo";
        element.style.fontFamily = "Impact,Charcoal,sans-serif";
        //element.style.display = "none";
        
    }

    arrBotones = document.getElementsByTagName("a");
    console.log(arrBotones)

    let arrBotones2 = $("#btnAgregar");
    console.log(arrBotones2)
}
$("#btnAgregar").on("click", function (event) {
    event.preventDefault();
    console.log("Agregando un nuevo");
    let nombre = prompt("Agrega el nombre");
    let descripcion = prompt("Agrega la descripcion");
    let imagen = prompt("Agrega la imagen");
    let escala = prompt("Agrega la escala");
    let isCustom = prompt("Esta modificado???");
    let custom = ""
    if (isCustom == "SI") {
        custom = prompt("Que le modificaste???");
    }



    let objGundam = new Gundam(nombre, descripcion, imagen, escala, (isCustom == "SI" ? true : false), (isCustom == "SI" ? custom : ""))
    arrGundams.push(objGundam);
    console.log(arrGundams);
    localStorage.setItem("gundams", JSON.stringify(arrGundams));
    $table.bootstrapTable('load', arrGundams);
})

$("#btnEliminar").on("click", function (event) {
    event.preventDefault();
    Swal.fire({
        title: "Seguro quieres borrar tus items?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Borrar",
        denyButtonText: `No Borrar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Borrado!", "", "success");
          arrGundams = [];
          localStorage.setItem("gundams", JSON.stringify(arrGundams));
            $table.bootstrapTable('load', arrGundams);
        } else if (result.isDenied) {
          Swal.fire("No se ha realizado ningin cambio", "", "info");
        }
      });
});

function accionFormatter(value, row, index) {
    return [
        '<a class="like" href="javascript:void(0)" title="Like">',
        '<i class="fa fa-heart"></i> Editar',
        '</a>  ',
        '<a class="remove" href="javascript:void(0)" title="Remove">',
        '<i class="fa fa-trash"></i> Eliminar',
        '</a>'
    ].join('')
}

function borrarItem(row){
   
    console.log(arrGundams);

    const index = arrGundams.indexOf(row);
    console.log(index);
    if (index > -1) { // only splice array when item is found
        arrGundams.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(arrGundams);
    $table.bootstrapTable('load', arrGundams);
    localStorage.setItem("gundams", JSON.stringify(arrGundams));
}

function editarItem(row){
    console.log(arrGundams);
    const index = arrGundams.indexOf(row);
    console.log(index);
    let nombre = prompt("Agrega el nuevo nombre");
    let descripcion = prompt("Agrega la nueva descripcion");
    let imagen = prompt("Agrega la nueva imagen");
    let escala = prompt("Agrega la nueva escala");
    let isCustom = prompt("Esta modificado???");
    let custom = ""
    if (isCustom == "SI") {
        custom = prompt("Que le modificaste???");
    }

    arrGundams[index].nombre = nombre;
    arrGundams[index].descripcion = descripcion;
    arrGundams[index].imagen = imagen;
    arrGundams[index].escala = escala;

    arrGundams[index].isCustom = (isCustom == "SI" ? true : false);
    arrGundams[index].custom = (isCustom == "SI" ? custom : "");

    console.log(arrGundams);

    $table.bootstrapTable('load', arrGundams);
    localStorage.setItem("gundams", JSON.stringify(arrGundams));
}