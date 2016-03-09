var zero_pos, zero_letter, one_pos, one_letter, two_pos, two_letter, three_pos, three_letter,
	four_pos, four_letter, five_pos, five_letter, six_pos, six_letter, seven_pos, seven_letter;
var attr_opacity = 1;
var lastScrollPos = 0;
var initialTop = window.pageYOffset || document.documentElement.scrollTop;
var selectedQuote = -1;
var quotes = [
		'"Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring." - Marilyn Monroe',
		'"There\'s a big, wonderful world out there for you. It belongs to you. It\'s exciting and stimulating and rewarding. Don\'t cheat yourselves out of this promise." - Nancy Reagan',
		'"There is no greater gift you can give or receive than to honor your calling. It\'s why you were born." - Oprah Winfrey',
		'"Be a first-rate version of yourself, instead of a second-rate version of somebody else." - Judy Garland',
		'"You can waste your lives drawing lines. Or you can live your life crossing them." - Shonda Rhimes',
		'"A woman is like a tea bag; you never know how strong it is until it\'s in hot water." - Eleanor Roosevelt',
		'"I hope the fathers and mothers of little girls will look at them and say \'yes, women can.\'" - Dilma Rousseff',
		'"Above all, be the heroine of your life, not the victim." - Nora Ephron',
		'"You are the one that possesses the keys to your being. You carry the passport to your own happiness." - Diane von Furstenberg',
		'I know for sure that what we dwell on is what we become. - Oprah Winfrey',
		'"I just try and surround myself, for the biggest proportion of time that I can, with people who make me feel normal, because constantly feeling abnormal is quite difficult." - Emma Watson'
	];

function parallex() {
	// scroll direction
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	// opactiy (fade) effect
	if(scrollTop == initialTop) {
		attr_opacity = 1.0;
		selectedQuote = -1;
	} else if(scrollTop > lastScrollPos) {
		attr_opacity = attr_opacity * 0.85;
	} else {
		attr_opacity = attr_opacity * 1.2;
	}

	updateElement(document.getElementById('zero'), scrollTop, 0.9);
	updateElement(document.getElementById('one'), scrollTop, -1.1);
	updateElement(document.getElementById('two'), scrollTop, 0.9);
	updateElement(document.getElementById('three'), scrollTop, -1.1);
	updateElement(document.getElementById('four'), scrollTop, 0.9);
	updateElement(document.getElementById('five'), scrollTop, -1.1);
	updateElement(document.getElementById('six'), scrollTop, 0.9);
	updateElement(document.getElementById('seven'), scrollTop, -1.1);

	lastScrollPos = scrollTop;

	// selectedQuote:
	if (selectedQuote == -1) {
		selectedQuote = Math.floor((Math.random() * quotes.length));
		var quote_element = document.getElementById('quotes');
		quote_element.innerText = quotes[selectedQuote];
	}
}

function updateElement(element, scrollTop, size) {
	element.style.top = scrollTop * size + 'px';
	element.style.opacity = attr_opacity;
}

window.addEventListener('scroll', parallex);