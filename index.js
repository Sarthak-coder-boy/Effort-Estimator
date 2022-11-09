
var btn =document.querySelector('#calculate');

btn.addEventListener ('click', function () {
	
	var kloc = Number ( document.querySelector('#kloc').value )
			
		var result = document.querySelector('p.answer');
	
	var method = document.querySelector('input[name="method"]:checked').value;
	var answer = 0;
	
	if ( 'org' === method ) {
		answer = 2.4*(Math.pow(kloc,1.05))
	} else if ( 'semi' === method ) {
		answer = 3.0*(Math.pow(kloc,1.12))
	} else if ( 'emb' === method ) {
		answer = 3.6*(Math.pow(kloc,1.2))
	}
	
	answer = answer.toFixed(3);
	result.innerHTML = answer+" PM";
});