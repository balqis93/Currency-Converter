
var from_currencyEl = document.getElementById('from_currency');
var from_ammountEl = document.getElementById('from_ammount');
var to_currencyEl = document.getElementById('to_currency');
var to_ammountEl = document.getElementById('to_ammount');
var rateEl = document.getElementById('rate');
var exchange = document.getElementById('exchange');

from_currencyEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_currencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
	var temp = from_currencyEl.value;
	from_currencyEl.value = to_currencyEl.value;
	to_currencyEl.value = temp;
	calculate();
});

function calculate() {
	var from_currency = from_currencyEl.value;
	var to_currency = to_currencyEl.value;

	fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
		.then(res => res.json())
		.then(res => {
			var rate = res.rates[to_currency];
			rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
			to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
		})
}

calculate();