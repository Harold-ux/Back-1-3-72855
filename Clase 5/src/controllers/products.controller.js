import productsManager from "../data/fs/products.en.js";

const readProducts = async (req, res) => {
    const { category } = req.query;
    try {
      const all = await productsManager.readAll(category);
      if (all.length > 0) {
        return res.status(200).json({ response: all });
      }
      return res.status(404).json({ error: "No products found" });
    } catch (error) {
      return res.status(500).json({ error: "Error getting the products" });
    }
  };

  const createProduct = async (req, res) => {
    try {
      console.log(req.body);
      const data = req.body;
      // Validate that all necessary data is present
      if (!data.title || !data.price || !data.stock || !data.category) {
        return res.status(400).json({
          error: "Missing necessary data (title, price, stock, category)",
        });
      }
      const one = await productsManager.create(data);
      return res.status(201).json({ response: one });
    } catch (error) {
      const status = error.status || 500;
      const message = error.message || "Error creating the product";
      return res.status(status).json({ error: message });
    }
  };

  const readOne = async (req, res) => {
    const { pid } = req.params;
    try {
      const one = await productsManager.readOne(pid);
      if (one.error) {
        return res.status(404).json(one);
      }
      return res.status(200).json({ response: one });
    } catch (error) {
      return res.status(500).json({ error: "Error getting the product" });
    }
  };

  const updateProduct = async (req, res) => {
    try {
      const { pid } = req.params;
      const data = req.body;
      const updatedProduct = await productsManager.updateOne(pid, data);
      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.status(200).json({ response: updatedProduct });
    } catch (error) {
      const status = error.status || 500;
      const message = error.message || "Error updating the product";
      return res.status(status).json({ error: message });
    }
  };

  const deleteProduct = async (req, res) => {
    const { pid } = req.params;
    try {
      const product = await productsManager.deleteOne(pid);
      // Check if the product was not found
      if (!product) {
        return res.status(404).json({ error: `Product with ID ${pid} not found` });
      }
      return res.status(200).json({ message: "Product successfully deleted" });
    } catch (error) {
      const status = error.status || 500;
      const message = error.message || "Error deleting the product";
      return res.status(status).json({ error: message });
    }
  };

  export { readProducts, createProduct, readOne, updateProduct, deleteProduct };