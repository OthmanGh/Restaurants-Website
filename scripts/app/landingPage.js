'use strict';

// Remove restaurants if user is not logged in
if (!window.isLoggedIn) {
  document.querySelector(
    '.landing-section'
  ).innerHTML = `<h3><a href="./pages/user/auth.html" style="color:var(--clrs-primary-);">Please login to view and favorite restaurants!</a></h3>`;
}

const sweetRestaurants = [
  {
    id: 1,
    favorite: false,
    name: 'Cupcake Heaven',
    description: 'Indulge in our heavenly cupcakes that melt in your mouth!',
    location: 'New York',
    rate: 4.5,

    src: 'https://images.unsplash.com/photo-1518739745383-0ef26e9dd7fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3dlZXQlMjByZXN0YXVyYW50fGVufDB8fDB8fHww',
  },
  {
    id: 2,
    favorite: false,
    name: 'Choco Delight',
    description: 'Experience the delight of our premium chocolate desserts.',
    location: 'Paris',
    rate: 4.8,

    src: 'https://images.unsplash.com/photo-1518184961573-4474fec952df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHN3ZWV0JTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    name: 'Berry Bliss',
    description: 'Savor the sweetness of our berry-infused delicacies.',
    location: 'London',
    rate: 4.3,

    src: 'https://plus.unsplash.com/premium_photo-1661515657357-7dd8af1bdfab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHN3ZWV0JTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 4,
    name: 'Ice Cream Dreams',
    description: 'Turn your dreams into reality with our creamy ice cream flavors!',
    location: 'Tokyo',
    rate: 4.6,

    src: 'https://images.unsplash.com/photo-1504465117220-78098ba506d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHN3ZWV0JTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 5,
    name: 'Sweet Serenity',
    description: 'Find serenity in every bite of our delightful pastries.',
    location: 'Los Angeles',
    rate: 4.7,

    src: 'https://images.unsplash.com/photo-1564495584622-0bb3af6f668e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHN3ZWV0JTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 6,
    name: 'Cookie Corner',
    description: 'Welcome to the corner of delicious cookies and happiness!',
    location: 'Sydney',
    rate: 4.4,

    src: 'https://plus.unsplash.com/premium_photo-1664391858849-a7ea4b0eeaf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxzd2VldCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 7,
    name: 'Doughnut Delight',
    description: 'Experience the joy of our freshly baked doughnuts!',
    location: 'Berlin',
    rate: 4.9,

    src: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dlZXR8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 8,
    name: 'Candy Castle',
    description: 'Step into our candy wonderland and taste the magic!',
    location: 'Rio de Janeiro',
    rate: 4.2,

    src: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN3ZWV0fGVufDB8fDB8fHww',
  },
  {
    id: 9,
    name: 'Cake Carnival',
    description: 'Join us for a carnival of delicious cakes and celebrations!',
    location: 'Dubai',
    rate: 4.6,
    src: 'https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWV0fGVufDB8fDB8fHww',
  },
  {
    id: 10,
    name: 'Fruit Fantasy',
    description: 'Embark on a fantasy journey through our exotic fruit desserts!',
    location: 'Bangkok',
    rate: 4.7,

    src: 'https://images.unsplash.com/photo-1534432182912-63863115e106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHN3ZWV0fGVufDB8fDB8fHww',
  },
];

const restaurantsContainer = document.getElementById('restaurants-container');
const searchInputEl = document.getElementById('search-input');
const selectEl = document.getElementById('selection-input');
const form = document.getElementById('form');
const scrollTop = document.getElementById('sroll-to-top');
const headerEl = document.getElementById('header');

const restaurantCard = (res) => `<div class="restaurant-card-grid">
<div class="restaurant-img-container">
  <img src="${res.src}" />
</div>

<div class="restaurant-content flex column">
  <h3>${res.name}</h3>
  <ul class="flex column">
    <li><p>Description: <span>${res.description}</span></p></li>
    <li>
      <p>Location: <span>${res.location}</span></p>
    </li>
    <li>
    <p>Rate: <span>${res.rate}⭐</span></p>
    </li>
    <li>
    <a href="../../pages/user/restview.html" class="restaurent-card-btn" href="#">
    Learn More &#x2192;
  </a>
    </li>
  </ul>
</div>
</div>`;

const renderResCard = (arr) => {
  restaurantsContainer.innerHTML = '';

  if (arr.length >= 1) {
    arr.forEach((item) => {
      restaurantsContainer.innerHTML += restaurantCard(item);
    });

    return;
  }

  restaurantsContainer.innerHTML = `<h2 style="color: #fff">No Such Restaurants</h2>`;
};

renderResCard(sweetRestaurants);

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const searchRestaurants = (e) => {
  const query = e.target.value.trim().toLowerCase();
  const results = sweetRestaurants.filter((res) => res.name.toLowerCase().includes(query));
  renderResCard(results);
};

const filterRestauratns = (e) => {
  const filteredArr = [...sweetRestaurants];

  if (e.target.value === 'lowest-rated') {
    filteredArr.sort((a, b) => a.rate - b.rate);
  } else if (e.target.value === 'highest-rated') {
    filteredArr.sort((a, b) => b.rate - a.rate);
  } else if (e.target.value === 'location') {
    filteredArr.sort((a, b) => a.location.localeCompare(b.location));
  }

  renderResCard(filteredArr);
};

const saveToLocalStorage = () => {
  localStorage.setItem('sweetRestaurants', JSON.stringify(sweetRestaurants));
};

const loadFromLocalStorage = () => {
  const storedData = localStorage.getItem('sweetRestaurants');
  return storedData ? JSON.parse(storedData) : [];
};

const loadedSweetRestaurants = loadFromLocalStorage();

if (loadedSweetRestaurants.length > 0) {
  sweetRestaurants.push(...loadedSweetRestaurants);
  renderResCard(sweetRestaurants);
}

const updateAndSaveRestaurants = (updatedRestaurants) => {
  sweetRestaurants.length = 0;
  sweetRestaurants.push(...updatedRestaurants);
  saveToLocalStorage();
};

searchInputEl.addEventListener('input', searchRestaurants);

selectEl.addEventListener('change', (e) => {
  const filteredArr = [...sweetRestaurants];

  if (e.target.value === 'lowest-rated') {
    filteredArr.sort((a, b) => a.rate - b.rate);
  } else if (e.target.value === 'highest-rated') {
    filteredArr.sort((a, b) => b.rate - a.rate);
  } else if (e.target.value === 'location') {
    filteredArr.sort((a, b) => a.location.localeCompare(b.location));
  }

  renderResCard(filteredArr); // Render the filtered array
});

scrollTop.addEventListener('click', function () {
  headerEl.scrollIntoView({ behavior: 'smooth' });
});
