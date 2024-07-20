function ejercicio1(){
    let suma2num = (a,b) => a+b;
    alert(suma2num(parseInt(prompt("Escribe un numero")),parseInt(prompt("Escribe un numero"))));
}

function ejercicio2(){
    let potencia = (a ,b) => Math.pow(a,b);
    alert(potencia(parseInt(prompt("Escribe un numero")),parseInt(prompt("Escribe su potencia"))));
}

function ejercicio3(){
    let sumOfCubes = (a ,b, c) => Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3);
    alert(sumOfCubes(1, 5, 9));
}
function ejercicio4(){
    let areaT = (a ,b) => (a*b)/2;
    alert(areaT(parseInt(prompt("Escribe la base")),parseInt(prompt("Escribe la altura"))));
}

function ejercicio5(){
    let calculador = (a , operacion, b) =>{ 
        
        switch (operacion) {
            case "+":
                return a+b;
            
            case "-":
                return a-b;
                
            case "*":
                return a*b;
                
            case "/":
                return a/b;
                
            case "%":
                return a%b;
                
            default:
                return "El parámetro no es reconocido";
                
        }
    }
    a = parseInt(prompt("Escribe un numero"));
    operacion = prompt("Escribe un operacion");
    b = parseInt(prompt("Escribe numero"));
    alert(calculador(a,operacion,b)) 
}



function ejercicioR2_1(){
    let presentacion = (nombre ,apellido, edad) => "Hola mi nombre es "+nombre+" "+apellido+" y mi edad "+edad;
    alert(presentacion(prompt("Escribe un nombre"), prompt("Escribe un apellido"), prompt("Escribe la edad")));
}

function ejercicioR2_2(){
    let sumOfCubes = (a ,b, c) => Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3);
    alert(sumOfCubes(parseInt(prompt("Escribe un numero")), parseInt(prompt("Escribe un numero")), parseInt(prompt("Escribe un numero"))));
}

function ejercicioR2_3(){
    let presentacion = (tipo) => typeof(tipo);
    a = false;
    alert("para "+a+" su tipo es: "+presentacion(a));
}

function ejercicioR2_4(){
    let sumarNumeros = (...numeros) => {
        return numeros.reduce((acumulador, num) => acumulador + num, 0);
    };
    alert("La suma es: "+sumarNumeros(1,2,4,5));
}

function ejercicioR2_5(){
    let array = (...valores) => {
        let valoresString = valores.filter(item => typeof item === 'string');

        return valoresString = valoresString.reduce((acumulador, elemento) => {
            return acumulador + ", "+elemento;
        });
    };
    alert(array("DE",2,3,"a",4,"2","b",5));
}

function ejercicioR2_6(){
    let minMax = (valores = []) => {
        let maxNum = Math.max(...valores);
        let minNum = Math.min(...valores);
        return [minNum,maxNum];
    };
    alert(minMax([1,2,3,4,5,6]));
}

