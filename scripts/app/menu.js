var menuData = {
  starters: [
    {
      name: 'Beef Grilled',
      price: '$15',
      description: 'Beef Grilled on barbecue with Tomato and eggplant with some black pepper.',
      image: '../../assets/images/Babel/food/saler/food1.jpeg',
    },
    {
      name: 'Stuffed Grape Leaves',
      price: '$8',
      description: 'Some Grape Leaves with Beef and rice marinated in lemon juice.',
      image: '../../assets/images/Babel/food/saler/food2.jpeg',
    },
    {
      name: 'Potatoes in Garlic and Cilantro',
      price: '$5',
      description: 'Potato cube marinated with Garlic and Cilantro made with the best chef in the world.',
      image: '../../assets/images/Babel/food/saler/food3.jpeg',
    },
    {
      name: 'Potatoes in Garlic and Cilantro',
      price: '$5',
      description: 'Potato cube marinated with Garlic and Cilantro made with the best chef in the world.',
      image: '../../assets/images/Babel/food/saler/food3.jpeg',
    },
    {
      name: 'Potatoes in Garlic and Cilantro',
      price: '$5',
      description: 'Potato cube marinated with Garlic and Cilantro made with the best chef in the world.',
      image: '../../assets/images/Babel/food/saler/food3.jpeg',
    },
  ],
  hot_dishes: [
    {
      name: 'Fish fillet',
      price: '$20',
      description: 'baked white fish fillet mixed with olive oil, lemon, salt, garlic powder.',
      image: '../../assets/images/Babel/food/hot dishes/images (1).jpg',
    },
    {
      name: 'Pork Ribs',
      price: '$25',
      description: 'Ribs baked with paprika, dark brown sugar, salt, and paprika powder.',
      image:
        '../../assets/images/Babel/food/hot dishes/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__08__20150730-anova-sous-vide-rib-guide-food-lab68-j-kenji-lopez-alt-3a8181ca.jpg',
    },
    {
      name: 'Pork Ribs',
      price: '$25',
      description: 'Ribs baked with paprika, dark brown sugar, salt, and paprika powder.',
      image:
        '../../assets/images/Babel/food/hot dishes/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__08__20150730-anova-sous-vide-rib-guide-food-lab68-j-kenji-lopez-alt-3a8181ca.jpg',
    },
    {
      name: 'Pesto Pasta',
      price: '$23',
      description: 'Fettuccine pasta baked with lightly packed fresh basil leaves and pine nuts, garlic, and olive oil.',
      image: '../../assets/images/Babel/food/hot dishes/1630525192055.jpeg',
    },
  ],
  burgers: [
    {
      name: 'Classic burger',
      price: '$15',
      description: 'Beef patie with tomato lettuce picules and a side of fries.',
      image: '../../assets/images/Babel/food/burgers/classic-burger11.jpg',
    },
    {
      name: 'Cheese burger',
      price: '$17',
      description: 'Beef patie with tomato lettuce picules cheese.',
      image: '../../assets/images/Babel/food/burgers/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg',
    },
    {
      name: 'Cheese burger',
      price: '$17',
      description: 'Beef patie with tomato lettuce picules cheese.',
      image: '../../assets/images/Babel/food/burgers/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg',
    },
  ],
  deserts: [
    {
      name: 'Halawet El Jibn',
      price: '$15',
      description: 'the traditional Halawet El Jibn.',
      image: '../../assets/images/Babel/food/deserts/download.jpg',
    },
    {
      name: 'Donuts',
      price: '$5',
      description: 'Donuts all the flavor that you want.',
      image: '../../assets/images/Babel/food/deserts/download (4).jpg',
    },
    {
      name: 'Donuts',
      price: '$5',
      description: 'Donuts all the flavor that you want.',
      image: '../../assets/images/Babel/food/deserts/download (4).jpg',
    },
  ],
  beverage: [
    {
      name: 'Water',
      price: '$1',
      description: 'Water bottle.',
      image: '../../assets/images/Babel/food/Beverage/download.jpg',
    },
    {
      name: 'Soft drinks',
      price: '$2',
      description: 'pepsi, fanta, 7up.',
      image:
        '../../assets/images/Babel/food/Beverage/Social-media-marketing-of-soft-drinks-Many-youngsters-exposed-to-large-amount-of-unhealthy-products_wrbm_large.jpg',
    },
    {
      name: 'Soft drinks',
      price: '$2',
      description: 'pepsi, fanta, 7up.',
      image:
        '../../assets/images/Babel/food/Beverage/Social-media-marketing-of-soft-drinks-Many-youngsters-exposed-to-large-amount-of-unhealthy-products_wrbm_large.jpg',
    },
  ],
};

function populateMenu(category, data) {
  const menuContainer = document.getElementById(category + '-menu');
  data.forEach(function (dish) {
    const menuElement = document.createElement('div');
    menuElement.classList.add('single-menu');
    const html = `
          <img src="${dish.image}" alt="${dish.name}">
          <div class="menu-content">
              <h4>${dish.name} <span>${dish.price}</span></h4>
              <p>${dish.description}</p>
          </div>
        `;
    menuElement.innerHTML = html;
    menuContainer.appendChild(menuElement);
  });
}

populateMenu('starters', menuData.starters);
populateMenu('hot_dishes', menuData.hot_dishes);
populateMenu('burgers', menuData.burgers);
populateMenu('desserts', menuData.deserts);
populateMenu('beverage', menuData.beverage);
