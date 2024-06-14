function ejercicio1(){

    let numero  = parseInt(prompt("Escribe un numero"));
    if(numero>99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero tiene NO 3 digitos")
    }
}

function ejercicio2(){
    let numero=parseInt(prompt("escriba un numero"));
    if (numero>0){
alert("El numero es positivo")
    }else{
    alert("Numero Negativo")
}

    }

    function ejercicio3(){
     let numero=prompt("ingrese Numero");
     let longitud=numero.length;
     let cad=numero.substring(longitud-1,longitud)
     if (cad==4){
        alert("El Numero Termina en 4")
    } else{
        alert("El Numero  no Termina en 4")
        } 
    }
    function ejercicio4(){
        let num1=parseInt(prompt("Ingrese Primer Numero"));
        let num2=parseInt(prompt("Ingrese segundo Numero"));
        let num3=parseInt(prompt("Ingrese tercer Numero"));
        
        if (num1>num2){
            temp=num1;
            num1=num2;
            num2=temp;
         }else if(num1>num3){
            temp=num1;
            num1=num3;
            num3=temp;
         }else if(num2>num3){
            temp=num2;
            num2=num3;
            num3=temp;

         }
         alert("los Numero Ordenados son "+num1+" - "+num2+" - "+num3)
    }
