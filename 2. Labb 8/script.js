const family =['Kenth', 'Pia', 'Frida', 'Arvid', 'Klara'];

console.log(family);

family.pop();
console.log('med pop: ' + family);

family[1] = 'Fredrik';

console.log('bytt ut namnet på plats 2: ' + family);


family.push('Klara');
console.log('Lagt till namn i slutet :' + family);

console.log(family.sort());

console.log(family.indexOf('Klara'));

family.pop();
console.log(family);

for (i=0; i<family.length;i++){
    console.log(family[i]);
}

for(name of family){
    console.log(name);
}

let numberOfMembers=0;

family.forEach(function(name){
    console.log(name);
    numberOfMembers++;
})

console.log(numberOfMembers);

family.forEach(name=>{
    console.log(name);
})