// Exercício 1

let frase = ["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];

function xRunning(array){
    console.log(array)
    for (let i=0; i<array.length-1; i++){
        
        array[i] = "-";
        array[i+1] = "x";
        console.log(array);
    }
}
xRunning(frase);

// Exercício 2

let frutas = ["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"];
function vowelsCounte(array){
    let vogais = [];
    for (let i=0; i<array.length; i++){
        let cont= 0;
        for(let j=0; j<array[i].length; j++){
            if(array[i][j] == "a" ||array[i][j] == "e" || array[i][j] == "i" || array[i][j] == "o" || array[i][j] == "u"){
                cont++
            }
        }
        vogais.push(cont);
    }
console.log(vogais);
}

vowelsCounte(frutas);


// Exercício 3

function stringTripletGroup(string){
let arr = [];
let str = "";
let cont = 0; 
let convParaArr = string.split("");
console.log(convParaArr);
    for (i=0; i<string.length; i++){
    if(str.length < 3){
        str+= convParaArr[i]
        console.log(str);
        }else{
            arr.push(str);
            str = "";
        }
    }
console.log(arr);
}
 stringTripletGroup("Os três mosqueteiros"); 





//  Exercício 4

let animals = ["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"];
let animalsUpper = [];
let contDog = 0;
let contCat = 0;

animals.forEach(element => {
    animalsUpper.push(element.toUpperCase());
  });
  console.log(animalsUpper);

function dominantPet(){
    for (let i=0; i<animalsUpper.length; i++){
        if(animalsUpper[i] == "DOG"){
            contDog++;
        } else if(animalsUpper[i] == "CAT"){
            contCat++;
        }
    }
        if(contDog > contCat){
            return "DOG!";
        }else if(contDog < contCat){
            return "CAT!";
        }else if(contDog == contCat){
            return "DRAW!";
        }   

}
console.log(dominantPet(animalsUpper)); 




// Exercício 5

let divisiveis =[]
function divisibleList(lista, numero){
    for (let i= 0; i<lista.length; i++){
        if(lista[i] % numero == 0){
        divisiveis.push(lista[i])
        }
    
    }
    return divisiveis;
}

console.log(divisibleList([14, 25, 32, 50, 35, 30], 5)); 

// Exercício 6

let arr = [];
function trustMeOrNot(bool, numero){
    for (let i=0; i<numero; i++){
        arr.push(bool)
    }
    return arr

}
console.log(trustMeOrNot(true, 8)); 


// Exercício 7


let statusLamp = [false, false, true, false, true, true, true];
let statusAtualizado = [];
function changeLampStatus(lista){
    for (let i=0; i<lista.length; i++){
        valorInverso = !lista[i]
        statusAtualizado.push(valorInverso)
    }
    return statusAtualizado

}
console.log(changeLampStatus(statusLamp));


// Exercício 8

let notas = [6.0, 5.5, 6.7, 8.0, 10, 10, 7.1];
let media = 0;
let soma = 0;
let cont = 0;

function gradeAverage(lista){
    for (let i=0; i<lista.length; i++){
        soma += lista[i];
        cont++
    }
    media = soma/cont

        return (`A média das notas é: ${media.toFixed(2)}`)
 
}
console.log(gradeAverage(notas));


// Exercício 9


let notas2 = [3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7];
let porcentagem = 0;
let soma2 = 0;
function canvasDeliveriesPercentage(lista){
    let total = (lista.length*10)/100;
    
    for (let i=0; i<lista.length; i++){
        soma2 += lista[i];
        porcentagem = soma2/total;
    }
    return (`A porcentagem total de entregas atingida é: ${porcentagem.toFixed(2)}%`)

}
console.log(canvasDeliveriesPercentage(notas2));



// Exercício 10

let color = ["R", "r", "G", "y", "G", "Y", "g"]
let action =[]

function shouldIGo(lista){
    for (let i=0; i<lista.length; i++){
        if(lista[i] == "R" || lista[i] == "r"){
            action.push("Stop!") 
        }else if(lista[i] == "Y" || lista[i] == "y"){
            action.push("Attention!")
        }else if(lista[i] == "G" || lista[i] == "g"){
            action.push("Go!")
        }
        
    }
        return action
}
console.log(shouldIGo(color));


