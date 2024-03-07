"use strict";

// Remove restaurants if user is not logged in
if (!window.isLoggedIn) {
  document.querySelector(
    ".landing-section"
  ).innerHTML = `<h3><a href="./pages/user/auth.html" style="color:var(--clrs-primary-);">Please login to view and favorite restaurants!</a></h3>`;
}

const sweetRestaurants = JSON.parse(localStorage.restos ?? "[]");

const restaurantsContainer = document.getElementById("restaurants-container");
const searchInputEl = document.getElementById("search-input");
const selectEl = document.getElementById("selection-input");
const form = document.getElementById("form");
const scrollTop = document.getElementById("sroll-to-top");
const headerEl = document.getElementById("header");

const restaurantCard = (res) => `<div class="restaurant-card-grid">
<div class="restaurant-img-container">
  <img src="${res.image}" />
</div>

<div class="restaurant-content flex column">
  <h3>${res.name}</h3>
  <ul class="flex column">
    <li><p>Description: <span>${res.desc}</span></p></li>
    <li>
      <p>Location: <span>${res.location}</span></p>
    </li>
    <li>
    <p>Rate: <span>${res.rating}⭐</span></p>
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
  restaurantsContainer.innerHTML = "";

  if (arr.length >= 1) {
    arr.forEach((item) => {
      restaurantsContainer.innerHTML += restaurantCard(item);
    });

    return;
  }

  restaurantsContainer.innerHTML = `<h2 style="color: #fff">No Such Restaurants</h2>`;
};

renderResCard(sweetRestaurants);

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const searchRestaurants = (e) => {
  const query = e.target.value.trim().toLowerCase();
  const results = sweetRestaurants.filter((res) =>
    res.name.toLowerCase().includes(query)
  );
  renderResCard(results);
};

const filterRestauratns = (e) => {
  const filteredArr = [...sweetRestaurants];

  if (e.target.value === "lowest-rated") {
    filteredArr.sort((a, b) => a.rating - b.rating);
  } else if (e.target.value === "highest-rated") {
    filteredArr.sort((a, b) => b.rating - a.rating);
  } else if (e.target.value === "location") {
    filteredArr.sort((a, b) => a.location.localeCompare(b.location));
  }

  renderResCard(filteredArr);
};

const saveToLocalStorage = () => {
  localStorage.setItem("sweetRestaurants", JSON.stringify(sweetRestaurants));
};

const loadFromLocalStorage = () => {
  const storedData = localStorage.getItem("sweetRestaurants");
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

searchInputEl.addEventListener("input", searchRestaurants);

selectEl.addEventListener("change", (e) => {
  const filteredArr = [...sweetRestaurants];

  if (e.target.value === "lowest-rated") {
    filteredArr.sort((a, b) => a.rating - b.rating);
  } else if (e.target.value === "highest-rated") {
    filteredArr.sort((a, b) => b.rating - a.rating);
  } else if (e.target.value === "location") {
    filteredArr.sort((a, b) => a.location.localeCompare(b.location));
  }

  renderResCard(filteredArr); // Render the filtered array
});

scrollTop.addEventListener("click", function () {
  headerEl.scrollIntoView({ behavior: "smooth" });
});
