document.getElementById("btn3").addEventListener("click", function(){
    alert("Hola desde el tercer boton")
})
document.getElementById("btn4").addEventListener("click",function(){
    alert("hi mundo")
})

function practicaSlice(){
    let mes;
    let dia;
    let año;        
    mes="2024-08-12".slice(5,7);
    año="2024-08-12".slice(0,4);
    dia="2024-08-12".slice(8,10);
    console.log(año);
    console.log(mes);
    console.log(dia);
}

practicaSlice();