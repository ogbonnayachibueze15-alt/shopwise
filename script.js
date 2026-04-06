const list = document.getElementById('list');
const searchInput = document.getElementById('search');

// 🔥 CHANGE THIS AFTER DEPLOYMENT
const API_URL = "https://shop-wise-tau.vercel.app";

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

    data.products.forEach(p => {
      const div = document.createElement("div");
      div.className = "product-card";

      div.innerHTML = `
        <img src="${p.image}" />
        <h4>${p.name}</h4>
        <p>${p.currency}${p.price}</p>
      `;

      list.appendChild(div);
    });

  } catch (err) {
    list.innerHTML = "Failed to load products";
  }
});