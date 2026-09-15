// ============================
// FOODIE EXPRESS - SCRIPT
// ============================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
}
const foodItems = [
  // Pizza
  { id: 1, name: "Margherita Pizza", category: "pizza", price: 950, time: "25 min", desc: "Classic tomato, mozzarella, and fresh basil.", img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe.jpg" },
  { id: 2, name: "Pepperoni Pizza", category: "pizza", price: 1150, time: "25 min", desc: "Loaded with pepperoni and melted cheese.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovHlHNJkK_LaP3hq05YqTVsuJCcKfxHsIRTQIgDKLQe8KL5C_Xu-6sk4&s=10" },
  { id: 3, name: "BBQ Chicken Pizza", category: "pizza", price: 1250, time: "30 min", desc: "Smoky BBQ sauce with grilled chicken chunks.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgznFuYbIwDC01gE27Mfs0W-kStvq1lYc9sgNI6sDXBlMJiW_aGBzjDET&s=10" },
  { id: 4, name: "Veggie Supreme Pizza", category: "pizza", price: 1050, time: "25 min", desc: "Loaded with bell peppers, olives, and onions.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAPM1N0lLpQJJYbxWg0QUkc7tdcxRh3LW3uI1TryYlshA0snV1Q2ssWA&s=10" },
  { id: 25, name: "Four Cheese Pizza", category: "pizza", price: 1200, time: "28 min", desc: "Mozzarella, cheddar, parmesan, and feta blend.", img: "https://c8.alamy.com/comp/2ET8YD1/classic-italian-four-cheese-pizza-with-mozzarella-brie-dor-blue-radamir-on-a-dark-wooden-background-with-ingredients-around-close-top-view-2ET8YD1.jpg" },
  { id: 26, name: "Fajita Pizza", category: "pizza", price: 1180, time: "28 min", desc: "Spicy fajita chicken with peppers and onions.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500" },

  // Burgers
  { id: 5, name: "Classic Cheeseburger", category: "burger", price: 650, time: "15 min", desc: "Juicy beef patty with cheddar and house sauce.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500" },
  { id: 6, name: "Crispy Chicken Burger", category: "burger", price: 700, time: "15 min", desc: "Crispy fried chicken with lettuce and mayo.", img: "https://media.istockphoto.com/id/1273265655/photo/burger-with-fried-chicken-meat-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=iwDZMUYie0zldQBJY6vXjidTqw6rNKrSEnSPszXpJCI=" },
  { id: 7, name: "Double Beef Burger", category: "burger", price: 850, time: "18 min", desc: "Double beef patty with extra cheese layers.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEZbwKWqdh0T1L5hYHOLj9Az5shv69vHr4hsMAnWOEcIaQO_Bd1-G2R3l&s=10" },
  { id: 8, name: "Spicy Zinger Burger", category: "burger", price: 720, time: "15 min", desc: "Spicy fried chicken fillet with jalapeños.", img: "https://static.vecteezy.com/system/resources/previews/048/712/453/non_2x/zinger-burger-mania-a-guide-to-making-the-perfect-spicy-chicken-sandwich-free-png.png" },
  { id: 27, name: "BBQ Bacon Burger", category: "burger", price: 780, time: "18 min", desc: "Beef patty with bacon and smoky BBQ sauce.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWNsvgdrfCwO_1hUiTUhLXWyfFtGtAKEEpqV-LWjoygDUg74CrYBoLj8O&s=10" },
  { id: 28, name: "Mushroom Swiss Burger", category: "burger", price: 760, time: "17 min", desc: "Beef patty topped with mushrooms and swiss cheese.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9y2GZQFHUNQaxC_TeVDnPLBvwDnj8Mpa_Wbo_XYnysM3Lum5NDANps8c&s=10" },

  // Fast Food
  { id: 9, name: "Loaded Fries", category: "fastfood", price: 450, time: "12 min", desc: "Crispy fries topped with cheese.", img: "https://www.thewickednoodle.com/wp-content/uploads/2023/09/Loaded-Fries-8-706x1024.jpg" },
  { id: 10, name: "Chicken Wings", category: "fastfood", price: 800, time: "20 min", desc: "Spicy grilled wings served with dip.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ChkSJN6TlsiET0cjkmMf7iSuSvQ_5XyGw5Ia30T2ZXHxSvL28Xq8UEbZ&s=10" },
  { id: 11, name: "Chicken Nuggets", category: "fastfood", price: 500, time: "15 min", desc: "Crispy golden nuggets with dipping sauce.", img: "https://png.pngtree.com/png-clipart/20241208/original/pngtree-golden-crispy-chicken-nuggets-with-dipping-sauce-5-png-image_17665461.png" },
  { id: 12, name: "Loaded Nachos", category: "fastfood", price: 600, time: "15 min", desc: "Crispy nachos topped with cheese and salsa.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGblbcqBg8_dzp10NwNO1qOl49oRuBnSun0P8B7hm7bkn70srfstqP7qnV&s=10" },
  { id: 29, name: "Onion Rings", category: "fastfood", price: 380, time: "12 min", desc: "Crispy golden onion rings with dip sauce.", img: "https://tessiestable.com/wp-content/uploads/2024/11/Heroes-Onion-Rings-Tessies-Table-1200x1600-16.jpg" },
  { id: 30, name: "Mozzarella Sticks", category: "fastfood", price: 550, time: "12 min", desc: "Crispy fried mozzarella with marinara sauce.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JqKeBrhurzH3oO6Q0ljQwxpFEWiZVKU692KlE1poM56ZdqMX5arnAMay&s=10" },

  // Desserts
  { id: 13, name: "Chocolate Lava Cake", category: "dessert", price: 550, time: "10 min", desc: "Warm cake with a molten chocolate center.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFELwkpwGO6lyFWQ3DxoG4-aQFzz6QW9vetcpoGiCBGl-HBtQnhRR5IP-m&s=10" },
  { id: 14, name: "Classic Cheesecake", category: "dessert", price: 600, time: "10 min", desc: "Cheesecake with mixed berry topping.", img: "https://img.magnific.com/premium-photo/creamy-cheesecake-with-berry-topping_917664-176011.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 15, name: "Tiramisu", category: "dessert", price: 650, time: "10 min", desc: "Delicious tiramisu dessert with layers of ceeam and coffee-soaked biscuits", img: "https://static.vecteezy.com/system/resources/previews/069/647/201/non_2x/delicious-tiramisu-dessert-with-layers-of-cream-and-coffee-soaked-biscuits-beautifully-presented-photo.jpg" },
  { id: 16, name: "Brownie", category: "dessert", price: 480, time: "10 min", desc: "Fudgy Dark chocolate brownies (NOT TO SWEET).", img: "https://bakewithzoha.com/wp-content/uploads/2023/01/fudgy-brownies-four-featured.jpg" },
  { id: 31, name: "Red Velvet Cake", category: "dessert", price: 620, time: "10 min", desc: "Soft red velvet with cream cheese frosting.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ErwjIdahZ3BGI-MOhLa174JAKMYdLWWjDaENUDf5mrZeO2kuZrfBqlKT&s=10" },
  { id: 32, name: "Vanilla Ice Cream Sundae", category: "dessert", price: 400, time: "8 min", desc: "Vanilla ice cream with chocolate syrup and sprinkles.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJzvpcW4cZqYweZgF32sA9YsklVmRLM5rDfQXH-70lw&s=10" },

  // Beverages
  { id: 17, name: "Fresh Orange Juice", category: "beverage", price: 300, time: "5 min", desc: "Freshly squeezed, no added sugar.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJ-u_ZVBR4JW0N3VZanmtp1NU3ijJziJC9bzpF1hvGQ&s=10" },
  { id: 18, name: "Iced Coffee", category: "beverage", price: 350, time: "5 min", desc: "Chilled coffee with vanilla and cinnamon.", img: "https://www.redwinedragons.com/wp-content/uploads/2023/04/easy-iced-coffee-recipe-vanilla-iced-coffee-1.jpeg" },
  { id: 19, name: "Mint Lemonade", category: "beverage", price: 320, time: "5 min", desc: "Zesty lemon and fresh mint, perfectly balanced.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzREzDbBDCYRse00Czi8hkCbsghBHRqKMQ9MjpU8kNP-fmoeSf1ZK14s&s=10" },
  { id: 20, name: "Berry Smoothie", category: "beverage", price: 400, time: "8 min", desc: "Blended berries, yogurt, and honey.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRCMM8HKCPvAHi6PiZ2HNQHRMxQP-qr4DuD17irqWM-N-vkLYaqZ33OI&s=10" },
  { id: 33, name: "Mango Shake", category: "beverage", price: 380, time: "8 min", desc: "Creamy mango shake, thick and refreshing.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgv6noFHepKxA1T1VOPKY0gJdBSpYnejtNfS0cVlK-YQ&s=10g" },
  { id: 34, name: "Cold Brew Coffee", category: "beverage", price: 400, time: "5 min", desc: "Smooth, slow-steeped cold brew coffee.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbXwQXNSfQEKVpIV5vKzN_t9vjyugBNkn9ndlU8oQMIw&s=10" },

  // Healthy Meals
  { id: 21, name: "Grilled Chicken Salad", category: "healthy", price: 750, time: "15 min", desc: "Grilled chicken, greens, and light dressing.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQllvvBwewneChMUJ1pCRzy-BroTd9OkI4ZZSFnu2jSg&s=10" },
  { id: 22, name: "Quinoa Bowl", category: "healthy", price: 700, time: "15 min", desc: "Quinoa, roasted veggies, and tahini sauce.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbw40akTRpN8HYarrwFuSeeMKW5HWzi7qs6XufDtepIg6NWBmInImXJs_&s=10" },
  { id: 23, name: "Avocado Toast", category: "healthy", price: 550, time: "10 min", desc: "Smashed avocado on toasted multigrain bread.", img: "https://img.magnific.com/free-photo/close-up-delicious-avocado-toast-plate_23-2148891768.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 24, name: "Greek Yogurt Bowl", category: "healthy", price: 480, time: "8 min", desc: "Greek yogurt with granola and fresh berries.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QP2keFNnBJZ8Xz85222bgAGgiTccGVFLe4V-uEi9yp_zkh5shp10XMhO&s=100" },
  { id: 35, name: "Veggie Wrap", category: "healthy", price: 500, time: "10 min", desc: "Fresh veggies and hummus in a whole wheat wrap.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoaR757QgKv1CIG9ZZfYBENyRN3eYt3Vxt9p1g_Jq89IQxAmgG5oSu4wQm&s=10" },
  { id: 36, name: "Grilled Salmon Bowl", category: "healthy", price: 950, time: "18 min", desc: "Grilled salmon with brown rice and greens.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OKeECuCpf7rkufhgX7HGhj3P571PRPRAyL_G21N-KA&s=10" },
];

let cart = JSON.parse(localStorage.getItem("foodieCart")) || [];

// ===== RENDER FOOD GRID =====
const foodGrid = document.getElementById("foodGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceSort = document.getElementById("priceSort");
const noResults = document.getElementById("noResults");

function renderFoodGrid() {
  if (!foodGrid) return;

  let items = [...foodItems];
  const search = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;
  const sort = priceSort.value;

  items = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search);
    const matchesCategory = category === "all" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  if (sort === "low-high") items.sort((a, b) => a.price - b.price);
  if (sort === "high-low") items.sort((a, b) => b.price - a.price);

  if (items.length === 0) {
    foodGrid.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  foodGrid.innerHTML = items.map(item => `
    <div class="bg-white rounded-2xl overflow-hidden shadow hover:-translate-y-1 transition">
      <img src="${item.img}" class="w-full h-44 object-cover" alt="${item.name}">
      <div class="p-5">
        <h3 class="font-bold text-lg mb-1">${item.name}</h3>
        <p class="text-sm text-gray-500 mb-2">${item.desc}</p>
        <p class="text-xs text-gray-400 mb-3">⏱ ${item.time}</p>
        <div class="flex justify-between items-center">
          <span class="font-bold text-primary">Rs. ${item.price}</span>
          <button onclick="addToCart(${item.id})" class="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join("");
}

if (searchInput) {
  // Read category from URL (e.g. menu.html?category=pizza)
  const urlParams = new URLSearchParams(window.location.search);
  const urlCategory = urlParams.get("category");
  if (urlCategory) categoryFilter.value = urlCategory;

  searchInput.addEventListener("input", renderFoodGrid);
  categoryFilter.addEventListener("change", renderFoodGrid);
  priceSort.addEventListener("change", renderFoodGrid);
  renderFoodGrid();
}
// ===== CART LOGIC =====
function saveCart() {
  localStorage.setItem("foodieCart", JSON.stringify(cart));
  updateCartUI();
}

function addToCart(id) {
  const item = foodItems.find(f => f.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
  }
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartUI() {
  const cartCount = document.getElementById("cartCount");
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");

  if (cartCount) cartCount.textContent = cart.reduce((sum, i) => sum + i.qty, 0);

  if (cartItemsEl) {
    if (cart.length === 0) {
      cartItemsEl.innerHTML = `<p class="text-gray-400 text-sm text-center mt-10">Your cart is empty.</p>`;
    } else {
      cartItemsEl.innerHTML = cart.map(item => `
        <div class="flex gap-3 items-center border-b pb-3">
          <img src="${item.img}" class="w-16 h-16 object-cover rounded-lg">
          <div class="flex-1">
            <p class="font-semibold text-sm">${item.name}</p>
            <p class="text-primary text-sm font-bold">Rs. ${item.price}</p>
            <div class="flex items-center gap-2 mt-1">
              <button onclick="changeQty(${item.id}, -1)" class="w-6 h-6 border rounded-full text-sm">−</button>
              <span class="text-sm">${item.qty}</span>
              <button onclick="changeQty(${item.id}, 1)" class="w-6 h-6 border rounded-full text-sm">+</button>
              <button onclick="removeFromCart(${item.id})" class="ml-auto text-red-500 text-xs">Remove</button>
            </div>
          </div>
        </div>
      `).join("");
    }
  }

  if (cartTotalEl) cartTotalEl.textContent = `Rs. ${cartTotal()}`;
}

updateCartUI();

// ===== CART SIDEBAR TOGGLE =====
function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("translate-x-full");
  document.getElementById("cartOverlay").classList.toggle("hidden");
}

// ===== CHECKOUT MODAL =====
function openCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add some items first!");
    return;
  }
  document.getElementById("checkoutModal").classList.remove("hidden");
  document.getElementById("cartSidebar").classList.add("translate-x-full");
  document.getElementById("cartOverlay").classList.add("hidden");
}

function closeCheckout() {
  document.getElementById("checkoutModal").classList.add("hidden");
}

const orderForm = document.getElementById("orderForm");
if (orderForm) {
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const address = document.getElementById("custAddress").value.trim();

    const nameErr = document.getElementById("nameErr");
    const phoneErr = document.getElementById("phoneErr");
    const addrErr = document.getElementById("addrErr");

    nameErr.classList.add("hidden");
    phoneErr.classList.add("hidden");
    addrErr.classList.add("hidden");

    if (name === "") { nameErr.classList.remove("hidden"); valid = false; }
    if (phone.replace(/\D/g, "").length < 10) { phoneErr.classList.remove("hidden"); valid = false; }
    if (address === "") { addrErr.classList.remove("hidden"); valid = false; }

    if (!valid) return;

    // Show order summary
    document.getElementById("summaryName").textContent = name;
    document.getElementById("summaryAddress").textContent = address;
    document.getElementById("summaryTotal").textContent = `Rs. ${cartTotal()}`;
    document.getElementById("summaryItems").innerHTML = cart.map(item =>
      `<div class="flex justify-between"><span>${item.name} × ${item.qty}</span><span>Rs. ${item.price * item.qty}</span></div>`
    ).join("");

    closeCheckout();
    document.getElementById("summaryModal").classList.remove("hidden");

    // Clear cart after order
    cart = [];
    saveCart();
    orderForm.reset();
  });
}

function closeSummary() {
  document.getElementById("summaryModal").classList.add("hidden");
}