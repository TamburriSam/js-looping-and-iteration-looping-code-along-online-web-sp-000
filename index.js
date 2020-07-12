const guests = ["Lisa", "Kaitlin", "Jan"];

function writeCards(guests, event) {
    for (let i = 0; i < guests.length; i++) {
        console.log(`Thank you ${guests[i]}, for the wonderful ${event} gift!`);
    }
    return guests;
}
 guests = new Array();

 function countDown(num) {
    while (num > 0) {
        console.log(`${num}`);
        num -= 1;
    }
    return num;
}
