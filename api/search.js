export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "No query" });
  }

  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await response.json();

    const products = data.products.map(p => ({
      name: p.title,
      price: p.price,
      currency: "$",
      image: p.thumbnail
    }));

    res.status(200).json({ products });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch" });
  }
}