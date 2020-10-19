//Alternativ 1

// const volume=function(width, length, height){
//     return width * length * height;
// }

// console.log('Volymen på kvadraten är:' + volume(2, 5, 10));


//Alternativ 2 - låter användaren fylla i

let width= prompt('Skriv in bredden på kuben');
let length = prompt('Skriv in längden på kuben')
let height = prompt('Skriv in höjden på kuben')

const volume=function(width, length, height){
    return width * length * height;
}

console.log('Volymen på kvadraten är:' + volume(width, length, height));

