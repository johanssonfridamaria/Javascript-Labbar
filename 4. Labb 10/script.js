//KUBEN

//Alternativ 1

// const volume=function(width, length, height){
//     return width * length * height;
// }

// console.log('Volymen på kuben är:' + volume(2, 5, 10));


//Alternativ 2 - låter användaren fylla i

// let width= prompt('Skriv in bredden på kuben');
// let length = prompt('Skriv in längden på kuben')
// let height = prompt('Skriv in höjden på kuben')

// const volume=function(width, length, height){
//     return width * length * height;
// }

// alert('Volymen på kvadraten är:' + volume(width, length, height));
// console.log('Volymen på kvadraten är:' + volume(width, length, height));


//Cirkeln

//Alternativ 1

// const circleArea=function(diameter){
//     return (diameter/2)*Math.PI;
// }

// console.log('Arean för cirkeln är:' + circleArea(20));

// Alternativ 2 - låter användaren fylla i

let diameter= prompt('Skriv in diametern på cirkeln');

const circleArea=function(diameter){
    return (diameter/2)*Math.PI;
}

alert('Arean för cirkeln är:' + circleArea(diameter));
console.log('Arean för cirkeln är:' + circleArea(diameter));