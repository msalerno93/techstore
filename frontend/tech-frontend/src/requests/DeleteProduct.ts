// src/requests/DeleteProduct.ts

export async function deleteProduct(product_id: number) {
  try {
    const response = await fetch(`http://localhost:5000/products/${product_id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete product");
    }

    const data = await response.json();
    return data; // backend will return { success: true } or similar
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}
