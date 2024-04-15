import * as fs from 'fs';

class ProductManager {
    constructor(filePath) {
        this.filePath = filePath;
        this.idMas = 1;
        this.loadProducts(); 
    }

    loadProducts() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            this.products = JSON.parse(data);
            const lastProductId = this.products.reduce((maxId, product) => Math.max(maxId, product.id), 0);
            this.idMas = lastProductId + 1;
        } catch (error) {
            this.products = [];
        }
    }

    saveProducts() {
        fs.writeFile(this.filePath, JSON.stringify(this.products, null, 2), (err) => {
            if (err) {
                console.error('Error al guardar productos:', err);
            } else {
                console.log('Productos guardados exitosamente.');
            }
        });
    }

    addProduct(product) {
        product.id = this.idMas++;
        this.products.push(product);
        this.saveProducts();
        console.log("Se agregó el producto:", product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);
        if (product) {
            console.log("Producto encontrado:", product);
            return product;
        } else {
            console.log("Producto no encontrado.");
            return null;
        }
    }

    updateProduct(id, updatedFields) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedFields };
            this.saveProducts(); 
            console.log("Producto actualizado:", this.products[index]);
        } else {
            console.log("Producto no encontrado.");
        }
    }

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            const deletedProduct = this.products.splice(index, 1)[0];
            this.saveProducts(); 
            console.log("Producto eliminado:", deletedProduct);
        } else {
            console.log("Producto no encontrado.");
        }
    }
}

const manager = new ProductManager('productos.json');

manager.addProduct({
    title: "Manzana",
    description: "Una fruta deliciosa.",
    price: 2.5,
    thumbnail: "manzana.jpg",
    code: "A001",
    stock: 100
});

manager.updateProduct(1, { price: 3.0, stock: 90 });

manager.deleteProduct(2);

console.log("Todos los productos:", manager.getProducts());
