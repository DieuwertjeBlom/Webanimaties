console.log('Hello World!')

var handanimatie = document.querySelector('#hand')

handanimatie.addEventListener('click', function () {
	handanimatie.classList.toggle('animatie')
})

// Bas Pieren <3
window.onkeydown = function(e) {
	console.log('hoed omhoog')

	var hoed = document.getElementById('hoed')

	if (event.key == '/') {
		e.preventDefault()
		hoed.classList.toggle('hoed-omhoog')
	}
}