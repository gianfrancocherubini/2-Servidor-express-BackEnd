const fs = require('fs')

class ProductManager {

    constructor(archivo) {
      this.path = archivo;
      this.products = this.getProducts(); 
    }

    async getProducts() {
        if (fs.existsSync(this.path)) { 
            let data = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    async addProduct(title, description, price, thumbnail, code, stock) {
        try {
            let productos = await this.getProducts();
      
            let productWithSameCode = productos.find(product => product.code === code);
      
            if (productWithSameCode) {
                console.log("El producto ya está ingresado.");
                return;
            }
      
            if (!title || !description || !price || !thumbnail || !code || !stock) {
                console.log("Todos los campos son obligatorios.");
                return;
            }
      
            let id = 1;
            if (productos.length > 0) {
                id = productos[productos.length - 1].id + 1;
            }
      
            let newProduct = {
                id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
      
            productos.push(newProduct);
      
            await fs.promises.writeFile(this.path, JSON.stringify(productos, null, 2));
            console.log("Producto agregado correctamente.");
        } catch (error) {
            console.error("Error al agregar el producto: ", error);
        }
    }

    async getProductById(id) {
        try {
            let productos = await this.getProducts();
            let product = productos.find(product => product.id === id);
      
            if (product) {
                console.log("El producto encontrado es:", product);
            } else {
                console.log("Producto no encontrado");
            }
        } catch (error) {
          console.error("Error al obtener productos:", error);
        }
    }

    async updateProduct(id, fieldToUpdate, newValue) {
        try {
            let productos = await this.getProducts();
            let productIndex = productos.findIndex(product => product.id === id);
      
            if (productIndex === -1) {
                console.log("Producto no encontrado.");
                return;
            }
      
            let updatedProduct = { ...productos[productIndex] };
            updatedProduct[fieldToUpdate] = newValue;
            productos[productIndex] = updatedProduct;
      
            await fs.promises.writeFile(this.path, JSON.stringify(productos, null, 2));
      
            console.log("Producto actualizado con éxito:", updatedProduct);
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
        }
    }

    async deleteProduct(id) {
        try {
            let productos = await this.getProducts();
            let productIndex = productos.findIndex(product => product.id === id);
      
            if (productIndex === -1) {
                console.log("Producto no encontrado. No se puede eliminar.");
                return;
            }
      
            productos.splice(productIndex, 1);
      
            await fs.promises.writeFile(this.path, JSON.stringify(productos, null, 2));
      
            console.log("Producto eliminado con éxito.");
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    }
    
}

module.exports = ProductManager
