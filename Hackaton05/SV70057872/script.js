/*EL PROBLEMA:

Se necesita crear un sistema que maneje las reparaciones de celulares en un local con varias sucursales*
 Tomar en cuenta los siguientes casos de uso:

El telefono ingresado debe tener numero de serie e IMEI que no esten reportados para acceder al servicio*
Un telefono primero debe pasar por una primera revision y se debe guardar el primer diagnostico*
Se debe tener la autorizacion escrita del usuario y el abono del 50% de la reparacion para que acceda al servicio
Los tecnicos pueden tener uno o varios skills que se adecuen a la marca de telefono que se necesita acceder al servicio
Los repuestos se agregaran a la reparacion de telefono
Se debe mostrar el estado del equipo en sus diferentes estaciones de trabajo
stwitch(getso)

case 1 (android) xxxxxx

case2 (ios) xxxx

default xxx no hay tecnico para esta marca*/
const Reparacion = function(){

    let arrIMEIreportados=["861536030196002","861536030196003","861536030196004","861536030196005","861536030196006","861536030196007"];

    let arrproblemas=["cambiodepantalla","formateo","recuperacion_files","reparaciondesocalo","cambiodesistema","cambiodeaccesorios"]

    function configurar(){
       
        $("#nombre").text(Nombre);
        $("#direccion").text(Direccion);
    
    }
    /*function eventos() {
        console.log("Escuchando los eventos")
        $("#registro").on("click", registro);
    }*/

    

    class telefono  {
        constructor(numserie,imei,marca,modelo,sistemaop ){
            this.numserie=numserie;
            this.imei=imei;
            this.marca=marca;
            this.modelo=modelo;
            this.sistemaop=sistemaop;
        }
        reportar(){

            console.log(`El Equipo marca ${this.marca} - modelo ${this.modelo} con S/N ${this.numserie} Emei ${this.imei} sistema ${this.sistemaop}`)

            const buscarNumero = this.imei;

            const numeroEncontrado = arrIMEIreportados.find((numero, indice) => {
                
                return numero === buscarNumero;
            });

            if (numeroEncontrado !== undefined) {
                console.log(`El equipo con IMEI ${this.imei} - ${this.marca} SI ha sido reportado => NO ACCEDE AL SERVICIO.`);
            } else {
                console.log(`El equipo con IMEI ${this.imei} - ${this.marca} NO ha sido reportado => SI ACCEDE AL SERVICIO.`);
            }

            
        }
    }

    

    class cliente  {
        constructor(nombre,apellido,adelanto=true){
            this.nombre=nombre;
            this.apellido=apellido;
            this.adelanto=adelanto;
            this.celular=null;
        }
        cliente(){
            if (this.adelanto==true) {
                console.log(`El cliente ${this.nombre} ${this.apellido} abono el 50%.`);
            } else {
                console.log(`El cliente ${this.nombre} ${this.apellido} no abono el 50%.`);
            }
           
        }
        agregartelefono(equipo){
            this.celular=equipo;
            console.log(`El cliente ${this.nombre} ${this.apellido} dueño del equipo ${this.celular}`)
        }
        
    }

    class skills{
        constructor(tecnicos,marcas,soluciones){
            this.tecnicos=tecnicos;
            this.marcas=marcas;
            this.soluciones=soluciones;
        }
    }

    class diagnostico {
        constructor(marca,modelo,problema){
            this.marca=marca;
            this.modelo=modelo;        
            this.problema=problema;
        }
        primerdiagnostico(){
            console.log(`Primer diagnostico del equipo ${this.marca} - ${this.modelo} es ${this.problema}`)
        }
        verdiagnostico(){

            const buscarproblema=this.problema;

            const encontrarproblema = arrproblemas.find((problem) => {
                
                return problem === buscarproblema;
            });

            if (encontrarproblema !== undefined) {
                console.log(` El local si cuenta con el servicio para ${this.problema}`);
            } else {
                console.log(` El local no cuenta con el servicio para ${this.problema}`);
            }
        }
       
        }
    

   

    let cliente01=new cliente("Waldo", "Castro",true);

    let equipo01=new telefono("DB168091200530","861536030196001","Samsung","Galaxy J7","Android");

    let diagnostico01=new diagnostico("Samsung","Galaxy J7","formateo")

    let tecnico01=new skills("tecnico01",["Samsung","LG","Apple"],["cambiodepantalla","formateo","recuperacion_files"]);
    let tecnico02=new skills("tecnico02",["Xiomi","Huawei","Sony"],["reparaciondesocalo","cambiodesistema","cambiodeaccesorios"]);
    
    diagnostico01.primerdiagnostico();
    diagnostico01.verdiagnostico();
    cliente01.agregartelefono(equipo01);
    cliente01.cliente();
   


    function vertecnico(skills,diagnostico){

        const buscarproblema=diagnostico.problema;

        const encontrarproblema = skills.soluciones.find((problem) => {
            
            return problem === buscarproblema;
        });

        if (encontrarproblema !== undefined) {
            console.log(`El tecnico `+skills.tecnicos+" si cuenta con esta skill para solucionar el problema de "+ diagnostico.problema);
        } else {
            console.log(`El tecnico `+skills.tecnicos+" no cuenta con esta skill para solucionar el problema de "+ diagnostico.problema);
        }
        
    }

    vertecnico(tecnico01,diagnostico01)

    return {
        init: function (parametros) {
            console.log(parametros)
            Nombre = parametros.nombre;
            Direccion = parametros.direccion;
            configurar();
           
        },
    };
}();