function ejercicioR2_7(){
    let formatPhoneNumber = (phoneNumber = []) => {

        if(phoneNumber.length != 10){
            throw new Error ("La matriz debe contener 10 numeros enteros");
        }

        let part1 = phoneNumber.slice(0,3).join("");
        let part2 = phoneNumber.slice(3,6).join("");
        let part3 = phoneNumber.slice(6,10).join("");
        return `(${part1}) ${part2}-${part3}`;
    };
    alert(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
}

function ejercicioR2_8(){
    let findLargestNums = (matriz = []) => {
        return matriz.map((subArray) => Math.max(...subArray));
      };
      alert(findLargestNums([[4,2,7,1],[20,70,40,90],[1,2,0]]));
}

function ejercicioR2_9(){
    let charIndex = (palabra ,letra) => {
        index=[];
        for(let i =0 ; i<palabra.length; i++ ){
            if(palabra[i] === letra){
                index.push(i);
            }
        }
        ulitmo = index.length-1;
        return [index[0], index[ulitmo]];
      };
    alert(charIndex(prompt("Escribe una palabra"),prompt("Escribe la letra a buscar")));
}

function ejercicioR2_10(){
    let toArray = (objeto = {}) => {
        let array=[];
        for(let clave in objeto ){
            array.push([clave, objeto[clave]]);
        }
        return array;
      };
    console.log(toArray({a : 1, b: 2}));
}

function ejercicioR2_11(){
    let getBudgets = (array = []) => {
        let presupuesto=[];
        for(let i  = 0; i<array.length; i++){
            for(let clave in array[i] ){
                if(clave == "budget"){
                    presupuesto.push(array[i][clave]);
                }    
            }
        }
        let total = presupuesto.reduce((a,b) => a+b,0);
        return total;
      };
    alert(getBudgets([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
      ])
      );
}

function ejercicioR2_12(){
    let getStudentNames = (array = []) => {
        let presupuesto=[];
        for(let i  = 0; i<array.length; i++){
            for(let clave in array[i] ){
                presupuesto.push(array[i][clave]); 
            }
        }
        return presupuesto;
      };
    alert(getStudentNames([
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
      ])
      );
}

function ejercicioR2_13(){
    let objectToArray = (objeto = {}) => {
        let array=[];
        for(let clave in objeto ){
            array.push([clave, objeto[clave]]);
        }
        return array;
      };
    console.log(objectToArray({
        likes: 2,
        dislikes: 3,
        followers: 10
      })
      );
}

function ejercicioR2_14(){
    let squaresSum = (n) => {
        let sumaCuadrado = 0;
        for(let i = 1; i<=n;i++){
            sumaCuadrado = sumaCuadrado +Math.pow(i,2);
        }
        return sumaCuadrado;
    };
    alert(squaresSum(parseInt(prompt("Escriba n:"))));
}

function ejercicioR2_15(){
    let multiplyByLength = (array = []) => {
        return array.map((num) => num*array.length);
    };
    alert(multiplyByLength([2, 3, 1, 0]));
}

function ejercicioR2_16(){
    let countdown = (n) => {
        let array = [];
        for(let i = n; i>=0;i--){
            array.push(i);
        }
        return array;
    };
    alert(countdown(parseInt(prompt("Escribe un numero"))));
}

function ejercicioR2_17(){
    let diffMaxMin = (valores = []) => {
        let maxNum = Math.max(...valores);
        let minNum = Math.min(...valores);
        return maxNum-minNum;
    };
    alert(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
    alert("Smallest number is -50, biggest is 32.");
}

function ejercicioR2_18(){
    let filterList = (matriz =[]) => {
        let matriznum = matriz.filter(item => typeof item === 'number');

        return matriznum = matriznum.reduce((acumulador, elemento) => {
            return acumulador + ", "+elemento;
        });
    };
    alert(filterList([1, 2, 3, "x", "y", 10]));
}

function ejercicioR2_19(){
    let repeat = (numero ,repeticion) => {
        let array = [];
        for(let i = repeticion; i>0;i--){
            array.push(numero);
        }
        return array;
    };
    alert(repeat(parseInt(prompt("Escribe un numero")), parseInt(prompt("Escribe un repeticion"))));
}

function ejercicioR2_20(){
    let vreplace = (vocal) => {
        frase = "apples and bananas";
        nuevaFrase = [];
        for(let i =0 ; i<frase.length; i++ ){
            switch (frase[i]) {
                case "a":
                    nuevaFrase.push(vocal);
                    break
                case "e":
                    nuevaFrase.push(vocal);
                    break
                case "i":
                    nuevaFrase.push(vocal);
                    break
                case "o":
                    nuevaFrase.push(vocal);
                    break
                case "u":
                    nuevaFrase.push(vocal);
                    break
                default:
                    nuevaFrase.push(frase[i]);
            }
        }            
        return  nuevaFrase.join("");
      };
    alert(vreplace("u"));
}

function ejercicioR2_21(){
    let findNemo = (frase) => {
        let palabra= "Nemo"
        let indice=0
        let palabras = frase.split(" ");
        for(i = 0;i<palabras.length;i++){
            if(palabras[i]==palabra){
                indice = i+1;
            }
        }
        return  `I found Nemo at ${indice}!`
    };
    alert(findNemo("I am finding Nemo !"));
}

function ejercicioR2_22(){
    let capLast = (palabra) => {
        let ultimaLetra = palabra[palabra.length-1];
        let nuevaFrase = [];
        for(let i =0 ; i<palabra.length; i++ ){
            if ( i == palabra.length-1) {
                nuevaFrase.push(ultimaLetra.toUpperCase());
                }
            else{
                nuevaFrase.push(palabra[i]);
                }
            }
        return  nuevaFrase.join("");
      };
    alert(capLast(prompt("Escribe la palabra")));
}

