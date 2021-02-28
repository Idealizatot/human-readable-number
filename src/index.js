module.exports = function toReadable (number) {

	if (!number) {
		return 'zero'
	}
		const numbers = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
		100: 'hundred',
	}

	let strResulr = '';

	if (number > 99) {
		strResulr = numbers[Math.floor(number / 100)] + ' ' + numbers['100']
	}

	if (number % 100 < 20 && number % 100) {
		strResulr = strResulr + ' ' + numbers[number % 100]
	} else {
		let dec = Math.floor(number % 100 / 10);
		if (dec) {
			strResulr = strResulr + ' ' + numbers[dec*10]
		}
		let i = number % 10;
		if (i) {
			strResulr = strResulr + ' ' + numbers[i]
		}
	}

	return strResulr.trim();

}