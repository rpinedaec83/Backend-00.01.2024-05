console.log("EJERCICIOS DEL README");

//Ejercicio 1
let suma = (a, b) => a + b;
console.log("-Ejercicio 1:");
console.log( "la suma es:",suma(2,3));


//Ejercicio 2
function ejercicio2(numero,potencia){
    return Math.pow(numero,potencia);
} 
console.log("-Ejercicio 2");
console.log("La potencia es:",ejercicio2(2,3));

//Ejercicio 3
const sumOfCubes=(...numbers)=>{
 const result=numbers.reduce(
    (acumulator, currentValue)=>acumulator+Math.pow(currentValue,3),0
 );
 return result;
}
console.log("-Ejercicio 3:");
console.log("La suma de cubos:",sumOfCubes(1, 5, 9));

//Ejercicio 4
function triArea(base, altura) {
    const area = (base * altura) / 2;
    return area;
}
console.log("-Ejercicio 4:");
console.log("El area del triangulo es:",triArea(2,3));


//Ejercicio 5
function calculator(num1, operacion, num2) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case 'x':
            return num1 * num2;
        case '%':
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}
console.log("-Ejercicio 5:");
console.log(calculator(2, "+", 2)); // Debería imprimir 4
console.log(calculator(6, "-", 3)); // Debería imprimir 3
console.log(calculator(10, "/", 2)); // Debería imprimir 5
console.log(calculator(5, "x", 4)); // Debería imprimir 20
console.log(calculator(10, "%", 3)); // Debería imprimir 1
console.log(calculator(5, "#", 3)); // Debería imprimir "El parámetro no es reconocido"

console.log("===========================");
console.log("EJERCICIOS DEL DOCUMENTO");

//Ejercicio 1
const ejercicio1Do=(nombre,apellido,edad)=>{
    return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
}
console.log("-Ejercicio 1");
console.log(ejercicio1Do("Mia","Vasquez", 22));


//Ejercicio 2
console.log("-Ejercicio2");
console.log(sumOfCubes(1,5,9));

//Ejercicio 3
const typeValue=(valor)=>typeof valor;
console.log("-Ejercicio 3");
console.log(typeValue("Hola"));
console.log(typeValue(5));

//Ejercicio 4
const ejercicio4D=(...numbers)=>{
    const result=numbers.reduce(
       (acumulator, currentValue)=>acumulator+currentValue
    );
    return result;
   }
console.log("-Ejercicio 4");
console.log("La suma de los números es: ",ejercicio4D(2,3,5,10));

//Ejercicio 5
function ejercicio5D(...arr) {
    const filteredArray = arr.filter(item => typeof item != 'string');
    return filteredArray;
}
console.log("-Ejercicio 5");
console.log("Los valores que no son string son: ",ejercicio5D("Hola",2,3,5,10));

//Ejercicio 6
function ejercicio6D(arr) {
    const min= Math.min(...arr);
    const max= Math.max(...arr);
    return [min,max];
}
console.log("-Ejercicio 6");
console.log("Min-Max",ejercicio6D([1, 2, 3, 4, 5]));

//Ejercicio 7
function formatPhoneNumber(numbers) {
    if (numbers.length !== 10) {
        return "La matriz debe contener exactamente 10 enteros (0-9)";
    }

    const part1 = numbers.slice(0, 3).join('');
    const part2 = numbers.slice(3, 6).join(''); 
    const part3 = numbers.slice(6).join('');  

    return `(${part1}) ${part2}-${part3}`;
}
console.log("-Ejercicio 7");
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//Ejercicio 8
const findLargestNums = (matriz = []) => {
    return matriz.map((subArray) => Math.max(...subArray));
  };
   
  const a = [4, 2, 7, 1];
  const b = [20, 70, 40, 90];
  const c = [1, 2, 0];
   
  const resultLarges = findLargestNums([a, b, c]);
  console.log("-Ejercicio 8");
  console.log(resultLarges);


