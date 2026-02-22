// src/requests/GetAllProducts.ts

export async function getAllProducts() {
  try {
    const response = await fetch("http://localhost:5000/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data; // This will be your array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
