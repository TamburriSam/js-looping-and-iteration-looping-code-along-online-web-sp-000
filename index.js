function writeCards(guests, event) {
	let tycards = []
	let i = 0;
	while (i < guests.length) {
		tycards.push(`Thank you, ${names[i]}, for the wonderful ${gift_type} gift!`);
		i++
	}
	return tycards;
}

 function countDown(num) {
    while (num > 0) {
        console.log(`${num}`);
        num -= 1;
    }
    return num;
}