//Ejercicio 9
function charIndex(word, char){
    const firstIndex=word.indexOf(char);
    const lastIndex=word.lastIndexOf(char);
    return [firstIndex,lastIndex];
}

console.log("-Ejercicio 9");
console.log(charIndex("hello", "l"));
console.log(charIndex("circumlocution", "c"));

  //Ejercicio 10
  const toArray = (obj = {}) => {
    const result = [];
   
    for (const clave in obj) {
      result.push([clave, obj[clave]]);
    }
    return result;
  };
  console.log("-Ejercicio 10");
  console.log(toArray({ a: 1, b: 2 }));

  //Ejercicio 11
  const getBudgets = (budgets = []) => {
    const sumResult = budgets.reduce(
      (accumulator, currentValue) => accumulator + currentValue.budget,
   
      0
    );
   
    return sumResult;
  };
   
  const resultBudgets = getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ]);
   
  console.log("-Ejercicio 11");
  console.log("La suma de los presupuestos es:",resultBudgets)

//Ejercicio 12
function getStudentNames(students){
    const names= students.map(student=>student.name);
    return names;
}
console.log("-Ejercicio 12");
console.log(getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ])
  );

//Ejercicio 13
const objectToArray = (obj = {}) => {
    const result = [];
   
    for (const clave in obj) {
      result.push([clave, obj[clave]]);
    }
    return result;
  };
console.log("-Ejercicio 13");
console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  })
  );

//Ejercicio 14
function squaresSum(n){
    let sumaCubos=0;
  for(i=1; i<=n; i++){
    sumaCubos+=Math.pow(i,2);
  }

  return sumaCubos;
}
console.log("-Ejercicio 14");
console.log(squaresSum(3));

//Ejercicio 15
function multiplyByLength(arr){
    const lenght= arr.length;
    return arr.map(value=>value*lenght);

}
console.log("-Ejercicio 15");
console.log(multiplyByLength([2, 3, 1, 0]));

//Ejercicio 16
function countdown(n){
    let matriz=[];
    for(i=n; i>=0;i--){
        matriz.push(i);
    }
    return matriz;
}
console.log("-Ejercicio 16");
console.log(countdown(5));

//Ejercicio 17
function diffMaxMin(arr){
  const min= Math.min(...arr);
  const max= Math.max(...arr);
  const diferencia= max-min;
  return diferencia;
}
console.log("-Ejercicio 17");
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

//Ejercicio 18
function filterList(arr){
    return arr.filter(item=>Number.isInteger(item));
}
console.log("-Ejercicio 18");
console.log(filterList([1, 2, 3, "x", "y", 10]));

//Ejercicio 19
function repeat(element, times) {
    return Array.from({ length: times }, () => element);
}
console.log("-Ejercicio 19");
console.log(repeat(13, 5));

//Ejercicio 20
String.prototype.vreplace = function(vowel) {
    // Definir las vocales
    const vowels = 'aeiouAEIOU';
    // Convertir la cadena en una matriz de caracteres y reemplazar las vocales
    const replacedString = this.split('').map(char => 
        vowels.includes(char) ? vowel : char
    ).join('');
    // Devolver la cadena resultante
    return replacedString;
};
console.log("-Ejercicio 20");
console.log("apples and bananas".vreplace("u"));

//Ejercicio 21
function findNemo(sentence) {
    const words=sentence.split(' ');
    const index= words.indexOf("Nemo");
    if(index!==-1){
        return `Encontré a Nemo en ${index+1}`;
    }else{
        return `Nemo no fue encontrado en la frase`;
    }
};
console.log("-Ejercicio 21");
console.log(findNemo("I am finding Nemo !"));

//Ejercicio 22
function capLast(sentence) {
    const words = sentence.split(' ');

    const capitalizedWords = words.map(word => {
        if (word.length === 0) {
            return word; 
        }
        const lastChar = word[word.length - 1].toUpperCase();
        return word.slice(0, -1) + lastChar;
    });
    return capitalizedWords.join(' ');
}
console.log("-Ejercicio 22");
console.log(capLast("hello"));



