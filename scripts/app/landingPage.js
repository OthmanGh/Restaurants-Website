const sweetRestaurants = [
  {
    id: 1,
    name: 'Cupcake Heaven',
    description: 'Indulge in our heavenly cupcakes that melt in your mouth!',
    location: 'New York',
    rate: 4.5,
    src: 'https://images.unsplash.com/photo-1518739745383-0ef26e9dd7fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3dlZXQlMjByZXN0YXVyYW50fGVufDB8fDB8fHww',
  },
  {
    id: 2,
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

const restaurantCard = (res) => `<div class="restaurant-card-grid">
<div class="restaurant-img-container">
  <img src="${res.src}" />
</div>

<div class="restaurant-content flex column">
  <h3>${res.name}</h3>
  <ul class="flex column">
    <p>${res.description}</p>
    <p>
      location: <span>${res.location}</span>
    </p>
    <p>rate: ${res.rate}</p>
  </ul>
  <div>
    <a class="learn-more-btn" href="#">
      Learn More &#x2192;
    </a>
  </div>
</div>
</div>`;

const renderResCard = (arr) => {
  restaurantsContainer.innerHTML = '';

  arr.forEach((item) => {
    restaurantsContainer.innerHTML += restaurantCard(item);
  });
};

renderResCard(sweetRestaurants);
