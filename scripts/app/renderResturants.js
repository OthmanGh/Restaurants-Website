const restaurantsContainer = document.getElementById('restaurants-container');

const restaurantsArr = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    id: Date.now() + 1,
    location: 'New York',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sed cum sapiente harum esse fugit illum itaque doloribus neque velit!',
    name: 'Burger Palace',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    id: Date.now() + 2,
    location: 'Paris',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sed cum sapiente harum esse fugit illum itaque doloribus neque velit!',
    name: 'French Delights',
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
    id: Date.now() + 3,
    location: 'Tokyo',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sed cum sapiente harum esse fugit illum itaque doloribus neque velit!',
    name: 'Sushi Haven',
  },
  {
    src: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
    id: Date.now() + 4,
    location: 'London',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sed cum sapiente harum esse fugit illum itaque doloribus neque velit!',
    name: 'British Bites',
  },
];

const restaurantComponent = (res) => `
<div>
<img class="small" src="${res.src}"/>
<h2>${res.name}</h2>
<p>${res.description}</p>
</div>`;

const renderRestaurants = (arr) => {
  restaurantsContainer.innerHTML = '';

  arr.forEach((restaurant) => {
    restaurantsContainer.innerHTML += restaurantComponent(restaurant);
  });
};

renderRestaurants(restaurantsArr);

// Search Functionality
// const searchRestaurants = () => {
//   const query = input.value.toLowerCase().trim(); // Get the input value
//   const results = restaurantsArr.filter((restaurant) => {
//     return restaurant.name.toLowerCase().includes(query); // Filter restaurants by name
//   });
//   renderRestaurants(results); // Render filtered restaurants
// };
