function writeCards(guests, event) {
	let tycards = []
	let i = 0;
	while (i < guests.length) {
		tycards.push(`Thank you, ${guests[i]}, for the wonderful ${event} gift!`);
		i++
	}
	return tycards;
}

 function countDown(number) {
    while (number > 0) {
        console.log(`${number}`);
        number -= 1;
    }
    return number;
}
