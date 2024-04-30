const themeToggle = document.getElementById('themeToggle') 

themeToggle.addEventListener('change', function () {
	
	Toggle() 
})

const Toggle = () => {
	
	document.body.classList.toggle('DarkBody')
	
}
