const restaurants = ["McDonalds", "Taco Bell", "Taco Time", "Daltons", "Daley Freez", "Wendys", "Subway", "El Tapatio", "Arbys" ];

const random = Math.floor(Math.random() * restaurants.length);
console.log(random, restaurants[random]);



let randomRestaurantButton = document.querySelector('#food')

function randomRestaurant(evt){
    evt.preventDefault();

    alert(random, restaurants[random])
}

randomRestaurantButton.addEventListener('click', randomRestaurant)
