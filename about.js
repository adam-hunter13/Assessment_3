console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("The form has been submitted successfully.")
}

function pictureHover(evt) {
	evt.preventDefault();
	
	alert("give user a compliment")
}




let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

img1.addEventListener('mouseover', pictureHover)
