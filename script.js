var zero_pos, zero_letter, one_pos, one_letter, two_pos, two_letter, three_pos, three_letter,
	four_pos, four_letter, five_pos, five_letter, six_pos, six_letter, seven_pos, seven_letter;
var attr_opacity = 1;
var lastScrollPos = 0;
var initialTop = window.pageYOffset || document.documentElement.scrollTop;
var selectedQuote = -1;

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