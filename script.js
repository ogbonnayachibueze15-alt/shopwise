const list = document.getElementById('list');
const searchInput = document.getElementById('search');

// 🔥 CHANGE THIS AFTER DEPLOYMENT
const API_URL =  "https://shop-wise-tau.vercel.app/api/search";

searchInput.addEventListener("input", async () => {
  const query = searchInput.value;

  if (query.length < 3) {
    list.innerHTML = "";
    return;
  }

  list.innerHTML = "Loading...";

  try {
    const res = await fetch(`${API_URL}?query=${query}`);
    const data = await res.json();

    list.innerHTML = "";

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function saveData() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function addToCart(product) {
  cart.push(product);
  saveData();
  alert("Added to cart 🛒");
}

function addToWishlist(product) {
  wishlist.push(product);
  saveData();
  alert("Added to wishlist ❤️");
}

      div.innerHTML = `
  <img src="${p.image}" />
  <h4>${p.name}</h4>
  <p>${p.currency}${p.price}</p>

  <button onclick='addToCart(${JSON.stringify(p)})'>🛒 Add to Cart</button>
  <button onclick='addToWishlist(${JSON.stringify(p)})'>❤️ Wishlist</button>
`;

      list.appendChild(div);
    });

  } catch (err) {
    list.innerHTML = "Failed to load products";
  }
});