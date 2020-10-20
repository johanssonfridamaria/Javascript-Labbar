const dateToday = new Date();
const clock = setInterval(Timer, 1000);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const dayName = days[dateToday.getDay()];
const monthName = months[dateToday.getMonth()];
const year = dateToday.getFullYear();
let date = dateToday.getDate();


document.getElementById('date').innerHTML = `${dayName} ${date} ${monthName} ${year}`;


function Timer() {
    const timeNow = new Date();
    document.getElementById("time").innerHTML = timeNow.toLocaleTimeString();
}

let morningOrNigth = function(){
    if(dateToday.getHours()>5 && dateToday.getHours()<12){
        document.querySelector('body > div > div:nth-child(1) > h1').textContent='Good morning!';
    }
    else if (dateToday.getHours()>12 && dateToday.getHours()<16){
        document.querySelector('body > div > div:nth-child(1) > h1').textContent='Good afternoon!';
    }
    else if (dateToday.getHours()>18 && dateToday.getHours()<22){
        document.querySelector('body > div > div:nth-child(1) > h1').textContent='Good evening!';
    }
    else
    document.querySelector('body > div > div:nth-child(1) > h1').textContent='Good night, time to go a sleep!';
}

morningOrNigth();




