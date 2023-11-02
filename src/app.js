const express = require("express")
const app = express()
const ProductManager = require(`./productManager`)
const pm = new ProductManager(`./src/products.json`)
const PORT = 3000


app.get(`/`, (req, res)=> {
    res.send("Estamos desarrollando con Express")
})

app.get('/products', async (req, res) => {
  try {
    const limit = req.query.limit;
    const products = await pm.getProducts();

    if (limit) {
      const limitedProducts = products.slice(0, parseInt(limit, 10));
      res.setHeader('Content-Type', 'application/json');
      res.json({ products: limitedProducts });
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.json({ products });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

app.get("/products/:pid", async (req, res) => {
    try {
      const productId = req.params.pid;
      const product = await pm.getProductById(productId);
  
      if (product) {
        res.setHeader("Content-Type", "application/json");
        res.json({ product });
      } else {
        res.status(404).json({ error: "Producto no encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener el producto" });
    }
  });
  
  const server = app.listen(PORT, () => {
    console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
  });