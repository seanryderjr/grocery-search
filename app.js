const items = [
  "Milk",
  "Bread",
  "Eggs",
  "Cheese",
  "Yogurt",
  "Butter",
  "Apples",
  "Bananas",
  "Oranges",
  "Grapes",
  "Strawberries",
  "Blueberries",
  "Raspberries",
  "Blackberries",
  "Avocado",
  "Tomatoes",
  "Lettuce",
  "Spinach",
  "Carrots",
  "Broccoli",
  "Cauliflower",
  "Peppers",
  "Onions",
  "Garlic",
  "Potatoes",
  "Sweet potatoes",
  "Rice",
  "Pasta",
  "Canned tomatoes",
  "Canned beans",
  "Canned vegetables",
  "Canned fruit",
  "Canned soup",
  "Cereal",
  "Oatmeal",
  "Granola",
  "Nuts",
  "Seeds",
  "Peanut butter",
  "Jam/jelly",
  "Honey",
  "Maple syrup",
  "Flour",
  "Sugar",
  "Baking powder",
  "Baking soda",
  "Yeast",
  "Salt",
  "Pepper",
  "Cinnamon",
  "Oregano",
  "Basil",
  "Olive oil",
  "Vegetable oil",
  "Canola oil",
  "Vinegar",
  "Soy sauce",
  "Hot sauce",
  "Ketchup",
  "Mustard",
  "Mayonnaise",
  "Salad dressing",
  "Salsa",
  "Chips",
  "Crackers",
  "Popcorn",
  "Chocolate",
  "Cookies",
  "Cake mix",
  "Brownie mix",
  "Ice cream",
  "Frozen vegetables",
  "Frozen fruit",
  "Frozen pizza",
  "Frozen dinners",
  "Bread crumbs",
  "Panko breadcrumbs",
  "Chicken broth",
  "Beef broth",
  "Vegetable broth",
  "Wine",
  "Beer",
  "Soda",
  "Juice",
  "Tea",
  "Coffee",
  "Water",
  "Energy drinks",
  "Sports drinks",
  "Protein bars",
  "Protein powder",
  "Meal replacement shakes",
  "Baby food",
  "Diapers",
  "Feminine hygiene products",
  "Toothpaste",
  "Soap",
  "Shampoo",
  "Conditioner",
  "Deodorant",
  "Razors",
  "Toilet paper"
];

const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const searchResults = document.createElement('ul');
searchResults.classList.add('search-results');
searchInput.parentNode.appendChild(searchResults);

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    searchResults.innerHTML = '';
    searchResults.classList.remove('has-items');
  } else {
    const matchingItems = items.filter(function(item) {
      return item.toLowerCase().startsWith(searchTerm);
    });
    renderSearchResults(matchingItems);
  }
});

function renderSearchResults(items) {
  searchResults.innerHTML = '';
  items.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item;
    searchResults.appendChild(li);

    // add event listener to li element
    li.addEventListener('click', function() {
      searchInput.value = li.textContent;
      searchResults.innerHTML = '';
      searchResults.classList.remove('has-items');
    });
  });

  if (items.length > 0) {
    searchResults.classList.add('has-items');
  } else {
    searchResults.classList.remove('has-items');
  }
}

searchButton.addEventListener('click', function(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm !== '') {
    const searchUrl = `https://www.google.com/search?q=${searchTerm}`;
    window.location.href = searchUrl;
  }
});