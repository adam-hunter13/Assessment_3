let colorsButton = document.querySelector('#color')

function myFavoriteColor(evt) {
	evt.preventDefault();
	// document.getElementById('color').style.backgroundColor = 'red';
    // document.getElementById('color').style.color = 'white';
	
	alert("My favorite colors are Red, White, and Grey...It's hard to pick just one.")
}

colorsButton.addEventListener('click', myFavoriteColor)

// function revertColorChange(event){
//     event.preventDefault();

//     document.getElementById('color').style.backgroundColor = 'white';
//     document.getElementById('color').style.color = 'black';
// }

// colorsButton.addEventListener('click', revertColorChange)
let placeButton = document.querySelector('#place')

function myFavoritePlace(evt) {
	evt.preventDefault();
	
	
	alert("My favorite place in probalby the Outer Banks in North Carolina.")
}

placeButton.addEventListener('click', myFavoritePlace)


let ritualButton = document.querySelector('#ritual')

function myFavoriteRitual(evt) {
	evt.preventDefault();
	
	
	alert("My favorite ritual is when my family comes together for everyones birthday.")
}

ritualButton.addEventListener('click', myFavoriteRitual)