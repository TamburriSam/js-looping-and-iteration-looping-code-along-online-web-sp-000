function writeCards(guests, event) {
	let tycards = []
	let i = 0;
	while (i < guests.length) {
		tycards.push(`Thank you, ${names[i]}, for the wonderful ${gift_type} gift!`);
		i++
	}
	return tycards;
}

 function countDown(number) {
    while (number > 0) {
        console.log(`${number}`);
        num -= 1;
    }
    return number;
}
