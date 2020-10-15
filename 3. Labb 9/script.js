// Funktion 1

// const hello= function(){
    // console.log('Hello world');
// }

// const hello=()=>{
//     console.log('Hello world');
// }


const hello=()=>console.log('Hello world');

hello();

//Funktion 2

// const greet= function(name){
//     console.log('Hej ' + name + ' Hur mår du?')
// }

// const greet= name=>{
//     console.log('Hej ' + name + ' Hur mår du?')
// }

const greet= name=>console.log('Hej ' + name + ' Hur mår du?');

greet('Frida');

//FUNKTION 3

// const calc= function(numberOne, numberTwo){
//     return numberOne + numberTwo;
// }

// const calc= (numberOne, numberTwo) =>{
//     return numberOne + numberTwo;
// }

const calc= (numberOne, numberTwo) => numberOne + numberTwo;

let sum= calc(10,15);

console.log('Summan är: '+sum);


// FUNKTION 4

// const tip= function(sum,percent){
//     let total=sum+sum*percent;
//     return total;
// }

const tip=(sum,percent)=>{
    let total=sum+sum*percent;
    return total;
}


let summa =tip(10,50);

console.log('Summan i funktion 4a är: ' + summa);