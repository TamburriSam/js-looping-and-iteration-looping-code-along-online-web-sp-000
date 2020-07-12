function writeCards(guests, event) {
	let cards = []
	let i = 0;
	while (i < guests.length) {
		cards.push(`Thank you, ${names[i]}, for the wonderful ${gift_type} gift!`);
		i++
	}
	return cards;
}

 function countDown(num) {
    while (num > 0) {
        console.log(`${num}`);
        num -= 1;
    }
    return num;
}
